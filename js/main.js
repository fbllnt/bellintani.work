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
    timers.push(setTimeout(() => corners.classList.add("on"), 3900));
    timers.push(setTimeout(finish, 5200));
  };
  $("skip").onclick = finish;
  $("replay").onclick = () => { scrollTo({ top: 0 }); play(); };

  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ---------- Project pages ----------
  // Each job opens at #p-<slug>. The page is rendered in place; the hash keeps it linkable.
  const caseEl = $("case"), wipe = $("wipe");

  // Loose layout: each item sets its own place on a 12-column grid.
  // { col: 1-12, span: 1-12, shift: "8vh" (push down), speed: -0.1…0.1 (scroll drift) }.
  // Text lines can sit between images: { text: { en, pt }, col, span }.
  // On phones items keep their order and alternate left/right in wider spans.
  function looseGallery(p) {
    let side = 0;
    return `<div class="loose">${p.gallery.map(it => {
      const span = Math.min(12, it.span || 12), col = Math.min(13 - span, it.col || 1);
      const mspan = it.text ? 12 : span >= 9 ? 12 : span >= 6 ? 11 : 9;
      const mcol = mspan === 12 ? 1 : (side++ % 2 ? 13 - mspan : 1);
      const style = `--col:${col};--span:${span};--mcol:${mcol};--mspan:${mspan};--shift:${it.shift || "0px"}`;
      const speed = !reduced && it.speed ? ` data-speed="${+it.speed}"` : "";
      if (it.text) return `<p class="ltext" style="${style}"${speed}>${esc(L(it.text))}</p>`;
      return fig(it, p, style, speed);
    }).join("")}</div>`;
  }

  function fig(it, p, style = "", speed = "") {
    if (it.spin) return `<figure class="fig spin" style="${it.ar ? `--ar:${esc(it.ar)};` : ""}${style}"${speed}><div class="ph">
        <canvas width="${it.spin.w || 960}" height="${it.spin.h || 540}" tabindex="0" role="slider" data-frames="${esc(it.spin.frames)}" data-count="${+it.spin.count}"
          aria-label="${esc(L(it.caption) || L(p.title))}" aria-valuemin="0" aria-valuemax="359" aria-valuenow="0" aria-valuetext="0°"></canvas>
        <div class="spin-ui mono"><span>${esc(T("dragToRotate"))}</span><span class="spin-deg">0°</span></div>
      </div>${it.caption ? `<figcaption class="mono muted">${esc(L(it.caption))}</figcaption>` : ""}</figure>`;
    return `<figure class="fig ${it.size || "full"}" style="${it.ar ? `--ar:${esc(it.ar)};` : ""}${style}"${speed}><div class="ph">${
      it.video ? `<video${it.poster ? ` poster="${esc(it.poster)}"` : ""} muted loop playsinline preload="none" aria-label="${esc(L(it.caption) || L(p.title))}">
          <source src="${esc(it.video)}" type="video/mp4">${it.webm ? `<source src="${esc(it.webm)}" type="video/webm">` : ""}</video>
        <div class="vctl mono"><button class="playpause" type="button">${esc(T("play"))}</button><button class="sound" type="button" aria-pressed="false">${esc(T("soundOff"))}</button></div>`
      : it.src ? `<img src="${esc(it.src)}" alt="${esc(L(it.caption) || L(p.title))}" loading="lazy">` : cover(it.art, p)
    }</div>${it.caption ? `<figcaption class="mono muted">${esc(L(it.caption))}</figcaption>` : ""}</figure>`;
  }

  function gallery(i, p) {
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
      <figure class="fig full cover-fig${p.hero === "bleed" ? " bleed" : ""}"${p.heroAr ? ` style="--ar:${esc(p.heroAr)}"` : ""}><div class="ph">${cover(i, p)}</div></figure>
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

  // Images settle from a slight zoom as they scroll into view (always visible, never hidden)
  const io = "IntersectionObserver" in window ? new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
  }), { rootMargin: "0px 0px -10% 0px" }) : null;
  const observe = () => caseEl.querySelectorAll(".fig").forEach(f => io ? io.observe(f) : f.classList.add("in"));

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
      if (e.isIntersecting) { if (!v.dataset.held) v.play().catch(() => {}); } else v.pause();
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
      if (vio) vio.observe(v);
    });
  }

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

  const first = projectFromHash();
  if (first >= 0) { finish(); openCase(first, false); }
  else if (reduced || resumeY !== null) finish(); else play();
  if (resumeY !== null) {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    const back = () => requestAnimationFrame(() => scrollTo({ top: +resumeY, behavior: "instant" }));
    document.readyState === "complete" ? back() : addEventListener("load", back, { once: true });
  }
})();
