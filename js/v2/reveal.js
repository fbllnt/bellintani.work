/* Statement word reveal (v2). Big statement lines fill in word by word as you scroll, like the reference site:
   words already "read" are full ink, the rest wait in a faint version of the same colour.

   API (classic script, load after main.js or before it, it only defines a global):
     const r = window.V2Reveal.init(elements, { reduced, signal, start, end });
     r.destroy();
   - elements: an array (or NodeList) of block elements, e.g. the home tagline <b data-bind="tagline"> and #credits-intro.
   - reduced:  true when the visitor prefers reduced motion. Then nothing happens: no split, text stays fully visible.
   - signal:   optional AbortSignal; aborting it is the same as calling destroy().
   - start/end: optional, fractions of the viewport height (defaults .85 and .45). Progress is 0 when the element's top
               reaches start, 1 when its bottom reaches end. Elements above the viewport are fully revealed.
   Each text node is split into <span class="rv-w"> words; whitespace, <b>, <em>, <a>, <br>, <span> and the line
   wrapping stay exactly as they were (spans are plain inline boxes, splits happen only at ASCII whitespace).
   destroy() puts the original text nodes back (same nodes, same HTML, links keep their listeners). If the text is ever
   re-rendered in place, call destroy() first, render, then init() again; if the caller already replaced the content,
   destroy() leaves the new content alone. An element that is already split by a live init is skipped.
   One passive scroll listener, work done once per animation frame and only for elements near the viewport. */
