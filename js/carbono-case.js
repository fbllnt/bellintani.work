/* Carbono's two interactive pieces, as blocks inside the standard loose case (Nov 16 2026: the case moved to the
   site's system; everything else is ordinary chapters, images, loops and a film).
   In content.js a gallery item { cbPalette: true } or { cbFeed: true } renders here; data comes from SITE.carbono.
   - palette: the product on a colour field; the swatches below repaint it (the brand's earthy palette).
   - feed:    the Instagram feed inside the site's iPhone frame (js/v2/devices.js), with Before / After 01 / After 02.
   API: window.CarbonoCase = { palette(args), feed(args), setup({ root, data, L, reduced }) -> cleanup } */
(() => {
  const pad = n => String(n + 1).padStart(2, "0");
  const copy = ({ L, esc, data }) => k => esc(L(data.copy[k]));

  function palette(args) {
    const { esc, data } = args, c = copy(args), first = data.palette[0];
    return `<figure class="fig cb-palette" data-cb-block="palette"><div class="cb-stage cb-dark" style="background:${esc(first)}">
      <div class="cb-stage-top mono"><img src="${esc(data.assets.symbol)}" alt="Carbono Box"><span data-cb-hex>${esc(first.toUpperCase())}</span></div>
      <img class="cb-stage-sofa" src="${esc(data.assets.sofa)}" alt="Carbono" loading="lazy">
    </div><div class="cb-swatches" role="group" aria-label="${c("palette")}">${data.palette.map((col, i) =>
      `<button type="button" data-cb-colour="${esc(col)}" style="--swatch:${esc(col)}" aria-label="${esc(col.toUpperCase())}" aria-pressed="${!i}"><span class="mono">${pad(i)}</span></button>`).join("")}</div>
    <figcaption class="mono muted">${c("paletteStudy")}</figcaption></figure>`;
  }

  function feed(args) {
    const { esc, data } = args, c = copy(args), keys = ["before", "after1", "after2"];
    const img = `<img src="${esc(data.assets.feeds[1])}" alt="${c("after1")}" loading="lazy" data-cb-feed-img>`;
    const phone = window.V2Devices ? window.V2Devices.wrap(img, "iphone", { ar: "1200/2596" }) : img;
    return `<figure class="fig cb-feed has-device" data-cb-block="feed" style="--ar:${window.V2Devices ? window.V2Devices.ratio("iphone") : "1200/2596"}"><div class="ph">${phone}</div>
      <div class="cb-feed-views mono" role="group" aria-label="${c("social")}">${keys.map((k, i) =>
        `<button type="button" data-cb-feed="${i}" aria-pressed="${i === 1}">${c(k)}</button>`).join("")}</div>
      <figcaption class="mono muted" data-cb-feed-label aria-live="polite">${c("after1")}</figcaption></figure>`;
  }

  function setup({ root, data, L }) {
    const ac = new AbortController(), signal = ac.signal, all = s => [...root.querySelectorAll(s)];
    all('[data-cb-block="palette"]').forEach(box => {
      const stage = box.querySelector(".cb-stage"), hex = box.querySelector("[data-cb-hex]");
      box.querySelectorAll("[data-cb-colour]").forEach(b => b.addEventListener("click", () => {
        const col = b.dataset.cbColour, [r, g, bl] = col.slice(1).match(/../g).map(x => parseInt(x, 16));
        stage.style.background = col;
        stage.classList.toggle("cb-dark", r * .2126 + g * .7152 + bl * .0722 < 145);
        hex.textContent = col.toUpperCase();
        box.querySelectorAll("[data-cb-colour]").forEach(x => x.setAttribute("aria-pressed", String(x === b)));
      }, { signal }));
    });
    all('[data-cb-block="feed"]').forEach(box => {
      const keys = ["before", "after1", "after2"], im = box.querySelector("[data-cb-feed-img]"), label = box.querySelector("[data-cb-feed-label]");
      data.assets.feeds.forEach(src => { const p = new Image(); p.src = src; });
      box.querySelectorAll("[data-cb-feed]").forEach(b => b.addEventListener("click", () => {
        const n = +b.dataset.cbFeed;
        im.src = data.assets.feeds[n]; im.alt = L(data.copy[keys[n]]); label.textContent = im.alt;
        box.querySelectorAll("[data-cb-feed]").forEach(x => x.setAttribute("aria-pressed", String(x === b)));
      }, { signal }));
    });
    return () => ac.abort();
  }

  window.CarbonoCase = { palette, feed, setup };
})();
