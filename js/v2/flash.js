/* Hero flash (Felipe, Nov 16 2026): the first screen shows the whole portfolio as a fast flicker behind white type, through
   an old-TV glitch (Felipe: "glitch, interference from old TV statics, I want chaos"): snow, bursts of pure static between
   cuts, horizontal tearing, RGB split, scanlines and a rolling bar, drawn on a small canvas so it stays light.
   Frames are small JPEGs in images/flash/ (one to three per project), swapped about every 55 ms like a GIF, but sharper and
   lighter than a real GIF. The flash fades out as the page scrolls and stops completely once gone.
   Full bleed (object-fit: cover) by Felipe's explicit request: the one place on the site where images fill the frame.
   API: window.V2Flash.init({ stage, frames, reduced }) -> { destroy }.
   - Starts only when the intro is done (.stage.done); until then the intro runs untouched.
   - html.flash-on while the flash is visible: the first screen and the corner menu switch to white type (css/v2/flash.css).
   - Reduced motion or Save-Data: one still frame, no flicker; it still fades on scroll. Pauses when the tab is hidden. */
(() => {
  const STEP = 55; // ms per frame (Felipe: faster)

  function init({ stage, frames, reduced }) {
    const noop = { destroy() {} };
    if (!stage || !frames || !frames.length) return noop;
    const still = reduced || !!(navigator.connection && navigator.connection.saveData);
    const root = document.documentElement;
    const box = document.createElement("div");
    box.className = "flash"; box.setAttribute("aria-hidden", "true");
    box.innerHTML = still ? `<img class="fl-img" alt="" decoding="async">` : `<canvas class="fl-tv"></canvas>`;
    stage.prepend(box);
    const img = box.querySelector(".fl-img"), cv = box.querySelector(".fl-tv"), g = cv && cv.getContext("2d", { willReadFrequently: true });
    const pics = new Map();
    // The TV: a 640 px wide canvas (400 px on phones) (CSS stretches it full bleed); work buffers are reused every frame
    let W = 0, H = 0, buf = null;
    const sizeTV = () => { if (!cv) return; W = (innerWidth || 1024) < 760 ? 400 : 640; H = Math.max(240, Math.round(W * (innerHeight || 9) / (innerWidth || 16))); if (cv.width !== W || cv.height !== H) { cv.width = W; cv.height = H; buf = null; } };
    sizeTV();
    let roll = 0;
    function drawTV(im, burst) {
      if (!g) return;
      if (burst || !im) { // pure static between cuts
        const d = g.createImageData(W, H), a = d.data;
        for (let i = 0; i < a.length; i += 4) { const v = Math.random() * 255 | 0; a[i] = a[i + 1] = a[i + 2] = v; a[i + 3] = 255; }
        g.putImageData(d, 0, 0); return;
      }
      // cover-fit the frame into the TV
      const r = Math.max(W / im.naturalWidth, H / im.naturalHeight), w = im.naturalWidth * r, h = im.naturalHeight * r;
      g.drawImage(im, (W - w) / 2, (H - h) / 2, w, h);
      const src = g.getImageData(0, 0, W, H), s = src.data;
      if (!buf || buf.width !== W) buf = g.createImageData(W, H);
      const o = buf.data, split = 3 + (Math.random() * 7 | 0), snow = 26 + Math.random() * 40;
      // tearing: a few bands slide sideways this frame
      const tears = []; for (let n = 2 + (Math.random() * 5 | 0); n--;) { const y = Math.random() * H | 0; tears.push([y, y + 4 + (Math.random() * H * .12 | 0), (Math.random() - .5) * W * .25 | 0]); }
      roll = (roll + 7 + Math.random() * 9) % (H + 60);
      for (let y = 0; y < H; y++) {
        let shift = 0; for (const t of tears) if (y >= t[0] && y < t[1]) shift = t[2];
        const line = y & 1 ? .82 : 1, bar = Math.abs(y - roll) < 26 ? 1.35 : 1;
        for (let x = 0; x < W; x++) {
          const xs = Math.min(W - 1, Math.max(0, x + shift));
          const iR = (y * W + Math.min(W - 1, xs + split)) * 4, iG = (y * W + xs) * 4, iB = (y * W + Math.max(0, xs - split)) * 4, i = (y * W + x) * 4;
          const n = (Math.random() - .5) * snow;
          o[i] = (s[iR] * line * bar + n); o[i + 1] = (s[iG + 1] * line * bar + n); o[i + 2] = (s[iB + 2] * line * bar + n); o[i + 3] = 255;
        }
      }
      g.putImageData(buf, 0, 0);
    }

    // Load frames in order; the flicker only uses frames that are ready, so it starts after the first few arrive
    const ready = [];
    let loading = true;
    const queue = still ? frames.slice(0, 1) : frames.slice();
    const loadNext = () => {
      const src = queue.shift(); if (!src) { loading = false; return; }
      const im = new Image(); im.decoding = "async"; im.src = src;
      const done = () => { pics.set(src, im); ready.push(src); if (ready.length === 1) show(src); loadNext(); };
      (im.decode ? im.decode() : new Promise((res, rej) => { im.onload = res; im.onerror = rej; })).then(done, () => loadNext());
    };

    let k = 0, last = 0, raf = 0, opacity = 1, started = false;
    function show(src, burst) { if (img) img.src = src; else drawTV(pics.get(src), burst); }
    function tick(t) {
      raf = 0;
      if (document.hidden || opacity <= 0.01 || still) return;
      if (t - last >= STEP && ready.length) {
        last = t;
        // chaos: most ticks cut to the next frame, some hold it with fresh interference, some flash pure static
        const roll = Math.random();
        if (roll < .12) show(ready[k], true);
        else { if (roll < .82 && ready.length > 1) k = (k + 1) % ready.length; show(ready[k]); }
      }
      raf = requestAnimationFrame(tick);
    }
    const run = () => { if (!raf && started && !still && opacity > 0.01 && !document.hidden) raf = requestAnimationFrame(tick); };

    // Fade with the scroll: gone by 70% of the first screen; white type only while the flash really shows
    function onScroll() {
      const vh = innerHeight || 1;
      opacity = started ? Math.max(0, Math.min(1, 1 - scrollY / (vh * .7))) : 0;
      box.style.opacity = String(opacity);
      root.classList.toggle("flash-on", started && opacity > .35 && !document.body.classList.contains("in-case"));
      if (opacity <= 0.01 && raf) { cancelAnimationFrame(raf); raf = 0; } else run();
    }
    // Scroll events already arrive at most once per frame; the update is two style writes, so it runs right away
    const onScrollRaf = () => onScroll();

    const start = () => {
      if (started) return; started = true;
      box.classList.add("on"); loadNext(); onScroll(); run();
    };
    // Wait for the intro: .stage gets .done when it ends (or right away on a return visit / skipped intro)
    const mo = new MutationObserver(() => { if (stage.classList.contains("done")) start(); });
    if (stage.classList.contains("done")) start(); else mo.observe(stage, { attributes: true, attributeFilter: ["class"] });
    // Replaying the intro hides the flash until it ends again
    const mo2 = new MutationObserver(() => {
      if (stage.classList.contains("play") && !stage.classList.contains("done")) { started = false; box.classList.remove("on"); onScroll(); mo.observe(stage, { attributes: true, attributeFilter: ["class"] }); }
    });
    mo2.observe(stage, { attributes: true, attributeFilter: ["class"] });
    // Opening a case hides the home: drop the white-type state
    const mo3 = new MutationObserver(onScroll);
    mo3.observe(document.body, { attributes: true, attributeFilter: ["class"] });

    const ac = new AbortController();
    addEventListener("scroll", onScrollRaf, { passive: true, signal: ac.signal });
    addEventListener("resize", onScrollRaf, { passive: true, signal: ac.signal });
    addEventListener("resize", sizeTV, { passive: true, signal: ac.signal });
    // Smooth scroll (Lenis) reports every eased frame too
    const offLenis = window.v2Lenis && window.v2Lenis.on ? window.v2Lenis.on("scroll", onScrollRaf) : null;
    document.addEventListener("visibilitychange", () => { if (!document.hidden) run(); }, { signal: ac.signal });

    return { destroy() {
      ac.abort(); if (typeof offLenis === "function") offLenis(); mo.disconnect(); mo2.disconnect(); mo3.disconnect(); if (raf) cancelAnimationFrame(raf);
      queue.length = 0; loading = false; box.remove(); root.classList.remove("flash-on");
    } };
  }

  window.V2Flash = { init };
})();
