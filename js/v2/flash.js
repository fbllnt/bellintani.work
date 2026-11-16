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

  // Treatments to compare (Felipe, Nov 16 2026: "give me options"): ?flash=chaos | dither | ascii | mosh
  const MODES = ["chaos", "dither", "ascii", "mosh", "mosh-blue"];
  const BAYER = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5].map(v => (v + .5) * 16);
  const RAMP = " .:-=+*#%@";

  function init({ stage, frames, reduced, mode }) {
    mode = MODES.includes(mode) ? mode : "chaos";
    const noop = { destroy() {} };
    if (!stage || !frames || !frames.length) return noop;
    const still = reduced || !!(navigator.connection && navigator.connection.saveData);
    const root = document.documentElement;
    const box = document.createElement("div");
    box.className = "flash"; box.setAttribute("aria-hidden", "true");
    box.innerHTML = still ? `<img class="fl-img" alt="" decoding="async">` : `<canvas class="fl-tv fl-${mode.split("-")[0]}"></canvas>`;
    root.classList.toggle("flash-ink", mode === "dither");
    stage.prepend(box);
    const img = box.querySelector(".fl-img"), cv = box.querySelector(".fl-tv"), g = cv && cv.getContext("2d", { willReadFrequently: true });
    const pics = new Map();
    // The TV: a 640 px wide canvas (400 px on phones) (CSS stretches it full bleed); work buffers are reused every frame
    let W = 0, H = 0, buf = null;
    let cols = 0, rows = 0, cell = null;
    const sizeTV = () => {
      if (!cv) return; const phone = (innerWidth || 1024) < 760, ar = (innerHeight || 9) / (innerWidth || 16);
      if (mode === "ascii") { cols = phone ? 64 : 132; rows = Math.max(20, Math.round(cols * ar * 8 / 14)); W = cols * 8; H = rows * 14;
        cell = cell || document.createElement("canvas"); cell.width = cols; cell.height = rows; }
      else { W = mode === "dither" ? (phone ? 220 : 380) : mode.startsWith("mosh") ? (phone ? 320 : 480) : (phone ? 400 : 640); H = Math.max(140, Math.round(W * ar)); }
      if (cv.width !== W || cv.height !== H) { cv.width = W; cv.height = H; buf = null; prev = null; }
    };
    let prev = null;
    sizeTV();
    let roll = 0;
    const cover = (ctx, im, w0, h0) => { const r = Math.max(w0 / im.naturalWidth, h0 / im.naturalHeight), w = im.naturalWidth * r, h = im.naturalHeight * r; ctx.drawImage(im, (w0 - w) / 2, (h0 - h) / 2, w, h); };
    function drawTV(im, burst) {
      if (!g) return;
      if (mode === "dither") return drawDither(im, burst);
      if (mode === "ascii") return drawAscii(im, burst);
      if (mode.startsWith("mosh")) return drawMosh(im, burst);
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
    // DITHER (pin 1): 1-bit ordered dither, black dots on white in a fine grid; the threshold drifts so it shimmers
    function drawDither(im, burst) {
      if (!im) return; cover(g, im, W, H);
      const d = g.getImageData(0, 0, W, H), a = d.data, jit = (Math.random() - .5) * 40, c = 1.35;
      for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
        const i = (y * W + x) * 4; let l = (a[i] * .299 + a[i + 1] * .587 + a[i + 2] * .114 - 128) * c + 128 + jit;
        if (burst && Math.random() < .5) l = Math.random() * 255;
        const v = l > BAYER[(y & 3) * 4 + (x & 3)] ? 250 : 12; a[i] = a[i + 1] = a[i + 2] = v; a[i + 3] = 255;
      }
      g.putImageData(d, 0, 0);
    }
    // ASCII: the frame rebuilt from JetBrains Mono characters in its own colours, on black
    function drawAscii(im, burst) {
      if (!im) return; const cg = cell.getContext("2d", { willReadFrequently: true }); cover(cg, im, cols, rows);
      const a = cg.getImageData(0, 0, cols, rows).data;
      g.fillStyle = "#050505"; g.fillRect(0, 0, W, H); g.font = "700 13px 'JetBrains Mono', ui-monospace, monospace"; g.textBaseline = "top";
      for (let y = 0; y < rows; y++) for (let x = 0; x < cols; x++) {
        const i = (y * cols + x) * 4; let r = a[i], gg = a[i + 1], b = a[i + 2];
        const l = (r * .299 + gg * .587 + b * .114) / 255; if (l < .06 && !burst) continue;
        const m = Math.max(r, gg, b) || 1, k = Math.min(1.6, 255 / m); r = Math.min(255, r * k); gg = Math.min(255, gg * k); b = Math.min(255, b * k);
        g.fillStyle = `rgb(${r | 0},${gg | 0},${b | 0})`;
        g.fillText(burst ? RAMP[Math.random() * RAMP.length | 0] : RAMP[Math.min(RAMP.length - 1, l * RAMP.length | 0)], x * 8, y * 14);
      }
    }
    // MOSH (pin 2), in the site blue (Felipe, Nov 16 2026): blue and black, horizontal smears, block artefacts,
    // the last frame bleeding into the next. The tint is read from --blue so it follows the palette.
    // ?flash=mosh is the red of the reference; ?flash=mosh-blue takes the site blue (--blue)
    const blue = mode === "mosh-blue" ? (() => { const m = (getComputedStyle(root).getPropertyValue("--blue").trim().match(/^#?([0-9a-f]{6})$/i) || [, "1a2bff"])[1]; return [0, 2, 4].map(i => parseInt(m.slice(i, i + 2), 16) / 255); })() : [1, .055, .09];
    function drawMosh(im, burst) {
      if (!im) return; cover(g, im, W, H);
      const d = g.getImageData(0, 0, W, H), s2 = d.data;
      if (!buf || buf.width !== W) buf = g.createImageData(W, H);
      const o = buf.data, keep = prev && !burst;
      const bands = []; for (let n = 3 + (Math.random() * 6 | 0); n--;) { const y = Math.random() * H | 0; bands.push([y, y + 2 + (Math.random() * H * .1 | 0), Math.random() * W | 0]); }
      for (let y = 0; y < H; y++) {
        let band = null; for (const b of bands) if (y >= b[0] && y < b[1]) band = b;
        let cr = 0, cg2 = 0, cb = 0;
        for (let x = 0; x < W; x++) {
          const i = (y * W + x) * 4; let l = (s2[i] * .299 + s2[i + 1] * .587 + s2[i + 2] * .114) / 255; l = Math.pow(l, 1.7);
          // the frame's light becomes the site blue; the brightest parts lift toward white so the image still reads
          const hi = Math.max(0, l - .72) * 3.2;
          let r = (blue[0] * l * 1.25 + hi) * 255, gg = (blue[1] * l * 1.25 + hi) * 255, b = (blue[2] * l * 1.35 + hi * .6) * 255;
          if (Math.random() < .002) { r = gg = b = 200 * l + 55; } // white specks
          if (band && x >= band[2]) { cr = cr * .93 + r * .07; cg2 = cg2 * .93 + gg * .07; cb = cb * .93 + b * .07; r = cr; gg = cg2; b = cb; } else { cr = r; cg2 = gg; cb = b; }
          if (keep && Math.random() < .35) { r = r * .5 + prev[i] * .5; gg = gg * .5 + prev[i + 1] * .5; b = b * .5 + prev[i + 2] * .5; }
          o[i] = r; o[i + 1] = gg; o[i + 2] = b; o[i + 3] = 255;
        }
      }
      // block artefacts: a few 8 px cells flattened to one colour
      for (let n = 60 + (Math.random() * 120 | 0); n--;) {
        const bx = (Math.random() * (W / 8) | 0) * 8, by = (Math.random() * (H / 8) | 0) * 8, j = (by * W + bx) * 4, r = o[j], gg = o[j + 1], b = o[j + 2];
        for (let yy = by; yy < Math.min(H, by + 8); yy++) for (let xx = bx; xx < Math.min(W, bx + 8); xx++) { const q = (yy * W + xx) * 4; o[q] = r; o[q + 1] = gg; o[q + 2] = b; }
      }
      g.putImageData(buf, 0, 0); prev = new Uint8ClampedArray(o);
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
        if (roll < (mode === "chaos" ? .12 : mode.startsWith("mosh") ? .06 : .03)) show(ready[k], true);
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
      queue.length = 0; loading = false; box.remove(); root.classList.remove("flash-on", "flash-ink");
    } };
  }

  window.V2Flash = { init };
})();
