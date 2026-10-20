(() => {
  const S = window.SITE;
  const $ = id => document.getElementById(id);
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  // ---------- Language (EN-US / PT-BR) ----------
  // Saved choice first, then the browser's language. L() picks the current language from { en, pt } values.
  const store = (k, v) => { try { v === undefined ? localStorage.removeItem(k) : localStorage.setItem(k, v); } catch (e) {} };
  const read = k => { try { return localStorage.getItem(k); } catch (e) { return null; } };
  let lang = read("lang");
  if (lang !== "en" && lang !== "pt") lang = /^pt\b/i.test(navigator.language || "") ? "pt" : "en";
  const L = v => (v && typeof v === "object" && !Array.isArray(v) && ("en" in v || "pt" in v)) ? (v[lang] ?? v.en) : v;
  const T = k => S.ui[lang][k] ?? S.ui.en[k] ?? "";
  document.documentElement.lang = lang === "pt" ? "pt-BR" : "en-US";
  document.querySelector('meta[name="description"]').content = T("description");
  document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = T(el.dataset.i18n); });
  document.querySelectorAll("[data-i18n-label]").forEach(el => el.setAttribute("aria-label", T(el.dataset.i18nLabel)));
  const langBtn = $("lang");
  langBtn.setAttribute("aria-label", T("langLabel"));
  langBtn.lang = lang === "pt" ? "en" : "pt-BR";
  // Switching reloads in the other language, keeping the page, the scroll position and skipping the intro.
  langBtn.addEventListener("click", () => {
    store("lang", lang === "pt" ? "en" : "pt");
    try { sessionStorage.setItem("resume", String(scrollY)); } catch (e) {}
    location.reload();
  });
  let resumeY = null;
  try { resumeY = sessionStorage.getItem("resume"); sessionStorage.removeItem("resume"); } catch (e) {}

  // ---------- Bind copy ----------
  const binds = {
    name: S.name,
    nameYear: `${S.name} — ${S.year}`,
    copyright: `©Copyright 20${S.year}`,
    workCount: `(${S.projects.length})`,
    tagline: L(S.tagline),
    email: S.email,
  };
  document.querySelectorAll("[data-bind]").forEach(el => { el.textContent = binds[el.dataset.bind] ?? ""; });
  $("subline").innerHTML = L(S.subline).map(esc).join("<br>");
  $("mail-big").href = `mailto:${S.email}`;
  const socialLinks = S.social.map(s => `<a class="swap" href="${esc(s.url)}" target="_blank" rel="noopener"><span>${esc(s.label)}</span><span>${esc(s.label)}</span></a>`).join("");
  $("social-corner").innerHTML = socialLinks;
  $("social-foot").innerHTML = socialLinks;
  $("services-list").innerHTML = L(S.services).map((s, i) => `<li><span>/ ${esc(s)}</span><span>${String(i + 1).padStart(2, "0")}</span></li>`).join("");

  // ---------- Project covers ----------
  // Real image if the project has one, otherwise a generated placeholder composition.
  function cover(i, p) {
    if (p.image) return `<img src="${esc(p.image)}" alt="" loading="lazy">`;
    const [h, s, l] = p.hue || [0, 0, 50];
    const c1 = `hsl(${h} ${s}% ${l}%)`, c2 = `hsl(${(h + 40) % 360} ${s}% ${Math.min(l + 25, 92)}%)`, ink = l < 30 ? "#f2f2f2" : "#111";
    const looks = [
      `radial-gradient(circle at 30% 40%, ${c2} 0 22%, transparent 22.5%), radial-gradient(circle at 70% 62%, ${ink} 0 14%, transparent 14.5%), ${c1}`,
      `repeating-linear-gradient(90deg, ${ink} 0 6%, transparent 6% 12%), linear-gradient(${c1}, ${c2})`,
      `conic-gradient(from 45deg at 50% 50%, ${c1} 0 25%, ${c2} 0 50%, ${c1} 0 75%, ${ink} 0)`,
      `linear-gradient(transparent 46%, ${ink} 46% 54%, transparent 54%), linear-gradient(90deg, transparent 46%, ${ink} 46% 54%, transparent 54%), ${c1}`,
      `repeating-radial-gradient(circle at 50% 110%, ${c1} 0 8%, ${c2} 8% 16%)`,
      `linear-gradient(135deg, ${c1} 0 50%, ${c2} 50%), ${c1}`,
    ];
    return `<div class="art" style="background:${looks[i % looks.length]}"></div>`;
  }
  const pad = n => String(n).padStart(2, "0");
  const tagFor = p => p.placeholder ? `<span class="placeholder">${esc(T("placeholder"))}</span>` : "";
  // Slugs come from the English title so links stay the same in both languages
  S.projects.forEach(p => { p.slug = p.slug || String(p.title.en || p.title).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""); });
  const href = p => `#p-${p.slug}`;

  // ---------- Work: index + grid ----------
  const index = $("index"), grid = $("grid");
  index.innerHTML = S.projects.map((p, i) => `<li><a href="${href(p)}" data-i="${i}">
    <span class="mono">(${i + 1})</span><span class="t">${esc(L(p.title))}</span><span class="k mono">${esc(L(p.scope))}${p.year ? ` — ${esc(p.year)}` : ""}${tagFor(p)}</span></a></li>`).join("");
  grid.innerHTML = S.projects.map((p, i) => `<a class="card" href="${href(p)}"><div class="ph">${cover(i, p)}</div>
    <div class="row"><b>${esc(L(p.title))}</b><span class="mono">(${i + 1})</span></div>
    <span class="mono muted">${esc(L(p.scope))}${p.year ? ` — ${esc(p.year)}` : ""}${tagFor(p)}</span></a>`).join("");
  // ---------- Floating cards over the sticky name ----------
  // Positions cycle through a loose collage: width, left offset, aspect ratio, vertical overlap (desktop / phone).
  const SPOTS = [
    { w: 44, x: 2,  ar: "16/9",  mt: "0vh",   wm: 88, xm: 0 },
    { w: 28, x: 50, ar: "3/2",   mt: "-10vh", wm: 70, xm: 30 },
    { w: 24, x: 74, ar: "4/3",   mt: "-30vh", wm: 74, xm: 6 },
    { w: 32, x: 10, ar: "16/10", mt: "6vh",   wm: 72, xm: 28 },
    { w: 40, x: 54, ar: "16/9",  mt: "-22vh", wm: 86, xm: 0 },
    { w: 30, x: 28, ar: "3/2",   mt: "8vh",   wm: 66, xm: 18 },
  ];
  const flow = $("flow");
  flow.innerHTML = S.projects.map((p, i) => {
    const s = SPOTS[i % SPOTS.length];
    return `<a class="drop" href="${href(p)}" draggable="false" style="--w:${s.w}%;--x:${s.x}%;--ar:${s.ar};--mt:${i ? s.mt : "0vh"};--wm:${s.wm}%;--xm:${s.xm}%">
      <div class="pop"><div class="ph">${cover(i, p)}</div>
      <div class="cap mono"><span>(${String(i + 1).padStart(2, "0")}) ${esc(L(p.title))}</span><span class="muted">${esc(p.year || "")}</span></div></div></a>`;
  }).join("");

  // Pop in when they reach the viewport
  const popIO = "IntersectionObserver" in window ? new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add("in"); popIO.unobserve(e.target); }
  }), { rootMargin: "0px 0px -8% 0px" }) : null;
  flow.querySelectorAll(".drop").forEach(d => popIO ? popIO.observe(d) : d.classList.add("in"));

  // Drag with the mouse; a drag never counts as a click. Touch keeps normal scrolling.
  let zTop = 1;
  flow.querySelectorAll(".drop").forEach(el => {
    let down = false, moved = false, sx = 0, sy = 0, ox = 0, oy = 0, bx = 0, by = 0;
    el.addEventListener("pointerdown", e => {
      if (e.pointerType !== "mouse" || e.button !== 0) return;
      down = true; moved = false; sx = e.clientX; sy = e.clientY; bx = ox; by = oy;
      el.style.zIndex = ++zTop; el.setPointerCapture(e.pointerId); e.preventDefault();
    });
    el.addEventListener("pointermove", e => {
      if (!down) return;
      const dx = e.clientX - sx, dy = e.clientY - sy;
      if (!moved && Math.hypot(dx, dy) > 4) { moved = true; el.classList.add("dragging"); }
      if (moved) { ox = bx + dx; oy = by + dy; el.style.translate = `${ox}px ${oy}px`; }
    });
    const up = () => { down = false; el.classList.remove("dragging"); };
    el.addEventListener("pointerup", up); el.addEventListener("pointercancel", up);
    el.addEventListener("click", e => { if (moved) { e.preventDefault(); moved = false; } });
  });

  const works = document.querySelector(".works"), vIndex = $("view-index"), vGrid = $("view-grid");
  const setView = asGrid => {
    works.classList.toggle("as-grid", asGrid);
    vIndex.setAttribute("aria-pressed", !asGrid); vGrid.setAttribute("aria-pressed", asGrid);
    try { localStorage.setItem("view", asGrid ? "grid" : "index"); } catch (e) {}
  };
  vIndex.onclick = () => setView(false); vGrid.onclick = () => setView(true);
  try { if (localStorage.getItem("view") === "grid") setView(true); } catch (e) {}

  // ---------- Intro ----------
  const stage = $("top"), corners = $("corners");
  $("loader").innerHTML = L(S.loader).map((w, i) => `<span style="--d:${(0.1 + i * 0.17).toFixed(2)}s">${esc(w)}</span>`).join("")
    + (S.loaderBig ? `<span class="big" style="--d:1.5s">${esc(L(S.loaderBig))}</span>` : "");

  // Name: every letter takes the same time but starts 80px further down, so they land as a wave
  const nameEl = $("name");
  nameEl.setAttribute("aria-label", S.name);
  const words = S.name.split(" ");
  let n = 0;
  nameEl.innerHTML = words.map((w, wi) => `<span class="word" aria-hidden="true">${
    [...w].map(ch => `<span style="--y:${80 * ++n}px">${esc(ch)}</span>`).join("")
    + (wi === words.length - 1 ? `<span class="reg" style="--y:${80 * ++n}px">®</span>` : "")
  }</span>`).join(`<span class="sp" aria-hidden="true"></span>`);

  // Fit the name to the stage width (or the longest word, if it has to wrap)
  const fit = () => {
    nameEl.style.setProperty("--name-size", "100px");
    const kids = [...nameEl.children];
    const total = kids.reduce((s, k) => s + k.offsetWidth, 0), avail = nameEl.clientWidth;
    let size = 100 * avail / total * .98;
    if (size < 64) size = 100 * avail / Math.max(...kids.filter(k => k.classList.contains("word")).map(k => k.offsetWidth)) * .98;
    nameEl.style.setProperty("--name-size", Math.min(size, 360) + "px");
  };
  (document.fonts ? document.fonts.ready : Promise.resolve()).then(fit);
  addEventListener("resize", fit);

  const timers = [];
  const clear = () => { timers.forEach(clearTimeout); timers.length = 0; };
  const finish = () => { clear(); stage.classList.remove("play"); stage.classList.add("done"); corners.classList.add("on"); };
  const play = () => {
    clear(); corners.classList.remove("on");
    stage.classList.remove("play", "done"); void stage.offsetWidth; stage.classList.add("play");
    timers.push(setTimeout(() => corners.classList.add("on"), 2650));
    timers.push(setTimeout(finish, 3950));
  };
  $("skip").onclick = finish;
  $("replay").onclick = () => { scrollTo({ top: 0 }); play(); };

  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ---------- Project pages ----------
  // Each job opens at #p-<slug>. The page is rendered in place; the hash keeps it linkable.
  const caseEl = $("case"), wipe = $("wipe");

  // Loose layout: each item sets its own place on a 12-column grid.
  // { col: 1-12, span: 1-12, shift: "8vh" (push down) or "-14vh" (pull up and overlap the item before),
  //   speed: -0.1…0.1 (scroll drift), z: stacking order (default: later items on top) }.
  // Text lines can sit between images: { text: { en, pt }, col, span }.
  // On phones items keep their order and alternate left/right in wider spans.
  function looseGallery(p) {
    let side = 0, zi = 0;
    return `<div class="loose">${p.gallery.map(it => {
      const span = Math.min(12, it.span || 12), col = Math.min(13 - span, it.col || 1);
      const mspan = it.text ? 12 : span >= 9 ? 12 : span >= 6 ? 11 : 9;
      const mcol = mspan === 12 ? 1 : (side++ % 2 ? 13 - mspan : 1);
      const style = `--col:${col};--span:${span};--mcol:${mcol};--mspan:${mspan};--shift:${it.shift || "0px"};--z:${it.z || (++zi)}`;
      const speed = !reduced && it.speed ? ` data-speed="${+it.speed}"` : "";
      if (it.text) return `<p class="ltext" style="${style}"${speed}>${esc(L(it.text))}</p>`;
      return fig(it, p, style, speed);
    }).join("")}</div>`;
  }

  function fig(it, p, style = "", speed = "") {
    // Scroll-played sequence: the frame sticks on screen and steps through the frames as the page scrolls
    if (it.scrub) {
      const n = +it.scrub.count, src = k => esc(it.scrub.frames.replace(/#+/, m => String(k + 1).padStart(m.length, "0")));
      return `<figure class="fig scrub" style="--n:${n};${it.ar ? `--ar:${esc(it.ar)};` : ""}${style}"><div class="scrub-stick">
        ${it.caption ? `<figcaption class="mono muted">${esc(L(it.caption))}</figcaption>` : ""}
        <div class="ph">${Array.from({ length: n }, (_, k) => `<img src="${src(k)}" alt="${esc(L(it.caption) || L(p.title))} — ${k + 1}/${n}"${k ? ` loading="lazy"` : ""}${k ? "" : ` class="on"`}>`).join("")}</div>
        <div class="scrub-ui mono"><span class="scrub-count">01 / ${pad(n)}</span><span class="scrub-bar"><i></i></span><span>${esc(T("scrollToPlay"))}</span></div>
      </div></figure>`;
    }
    if (it.spin) return `<figure class="fig spin" style="${it.ar ? `--ar:${esc(it.ar)};` : ""}${style}"${speed}><div class="ph">
        <canvas width="${it.spin.w || 960}" height="${it.spin.h || 540}" tabindex="0" role="slider" data-frames="${esc(it.spin.frames)}" data-count="${+it.spin.count}"
          aria-label="${esc(L(it.caption) || L(p.title))}" aria-valuemin="0" aria-valuemax="359" aria-valuenow="0" aria-valuetext="0°"></canvas>
        <div class="spin-ui mono"><span>${esc(T("dragToRotate"))}</span><span class="spin-deg">0°</span></div>
      </div>${it.caption ? `<figcaption class="mono muted">${esc(L(it.caption))}</figcaption>` : ""}</figure>`;
    return `<figure class="fig ${it.size || "full"}" style="${it.ar ? `--ar:${esc(it.ar)};` : ""}${style}"${speed}><div class="ph">${
      it.video ? `<video${it.poster ? ` poster="${esc(it.poster)}"` : ""} muted loop playsinline preload="none" aria-label="${esc(L(it.caption) || L(p.title))}">
          <source src="${esc(it.video)}" type="video/mp4">${it.webm ? `<source src="${esc(it.webm)}" type="video/webm">` : ""}</video>
        <div class="vctl mono"><button class="playpause" type="button">${esc(T("play"))}</button><button class="sound" type="button" aria-pressed="false">${esc(T("soundOff"))}</button></div>
        <button class="fsbtn" type="button" aria-label="${esc(T("fullscreen"))} — ${esc(L(it.caption) || L(p.title))}" title="${esc(T("fullscreen"))}">
          <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path d="M1 6V1h5M10 1h5v5M15 10v5h-5M6 15H1v-5" fill="none" stroke="currentColor" stroke-width="1.6"/></svg></button>`
      : it.src ? `<img src="${esc(it.src)}" alt="${esc(L(it.caption) || L(p.title))}" loading="lazy">` : cover(it.art, p)
    }</div>${it.caption ? `<figcaption class="mono muted">${esc(L(it.caption))}</figcaption>` : ""}</figure>`;
  }

  // Logo wall: every mark sits black on white so thirty clients read as one body of work.
  // One-colour files are used as masks, so the same file turns black, white or the brand colour.
  // Hover floods a tile with the brand colour; a click opens the logo full screen, with arrows, swipe and Esc.
  const mark = l => l.src
    ? `<span class="mark" role="img" aria-label="${esc(l.name)}" style="-webkit-mask-image:url('${esc(l.src)}');mask-image:url('${esc(l.src)}')"></span>`
    : `<span class="mark type" aria-hidden="true">${esc(l.name)}</span>`;
  function logoWall(p) {
    const tags = [...new Set(p.logos.map(l => L(l.tag)).filter(Boolean))];
    const filter = tags.length > 1 ? `<div class="seg mono logo-filter" role="group" aria-label="${esc(T("filter"))}">${["", ...tags].map(t =>
      `<button type="button" data-tag="${esc(t)}" aria-pressed="${!t}">${esc(t || T("all"))}</button>`).join("")}</div>` : "";
    return `${filter}<ul class="logos">${p.logos.map((l, k) => `<li data-tag="${esc(L(l.tag) || "")}" style="--k:${k};--lb:${esc(l.bg || "var(--blue)")};--li:${esc(l.ink || "#fff")}">
      <button type="button" class="logo" data-k="${k}" aria-label="${esc(l.name)}${l.year ? `, ${esc(l.year)}` : ""}">
        <span class="n mono">${pad(k + 1)}</span>${mark(l)}
      </button></li>`).join("")}</ul>
      <dialog class="logo-view" aria-label="${esc(L(p.title))}">
        <div class="lv-top mono"><span class="lv-count"></span><button type="button" class="lv-close">${esc(T("close"))} ✕</button></div>
        <div class="lv-mark"></div>
        <div class="lv-info"><p class="mono lv-meta"></p><p class="lv-note"></p></div>
        <div class="lv-nav mono"><button type="button" class="lv-prev">← ${esc(T("prev"))}</button><button type="button" class="lv-next">${esc(T("nextItem"))} →</button></div>
      </dialog>`;
  }
  function setupLogos(p) {
    const wall = caseEl.querySelector(".logos");
    if (!wall) return;
    const items = [...wall.children], dlg = caseEl.querySelector(".logo-view");
    const shown = () => items.filter(li => !li.hidden).map(li => +li.querySelector(".logo").dataset.k);
    let cur = 0;
    const show = k => {
      cur = k;
      const l = p.logos[k], list = shown();
      dlg.style.setProperty("--lb", l.bg || "var(--blue)"); dlg.style.setProperty("--li", l.ink || "#fff");
      dlg.querySelector(".lv-mark").innerHTML = l.color ? `<img src="${esc(l.color)}" alt="${esc(l.name)}">` : mark(l);
      dlg.querySelector(".lv-count").textContent = `${pad(list.indexOf(k) + 1)} / ${pad(list.length)}`;
      dlg.querySelector(".lv-meta").textContent = [l.year, L(l.tag)].filter(Boolean).join(" — ");
      dlg.querySelector(".lv-note").textContent = L(l.note) || "";
    };
    // The view grows out of the clicked tile and the logo flies from its tile to the middle; closing reverses it
    const tileOf = k => wall.querySelector(`.logo[data-k="${k}"]`);
    const clip = r => `inset(${r.top}px ${innerWidth - r.right}px ${innerHeight - r.bottom}px ${r.left}px)`;
    const fly = out => {
      const tile = tileOf(cur), m0 = tile.querySelector(".mark").getBoundingClientRect();
      const mEl = dlg.querySelector(".lv-mark > *"), m1 = mEl.getBoundingClientRect();
      const there = `translate(${m0.left + m0.width / 2 - m1.left - m1.width / 2}px, ${m0.top + m0.height / 2 - m1.top - m1.height / 2}px) scale(${Math.min(m0.width / m1.width, m0.height / m1.height)})`;
      const o = { duration: out ? 420 : 620, easing: "cubic-bezier(.11,.82,.39,.92)", fill: "both" };
      const fade = [{ opacity: 0 }, { opacity: 1 }];
      const anims = [
        dlg.animate(out ? [{ clipPath: "inset(0px)" }, { clipPath: clip(tile.getBoundingClientRect()) }] : [{ clipPath: clip(tile.getBoundingClientRect()) }, { clipPath: "inset(0px)" }], o),
        mEl.animate(out ? [{ transform: "none" }, { transform: there }] : [{ transform: there }, { transform: "none" }], o),
        ...[...dlg.querySelectorAll(".lv-top, .lv-info, .lv-nav")].map(el => el.animate(out ? fade.slice().reverse() : fade, { ...o, duration: out ? 160 : 400, delay: out ? 0 : 260 })),
      ];
      return Promise.all(anims.map(a => a.finished)).then(() => anims);
    };
    const open = k => {
      show(k);
      dlg.showModal ? dlg.showModal() : dlg.setAttribute("open", "");
      cursorTo(dlg);
      if (!reduced) fly(false).then(anims => anims.forEach(a => a.cancel()));
    };
    let closing = false;
    const shut = () => {
      if (closing) return;
      if (reduced) { dlg.close(); return; }
      closing = true;
      tileOf(cur).scrollIntoView({ block: "nearest", behavior: "instant" });
      fly(true).then(anims => { dlg.close(); anims.forEach(a => a.cancel()); closing = false; });
    };
    // Stepping slides the next logo in from the side it comes from
    const step = d => {
      const list = shown(); show(list[(list.indexOf(cur) + d + list.length) % list.length]);
      if (!reduced) dlg.querySelector(".lv-mark > *").animate([{ transform: `translateX(${d * 60}px)`, opacity: 0 }, { transform: "none", opacity: 1 }], { duration: 420, easing: "cubic-bezier(.11,.82,.39,.92)" });
    };
    wall.addEventListener("click", e => {
      const b = e.target.closest(".logo");
      if (b) open(+b.dataset.k);
    });
    dlg.querySelector(".lv-close").addEventListener("click", shut);
    dlg.addEventListener("cancel", e => { e.preventDefault(); shut(); });
    dlg.querySelector(".lv-prev").addEventListener("click", () => step(-1));
    dlg.querySelector(".lv-next").addEventListener("click", () => step(1));
    dlg.addEventListener("keydown", e => {
      if (e.key === "ArrowRight") { e.preventDefault(); step(1); }
      if (e.key === "ArrowLeft") { e.preventDefault(); step(-1); }
    });
    // Back on the wall, focus returns to the tile of the last logo seen
    dlg.addEventListener("close", () => { cursorTo(document.body); tileOf(cur).focus({ preventScroll: true }); });
    let x0 = null;
    dlg.addEventListener("pointerdown", e => { if (e.pointerType !== "mouse") x0 = e.clientX; });
    dlg.addEventListener("pointerup", e => { if (x0 !== null && Math.abs(e.clientX - x0) > 50) step(e.clientX < x0 ? 1 : -1); x0 = null; });
    caseEl.querySelectorAll(".logo-filter button").forEach(b => b.addEventListener("click", () => {
      caseEl.querySelectorAll(".logo-filter button").forEach(o => o.setAttribute("aria-pressed", String(o === b)));
      items.forEach(li => { li.hidden = !!b.dataset.tag && li.dataset.tag !== b.dataset.tag; });
    }));
  }

  function gallery(i, p) {
    if (p.layout === "logos" && p.logos) return logoWall(p);
    if (p.layout === "loose" && p.gallery && p.gallery.length) return looseGallery(p);
    // Real images: p.gallery = [{ src, size: "full" | "half" | "third" | "quarter", ar: "16/9", caption }].
    // Consecutive halves, thirds or quarters sit side by side in one row.
    const PER_ROW = { half: 2, third: 3, quarter: 4 };
    const items = p.gallery && p.gallery.length ? p.gallery
      : ["full", "half", "half", "full", "half", "half"].map((size, k) => ({ size, art: i + k + 1 }));
    const cell = it => fig(it, p);
    let html = "", row = [], rowSize = null;
    const flush = () => { if (row.length) html += `<div class="row-${rowSize}" style="--n:${PER_ROW[rowSize]}">${row.join("")}</div>`; row = []; rowSize = null; };
    items.forEach(it => {
      const per = PER_ROW[it.size];
      if (!per) { flush(); html += cell(it); return; }
      if (rowSize !== it.size) flush();
      rowSize = it.size; row.push(cell(it));
      if (row.length === per) flush();
    });
    flush();
    return html;
  }

  function renderCase(i) {
    const p = S.projects[i], next = S.projects[(i + 1) % S.projects.length];
    const meta = [[T("client"), L(p.client)], [T("year"), p.year], [T("scope"), L(p.scope)], [T("role"), L(p.role)]].filter(([, v]) => v);
    let n = 0;
    const title = L(p.title).split(" ").map(w => `<span class="w">${[...w].map(ch => `<span style="--y:${60 * ++n}px">${esc(ch)}</span>`).join("")}</span>`).join(`<span class="sp"></span>`);
    caseEl.innerHTML = `
      <div class="case-top mono"><a class="swap" href="#work"><span>${esc(T("allWork"))}</span><span>${esc(T("allWork"))}</span></a><span>(${String(i + 1).padStart(2, "0")} / ${String(S.projects.length).padStart(2, "0")})</span></div>
      <h1 class="case-title" aria-label="${esc(L(p.title))}"><span class="letters" aria-hidden="true">${title}</span></h1>
      <dl class="case-meta mono">${meta.map(([k, v]) => `<div><dt>${k}</dt><dd>${esc(v)}</dd></div>`).join("")}${
        p.link ? `<div class="live"><dt>${esc(T("live"))}</dt><dd><a class="swap" href="${esc(p.link.url)}" target="_blank" rel="noopener"><span>${esc(p.link.label)} ↗</span><span>${esc(p.link.label)} ↗</span></a></dd></div>` : ""}</dl>
      ${p.layout === "logos" ? "" : `<figure class="fig full cover-fig${p.hero === "bleed" ? " bleed" : ""}"${p.heroAr ? ` style="--ar:${esc(p.heroAr)}"` : ""}><div class="ph">${cover(i, p)}</div></figure>`}
      <section class="case-about">
        <span class="mono muted">${esc(T("about"))}</span>
        <p class="body">${esc(L(p.summary) || T("placeholderText"))}${tagFor(p)}</p>
      </section>
      ${p.stats ? `<ul class="case-stats">${p.stats.map(([n, label]) => `<li><b>${esc(n)}</b><span class="mono">${esc(L(label))}</span></li>`).join("")}</ul>` : ""}
      <div class="case-gallery">${gallery(i, p)}</div>
      <a class="case-next" href="${href(next)}">
        <span class="mono muted">${esc(T("next"))}</span>
        <span class="big"><span>${esc(L(next.title))}</span><span class="arr">↗</span></span>
      </a>`;
    document.title = `${L(p.title)} — ${S.name}`;
    observe();
    setupVideos();
    setupDrift();
    caseEl.querySelectorAll("canvas[data-frames]").forEach(setupSpin);
    setupLogos(p);
    setupScrub();
  }

  // 360° viewer: frames drawn on a canvas. Drag (mouse or touch) or arrow keys to turn; a flick keeps it spinning
  // and slows down. It turns slowly on its own until someone touches it, and only runs while on screen.
  function setupSpin(cv) {
    const count = +cv.dataset.count, pattern = cv.dataset.frames, ctx = cv.getContext("2d");
    const deg = cv.parentElement.querySelector(".spin-deg");
    const imgs = new Array(count);
    let pos = 0, vel = 0, touched = false, visible = false, raf = 0, last = -1, loading = false;
    const src = i => pattern.replace("###", String(i + 1).padStart(3, "0"));
    const load = () => {
      if (loading) return; loading = true;
      // first frame, then the rest from nearest to farthest
      const order = [...Array(count).keys()].sort((a, b) => Math.min(a, count - a) - Math.min(b, count - b));
      order.forEach(i => { const im = new Image(); im.decoding = "async"; im.onload = () => { if (i === Math.round(pos) % count) last = -1; }; im.src = src(i); imgs[i] = im; });
    };
    const draw = () => {
      const i = ((Math.round(pos) % count) + count) % count;
      if (i === last) return;
      // nearest loaded frame while the rest arrive
      let k = i;
      for (let d = 0; d < count; d++) { const a = imgs[(i + d) % count], b = imgs[(i - d + count) % count];
        if (a && a.complete && a.naturalWidth) { k = (i + d) % count; break; } if (b && b.complete && b.naturalWidth) { k = (i - d + count) % count; break; } }
      const im = imgs[k];
      if (!im || !im.complete || !im.naturalWidth) return;
      ctx.drawImage(im, 0, 0, cv.width, cv.height);
      last = i;
      const a = Math.round(i * 360 / count);
      deg.textContent = a + "°"; cv.setAttribute("aria-valuenow", a); cv.setAttribute("aria-valuetext", a + "°");
    };
    const tick = () => {
      raf = 0;
      if (!cv.isConnected || !visible) return;
      if (!down) {
        if (Math.abs(vel) > .01) { pos += vel; vel *= .94; }
        else if (!touched && !reduced) pos += .22;
      }
      draw();
      raf = requestAnimationFrame(tick);
    };
    const run = () => { if (!raf) raf = requestAnimationFrame(tick); };
    new IntersectionObserver(es => es.forEach(e => {
      visible = e.isIntersecting;
      if (visible) { load(); run(); }
    }), { rootMargin: "300px 0px" }).observe(cv);

    let down = false, sx = 0, sp = 0, lx = 0, lt = 0;
    const perPx = () => count / cv.clientWidth; // one full turn per width dragged
    cv.addEventListener("pointerdown", e => {
      down = true; touched = true; vel = 0; sx = lx = e.clientX; sp = pos; lt = performance.now();
      cv.setPointerCapture(e.pointerId); cv.classList.add("grabbing"); run();
    });
    cv.addEventListener("pointermove", e => {
      if (!down) return;
      const now = performance.now();
      pos = sp - (e.clientX - sx) * perPx();
      vel = -(e.clientX - lx) * perPx() / Math.max(1, (now - lt) / 16.7);
      lx = e.clientX; lt = now; draw();
    });
    const up = () => { down = false; cv.classList.remove("grabbing"); run(); };
    cv.addEventListener("pointerup", up); cv.addEventListener("pointercancel", up);
    cv.addEventListener("keydown", e => {
      const step = { ArrowRight: 2, ArrowLeft: -2, ArrowUp: 2, ArrowDown: -2, PageUp: count / 8, PageDown: -count / 8 }[e.key];
      if (e.key === "Home") { pos = 0; } else if (step === undefined) return; else pos += step;
      e.preventDefault(); touched = true; vel = 0; draw();
    });
  }

  // Scroll drift: items with data-speed move a little relative to the page, centred on the viewport
  let driftEls = [], driftRaf = 0;
  const phone = matchMedia("(max-width: 760px)");
  const drift = () => {
    driftRaf = 0;
    // Phones get a clean single column: no drift, so nothing slides over a caption
    if (phone.matches) { driftEls.forEach(el => { el.style.translate = ""; }); return; }
    const vh = innerHeight;
    driftEls.forEach(el => {
      const r = el.getBoundingClientRect();
      if (r.bottom < -200 || r.top > vh + 200) return;
      const off = (r.top + r.height / 2 - vh / 2) * +el.dataset.speed;
      el.style.translate = `0 ${off.toFixed(1)}px`;
    });
  };
  const queueDrift = () => { if (!driftRaf) driftRaf = requestAnimationFrame(drift); };
  addEventListener("scroll", queueDrift, { passive: true });
  addEventListener("resize", queueDrift);
  function setupDrift() { driftEls = [...caseEl.querySelectorAll("[data-speed]")]; queueDrift(); }

  // Scroll-played sequences: progress through the tall figure picks the frame
  let scrubEls = [], scrubRaf = 0;
  const scrub = () => {
    scrubRaf = 0;
    scrubEls.forEach(f => {
      const r = f.getBoundingClientRect(), stick = f.firstElementChild, imgs = f.querySelectorAll(".ph img");
      // 0 when the frame starts sticking, 1 when it lets go
      const prog = Math.min(1, Math.max(0, (parseFloat(getComputedStyle(stick).top) - r.top) / Math.max(1, r.height - stick.offsetHeight)));
      const k = Math.min(imgs.length - 1, Math.floor(prog * imgs.length));
      if (+f.dataset.k === k) { f.style.setProperty("--p", prog); return; }
      f.dataset.k = k;
      imgs.forEach((im, j) => im.classList.toggle("on", j === k));
      f.querySelector(".scrub-count").textContent = `${pad(k + 1)} / ${pad(imgs.length)}`;
      f.style.setProperty("--p", prog);
    });
  };
  const queueScrub = () => { if (scrubEls.length && !scrubRaf) scrubRaf = requestAnimationFrame(scrub); };
  addEventListener("scroll", queueScrub, { passive: true });
  addEventListener("resize", queueScrub);
  function setupScrub() { scrubEls = [...caseEl.querySelectorAll(".scrub")]; queueScrub(); }

  // Images settle from a slight zoom as they scroll into view (always visible, never hidden)
  const io = "IntersectionObserver" in window ? new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
  }), { rootMargin: "0px 0px -10% 0px" }) : null;
  const observe = () => caseEl.querySelectorAll(".fig, .logos").forEach(f => io ? io.observe(f) : f.classList.add("in"));

  // Films play muted while on screen and pause when they leave. Every film has Play/Pause and Sound;
  // sound is one film at a time. Pausing by hand keeps it paused until the visitor plays it again.
  function setupVideos() {
    const vids = [...caseEl.querySelectorAll("video")];
    if (!vids.length) return;
    const setSound = (v, on) => {
      v.muted = !on;
      const b = v.parentElement.querySelector(".sound");
      b.textContent = T(on ? "soundOn" : "soundOff"); b.setAttribute("aria-pressed", String(on));
    };
    const vio = "IntersectionObserver" in window && !reduced ? new IntersectionObserver(es => es.forEach(e => {
      const v = e.target;
      if (e.isIntersecting) { if (!v.dataset.held) v.play().catch(() => {}); } else if (fsEl() !== v) v.pause();
    }), { threshold: .4 }) : null;
    vids.forEach(v => {
      const pp = v.parentElement.querySelector(".playpause");
      const sync = () => { pp.textContent = T(v.paused ? "play" : "pause"); pp.setAttribute("aria-label", `${T(v.paused ? "play" : "pause")} — ${v.getAttribute("aria-label")}`); };
      v.addEventListener("play", sync); v.addEventListener("pause", sync); sync();
      const toggle = () => {
        if (v.paused) { delete v.dataset.held; v.play().catch(() => {}); }
        else { v.dataset.held = "1"; v.pause(); }
      };
      v.addEventListener("click", toggle);
      pp.addEventListener("click", toggle);
      v.parentElement.querySelector(".sound").addEventListener("click", () => {
        const turnOn = v.muted;
        vids.forEach(o => setSound(o, false));
        if (turnOn) { setSound(v, true); delete v.dataset.held; v.play().catch(() => {}); }
      });
      // Full screen: plays with sound and the browser's own controls; back on the page it returns to how it was
      v.parentElement.querySelector(".fsbtn").addEventListener("click", () => {
        v.dataset.fsSound = v.muted ? "" : "1";
        vids.forEach(o => { if (o !== v) setSound(o, false); });
        setSound(v, true); delete v.dataset.held; v.play().catch(() => {});
        if (v.requestFullscreen) v.requestFullscreen().catch(() => {});
        else if (v.webkitRequestFullscreen) v.webkitRequestFullscreen();
        else if (v.webkitEnterFullscreen) v.webkitEnterFullscreen(); // iPhone
      });
      const leave = () => { v.controls = false; if (!v.dataset.fsSound) setSound(v, false); };
      v.addEventListener("webkitendfullscreen", leave);
      v.addEventListener("fullscreenchange", () => { if (fsEl() === v) v.controls = true; else leave(); });
      v.addEventListener("webkitfullscreenchange", () => { if (fsEl() === v) v.controls = true; else leave(); });
      if (vio) vio.observe(v);
    });
  }
  const fsEl = () => document.fullscreenElement || document.webkitFullscreenElement || null;

  // Blue cut between pages, same language as the intro
  const cutTo = fn => {
    if (reduced) { fn(); return; }
    wipe.classList.add("on");
    setTimeout(() => { fn(); }, 160);
    setTimeout(() => wipe.classList.remove("on"), 340);
  };

  const openCase = (i, animate = true) => {
    const go = () => {
      renderCase(i);
      document.body.classList.add("in-case");
      scrollTo({ top: 0, behavior: "instant" });
    };
    animate ? cutTo(go) : go();
  };
  const closeCase = target => cutTo(() => {
    document.body.classList.remove("in-case");
    caseEl.innerHTML = ""; document.title = S.name;
    const el = $(target) || $("work");
    el.scrollIntoView({ behavior: "instant" });
  });
  const projectFromHash = () => S.projects.findIndex(p => location.hash === href(p));

  addEventListener("hashchange", () => {
    const i = projectFromHash();
    if (i >= 0) openCase(i);
    else if (document.body.classList.contains("in-case")) closeCase(location.hash.slice(1));
  });

  // ---------- Cursor: a blue ball that drags a thick, flat trail ----------
  // A chain of points, each easing toward the one ahead, drawn as one solid band as wide as the ball.
  // It stretches behind fast moves and pulls back into the ball when the mouse stops.
  // Mouse and trackpad only; touch screens and reduced motion keep the normal pointer.
  // Over links and buttons the ball grows; on blue (logo tiles, the close-up) it turns white.
  const ball = document.createElement("div"), trail = document.createElement("canvas");
  const cursorOn = matchMedia("(hover: hover) and (pointer: fine)").matches && !reduced;
  let onBlue = false;
  const cursorTo = host => { if (cursorOn) { host.append(trail, ball); onBlue = host !== document.body; } };
  if (cursorOn) {
    ball.className = "ball"; trail.className = "trail";
    ball.setAttribute("aria-hidden", "true"); trail.setAttribute("aria-hidden", "true");
    document.documentElement.classList.add("has-ball");
    cursorTo(document.body);
    const ctx = trail.getContext("2d"), N = 40, EASE = .72, W = 18;
    const ptr = { x: -100, y: -100 }, chain = Array.from({ length: N }, () => ({ x: -100, y: -100 }));
    let raf = 0, dpr = 1, white = false;
    const size = () => { dpr = Math.min(2, devicePixelRatio || 1); trail.width = innerWidth * dpr; trail.height = innerHeight * dpr; };
    size(); addEventListener("resize", size);
    const blue = getComputedStyle(document.documentElement).getPropertyValue("--blue").trim() || "#1a2bff";
    const draw = () => {
      let moving = false;
      chain.forEach((p, i) => {
        const t = i ? chain[i - 1] : ptr;
        p.x += (t.x - p.x) * EASE; p.y += (t.y - p.y) * EASE;
        if (Math.abs(t.x - p.x) + Math.abs(t.y - p.y) > .3) moving = true;
      });
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, innerWidth, innerHeight);
      ctx.lineCap = ctx.lineJoin = "round"; ctx.lineWidth = W; ctx.strokeStyle = white ? "#fff" : blue;
      ctx.beginPath(); ctx.moveTo(ptr.x, ptr.y);
      chain.forEach(p => ctx.lineTo(p.x, p.y));
      ctx.stroke();
      raf = moving ? requestAnimationFrame(draw) : 0;
    };
    addEventListener("pointermove", e => {
      if (e.pointerType !== "mouse") return;
      if (!ball.classList.contains("on")) chain.forEach(p => { p.x = e.clientX; p.y = e.clientY; });
      ptr.x = e.clientX; ptr.y = e.clientY;
      ball.style.translate = `${ptr.x}px ${ptr.y}px`;
      ball.classList.add("on");
      white = onBlue || !!e.target.closest(".logo");
      ball.classList.toggle("white", white);
      ball.classList.toggle("big", !!e.target.closest("a, button, [role=slider], .drop, video"));
      if (!raf) raf = requestAnimationFrame(draw);
    }, { passive: true });
    document.addEventListener("pointerleave", () => { ball.classList.remove("on"); ctx.clearRect(0, 0, innerWidth, innerHeight); });
    addEventListener("pointerdown", () => ball.classList.add("press"));
    addEventListener("pointerup", () => ball.classList.remove("press"));
  }

  const first = projectFromHash();
  if (first >= 0) { finish(); openCase(first, false); }
  else if (reduced || resumeY !== null) finish(); else play();
  if (resumeY !== null) {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    const back = () => requestAnimationFrame(() => scrollTo({ top: +resumeY, behavior: "instant" }));
    document.readyState === "complete" ? back() : addEventListener("load", back, { once: true });
  }
})();