(() => {
  const NOOP = { destroy() {} };
  const WS = /([ \t\n\r\f]+)/; // ASCII whitespace only: a no-break space stays inside its word, as it does now
  const SKIP = /^(SCRIPT|STYLE|TEMPLATE|NOSCRIPT|TEXTAREA)$/;
  const HTML_NS = "http://www.w3.org/1999/xhtml";
  const num = (v, d) => (typeof v === "number" && isFinite(v) ? v : d);

  // Replace every text node of el by word spans and whitespace text nodes. Returns { words, records }.
  const split = el => {
    const texts = [];
    const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, {
      acceptNode: n => {
        // Leave alone text inside scripts/styles and inside inline SVG/MathML (an HTML span there would break it)
        for (let p = n.parentNode; p && p !== el; p = p.parentNode) {
          if (SKIP.test(p.nodeName) || (p.namespaceURI && p.namespaceURI !== HTML_NS)) return NodeFilter.FILTER_REJECT;
        }
        return /\S/.test(n.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
      }
    });
    while (walker.nextNode()) texts.push(walker.currentNode);
    const words = [], records = [];
    texts.forEach(orig => {
      const pieces = [];
      orig.nodeValue.split(WS).forEach(part => {
        if (!part) return;
        if (WS.test(part)) { pieces.push(document.createTextNode(part)); return; }
        const w = document.createElement("span");
        w.className = "rv-w";
        w.textContent = part;
        pieces.push(w); words.push(w);
      });
      const frag = document.createDocumentFragment();
      pieces.forEach(p => frag.append(p));
      orig.parentNode.replaceChild(frag, orig);
      records.push({ orig, pieces });
    });
    return { words, records };
  };

  // Put the original text nodes back where their pieces are. Skips anything the caller already replaced.
  // Never rewrites innerHTML, so links and other inline elements keep their listeners and attributes.
  const unsplit = (el, records) => {
    records.forEach(({ orig, pieces }) => {
      const first = pieces.find(p => p.parentNode && el.contains(p));
      if (!first) return; // this part was re-rendered by the caller
      first.parentNode.insertBefore(orig, first);
      pieces.forEach(p => { if (p.parentNode) p.remove(); });
    });
    // Safety net: any word span still left (e.g. moved by other code) goes back to plain text, never a half-split block
    el.querySelectorAll("span.rv-w").forEach(w => w.replaceWith(document.createTextNode(w.textContent)));
  };

  const init = (elements, opts = {}) => {
    const { reduced = false, signal } = opts;
    const start = num(opts.start, 0.85), end = num(opts.end, 0.45);
    if (reduced || typeof IntersectionObserver !== "function" || (signal && signal.aborted)) return NOOP;
    const list = Array.from(elements || []).filter(el => el && el.nodeType === 1);
    if (!list.length) return NOOP;

    const items = [];
    list.forEach(el => {
      if (items.some(it => it.el === el || it.el.contains(el) || el.contains(it.el))) return; // no double split
      // Already split by another live init (or inside one): skip, so words never get nested spans
      if (el.querySelector("span.rv-w") || (el.closest && el.closest(".rv-w"))) return;
      const { words, records } = split(el);
      if (!words.length) return;
      el.classList.add("rv-still"); // first state lands without the colour transition
      items.push({ el, words, records, lit: -1, near: false, once: true });
    });
    if (!items.length) return NOOP;

    const ac = new AbortController();
    const on = { passive: true, signal: ac.signal };
    let raf = 0, settle = 0, dead = false;

    const progress = (r, sy, vh, maxScroll) => {
      // Scroll positions where the reveal starts and ends; the end is pulled back if the page can't scroll that far.
      let s0 = r.top + sy - start * vh, s1 = r.bottom + sy - end * vh;
      const span = Math.max(1, s1 - s0);
      if (s1 > maxScroll) { s1 = maxScroll; if (s0 > s1 - 1) s0 = s1 - Math.max(1, Math.min(span, vh * 0.25)); }
      if (s1 - s0 < 1) s0 = s1 - 1;
      const p = (sy - s0) / (s1 - s0);
      return p < 0 ? 0 : p > 1 ? 1 : p;
    };

    const frame = () => {
      raf = 0;
      if (dead || document.hidden) return;
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const sy = window.scrollY || window.pageYOffset || 0;
      const maxScroll = Math.max(0, document.documentElement.scrollHeight - vh);
      // Read every rect first, then write, so the frame never forces a second layout.
      const todo = items.filter(it => it.near || it.once).map(it => {
        it.once = false;
        if (!it.words[0].isConnected) return null; // caller re-rendered without destroy(); nothing to light
        return [it, Math.round(progress(it.el.getBoundingClientRect(), sy, vh, maxScroll) * it.words.length)];
      });
      todo.forEach(t => {
        if (!t) return;
        const [it, lit] = t;
        if (lit === it.lit) return;
        const from = it.lit < 0 ? 0 : Math.min(lit, it.lit), to = it.lit < 0 ? it.words.length : Math.max(lit, it.lit);
        for (let i = from; i < to; i++) it.words[i].classList.toggle("rv-off", i >= lit);
        it.lit = lit;
      });
    };
    // Only ask for a frame when an element is near the viewport or owes a last update: far away, scrolling costs nothing.
    const schedule = () => { if (!raf && !dead && items.some(it => it.near || it.once)) raf = requestAnimationFrame(frame); };
    const all = () => { items.forEach(it => { it.once = true; }); schedule(); };

    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        const it = items.find(x => x.el === e.target);
        if (!it) return;
        it.near = e.isIntersecting;
        it.once = true; // one last update on the way out (e.g. a jump past it leaves it fully revealed)
      });
      schedule();
    }, { rootMargin: "25% 0px 25% 0px", threshold: 0 });
    items.forEach(it => io.observe(it.el));

    // Re-measure when an element reflows (fonts, width) and when the page height changes (content above it moved).
    const ro = typeof ResizeObserver === "function" ? new ResizeObserver(all) : null;
    if (ro) { items.forEach(it => ro.observe(it.el)); ro.observe(document.documentElement); }

    window.addEventListener("scroll", schedule, on);
    window.addEventListener("resize", all, on);
    if (document.readyState !== "complete") window.addEventListener("load", all, { once: true, signal: ac.signal });
    document.addEventListener("visibilitychange", () => { if (!document.hidden) all(); }, { signal: ac.signal });

    // First state now (before paint), then let the transition back in two frames later.
    frame();
    settle = requestAnimationFrame(() => {
      settle = requestAnimationFrame(() => { settle = 0; items.forEach(it => it.el.classList.remove("rv-still")); });
    });

    const destroy = () => {
      if (dead) return;
      dead = true;
      ac.abort();
      if (raf) cancelAnimationFrame(raf);
      if (settle) cancelAnimationFrame(settle);
      io.disconnect();
      if (ro) ro.disconnect();
      items.forEach(it => { it.el.classList.remove("rv-still"); unsplit(it.el, it.records); });
      items.length = 0;
    };
    if (signal) signal.addEventListener("abort", destroy, { once: true, signal: ac.signal });
    return { destroy };
  };

  window.V2Reveal = { init };
})();
