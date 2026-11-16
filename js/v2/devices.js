/* Device frames (v2): wraps a piece of work (an image or a film) in an iPhone or a MacBook drawn in CSS (css/v2/devices.css).
   Felipe: "use more MacBook or iPhone mockups when it makes sense". Classic script, no build step; it sets window.V2Devices.

   API
   - V2Devices.wrap(innerHTML, kind, { ar, island }) -> string
       innerHTML  the screen content as HTML the caller already escaped: an <img>, a <picture>, or a <video> with its .vctl tag
       kind       "iphone" | "macbook" (anything else returns innerHTML untouched)
       ar         the content's own proportion, "1080/1920", "9:16" or a number (width / height). Optional but recommended:
                  with it the content box is sized exactly, the video tag hangs from the film's top edge, and on the
                  iPhone the film is kept just inside the rounded screen corners so no corner of it is ever cut.
       island     false hides the iPhone's dynamic island (it sits over the top centre of the screen, as on the real phone)
     Markup: <div class="device device-<kind>" data-kind [data-island] [data-car style="--car;--fw;--fh;--vt"]>
               decorative parts (aria-hidden) + <div class="device-screen"><div class="device-fit">INNER</div></div></div>
   - V2Devices.mount(root, { signal }) -> { destroy }
       For devices wrapped without `ar`: measures each image when it loads (or a film once its metadata is in) and fits it
       the same way. Listeners stop when `signal` aborts or destroy() is called. Nothing else runs (no loops, no observers).
   - V2Devices.ratio(kind) -> number   the whole device's width / height (iPhone .48015, MacBook 1.6779): use it as the
       figure's --ar / --r so justified rows and pairs size the device correctly.
   - V2Devices.screenRatio(kind) -> number   the screen's width / height (9/19.5 and 16/10). */
(() => {
  // Geometry shared with devices.css: screen proportion, screen corner radius as a share of the screen width,
  // and the whole device's proportion. Change both files together.
  const GEO = {
    iphone: { sr: 9 / 19.5, r: 0.133, dr: 0.48015 },
    macbook: { sr: 16 / 10, r: 0, dr: 1.6779 }
  };
  const known = kind => typeof kind === "string" && Object.prototype.hasOwnProperty.call(GEO, kind);
  // iPhone screen height and the dynamic island's lower edge inside the screen, in % of the device width (cqw),
  // so a film's .vctl tag can drop just below the island when the film reaches the top of the screen.
  const SCREEN_H = 92.8 * 19.5 / 9, ISLAND_CLEAR = 12.1;

  // "1080/1920", "1080 / 1920", "9:16", 0.5625 -> 0.5625; anything unreadable -> null
  const parseAR = ar => {
    if (typeof ar === "number") return ar > 0 && isFinite(ar) ? ar : null;
    if (typeof ar !== "string") return null;
    const m = ar.trim().match(/^(\d*\.?\d+)\s*(?:[/:x]\s*(\d*\.?\d+))?$/i);
    if (!m) return null;
    const v = m[2] ? +m[1] / +m[2] : +m[1];
    return v > 0 && isFinite(v) ? v : null;
  };

  // Size of the content box inside the screen, in % of the screen's width and height.
  // First contain (letterbox), then, if the content's corner would fall outside the rounded screen corner,
  // shrink it along its diagonal until the corner sits on the arc, so nothing is clipped.
  const fit = (kind, car) => {
    const { sr, r } = GEO[kind], H = 1 / sr;
    let wc, hc;
    if (car > sr) { wc = 1; hc = 1 / car; } else { hc = H; wc = H * car; }
    let k = 1;
    if (r > 0) {
      const a = wc / 2, b = hc / 2, ax = 0.5 - r, ay = H / 2 - r;
      if (a > ax && b > ay && (a - ax) ** 2 + (b - ay) ** 2 > r * r) {
        const A = a * a + b * b, B = -2 * (a * ax + b * ay), C = ax * ax + ay * ay - r * r;
        k = Math.min(1, (-B + Math.sqrt(Math.max(0, B * B - 4 * A * C))) / (2 * A)) * 0.996; // a hair inside the arc
      }
    }
    const w = +(wc * k * 100).toFixed(3), h = +((hc * k) / H * 100).toFixed(3);
    // how far the tag must drop inside the content box to clear the island (0 when the content starts below it)
    const vt = kind === "iphone" ? +Math.max(0, ISLAND_CLEAR - SCREEN_H * (1 - h / 100) / 2).toFixed(3) : 0;
    return { w, h, vt };
  };
  const fitStyle = (car, f) => `--car:${car};--fw:${f.w}%;--fh:${f.h}%;--vt:${f.vt}cqw`;

  const setFit = (dev, kind, car) => {
    if (!known(kind) || !car) return;
    const f = fit(kind, car);
    dev.style.setProperty("--car", String(+car.toFixed(5)));
    dev.style.setProperty("--fw", f.w + "%");
    dev.style.setProperty("--fh", f.h + "%");
    dev.style.setProperty("--vt", f.vt + "cqw");
  };

  const PARTS = {
    iphone: island => ({
      before: `<div class="device-body" aria-hidden="true"><i class="device-btn device-btn-action"></i><i class="device-btn device-btn-up"></i><i class="device-btn device-btn-down"></i><i class="device-btn device-btn-power"></i></div>`,
      after: island ? `<i class="device-island" aria-hidden="true"></i>` : ""
    }),
    macbook: () => ({
      before: `<div class="device-lid" aria-hidden="true"><i class="device-cam"></i></div>`,
      after: `<div class="device-base" aria-hidden="true"><i class="device-thumb"></i></div>`
    })
  };

  function wrap(innerHTML, kind, opts = {}) {
    const inner = innerHTML == null ? "" : String(innerHTML);
    if (!known(kind)) return inner;
    const car = parseAR(opts && opts.ar), island = kind === "iphone" && !(opts && opts.island === false);
    let attrs = island ? " data-island" : "";
    if (car) {
      const c = +car.toFixed(5);
      attrs += ` data-car="${c}" style="${fitStyle(c, fit(kind, car))}"`;
    }
    const p = PARTS[kind](island);
    return `<div class="device device-${kind}" data-kind="${kind}"${attrs}>${p.before}<div class="device-screen"><div class="device-fit">${inner}</div></div>${p.after}</div>`;
  }

  function mount(root = document, { signal } = {}) {
    root = root || document;
    const ac = new AbortController();
    const destroy = () => ac.abort();
    if (signal) {
      if (signal.aborted) { destroy(); return { destroy }; }
      signal.addEventListener("abort", destroy, { once: true, signal: ac.signal });
    }
    const on = { signal: ac.signal };
    root.querySelectorAll(".device:not([data-car])").forEach(dev => {
      const kind = dev.dataset.kind, m = dev.querySelector(".device-fit img, .device-fit video");
      if (!m || !known(kind)) return;
      const apply = () => {
        const w = m.naturalWidth || m.videoWidth, h = m.naturalHeight || m.videoHeight;
        if (w > 0 && h > 0) setFit(dev, kind, w / h);
      };
      if (m.tagName === "IMG") {
        if (m.complete) apply();
        m.addEventListener("load", apply, on); // also fires again when a <picture> switches source
      } else {
        if (m.readyState >= 1) apply();
        m.addEventListener("loadedmetadata", apply, on); // preload="none" films only report this once they start
      }
    });
    return { destroy };
  }

  window.V2Devices = {
    wrap,
    mount,
    ratio: kind => (known(kind) ? GEO[kind].dr : null),
    screenRatio: kind => (known(kind) ? GEO[kind].sr : null)
  };
})();
