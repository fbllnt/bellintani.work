/* Work list hover preview (v2), paired with css/v2/preview.css. Every project in the home work list shows a small
   silent card of its film or images (reference: buck.co, where each project plays as a muted loop).

   API (classic script, load after main.js or before it, it only defines a global):
     const pv = window.V2Preview.init({ list, items, reduced, signal });
     pv.destroy();
   - list:    the #index <ul>. Rows are <li><a href="/p/<slug>/" data-i="<n>">…</a></li>; li[hidden] rows are skipped.
   - items:   items[n] = { video, webm, poster, images: [src…], title }, aligned with data-i. Every field is optional;
              a project with no media at all simply shows no card.
   - reduced: true when the visitor prefers reduced motion. The card then snaps to place (no lag), images do not
              crossfade (first one only), films show their poster only and never play.
   - signal:  optional AbortSignal; aborting it is the same as calling destroy().

   Mouse / trackpad ("(hover: hover) and (pointer: fine)"): over a row a fixed card follows the pointer with a soft lag,
   to the right of and a little below it, flipped to the left (or above) near the screen edges and kept inside the screen.
   It wipes up on entering the list, swaps media in place between rows, and hides on leaving the list or clicking.
   Touch screens: while the list is on screen, the row nearest the middle of the screen shows its media in a small
   card at the bottom left (lifted above main.js's .list-cap caption bar while body.cap-on is set).
   Only the last 4 films shown keep their loaded data; older ones are emptied (poster kept) and reload when shown again.
   Media is never cropped: object-fit: contain on the panel colour, card height from the media's own ratio (4/3 until
   it is known). Media elements are built the first time a project is shown and reused after that. Films are
   <video muted loop playsinline preload="none"> (WebM, then MP4, plus poster) and play only while their card shows.
   One rAF loop moves the card and only runs while it is still catching up; nothing runs while the page is hidden.
   The card is aria-hidden and ignores the pointer: it is decoration, the row link stays the real control. */
