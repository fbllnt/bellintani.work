/* Hero flash (Felipe, Nov 16 2026): the first screen shows the whole portfolio as a fast, glowing flicker behind white type.
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
    box.innerHTML = `<img class="fl-img" alt="" decoding="async">`;
    stage.prepend(box);
    const img = box.querySelector(".fl-img");

    // Load frames in order; the flicker only uses frames that are ready, so it starts after the first few arrive
    const ready = [];
    let loading = true;
    const queue = still ? frames.slice(0, 1) : frames.slice();
    const loadNext = () => {
      const src = queue.shift(); if (!src) { loading = false; return; }
      const im = new Image(); im.decoding = "async"; im.src = src;
      const done = () => { ready.push(src); if (ready.length === 1) show(src); loadNext(); };
      (im.decode ? im.decode() : new Promise((res, rej) => { im.onload = res; im.onerror = rej; })).then(done, () => loadNext());
    };

    let k = 0, last = 0, raf = 0, opacity = 1, started = false;
    function show(src) { img.src = src; }
    function tick(t) {
      raf = 0;
      if (document.hidden || opacity <= 0.01 || still) return;
      if (t - last >= STEP && ready.length > 1) { last = t; k = (k + 1) % ready.length; show(ready[k]); }
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
