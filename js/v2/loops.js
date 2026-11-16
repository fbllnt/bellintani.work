/* Frame loops: an image sequence (motion study, storyboard, styleframes, vignette frames) played as a silent loop,
   lighter than a video file. Classic script, no build; it sets window.V2Loops.

   Gallery item: { loop: { frames: ["images/x/f-01.jpg", ...], fps: 6, ar: "16/9" }, caption: { en, pt, es } }

   V2Loops.render(it, { esc, L, labelPlay, labelPause, labelFrame?, title, style? }) -> markup string
     (style: extra inline custom properties from the gallery builder, e.g. "--r:1.7778;", appended as-is)
     <figure class="fig loop" style="--ar:16/9;--n:N;{style}" data-fps="6">
       <div class="ph">
         <img class="on" ...> <img loading="lazy" aria-hidden="true"> ...   every frame stacked, object-fit: contain, one shown
         <button class="loop-ctl mono" type="button" data-name="caption" aria-label="Play — caption">Play</button>   the tag hanging from the top edge (like .vctl)
         <span class="loop-bar" aria-hidden="true"><i></i></span>              thin progress line just under the frames
       </div>
       <figcaption class="mono muted">caption</figcaption>
     </figure>
     Alt text: caption (or title) + " — " + (labelFrame ? labelFrame + " " : "") + "n/N". Only frame 1 loads eagerly.

   V2Loops.setup(root, { reduced, signal, labelPlay, labelPause }) -> { destroy }
     Finds every figure.loop under root. A loop plays only when 40% of it is on screen AND all its frames are decoded;
     it pauses offscreen and while the tab is hidden. One shared requestAnimationFrame clock drives every loop, each at
     its own fps. The button toggles play / pause, and a user pause wins over autoplay until they press play again.
     Reduced motion: frame 1 stays, nothing autoplays; the button still plays it. destroy() (or aborting signal)
     removes every listener and observer and stops the clock for these loops. */