(() => {
  const NOOP = { destroy() {} };
  const HOVER = "(hover: hover) and (pointer: fine)";
  const OFF_X = 24, OFF_Y = 22;   // card offset from the pointer (clears the cursor's "View" chip)
  const EDGE = 12;                // minimum air between the card and the screen edge
  const LAG = 0.16;               // share of the remaining distance covered per 60fps frame
  const CYCLE = 900;              // ms between image crossfades
  const PLAY_DELAY = 120;         // ms on a row before its film starts loading, so a fast sweep doesn't fetch every film
  const MAX_FILMS = 4;            // films kept loaded; older ones drop their buffer (the poster stays) and reload when shown again

  const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
  // Width without the page scrollbar, so the card never slides under it
  const viewW = () => document.documentElement.clientWidth || innerWidth;

  function init({ list, items = [], reduced = false, signal } = {}) {
    if (!list || (signal && signal.aborted)) return NOOP;
    const ac = new AbortController(), sig = ac.signal;
    const on = (target, type, fn, opts = {}) => target.addEventListener(type, fn, { ...opts, signal: sig });
    let dead = false;

    const card = document.createElement("div");
    card.className = "pv" + (reduced ? " pv-still" : "");
    card.setAttribute("aria-hidden", "true");
    document.body.append(card);

    // ---------- Media slots, one per project, built lazily ----------
    const slots = new Map();
    let active = null, shown = false, cw = 0, ch = 0;

    const hasMedia = i => {
      const it = items[i];
      return !!it && !!(it.video || it.webm || it.poster || (Array.isArray(it.images) && it.images.some(Boolean)));
    };
    const setAr = (s, ar) => {
      if (!(ar > 0) || !isFinite(ar)) return;
      s.ar = ar;
      if (active === s) size();
    };
    // Read a still's ratio before the film itself has loaded anything (preload="none" means no metadata yet)
    const probe = (s, src) => {
      const im = new Image();
      im.decoding = "async";
      im.onload = () => { if (!s.ar && im.naturalWidth && im.naturalHeight) setAr(s, im.naturalWidth / im.naturalHeight); };
      im.src = src;
      s.probe = im;
    };
    const makeSlot = i => {
      const it = items[i] || {};
      const el = document.createElement("div");
      el.className = "pv-m";
      const s = { el, ar: 0, video: null, sources: [], parked: false, imgs: [], srcs: [], bad: new Set(), k: 0, timer: 0, playT: 0, probe: null };
      const images = (Array.isArray(it.images) ? it.images : []).filter(Boolean);
      const film = !!(it.video || it.webm);
      // Reduced motion keeps a film only when it has no still to stand in: then it loads its first frame and never plays
      if (film && (!reduced || !(it.poster || images[0]))) {
        const v = document.createElement("video"), pre = reduced ? "metadata" : "none";
        v.muted = v.defaultMuted = true; v.loop = true; v.playsInline = true; v.preload = pre;
        ["muted", "loop", "playsinline"].forEach(a => v.setAttribute(a, ""));
        v.setAttribute("preload", pre); v.setAttribute("tabindex", "-1"); v.disablePictureInPicture = true;
        if (it.poster) v.poster = it.poster;
        [[it.webm, "video/webm"], [it.video, "video/mp4"]].forEach(([src, type]) => {
          if (!src) return;
          const so = document.createElement("source");
          so.src = src; so.type = type; v.append(so); s.sources.push(so);
        });
        on(v, "loadedmetadata", () => { if (v.videoWidth && v.videoHeight) setAr(s, v.videoWidth / v.videoHeight); });
        el.append(v);
        s.video = v;
        if (it.poster) probe(s, it.poster);
      } else {
        // Reduced motion: one still (the film's poster first). Otherwise every image, or the poster alone.
        s.srcs = reduced ? [film ? it.poster || images[0] : images[0] || it.poster].filter(Boolean)
                         : images.length ? images : [it.poster].filter(Boolean);
        s.imgs = s.srcs.map(() => null);
      }
      card.append(el);
      slots.set(i, s);
      return s;
    };
    const img = (s, k) => {
      if (s.imgs[k]) return s.imgs[k];
      const im = document.createElement("img");
      im.className = "pv-i" + (k === s.k ? " on" : "");
      im.alt = ""; im.decoding = "async"; im.draggable = false;
      if (k === 0) on(im, "load", () => { if (!s.ar && im.naturalWidth && im.naturalHeight) setAr(s, im.naturalWidth / im.naturalHeight); });
      im.src = s.srcs[k];
      s.el.append(im);
      return (s.imgs[k] = im);
    };

    // ---------- Playing: only the active slot, only while the card shows and the page is visible ----------
    const live = s => active === s && shown && !document.hidden && !dead;
    // The next image after k that has not failed to load (k itself when there is none)
    const after = (s, k) => {
      for (let j = 1; j < s.srcs.length; j++) { const c = (k + j) % s.srcs.length; if (!s.bad.has(c)) return c; }
      return k;
    };
    const step = s => {
      s.timer = 0;
      if (!live(s)) return;
      const next = after(s, s.k);
      if (next === s.k) return; // nothing else left to show
      const im = img(s, next);
      if (!im.complete) { s.timer = setTimeout(() => step(s), 150); return; } // wait for it rather than flash a blank
      if (!im.naturalWidth) { s.bad.add(next); s.timer = setTimeout(() => step(s), 0); return; } // broken: skip it
      s.imgs[s.k].classList.remove("on");
      im.classList.add("on");
      s.k = next;
      img(s, after(s, next)); // fetch the one after while this one shows
      s.timer = setTimeout(() => step(s), CYCLE);
    };
    // Films: only the last few shown keep their loaded data; the oldest is emptied (poster stays) and refilled on return
    const films = [];
    const park = s => {
      if (s.parked) return;
      stop(s);
      s.sources.forEach(so => so.remove());
      s.video.load();
      s.parked = true;
    };
    const unpark = s => {
      if (!s.parked) return;
      s.parked = false;
      s.sources.forEach(so => s.video.append(so));
      s.video.load(); // re-runs source selection; preload keeps it idle until play()
    };
    const keepFilm = s => {
      const k = films.indexOf(s);
      if (k > -1) films.splice(k, 1);
      films.push(s);
      unpark(s);
      while (films.length > MAX_FILMS) park(films.shift());
    };
    const start = s => {
      if (s.video) {
        if (reduced) return;
        clearTimeout(s.playT);
        s.playT = setTimeout(() => {
          if (!live(s)) return;
          const p = s.video.play();
          if (p && p.catch) p.catch(() => {}); // autoplay refused (low power mode…): the poster stays
        }, PLAY_DELAY);
      } else if (s.srcs.length) {
        img(s, s.k);
        if (s.srcs.length > 1 && !reduced && !s.timer) {
          img(s, after(s, s.k));
          s.timer = setTimeout(() => step(s), CYCLE);
        }
      }
    };
    const stop = s => {
      clearTimeout(s.playT); clearTimeout(s.timer); s.timer = 0;
      if (s.video && !s.video.paused) s.video.pause();
    };
    const activate = i => {
      const s = slots.get(i) || makeSlot(i);
      if (active === s) return;
      const prev = active;
      if (s.video) keepFilm(s);
      // While the card is hidden the layers swap at once, so the last project doesn't ghost through the next reveal
      if (!shown) card.classList.add("pv-cut");
      if (prev) { stop(prev); prev.el.classList.remove("on"); }
      active = s;
      s.el.classList.add("on");
      if (!shown) {
        getComputedStyle(s.el).opacity; if (prev) getComputedStyle(prev.el).opacity; // settle the swap with no transition
        card.classList.remove("pv-cut");
      }
      size();
      if (shown) start(s);
    };
    const show = () => {
      if (shown) return;
      shown = true;
      card.classList.add("on");
      if (active) start(active);
    };
    const hide = () => {
      if (!shown) return;
      shown = false;
      card.classList.remove("on");
      if (active) stop(active);
      halt();
    };

    // ---------- Size: width from the mode, height from the media's ratio, both capped by the screen ----------
    let mode = "";
    const size = () => {
      const ar = (active && active.ar) || 4 / 3, vw = viewW(), vh = innerHeight;
      let w, maxH;
      if (mode === "touch") { w = Math.min(vw * 0.42, 220); maxH = vh * 0.32; }
      else { w = clamp(vw * 0.24, 220, 420); maxH = vh * 0.62; }
      w = Math.min(w, vw - EDGE * 2);
      let h = w / ar;
      if (h > maxH) { h = maxH; w = h * ar; }
      w = Math.round(w); h = Math.round(h);
      if (w !== cw || h !== ch) { cw = w; ch = h; card.style.width = w + "px"; card.style.height = h + "px"; }
      if (mode === "hover") { aim(); if (reduced || !shown) snap(); else kick(); }
    };

    // ---------- Follow (hover mode) ----------
    const ptr = { x: -1e4, y: -1e4 }, goal = { x: 0, y: 0 }, pos = { x: 0, y: 0 };
    let raf = 0, last = 0;
    const aim = () => {
      const vw = viewW(), vh = innerHeight;
      let x = ptr.x + OFF_X, y = ptr.y + OFF_Y;
      if (x + cw > vw - EDGE) x = ptr.x - OFF_X - cw; // no room on the right: sit on the left of the pointer
      if (y + ch > vh - EDGE) y = ptr.y - OFF_Y - ch; // no room below: sit above it, so the card never covers the pointer
      goal.x = clamp(x, EDGE, Math.max(EDGE, vw - EDGE - cw));
      goal.y = clamp(y, EDGE, Math.max(EDGE, vh - EDGE - ch));
    };
    const place = () => { card.style.transform = `translate3d(${pos.x}px,${pos.y}px,0)`; };
    const snap = () => { halt(); pos.x = goal.x; pos.y = goal.y; place(); };
    const tick = t => {
      const dt = last ? Math.min(64, t - last) : 16.67;
      last = t;
      const f = 1 - Math.pow(1 - LAG, dt / 16.67);
      pos.x += (goal.x - pos.x) * f; pos.y += (goal.y - pos.y) * f;
      if (Math.abs(goal.x - pos.x) + Math.abs(goal.y - pos.y) < 0.3) { pos.x = goal.x; pos.y = goal.y; place(); raf = 0; last = 0; return; }
      place();
      raf = requestAnimationFrame(tick);
    };
    const kick = () => { if (!raf && shown && !document.hidden) raf = requestAnimationFrame(tick); };
    function halt() { if (raf) cancelAnimationFrame(raf); raf = 0; last = 0; }

    // ---------- Modes ----------
    let modeAc = null, io = null, listOn = false, checkRaf = 0;
    let clicked = -1; // hover: the row just clicked stays quiet until the pointer moves to another row, leaves, or the list goes away
    const later = fn => { if (!checkRaf) checkRaf = requestAnimationFrame(() => { checkRaf = 0; if (!dead) fn(); }); };

    const setupHover = msig => {
      const rowOf = el => {
        const a = el && el.closest ? el.closest("a[data-i]") : null;
        return a && list.contains(a) ? a : null;
      };
      const handle = el => {
        const a = listOn ? rowOf(el) : null;
        if (!a) { clicked = -1; hide(); return; }
        const i = Number(a.dataset.i);
        if (i !== clicked) clicked = -1;
        if (clicked > -1 || !hasMedia(i)) { hide(); return; }
        activate(i);
        aim();
        if (!shown) { snap(); show(); } else if (reduced) snap(); else kick();
      };
      const opt = { passive: true, signal: msig };
      addEventListener("pointermove", e => {
        if (e.pointerType === "touch") return;
        ptr.x = e.clientX; ptr.y = e.clientY;
        handle(e.target);
      }, opt);
      // The list can scroll under a still pointer: look again at what is under it, once per frame
      addEventListener("scroll", () => {
        if (ptr.x < 0 || (!listOn && !shown)) return;
        later(() => handle(document.elementFromPoint(ptr.x, ptr.y)));
      }, opt);
      list.addEventListener("click", e => {
        const a = rowOf(e.target);
        if (a) { clicked = Number(a.dataset.i); hide(); }
      }, { signal: msig });
      document.documentElement.addEventListener("pointerleave", () => { ptr.x = ptr.y = -1e4; hide(); }, opt);
      addEventListener("blur", hide, opt);
      addEventListener("resize", size, opt);
    };

    const setupTouch = msig => {
      // Read-only look at main.js's caption bar: its height goes in --pv-lift, and the CSS lifts the card by it while
      // body.cap-on is set (the same moment the bar slides in), so the two move together without timing games
      let capH = -1;
      const lift = () => {
        const cap = document.querySelector(".list-cap"), h = cap ? cap.offsetHeight : 0;
        if (h !== capH) { capH = h; card.style.setProperty("--pv-lift", h + "px"); }
      };
      const check = () => {
        if (!listOn) { hide(); return; }
        const mid = innerHeight / 2, vh = innerHeight;
        let best = null, d = Infinity;
        list.querySelectorAll("li:not([hidden]) > a[data-i]").forEach(a => {
          const r = a.getBoundingClientRect();
          if (!r.height || r.bottom < 0 || r.top > vh) return;
          const dd = Math.abs(r.top + r.height / 2 - mid);
          if (dd < d) { d = dd; best = a; }
        });
        lift(); // still in the read phase, before activate() writes
        const i = best ? Number(best.dataset.i) : -1;
        if (i < 0 || !hasMedia(i)) { hide(); return; }
        activate(i);
        show();
      };
      const opt = { passive: true, signal: msig };
      addEventListener("scroll", () => { if (listOn) later(check); }, opt);
      addEventListener("resize", () => { size(); if (listOn) later(check); }, opt);
      return check;
    };

    const setMode = () => {
      if (dead) return;
      const next = matchMedia(HOVER).matches ? "hover" : "touch";
      if (next === mode) return;
      if (modeAc) modeAc.abort();
      if (io) io.disconnect();
      hide(); snap();
      mode = next;
      modeAc = new AbortController();
      card.classList.toggle("pv-touch", mode === "touch");
      card.style.transform = "";
      cw = ch = 0;
      size();
      const check = mode === "touch" ? setupTouch(modeAc.signal) : (setupHover(modeAc.signal), null);
      // The touch card waits until the list is a little way into the screen, not just a sliver
      io = new IntersectionObserver(entries => {
        listOn = entries[entries.length - 1].isIntersecting;
        if (!listOn) { clicked = -1; hide(); }
        else if (check) later(check);
      }, { rootMargin: mode === "touch" ? "-12% 0px -12% 0px" : "0px" });
      io.observe(list);
    };
    const mq = matchMedia(HOVER);
    if (mq.addEventListener) on(mq, "change", setMode);

    on(document, "visibilitychange", () => {
      if (!active) return;
      if (document.hidden) { stop(active); halt(); }
      else if (shown) { start(active); if (mode === "hover" && !reduced) kick(); }
    });

    function destroy() {
      if (dead) return;
      dead = true;
      ac.abort();
      if (modeAc) modeAc.abort();
      if (io) io.disconnect();
      halt();
      if (checkRaf) cancelAnimationFrame(checkRaf);
      slots.forEach(s => {
        stop(s);
        if (s.probe) { s.probe.onload = null; s.probe.removeAttribute("src"); }
        if (s.video) { s.video.removeAttribute("poster"); s.sources.forEach(x => x.remove()); s.video.load(); }
        s.imgs.forEach(im => im && im.removeAttribute("src"));
      });
      slots.clear();
      films.length = 0;
      active = null;
      card.remove();
    }
    if (signal) signal.addEventListener("abort", destroy, { once: true, signal: sig });

    setMode();
    return { destroy };
  }

  window.V2Preview = { init };
})();