(() => {
  const ESC = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const ID = v => (v && typeof v === "object" ? (v.en ?? "") : v);
  const FPS = v => Math.min(60, Math.max(0.5, +v || 6));
  // Aspect ratio as "w/h" or a plain number only, so a typo can never break out of the style attribute
  const AR = v => (/^\s*\d+(\.\d+)?\s*(\/\s*\d+(\.\d+)?\s*)?$/.test(String(v ?? "")) ? String(v).replace(/\s+/g, "") : "16/9");
  // "Play — caption", like the film buttons' labels, so several loops on a page are told apart by a screen reader
  const NAME = (text, name) => (name ? `${text} — ${name}` : text);

  function render(it, opts = {}) {
    const esc = opts.esc || ESC, L0 = opts.L || ID;
    const L = v => (typeof v === "string" ? v : (v == null ? "" : L0(v) ?? "")); // plain strings pass through
    const lp = it && it.loop || {};
    const frames = Array.isArray(lp.frames) ? lp.frames.filter(Boolean) : [];
    const n = frames.length;
    if (!n) return "";
    const cap = it.caption ? L(it.caption) : "";
    const base = cap || L(opts.title);
    const fl = opts.labelFrame ? `${L(opts.labelFrame)} ` : "";
    const alt = k => `${base ? `${base} — ` : ""}${fl}${k + 1}/${n}`;
    const imgs = frames.map((src, k) => `<img src="${esc(src)}" alt="${esc(alt(k))}" decoding="async"${
      k ? ` loading="lazy" aria-hidden="true"` : ` class="on"`}>`).join("");
    // A single frame is just a still: no button, no bar
    const play = L(opts.labelPlay);
    const ui = n > 1 ? `<button class="loop-ctl mono" type="button" data-name="${esc(base)}" aria-label="${esc(NAME(play, base))}">${esc(play)}</button><span class="loop-bar" aria-hidden="true"><i></i></span>` : "";
    const extra = opts.style ? String(opts.style).replace(/"/g, "") : "";
    return `<figure class="fig loop" style="--ar:${AR(lp.ar)};--n:${n};${extra}" data-fps="${FPS(lp.fps)}"><div class="ph">${imgs}${ui}</div>${
      cap ? `<figcaption class="mono muted">${esc(cap)}</figcaption>` : ""}</figure>`;
  }

  // ---------- One clock for every loop on the page ----------
  const running = new Set();
  let raf = 0;
  const tick = now => {
    raf = 0;
    running.forEach(l => {
      if (now < l.next) return;
      l.next += l.ms;
      if (now - l.next > l.ms) l.next = now + l.ms; // came back from a long gap: no burst of catch-up frames
      l.step();
    });
    if (running.size) raf = requestAnimationFrame(tick);
  };
  const run = l => { if (running.has(l)) return; l.next = performance.now() + l.ms; running.add(l); if (!raf) raf = requestAnimationFrame(tick); };
  const halt = l => { running.delete(l); if (!running.size && raf) { cancelAnimationFrame(raf); raf = 0; } };

  function setup(root, opts = {}) {
    const ctrl = new AbortController();
    const sig = ctrl.signal;
    if (opts.signal) { if (opts.signal.aborted) return { destroy() {} }; opts.signal.addEventListener("abort", () => destroy(), { once: true, signal: sig }); }
    const reduced = opts.reduced ?? matchMedia("(prefers-reduced-motion: reduce)").matches;
    const lbl = { play: opts.labelPlay ?? "", pause: opts.labelPause ?? "" };
    const loops = [];
    const byPh = new WeakMap();

    const figs = [...(root || document).querySelectorAll("figure.loop")].filter(f => !f.dataset.loopOn);
    figs.forEach(fig => {
      const ph = fig.querySelector(".ph");
      const imgs = ph ? [...ph.querySelectorAll(":scope > img")] : [];
      const btn = ph && ph.querySelector(".loop-ctl");
      if (imgs.length < 2 || !btn) return;
      fig.dataset.loopOn = "1";
      const bar = ph.querySelector(".loop-bar i");
      const l = {
        fig, ph, imgs, btn, bar, ms: 1000 / FPS(fig.dataset.fps), next: 0,
        idx: Math.max(0, imgs.findIndex(i => i.classList.contains("on"))),
        good: imgs.map(() => true), // frames that failed to load are skipped
        ratio: 0, seen40: false, ready: false, preparing: false,
        userPaused: false, userPlayed: false, playing: false,
      };
      l.show = k => {
        const prev = l.imgs[l.idx];
        if (prev && k !== l.idx) { prev.classList.remove("on"); prev.setAttribute("aria-hidden", "true"); }
        l.idx = k;
        l.imgs[k].classList.add("on"); l.imgs[k].removeAttribute("aria-hidden");
        if (l.bar) l.bar.style.transform = `scaleX(${(k + 1) / l.imgs.length})`;
      };
      l.step = () => {
        const N = l.imgs.length;
        for (let s = 1; s <= N; s++) { const k = (l.idx + s) % N; if (l.good[k]) { l.show(k); return; } }
      };
      l.show(l.idx);
      loops.push(l); byPh.set(ph, l);

      btn.addEventListener("click", () => {
        if (l.playing || (l.userPlayed && !l.ready)) { l.userPaused = true; l.userPlayed = false; }
        else { l.userPaused = false; l.userPlayed = true; prepare(l); }
        update(l);
      }, { signal: sig });
    });

    // Load and decode every frame before the first step, so a loop never stutters on a frame still arriving
    function prepare(l) {
      if (l.ready || l.preparing) return;
      l.preparing = true;
      l.fig.classList.add("loading");
      Promise.all(l.imgs.map((img, k) => {
        if (img.loading === "lazy") img.loading = "eager";
        const done = img.decode ? img.decode() : new Promise((ok, no) => {
          if (img.complete) { img.naturalWidth ? ok() : no(); return; }
          img.addEventListener("load", ok, { once: true, signal: sig }); img.addEventListener("error", no, { once: true, signal: sig });
        });
        return done.then(() => true, () => img.complete && img.naturalWidth > 0).then(ok => { l.good[k] = ok; });
      })).then(() => {
        if (sig.aborted) return;
        l.preparing = false;
        l.fig.classList.remove("loading");
        l.ready = l.good.filter(Boolean).length > 1;
        if (!l.good[l.idx]) l.step();
        if (!l.ready) l.btn.hidden = true; // fewer than two usable frames: leave the still
        update(l);
      });
    }

    function update(l) {
      if (sig.aborted) return;
      const onScreen = l.userPlayed ? l.ratio > 0 : l.seen40; // a user press plays as long as any of it shows
      const wants = !l.userPaused && (l.userPlayed || !reduced);
      const play = wants && l.ready && onScreen && !document.hidden;
      if (play !== l.playing) { l.playing = play; play ? run(l) : halt(l); l.fig.classList.toggle("playing", play); }
      const showPause = l.playing || (l.userPlayed && !l.ready);
      const text = showPause ? lbl.pause : lbl.play;
      if (l.btn.textContent !== text) { l.btn.textContent = text; l.btn.setAttribute("aria-label", NAME(text, l.btn.dataset.name)); }
    }

    let io = null, near = null;
    if (loops.length && "IntersectionObserver" in window) {
      // Start fetching a screen ahead (autoplay only; with reduced motion frames load when the user presses play)
      if (!reduced) {
        near = new IntersectionObserver(es => es.forEach(e => {
          if (!e.isIntersecting) return;
          near.unobserve(e.target);
          const l = byPh.get(e.target); if (l) prepare(l);
        }), { rootMargin: "100% 0px" });
      }
      io = new IntersectionObserver(es => es.forEach(e => {
        const l = byPh.get(e.target); if (!l) return;
        const vh = (e.rootBounds && e.rootBounds.height) || innerHeight;
        l.ratio = e.isIntersecting ? e.intersectionRatio : 0;
        // 40% of the piece, or 40% of the screen for a piece taller than the screen
        l.seen40 = e.isIntersecting && (e.intersectionRatio >= 0.4 || e.intersectionRect.height >= 0.4 * vh);
        update(l);
      }), { threshold: [0, 0.05, 0.1, 0.2, 0.3, 0.4, 0.5, 0.75, 1] });
      loops.forEach(l => { io.observe(l.ph); if (near) near.observe(l.ph); });
    } else {
      loops.forEach(l => { l.ratio = 1; l.seen40 = true; if (!reduced) prepare(l); });
    }

    document.addEventListener("visibilitychange", () => loops.forEach(update), { signal: sig });

    function destroy() {
      if (sig.aborted) return;
      ctrl.abort();
      if (io) io.disconnect();
      if (near) near.disconnect();
      loops.forEach(l => { halt(l); l.playing = false; l.fig.classList.remove("playing", "loading"); delete l.fig.dataset.loopOn; });
    }
    return { destroy };
  }

  window.V2Loops = { render, setup };
})();
