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

  // ---------- Projects hidden on the public site (Felipe, Oct 2026) ----------
  // bellintani.work shows no projects for now. Felipe sees the full site on any preview link
  // (Cloudflare <id>.<project>.pages.dev or <branch>-bellintani-work.<account>.workers.dev), or on the public address after
  // opening it once with ?full (saved in this browser; ?public undoes it).
  const q = new URLSearchParams(location.search);
  if (q.has("full")) store("full", "1");
  if (q.has("public")) store("full");
  const publicHost = /(^|\.)bellintani\.work$/.test(location.hostname) || location.hostname === "fbllnt.netlify.app"
    || /^[^.]+\.pages\.dev$/.test(location.hostname) || /^bellintani-work\.[^.]+\.workers\.dev$/.test(location.hostname);
  if (publicHost && read("full") !== "1") {
    S.projects = [];
    document.documentElement.classList.add("no-work");
  }

  // ---------- Work order (Felipe, Oct 27 2026) ----------
  // Seja ANTI always first, Logofolio always last; everything in between is shuffled on each visit.
  if (S.projects.length > 3) {
    const mid = S.projects.slice(1, -1);
    for (let i = mid.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [mid[i], mid[j]] = [mid[j], mid[i]]; }
    S.projects = [S.projects[0], ...mid, S.projects[S.projects.length - 1]];
  }

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
  // About as end credits: role on the left, name on the right, single lines centred
  const A = S.about;
  $("credits-intro").textContent = L(A.intro);
  const cell = (v, url) => url ? `<a class="swap" href="${esc(url)}"${/^https?:/.test(url) ? ` target="_blank" rel="noopener"` : ""}><span>${esc(L(v))}</span><span>${esc(L(v))}</span></a>` : esc(L(v));
  const isRow = r => r && typeof r === "object" && "name" in r;
  $("credits").innerHTML = A.credits.map(b => `<div class="cblock${b.flow ? " wrap" : ""}"><h3 class="mono">${esc(L(b.head))}${tagFor(b)}</h3>${b.rows.map(r =>
    isRow(r) ? `<p class="crow"><span class="mono">${esc(L(r.role))}${r.years ? `<i>${esc(L(r.years))}</i>` : ""}</span><b>${cell(r.name, r.url)}</b></p>`
      : `<p class="crow solo">${cell(r)}</p>`).join("")}</div>`).join("")
    + `<div class="cend"><b>${esc(S.name)}<sup>®</sup></b><span class="mono">${esc(L(A.end))}</span><span class="mono muted">©Copyright 20${esc(S.year)}</span></div>`;
  // Slugs come from the English title so links stay the same in both languages
  S.projects.forEach(p => { p.slug = p.slug || String(p.title.en || p.title).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""); });
  const href = p => `#p-${p.slug}`;

  // ---------- Work: index + grid ----------
  const index = $("index"), grid = $("grid");
  index.innerHTML = S.projects.map((p, i) => `<li><a href="${href(p)}" data-i="${i}">
    <span class="bar" aria-hidden="true"></span><span class="mono">(${i + 1})</span><span class="t"><span class="ti">${esc(L(p.title))}</span></span><span class="k mono">${esc(L(p.scope))}${p.year ? ` — ${esc(p.year)}` : ""}${tagFor(p)}</span></a></li>`).join("");
  grid.innerHTML = S.projects.map((p, i) => `<a class="card" href="${href(p)}"><div class="ph">${cover(i, p)}</div>
    <div class="row"><b>${esc(L(p.title))}</b><span class="mono">(${i + 1})</span></div>
    <span class="mono muted">${esc(L(p.scope))}${p.year ? ` — ${esc(p.year)}` : ""}${tagFor(p)}</span></a>`).join("");

  const works = document.querySelector(".works"), vIndex = $("view-index"), vGrid = $("view-grid");
  const setView = asGrid => {
    works.classList.toggle("as-grid", asGrid);
    vIndex.setAttribute("aria-pressed", !asGrid); vGrid.setAttribute("aria-pressed", asGrid);
    try { localStorage.setItem("view", asGrid ? "grid" : "index"); } catch (e) {}
  };
  vIndex.onclick = () => setView(false); vGrid.onclick = () => setView(true);
  try { if (localStorage.getItem("view") === "grid") setView(true); } catch (e) {}

  // ---------- Optical left edge ----------
  // Big type starts where its ink starts, not where its side bearing starts, so a huge B or D lines up with the
  // small copy above and below it on the page margin. The bearing is measured once per glyph, in em, so it scales.
  const INK = ".name, .loader .ln:not(.boom), .tag b, .h2, .index .t, .card .row b, .big, .case-title, .chap-h, .ltext, .swap-ba b, .case-stats b, .credits-intro, .cend b";
  const inkCache = {}, inkCtx = document.createElement("canvas").getContext("2d");
  const inkAlign = (root = document) => root.querySelectorAll(INK).forEach(el => {
    const cs = getComputedStyle(el.querySelector(".word > span, .w > span, .ti") || el);
    let ch = el.textContent.trim()[0];
    if (!ch) return;
    if (cs.textTransform === "uppercase") ch = ch.toUpperCase();
    const key = `${cs.fontWeight} ${cs.fontFamily} ${ch}`;
    if (!(key in inkCache)) { inkCtx.font = `${cs.fontWeight} 100px ${cs.fontFamily}`; inkCache[key] = -inkCtx.measureText(ch).actualBoundingBoxLeft / 100; }
    el.style.marginLeft = inkCache[key] > 0 ? `${(-inkCache[key]).toFixed(3)}em` : "";
  });
  (document.fonts ? document.fonts.load("700 100px Figtree").then(() => document.fonts.ready) : Promise.resolve()).then(() => inkAlign());

  // ---------- Intro ----------
  const stage = $("top"), corners = $("corners");
  // Lines of words cut on one by one (slow, like a lyric), then loaderBig lands huge and bursts to reveal the site
  let d = 0.2;
  const loaderEl = $("loader");
  loaderEl.innerHTML = L(S.loader).map((line, li) => `<div class="ln">${line.map(w => {
    const html = `<span${w[0] === "*" ? ` class="blue"` : ""} style="--d:${d.toFixed(2)}s">${esc(w.replace(/^\*/, ""))}</span>`;
    d += 0.28; return html; }).join(" ")}</div>`).join("")
    + (S.loaderBig ? `<div class="ln boom"><span style="--d:${(d + 0.25).toFixed(2)}s">${esc(L(S.loaderBig))}</span></div>` : "");
  // The big line fills the width and bursts from the middle of its first letter's left stem, so the screen goes solid blue
  const fitBig = () => {
    const big = loaderEl.querySelector(".boom span");
    if (!big || !loaderEl.offsetParent) return;
    // Fit by ink, not by the text box: the ink of the line ends with the same white margin on the right as on the left
    big.style.fontSize = "100px";
    const ls = getComputedStyle(loaderEl), txt = big.textContent.toUpperCase(), c0 = document.createElement("canvas").getContext("2d");
    c0.font = `${ls.fontWeight} 100px ${ls.fontFamily}`;
    const f = c0.measureText(txt[0]), l = c0.measureText(txt[txt.length - 1]);
    const inkL = -f.actualBoundingBoxLeft, inkR = l.actualBoundingBoxRight - l.width + 5; // + the trailing -.05em tracking
    const avail = loaderEl.clientWidth - parseFloat(ls.paddingLeft) - parseFloat(ls.paddingRight);
    // The big M's ink lines up with the lyric lines' first letter, and the same margin is left after the E
    const lineInk = 0; // the lyric lines are pulled onto the margin by their ink (inkAlign), so the M's ink starts on the margin too
    const size = Math.min(100 * (avail - 2 * lineInk) / (big.offsetWidth - inkL + inkR), innerHeight * .4);
    big.style.fontSize = size + "px";
    big.style.marginLeft = (lineInk - inkL * size / 100).toFixed(1) + "px";
    // Find the stem: draw the first letter and take the first solid run on its middle row
    const cs = getComputedStyle(big), cv = document.createElement("canvas"), cx = cv.getContext("2d");
    const ch = big.textContent.trim()[0].toUpperCase();
    cx.font = `${cs.fontWeight} ${size}px ${cs.fontFamily}`;
    const m = cx.measureText(ch), w = Math.ceil(m.width + size * .2), asc = m.actualBoundingBoxAscent;
    cv.width = w; cv.height = Math.ceil(asc + 4);
    cx.font = `${cs.fontWeight} ${size}px ${cs.fontFamily}`; cx.textBaseline = "alphabetic"; cx.fillText(ch, 0, asc + 2);
    const row = Math.round(asc / 2 + 2), px = cx.getImageData(0, row, w, 1).data;
    let x0 = -1, x1 = -1;
    for (let x = 0; x < w; x++) { const on = px[x * 4 + 3] > 200; if (on && x0 < 0) x0 = x; if (!on && x0 >= 0) { x1 = x; break; } }
    const r = big.getBoundingClientRect(), range = document.createRange();
    range.setStart(big.firstChild, big.textContent.indexOf(big.textContent.trim()[0])); range.setEnd(range.startContainer, range.startOffset + 1);
    const g = range.getBoundingClientRect();
    // Baseline inside the line box: half-leading plus the font's ascent; the middle row is half the cap height above it
    const lh = parseFloat(cs.lineHeight), base = (lh - m.fontBoundingBoxAscent - m.fontBoundingBoxDescent) / 2 + m.fontBoundingBoxAscent;
    const ox = g.left - r.left + (x0 >= 0 ? (x0 + (x1 > 0 ? x1 : x0 + 1)) / 2 : g.width / 2);
    const oy = base - asc / 2;
    big.style.transformOrigin = `${ox.toFixed(1)}px ${oy.toFixed(1)}px`;
  };
  // Measure only once Figtree Black is in: fonts.ready can resolve before the hidden intro asks for it
  (document.fonts ? document.fonts.load("700 100px Figtree").then(() => document.fonts.ready) : Promise.resolve()).then(fitBig, fitBig);
  addEventListener("resize", fitBig);

  // Name: every letter takes the same time but starts 80px further down, so they land as a wave
  const nameEl = $("name");
  nameEl.setAttribute("aria-label", S.name);
  const words = S.name.split(" ");
  let n = 0;
  nameEl.innerHTML = words.map((w, wi) => `<span class="word" aria-hidden="true">${
    [...w].map(ch => `<span style="--y:${80 * ++n}px">${esc(ch)}</span>`).join("")
    + (wi === words.length - 1 ? `<span class="reg" style="--y:${80 * ++n}px">®</span>` : "")
  }</span>`).join(`<span class="sp" aria-hidden="true"></span>`);

  // Fit the name to the stage width (or the longest word, if it has to wrap).
  // Skipped while the home is hidden behind a project page (nothing to measure); refitted on the way back.
  const fit = () => {
    if (!nameEl.offsetParent) return;
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
    if (jingle) timers.push(setTimeout(jingleGo, jingleAt()));
    timers.push(setTimeout(() => corners.classList.add("on"), 4650));
    timers.push(setTimeout(finish, 5950));
  };
  $("skip").onclick = () => { finish(); if (jingle) jingle.pause(); };

  // Intro jingle (Felipe, Oct 27 2026): his clip of the song plays as the huge MY HOUSE lands. Browsers block sound
  // until the visitor clicks or taps, so it plays on its own only where allowed; otherwise "♪ Sound on" replays
  // the intro with sound (so it stays in sync), and so does "↻ Replay intro".
  const introBtn = $("intro-sound");
  let jingle = null, userOff = false, blocked = false;
  // When MY HOUSE cuts on (its --d), minus the clip's short lead-in
  const jingleAt = () => { const b = loaderEl.querySelector(".boom span"); return Math.max(0, (b ? parseFloat(b.style.getPropertyValue("--d")) : 2.4) - .2) * 1000; };
  const markJingle = () => { const on = !userOff && !blocked; introBtn.textContent = T(on ? "introMute" : "introSound"); introBtn.setAttribute("aria-pressed", String(on)); };
  const jingleGo = () => {
    if (userOff) return;
    jingle.currentTime = 0;
    jingle.play().then(() => { blocked = false; markJingle(); }, () => { blocked = true; markJingle(); });
  };
  // A muted play inside the click lets the delayed play through on Safari and iPhone too
  const unlockJingle = () => {
    if (!jingle) return;
    blocked = false; jingle.muted = true;
    jingle.play().then(() => { jingle.pause(); jingle.muted = false; }, () => { jingle.muted = false; });
  };
  if (S.introAudio) {
    jingle = new Audio(S.introAudio); jingle.preload = "auto";
    introBtn.hidden = false; markJingle();
    introBtn.onclick = () => {
      if (!userOff && !blocked) { userOff = true; jingle.pause(); markJingle(); return; }
      userOff = false; unlockJingle(); markJingle(); play();
    };
  }
  // Scroll cue: jumps to the work list and hides once the visitor has started scrolling
  const cue = $("cue");
  if (!S.projects.length) { cue.href = "#services"; cue.setAttribute("aria-label", T("services")); }
  cue.addEventListener("click", e => { e.preventDefault(); $(S.projects.length ? "work" : "services").scrollIntoView({ behavior: reduced ? "auto" : "smooth" }); });
  const cueCheck = () => cue.classList.toggle("gone", scrollY > 40);
  addEventListener("scroll", cueCheck, { passive: true }); cueCheck();
  $("replay").onclick = () => { scrollTo({ top: 0 }); unlockJingle(); play(); };

  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  // Corners step aside while reading (Oct 27 2026 review): scrolling down past the first screen hides the bottom
  // corners (on phones all four), scrolling up or reaching the top brings them back, so they never sit on the work
  let lastY = scrollY;
  const calmCheck = () => {
    const y = scrollY, dy = y - lastY;
    if (Math.abs(dy) < 6) return;
    corners.classList.toggle("calm", dy > 0 && y > innerHeight * .6);
    lastY = y;
  };
  addEventListener("scroll", calmCheck, { passive: true });

  // ---------- Project pages ----------
  // Each job opens at #p-<slug>. The page is rendered in place; the hash keeps it linkable.
  const caseEl = $("case"), wipe = $("wipe");

  // Loose layout: each item sets its own place on a 12-column grid.
  // { col: 1-12, span: 1-12, shift: "8vh" (push down) or "-14vh" (pull up and overlap the item before),
  //   nudge: "-4vw" (slide sideways to overlap a neighbour in the same row), tight: true (sit close to the row
  //   above, for a set of the same kind of content), speed: -0.1…0.1 (scroll drift),
  //   z: stacking order (default: later items on top) }.
  // Text lines can sit between images: { text: { en, pt }, col, span }.
  // A chapter opens a part of the story: { chapter: { en, pt } ("01 · Intro"), kicker, head, text, col, span }.
  // A row of same-height items (posters, vertical films): { strip: [{ src | video…, ar }, …], col, span }.
  // Chapter extras: *words* in head show in the accent colour; pills: ["Naming", "*Growth"] lists the scope (* = highlighted).
  // Before → after (a rename): { swap: { before, after } }. A word set large with its dictionary entry: { word: { glyph, lang, head, note } }.
  // A row of pieces (a social carousel): { marquee: [{ src, ar }, …], caption }. It stands still and wraps,
  // so every piece is seen whole (never cropped at the edges).
  // Layout rule (Felipe, Oct 26 2026): content always fills the width, with one gap (--gap) between everything.
  // Consecutive images and films become justified rows: each takes width in proportion to its own ratio, so a row
  // shares one height, runs margin to margin and nothing is cropped. A new row starts at `col: 1`, at `span` 9+ or
  // when the spans pass 12; `shift`, `nudge` and `tight` are ignored. Every other block runs full width.
  // On phones a row of landscape pieces stacks one per line; a row of portraits stays side by side.
  function looseGallery(p) {
    const ratio = ar => { const [w, h] = String(ar || "16/9").split("/").map(Number); return w / (h || 1); };
    const isMedia = it => ((it.src || it.video || it.tunnel) && !it.scrub && !it.spin) || (it.todo && it.span < 12);
    let html = "", row = [], used = 0;
    const flush = () => {
      if (!row.length) return;
      const sum = row.reduce((a, it) => a + ratio(it.ar), 0);
      html += `<div class="jrow${row.length > 1 && sum > 2.2 ? " stack-m" : ""}" style="--sum:${sum.toFixed(4)};--n:${row.length}">${
        row.map(it => it.todo ? block(it, p, `--r:${ratio(it.ar).toFixed(4)}`) : fig(it, p, `--r:${ratio(it.ar).toFixed(4)}`)).join("")}</div>`;
      row = []; used = 0;
    };
    p.gallery.forEach(it => {
      if (!isMedia(it)) { flush(); html += block(it, p); return; }
      const span = Math.min(12, it.span || 12);
      if (row.length && (it.col === 1 || span >= 9 || used + span > 12)) flush();
      row.push(it); used += span;
      if (span >= 9) flush();
    });
    flush();
    return `<div class="loose">${html}</div>`;
  }

  // A full-width block in the loose gallery: chapter, text, rename, word, marquee, flip, strip, embed, placeholder,
  // or a scroll sequence / 360° viewer
  function block(it, p, style = "") {
    const speed = "";
    if (it.chapter) return `<section class="chap" style="${style}">
      <p class="chap-k mono"><span>${esc(L(it.chapter))}</span>${it.kicker ? `<span class="muted">${esc(L(it.kicker))}</span>` : ""}</p>
      <h2 class="chap-h">${esc(L(it.head)).replace(/\*(.+?)\*/g, "<em>$1</em>")}</h2>${it.text ? `<p class="body">${esc(L(it.text))}</p>` : ""}${
        it.pills ? `<ul class="pills mono">${it.pills.map(x => { const t = L(x); return `<li${t[0] === "*" ? ` class="on"` : ""}>${esc(t.replace(/^\*/, ""))}</li>`; }).join("")}</ul>` : ""}</section>`;
    // Something the story still needs (an image, a fact, a section): a dashed box saying what is missing
    if (it.todo) return `<div class="todo${style ? " fig" : ""}" style="${style}${it.ar ? `;--ar:${esc(it.ar)}` : ""}"><p class="mono"><b>${esc(T("missing"))}</b> ${esc(L(it.todo))}</p></div>`;
    // A live page running inside the case, at desktop size scaled to fit; the print sits underneath while it loads,
    // and a click anywhere opens the page itself: { embed: { url, w, h }, poster, caption }
    if (it.embed) { const { url, src = url, w = 1440, h = 900 } = it.embed;
      return `<figure class="fig embed" style="--ar:${w}/${h};${style}">${it.caption ? `<figcaption class="mono muted">${esc(L(it.caption))}</figcaption>` : ""}<div class="ph">
        ${it.poster ? `<img src="${esc(it.poster)}" alt="" loading="lazy">` : ""}
        <iframe src="${esc(src)}" width="${w}" height="${h}" loading="lazy" tabindex="-1" aria-hidden="true" style="--w:${w}"></iframe>
        <a class="fig-link" href="${esc(url)}" target="_blank" rel="noopener" aria-label="${esc(T("openSite"))}: ${esc(url)}"><span class="fig-open mono">${esc(T("openSite"))} ↗</span></a></div></figure>`; }
    if (it.swap) return `<div class="swap-ba" style="${style}">${[["before", "old"], ["after", "new"]].map(([k, c]) =>
      `<p><span class="mono muted">${esc(T(k))}</span><b class="${c}">${esc(L(it.swap[k]))}</b></p>`).join("")}</div>`;
    if (it.word) return `<div class="word-def" style="${style}"><p class="word-big" style="--n:${[...it.word.glyph].length}"${it.word.lang ? ` lang="${esc(it.word.lang)}"` : ""} aria-hidden="true">${esc(it.word.glyph)}</p>
      <p class="word-entry"><b${it.word.lang ? ` lang="${esc(it.word.lang)}"` : ""}>${esc(L(it.word.head))}</b><span class="mono">${esc(L(it.word.note))}</span></p></div>`;
    if (it.marquee) { const imgs = it.marquee.map(m => { const [w, h] = String(m.ar || "1").split("/").map(Number); return `<img src="${esc(m.src)}" width="${w}" height="${h || 1}" alt="" loading="lazy">`; }).join("");
      return `<figure class="fig marquee-fig" style="${style}">${it.caption ? `<figcaption class="mono muted">${esc(L(it.caption))}</figcaption>` : ""}
        <div class="marquee" role="img" aria-label="${esc(L(it.caption) || L(p.title))}"><div class="marquee-track">${imgs}</div></div></figure>`; }
    if (it.text) return `<p class="ltext" style="${style}"${speed}>${esc(L(it.text))}</p>`;
    // Flip: one item large with the whole set as thumbnails below; a thumbnail, the large image or the arrow keys turn the page
    if (it.flip) { const f = it.flip[0];
      return `<div class="flip" style="${style}${it.cols ? `;--n:${+it.cols}` : ""}"${speed}>${fig({ ...f, caption: undefined }, p, `--ar:${esc(f.ar)}`)}
        <p class="flip-cap mono muted" aria-live="polite">${esc(L(f.caption) || "")}</p>
        <div class="flip-thumbs" role="group">${it.flip.map((t, k) => `<button type="button" aria-pressed="${!k}" data-k="${k}" aria-label="${esc(L(t.caption) || "")}"><img src="${esc(t.src)}" alt="" loading="lazy"></button>`).join("")}</div></div>`; }
    // Strip: a row of items sharing one height (each takes width in proportion to its ratio), like posters on a wall
    // `narrow: true` sets the strip in a little from both sides (desktop), for small process rows
    if (it.strip) return `<div class="strip${it.narrow ? " narrow" : ""}" style="${style}"${speed}>${it.strip.map(s => { const [w, h] = String(s.ar || "1").split("/").map(Number);
      return fig(s, p, `--sar:${(w / (h || 1)).toFixed(4)}`); }).join("")}</div>`;
    return fig(it, p);
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
    // Type tunnel: a word in outline repeated in depth, drawn live (see setupTunnel). The still sits underneath until it starts.
    if (it.tunnel) return `<figure class="fig full tunnel" style="${it.ar ? `--ar:${esc(it.ar)};` : ""}${style}"><div class="ph">
        ${it.poster ? `<img src="${esc(it.poster)}" alt="" loading="lazy">` : ""}
        <canvas data-tunnel="${esc(it.tunnel.word)}" data-bg="${esc(it.tunnel.bg || "#000")}" role="img" aria-label="${esc(L(it.caption) || L(p.title))}"></canvas>
      </div>${it.caption ? `<figcaption class="mono muted">${esc(L(it.caption))}</figcaption>` : ""}</figure>`;
    return `<figure class="fig ${it.size || "full"}" style="${it.ar ? `--ar:${esc(it.ar)};` : ""}${style}"${speed}><div class="ph">${
      it.video ? `<video${it.poster ? ` poster="${esc(it.poster)}"` : ""}${it.offset ? ` data-offset="${+it.offset}"` : ""} muted loop playsinline preload="none" aria-label="${esc(L(it.caption) || L(p.title))}">
          <source src="${esc(it.video)}" type="video/mp4">${it.webm ? `<source src="${esc(it.webm)}" type="video/webm">` : ""}</video>
        <div class="vctl mono"><button class="playpause" type="button">${esc(T("play"))}</button><button class="sound" type="button" aria-pressed="false">${esc(T("soundOff"))}</button><button class="fsbtn" type="button" aria-label="${esc(T("fullscreen"))} — ${esc(L(it.caption) || L(p.title))}" title="${esc(T("fullscreen"))}">
          <svg viewBox="0 0 16 16" width="12" height="12" aria-hidden="true"><path d="M1 6V1h5M10 1h5v5M15 10v5h-5M6 15H1v-5" fill="none" stroke="currentColor" stroke-width="1.6"/></svg></button></div>`
      // `href`: the image is a print of a live page; clicking opens that page in a new tab
      : it.src && it.href ? `<a class="fig-link" href="${esc(it.href)}" target="_blank" rel="noopener"><img src="${esc(it.src)}" alt="${esc(L(it.caption) || L(p.title))}" loading="lazy"><span class="fig-open mono">${esc(T("openSite"))} ↗</span></a>`
      : it.src ? `<img src="${esc(it.src)}" alt="${esc(L(it.caption) || L(p.title))}" loading="lazy">` : cover(it.art, p)
    }</div>${it.caption ? `<figcaption class="mono muted">${esc(L(it.caption))}</figcaption>` : ""}</figure>`;
  }

  // Logo wall: every mark sits black on white so thirty clients read as one body of work.
  // One-colour files are used as masks, so the same file turns black, white or the brand colour.
  // Hover floods a tile with the brand colour; a click opens the logo full screen, with arrows, swipe and Esc.
  // Optical balance: each file is measured once (the box its ink actually fills, and how dense that ink is).
  // Every mark gets about the same ink box area, larger for light, open marks and smaller for heavy ones, so a
  // wide wordmark, a square badge and a thin script read at a similar weight. Wide marks stop at 80% of the
  // tile, tall ones at 64%, then `size` shrinks them all alike (Felipe: 15% smaller overall). `scale` in
  // content.js is a last correction by eye.
  const LOGO = { area: .24, dense: .35, weight: .45, compact: .3, maxW: .8, maxH: .64, size: .85 };
  const markWidth = l => {
    const ia = l._ia || l._ar, d = Math.max(.08, l._d || LOGO.dense);
    // Square and round marks (badges, seals, symbols) leave their box's corners empty, so they get a bit more
    const compact = 1 + LOGO.compact * Math.min(ia, 1 / ia);
    let iw = Math.sqrt(LOGO.area * compact * (LOGO.dense / d) ** LOGO.weight * ia);
    iw = Math.min(iw, LOGO.maxW, LOGO.maxH * ia) * LOGO.size * (l.scale || 1);
    return iw / (l._fx || 1);
  };
  const measureLogo = (l, im) => {
    const k = Math.min(1, 256 / Math.max(im.naturalWidth, im.naturalHeight)), w = Math.max(1, Math.round(im.naturalWidth * k)), h = Math.max(1, Math.round(im.naturalHeight * k));
    l._ar = im.naturalWidth / im.naturalHeight;
    try {
      const c = document.createElement("canvas"); c.width = w; c.height = h;
      const g = c.getContext("2d", { willReadFrequently: true }); g.drawImage(im, 0, 0, w, h);
      const a = g.getImageData(0, 0, w, h).data;
      let x0 = w, y0 = h, x1 = -1, y1 = -1, sum = 0;
      for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
        const v = a[(y * w + x) * 4 + 3];
        if (v > 8) { sum += v; if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y; }
      }
      if (x1 < 0) return;
      const bw = x1 - x0 + 1, bh = y1 - y0 + 1;
      l._fx = bw / w; l._ia = bw / bh * (im.naturalWidth / w) / (im.naturalHeight / h); l._d = sum / 255 / (bw * bh);
    } catch (e) { /* unreadable pixels: fall back to the file's own proportions */ }
  };
  const markSize = l => l._ar ? `--mw:${markWidth(l).toFixed(3)};--ar:${l._ar.toFixed(3)};` : "";
  const mark = l => l.src
    ? `<span class="mark" role="img" aria-label="${esc(l.name)}" style="${markSize(l)}-webkit-mask-image:url('${esc(l.src)}');mask-image:url('${esc(l.src)}')"></span>`
    : `<span class="mark type" aria-hidden="true">${esc(l.name)}</span>`;
  // Real logos come in a fresh order on every visit; placeholders stay at the end
  const shuffle = a => { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  function logoWall(p) {
    const tags = [...new Set(p.logos.map(l => L(l.tag)).filter(Boolean))];
    const filter = tags.length > 1 ? `<div class="seg mono logo-filter" role="group" aria-label="${esc(T("filter"))}">${["", ...tags].map(t =>
      `<button type="button" data-tag="${esc(t)}" aria-pressed="${!t}">${esc(t || T("all"))}</button>`).join("")}</div>` : "";
    const idx = p.logos.map((_, k) => k);
    const order = shuffle(idx.filter(k => p.logos[k].src)).concat(idx.filter(k => !p.logos[k].src));
    return `${filter}<ul class="logos">${order.map((k, n) => { const l = p.logos[k]; return `<li data-tag="${esc(L(l.tag) || "")}" style="--k:${n};--lb:${esc(l.bg || "var(--blue)")};--li:${esc(l.ink || "#fff")}">
      <button type="button" class="logo" data-k="${k}" aria-label="${esc(l.name)}${l.year ? `, ${esc(l.year)}` : ""}">
        <span class="n mono">${pad(n + 1)}</span>${mark(l)}
      </button></li>`; }).join("")}</ul>
      <dialog class="logo-view" aria-label="${esc(L(p.title))}">
        <div class="lv-top mono"><span class="lv-count"></span><button type="button" class="lv-close">${esc(T("close"))} ✕</button></div>
        <div class="lv-mark"></div>
        <div class="lv-info"><p class="mono lv-meta"></p><p class="lv-note"></p></div>
        <div class="lv-nav mono"><button type="button" class="lv-prev">← ${esc(T("prev"))}</button><span class="lv-hint">${esc(T(matchMedia("(hover: hover) and (pointer: fine)").matches ? "logoHint" : "logoHintTouch"))}</span><button type="button" class="lv-next">${esc(T("nextItem"))} →</button></div>
      </dialog>`;
  }
  function setupLogos(p) {
    const wall = caseEl.querySelector(".logos");
    if (!wall) return;
    const items = [...wall.children], dlg = caseEl.querySelector(".logo-view");
    const shown = () => items.filter(li => !li.hidden).map(li => +li.querySelector(".logo").dataset.k);
    let cur = 0;
    // Measure each file once, then size its mark
    p.logos.forEach((l, k) => {
      if (!l.src) return;
      const apply = () => { const m = wall.querySelector(`.logo[data-k="${k}"] .mark`); m.style.setProperty("--mw", markWidth(l).toFixed(3)); m.style.setProperty("--ar", l._ar.toFixed(3)); };
      if (l._ar) return apply();
      const im = new Image();
      im.onload = () => { measureLogo(l, im); apply(); };
      im.src = l.src;
    });
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
    let x0 = null, swiped = false;
    dlg.addEventListener("pointerdown", e => { swiped = false; if (e.pointerType !== "mouse") x0 = e.clientX; });
    dlg.addEventListener("pointerup", e => { if (x0 !== null && Math.abs(e.clientX - x0) > 50) { swiped = true; step(e.clientX < x0 ? 1 : -1); } x0 = null; });
    // A second click on the big logo (anywhere in the middle band) sends it back to its tile; a swipe doesn't count
    dlg.querySelector(".lv-mark").addEventListener("click", () => { if (!swiped) shut(); });
    caseEl.querySelectorAll(".logo-filter button").forEach(b => b.addEventListener("click", () => {
      caseEl.querySelectorAll(".logo-filter button").forEach(o => o.setAttribute("aria-pressed", String(o === b)));
      items.forEach(li => { li.hidden = !!b.dataset.tag && li.dataset.tag !== b.dataset.tag; });
    }));
  }

  // Photo library (Lomography): one film roll per camera. Each roll is a horizontal strip of same-height frames,
  // two or three in view, moved with the arrows, a mouse drag or a swipe. Photos are never opened full screen.
  // Each photo: { src, ar: "w/h", camera, caption: { en, pt } }. Rolls follow the order cameras first appear in p.photos.
  function lomoGallery(p) {
    const cams = [...new Set(p.photos.map(ph => ph.camera || ""))];
    return `<div class="rolls">${cams.map(c => { const list = p.photos.filter(ph => (ph.camera || "") === c);
      return `<section class="film-roll" aria-label="${esc(c || L(p.title))}">
        <header class="roll-head mono"><h3>${esc(c || L(p.title))}</h3><span class="roll-count">${pad(list.length)}</span>
          <span class="roll-hint" aria-hidden="true">← ${esc(T("drag"))} →</span>
          <span class="roll-arrows"><button type="button" class="roll-prev" aria-label="${esc(T("prev"))}">←</button><button type="button" class="roll-next" aria-label="${esc(T("nextItem"))}">→</button></span></header>
        <div class="roll-track" tabindex="0">${list.map((ph, k) => { const [w, h] = String(ph.ar || "3/2").split("/").map(Number);
          return `<figure class="roll-frame" style="--ar:${(w / h).toFixed(4)}"><img src="${esc(ph.src)}" alt="${esc(L(ph.caption) || `${L(p.title)}, ${c}`)}" loading="lazy" draggable="false"><figcaption class="mono">${pad(k + 1)}</figcaption></figure>`; }).join("")}</div>
        <div class="roll-bar" aria-hidden="true"><i></i></div>
      </section>`; }).join("")}</div>`;
  }
  function setupFlips(p) {
    let i = 0;
    p.gallery.forEach(it => { if (!it.flip) return;
      const box = caseEl.querySelectorAll(".flip")[i++], img = box.querySelector(".fig .ph > img"), cap = box.querySelector(".flip-cap"), btns = [...box.querySelectorAll(".flip-thumbs button")];
      let cur = 0;
      const go = k => {
        k = (k + it.flip.length) % it.flip.length; if (k === cur) return;
        const d = k > cur ? 1 : -1; cur = k;
        const set = () => { img.src = it.flip[k].src; img.alt = L(it.flip[k].caption) || ""; cap.textContent = L(it.flip[k].caption) || ""; };
        btns.forEach((b, j) => b.setAttribute("aria-pressed", String(j === k)));
        if (reduced) { set(); return; }
        // Page turn: the current image slides out, the next slides in from the side it comes from
        img.animate([{ opacity: 1, transform: "none" }, { opacity: 0, transform: `translateX(${-d * 6}%)` }], { duration: 220, easing: "ease-in" }).finished.then(() => {
          set(); img.animate([{ opacity: 0, transform: `translateX(${d * 6}%)` }, { opacity: 1, transform: "none" }], { duration: 480, easing: "cubic-bezier(.11,.82,.39,.92)" });
        });
      };
      btns.forEach((b, j) => b.addEventListener("click", () => go(j)));
      const main = box.querySelector(".fig .ph");
      main.addEventListener("click", () => go(cur + 1));
      box.addEventListener("keydown", e => { if (e.key === "ArrowRight") { e.preventDefault(); go(cur + 1); } if (e.key === "ArrowLeft") { e.preventDefault(); go(cur - 1); } });
      it.flip.slice(1).forEach(t => { const im = new Image(); im.src = t.src; });
    });
  }
  function setupLomo() {
    caseEl.querySelectorAll(".film-roll").forEach(roll => {
      const track = roll.querySelector(".roll-track"), prev = roll.querySelector(".roll-prev"), next = roll.querySelector(".roll-next");
      const frames = [...track.children];
      const bar = roll.querySelector(".roll-bar i");
      // Arrow states, and the bar under the roll: its thumb shows how much of the roll is in view and where
      const ends = () => { const max = track.scrollWidth - track.clientWidth - 2;
        prev.disabled = track.scrollLeft <= 2; next.disabled = track.scrollLeft >= max; roll.classList.toggle("fits", max <= 0);
        const f = track.clientWidth / track.scrollWidth;
        bar.style.width = `${f * 100}%`; bar.style.translate = `${track.scrollLeft / track.clientWidth * 100}% 0`; };
      // Arrows move one frame at a time: to the next frame whose left edge lies past the current position
      const go = d => {
        const x = track.scrollLeft, lefts = frames.map(f => f.offsetLeft);
        const to = d > 0 ? lefts.find(l => l > x + 4) : [...lefts].reverse().find(l => l < x - 4);
        track.scrollTo({ left: to ?? (d > 0 ? track.scrollWidth : 0), behavior: reduced ? "auto" : "smooth" });
      };
      prev.addEventListener("click", () => go(-1));
      next.addEventListener("click", () => go(1));
      track.addEventListener("scroll", ends, { passive: true });
      addEventListener("resize", ends);
      frames.forEach(f => f.querySelector("img").addEventListener("load", ends));
      ends();
      // Mouse drag pulls the roll sideways (touch already scrolls natively)
      let x0 = null, s0 = 0, moved = false;
      track.addEventListener("pointerdown", e => { if (e.pointerType !== "mouse" || e.button) return;
        x0 = e.clientX; s0 = track.scrollLeft; moved = false; track.classList.add("dragging"); track.setPointerCapture(e.pointerId); });
      track.addEventListener("pointermove", e => { if (x0 === null) return;
        const dx = e.clientX - x0; if (Math.abs(dx) > 3) moved = true; track.scrollLeft = s0 - dx; });
      const drop = () => { if (x0 === null) return; x0 = null; track.classList.remove("dragging");
        // Settle on the nearest frame once the drag ends
        const x = track.scrollLeft, lefts = frames.map(f => f.offsetLeft);
        track.scrollTo({ left: lefts.reduce((a, b) => Math.abs(b - x) < Math.abs(a - x) ? b : a, 0), behavior: reduced ? "auto" : "smooth" }); };
      track.addEventListener("pointerup", drop);
      track.addEventListener("pointercancel", drop);
      track.addEventListener("click", e => { if (moved) { e.preventDefault(); e.stopPropagation(); } }, true);
      // The first time a roll comes into view it slides a little to the side and back, so it reads as something that moves
      if (!reduced && "IntersectionObserver" in window) {
        const io = new IntersectionObserver(([en]) => {
          if (!en.isIntersecting || roll.classList.contains("fits") || track.scrollLeft > 2) return;
          io.disconnect();
          frames.forEach(f => f.animate([{ translate: "0" }, { translate: "-72px 0", offset: .45 }, { translate: "0" }], { duration: 1400, delay: 350, easing: "cubic-bezier(.45,0,.2,1)" }));
        }, { threshold: .6 });
        io.observe(track);
      }
    });
  }

  function gallery(i, p) {
    if (p.layout === "lomo" && p.photos) return lomoGallery(p);
    if (p.layout === "logos" && p.logos) return logoWall(p);
    if (p.layout === "loose" && p.gallery && p.gallery.length) return looseGallery(p);
    // Real images: p.gallery = [{ src, size: "full" | "half" | "third" | "quarter", ar: "16/9", caption }].
    // Consecutive halves, thirds or quarters sit side by side in one row.
    const PER_ROW = { half: 2, third: 3, quarter: 4 };
    if (Array.isArray(p.gallery) && !p.gallery.length) return ""; // real project still waiting for material
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

  // A project can bring its own colours: theme: { bg, fg, mute, line, panel, accent }. White page otherwise.
  const THEME_VARS = { bg: "--bg", fg: "--fg", mute: "--mute", line: "--line", panel: "--panel", accent: "--blue" };
  function applyTheme(t) {
    const root = document.documentElement;
    Object.entries(THEME_VARS).forEach(([k, v]) => t && t[k] ? root.style.setProperty(v, t[k]) : root.style.removeProperty(v));
    // AI tools always stand out: a black or white accent falls back to the site blue (Felipe, Oct 26 2026)
    const plain = t && /^#(fff(fff)?|000(000)?)$/i.test(t.accent || "");
    plain ? root.style.setProperty("--ai", "#1a2bff") : root.style.removeProperty("--ai");
    root.classList.toggle("themed", !!t);
  }

  function renderCase(i) {
    const p = S.projects[i], next = S.projects[(i + 1) % S.projects.length];
    applyTheme(p.theme);
    // Type only shows when there is no Scope: the two said the same thing twice (Oct 27 2026 review)
    const meta = [[T("client"), L(p.client)], [T("year"), p.year], [T("scope"), L(p.scope)], [T("role"), L(p.role)], [T("type"), !p.scope && p.type && S.types ? L(S.types[p.type]) : ""], [T("before"), L(p.before)], [T("sector"), L(p.sector)], [T("deliverables"), L(p.deliverables)], [T("tools"), Array.isArray(p.tools) ? p.tools : L(p.tools)]].filter(([, v]) => v);
    let n = 0;
    const title = L(p.title).split(" ").map(w => `<span class="w">${[...w].map(ch => `<span style="--y:${60 * ++n}px">${esc(ch)}</span>`).join("")}</span>`).join(`<span class="sp"></span>`);
    caseEl.innerHTML = `
      <div class="case-top mono"><a class="swap" href="#work"><span>${esc(T("allWork"))}</span><span>${esc(T("allWork"))}</span></a><span>(${String(i + 1).padStart(2, "0")} / ${String(S.projects.length).padStart(2, "0")})</span></div>
      <h1 class="case-title" style="--longest:${Math.max(...L(p.title).split(" ").map(w => [...w].length))}" aria-label="${esc(L(p.title))}"><span class="letters" aria-hidden="true">${title}</span></h1>
      ${p.tags ? `<ul class="case-tags mono">${L(p.tags).map(t => `<li>#${esc(t)}</li>`).join("")}</ul>` : ""}
      <dl class="case-meta mono">${meta.map(([k, v]) => `<div${String(v).length > 40 ? ` class="wide"` : ""}><dt>${k}</dt><dd>${v === "?" ? `<span class="todo-chip mono">${esc(T("missing"))}</span>`
        : Array.isArray(v) ? v.map(t => t[0] === "*" ? `<span class="ai-tool">${esc(t.slice(1))}<sup>${esc(T("aiMark"))}</sup></span>` : esc(t)).join(", ") : esc(v)}</dd></div>`).join("")}${
        (p.credits || []).map(c => `<div><dt>${esc(L(c.role))}</dt><dd>${c.url ? `<a class="swap" href="${esc(c.url)}" target="_blank" rel="noopener"><span>${esc(c.name)} ↗</span><span>${esc(c.name)} ↗</span></a>` : esc(c.name)}</dd></div>`).join("")}${
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
    setupEmbeds();
    setupDrift();
    caseEl.querySelectorAll("canvas[data-frames]").forEach(setupSpin);
    caseEl.querySelectorAll("canvas[data-tunnel]").forEach(setupTunnel);
    setupLogos(p);
    setupScrub();
    setupLomo();
    if (p.gallery) setupFlips(p);
    setupMotion(p);
    inkAlign(caseEl);
  }

  // Type tunnel (SCRV kinetic type, outline): the word in white outline, repeated in depth around one vanishing point,
  // flies slowly towards the viewer in an endless loop. Parallax: the pointer (or, on touch, the scroll) moves the
  // camera, so near layers slide much more than far ones. Scrolling also pushes the flight forward a little.
  // Only runs while on screen; reduced motion gets one still frame.
  function setupTunnel(cv) {
    const word = cv.dataset.tunnel, bg = cv.dataset.bg, ctx = cv.getContext("2d");
    const N = 14, MIN = .12, MAX = 6, LOOP = 1.6; // layers, smallest/largest scale, seconds per layer
    let W = 0, H = 0, dpr = 1, raf = 0, visible = false, t = 0, last = 0, push = 0, lastY = scrollY;
    let cx = 0, cy = 0, tx = 0, ty = 0, hover = false;
    const size = () => {
      dpr = Math.min(devicePixelRatio || 1, 1.5);
      W = cv.width = Math.round(cv.clientWidth * dpr); H = cv.height = Math.round(cv.clientHeight * dpr);
    };
    const draw = () => {
      if (!W) size();
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);
      const F = H * .34;
      ctx.font = `700 ${F}px Figtree, sans-serif`; ctx.textAlign = "center"; ctx.textBaseline = "middle";
      ctx.lineJoin = "round"; ctx.strokeStyle = "#fff";
      // far to near
      const ph = (t / LOOP) % 1;
      for (let i = 0; i < N; i++) {
        const f = (i + ph) / N, s = MIN * (MAX / MIN) ** f;
        // fade in from the depth, fade out as it passes the viewer
        const a = Math.min(1, f / .12) * Math.min(1, (1 - f) / .2);
        if (a <= 0) continue;
        ctx.globalAlpha = a;
        ctx.filter = s > 2.2 ? `blur(${Math.min(4, (s - 2.2) * 1.4) * dpr}px)` : "none";
        ctx.setTransform(s, 0, 0, s, W / 2 - cx * W * .09 * s, H / 2 - cy * H * .09 * s);
        ctx.lineWidth = Math.max(dpr, F * .012 * s) / s;
        ctx.strokeText(word, 0, F * .04);
      }
      ctx.globalAlpha = 1; ctx.filter = "none";
    };
    const tick = now => {
      raf = 0;
      if (!cv.isConnected || !visible) return;
      const dt = Math.min(.05, (now - (last || now)) / 1000); last = now;
      t += dt + push; push *= .9;
      if (!hover) { // on its own: a slow drift, plus the scroll position on touch screens
        const r = cv.getBoundingClientRect(), k = (r.top + r.height / 2) / innerHeight - .5;
        tx = Math.sin(now / 2600) * .35; ty = k * .9 + Math.cos(now / 3100) * .15;
      }
      cx += (tx - cx) * .06; cy += (ty - cy) * .06;
      draw();
      raf = requestAnimationFrame(tick);
    };
    const run = () => { if (!raf && !reduced) { last = 0; raf = requestAnimationFrame(tick); } };
    const start = () => { size(); draw(); cv.classList.add("on"); };
    (document.fonts ? document.fonts.load("700 100px Figtree").catch(() => {}) : Promise.resolve()).then(() => {
      start();
      new IntersectionObserver(es => es.forEach(e => { visible = e.isIntersecting; if (visible) run(); }), { rootMargin: "100px 0px" }).observe(cv);
    });
    if (window.ResizeObserver) new ResizeObserver(() => { if (cv.clientWidth && Math.round(cv.clientWidth * dpr) !== W) { size(); draw(); } }).observe(cv);
    cv.addEventListener("pointermove", e => {
      if (e.pointerType !== "mouse") return;
      const r = cv.getBoundingClientRect(); hover = true;
      tx = ((e.clientX - r.left) / r.width - .5) * 2; ty = ((e.clientY - r.top) / r.height - .5) * 2;
    });
    cv.addEventListener("pointerleave", () => { hover = false; });
    addEventListener("scroll", () => { if (visible) push = Math.min(.15, push + Math.abs(scrollY - lastY) / 4000); lastY = scrollY; }, { passive: true });
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

  // No overlaps: nothing may hide part of an image, so items no longer drift on scroll, and an item that a
  // negative shift pulls over an earlier one is pushed down until it clears it (a column gap apart).
  let unstackRaf = 0;
  const unstack = () => {
    unstackRaf = 0;
    caseEl.querySelectorAll(".loose").forEach(g => {
      const items = [...g.children], gap = parseFloat(getComputedStyle(g).columnGap) || 12;
      items.forEach(el => { el.style.marginTop = ""; });
      items.forEach((el, i) => {
        const r = el.getBoundingClientRect();
        if (!r.height) return;
        let push = 0;
        for (let j = 0; j < i; j++) {
          const o = items[j].getBoundingClientRect();
          if (o.height && Math.min(r.right, o.right) - Math.max(r.left, o.left) > 1 && r.bottom > o.top) push = Math.max(push, o.bottom + gap - r.top);
        }
        if (push > .5) el.style.marginTop = `${(parseFloat(getComputedStyle(el).marginTop) + push).toFixed(1)}px`;
      });
    });
  };
  const queueUnstack = () => { if (!unstackRaf) unstackRaf = requestAnimationFrame(unstack); };
  addEventListener("resize", queueUnstack);
  function setupDrift() { queueUnstack(); document.fonts && document.fonts.ready.then(queueUnstack); }

  // Content motion (after unifiersofjapan.framer.website): as a frame comes up from the bottom of the screen
  // it rises tilted back in 3D and flattens into place, tied to the scroll (it reverses going back up).
  // Images stay whole inside their frames (never scaled up or shifted). Set `motion: false` on a project to turn it off.
  let motionFigs = [], motionRaf = 0;
  const motion = () => {
    motionRaf = 0;
    const H = innerHeight;
    motionFigs.forEach((f, i) => {
      const r = f.getBoundingClientRect();
      if (r.bottom < -50 || r.top > H + 50) return;
      // 0 while the frame's top sits at the bottom edge, 1 once it has climbed 60% of the screen
      const t = Math.min(1, Math.max(0, (H - r.top) / (H * .6))), e = 1 - (1 - t) ** 3, k = 1 - e;
      const ph = f.querySelector(".ph"), side = i % 2 ? -1 : 1;
      if (ph) {
        ph.style.transform = k > .001 ? `perspective(1200px) translateY(${(k * 160).toFixed(1)}px) rotateX(${(k * 24).toFixed(2)}deg) rotate(${(k * 4 * side).toFixed(2)}deg) scale(${(1 - k * .08).toFixed(3)})` : "";
        ph.style.opacity = (.25 + .75 * e).toFixed(3);
      }
    });
  };
  const queueMotion = () => { if (motionFigs.length && !motionRaf) motionRaf = requestAnimationFrame(motion); };
  addEventListener("scroll", queueMotion, { passive: true });
  addEventListener("resize", queueMotion);
  function setupMotion(p) {
    const on = !reduced && p.motion !== false;
    caseEl.classList.toggle("motion", on);
    motionFigs = on ? [...caseEl.querySelectorAll(".case-gallery .fig")] : [];
    queueMotion();
  }


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
  const observe = () => caseEl.querySelectorAll(".fig, .logos, .ltext, .chap").forEach(f => io ? io.observe(f) : f.classList.add("in"));

  // Films play muted while on screen and pause when they leave. Every film has Play/Pause and Sound;
  // sound is one film at a time. Pausing by hand keeps it paused until the visitor plays it again.
  // Live embeds: scale the desktop-size frame to the width of its box
  let embedRO = null;
  function setupEmbeds() {
    if (embedRO) embedRO.disconnect();
    const frames = caseEl.querySelectorAll(".embed iframe");
    if (!frames.length || !window.ResizeObserver) return;
    embedRO = new ResizeObserver(es => es.forEach(e => { const f = e.target.querySelector("iframe"); f.style.setProperty("--s", e.contentRect.width / f.width); }));
    frames.forEach(f => embedRO.observe(f.parentElement));
  }

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
      // `offset`: start this loop that many seconds in, so films side by side never run in step
      if (v.dataset.offset) {
        const seek = () => { if (v.dataset.offsetDone || !(v.duration > 0)) return; v.dataset.offsetDone = "1"; v.currentTime = +v.dataset.offset % v.duration; };
        v.addEventListener("loadedmetadata", seek); v.addEventListener("playing", seek); seek();
      }
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
    if (grown) { grown = false; go(); return; }
    animate ? cutTo(go) : go();
  };
  const closeCase = target => cutTo(() => {
    document.body.classList.remove("in-case");
    fit();
    caseEl.innerHTML = ""; document.title = S.name; motionFigs = [];
    applyTheme(null);
    const el = $(target) || $("work");
    el.scrollIntoView({ behavior: "instant" });
  });
  const projectFromHash = () => S.projects.findIndex(p => location.hash === href(p));

  addEventListener("hashchange", () => {
    const i = projectFromHash();
    if (i >= 0) openCase(i);
    else if (document.body.classList.contains("in-case")) closeCase(location.hash.slice(1));
  });

  // ---------- Work list motion (chosen by Felipe, Oct 2026) ----------
  // Cascade (titles rise from behind a mask, one after another), hover (title slides, number and tags follow;
  // the blue bar itself appears flat, with no animation), open (the row's bar grows to fill the screen while
  // turning into the project's background colour) and morph (Index <-> Grid: each title flies to its new place).
  // Reduced motion turns them all off.
  const fxOn = !reduced;
  if (fxOn) works.classList.add("fx-cascade", "fx-hover", "fx-open", "fx-morph");

  // 1. Cascade: runs once the list comes into view
  const rows = [...index.children];
  rows.forEach((li, i) => li.style.setProperty("--i", i));
  if ("IntersectionObserver" in window && fxOn) {
    const cio = new IntersectionObserver(es => { if (es.some(e => e.isIntersecting)) { index.classList.add("in"); cio.disconnect(); } }, { threshold: .12 });
    cio.observe(index);
  } else index.classList.add("in");

  // 3. Open: a blue panel grows from the clicked row (or card) to the whole screen, turning into the project's
  // background colour as it grows; the page renders underneath and the panel fades away
  let grown = false;
  const grow = (from, i) => {
    const p = S.projects[i], r = from.getBoundingClientRect(), W = innerWidth, H = innerHeight;
    const veil = document.createElement("div");
    veil.className = "veil";
    document.body.append(veil);
    const ease = "cubic-bezier(.7,0,.2,1)";
    const clip = `inset(${Math.max(0, r.top)}px ${Math.max(0, W - r.right)}px ${Math.max(0, H - r.bottom)}px ${Math.max(0, r.left)}px)`;
    const bg = (p.theme && p.theme.bg) || "#fff";
    const a = veil.animate([{ clipPath: clip, background: getComputedStyle(veil).backgroundColor }, { clipPath: "inset(0px 0px 0px 0px)", background: bg }], { duration: 700, easing: ease, fill: "forwards" });
    a.finished
      .then(() => {
        grown = true;
        location.hash = href(p);
        return veil.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 380, delay: 60, easing: "ease-out", fill: "forwards" }).finished;
      })
      .then(() => veil.remove());
  };
  works.addEventListener("click", e => {
    const a = e.target.closest(".index a, .card");
    if (!a || !fxOn || e.metaKey || e.ctrlKey || e.shiftKey || e.button) return;
    const i = S.projects.findIndex(p => a.getAttribute("href") === href(p));
    if (i < 0) return;
    e.preventDefault();
    grow(a.querySelector(".bar") && getComputedStyle(a.querySelector(".bar")).display !== "none" ? a : a.querySelector(".ph") || a, i);
  });

  // 4. Morph: measure every title, switch the view, then play each one from where it was
  const viewSwitch = setView;
  const morph = asGrid => {
    if (!fxOn || works.classList.contains("as-grid") === asGrid || !works.getBoundingClientRect().height) return viewSwitch(asGrid);
    const titles = () => [...(works.classList.contains("as-grid") ? grid.querySelectorAll(".row b") : index.querySelectorAll(".ti"))];
    const before = titles().map(t => t.getBoundingClientRect());
    viewSwitch(asGrid);
    index.classList.add("in");
    const ease = "cubic-bezier(.65,0,.15,1)";
    titles().forEach((t, i) => {
      const a = before[i], b = t.getBoundingClientRect();
      if (!a || (b.bottom < -200 || b.top > innerHeight + 200) && (a.bottom < -200 || a.top > innerHeight + 200)) return;
      const k = a.height / b.height;
      t.style.transformOrigin = "0 0";
      t.animate([{ transform: `translate(${a.left - b.left}px, ${a.top - b.top}px) scale(${k})` }, { transform: "none" }], { duration: 760, easing: ease, delay: i * 25 });
    });
    const rest = asGrid ? [...grid.querySelectorAll(".ph, .row .mono, .card > .mono")] : [...index.querySelectorAll("a > .mono, .k")];
    rest.forEach((el, j) => el.animate([{ opacity: 0, transform: "translateY(14px)" }, { opacity: 1, transform: "none" }], { duration: 520, delay: 320 + j * 12, easing: "ease-out", fill: "backwards" }));
    if (!asGrid) index.querySelectorAll("li").forEach((li, j) => li.animate([{ borderColor: "transparent" }, { borderColor: "transparent", offset: .4 }, {}], { duration: 900 }));
  };
  vIndex.onclick = () => morph(false); vGrid.onclick = () => morph(true);

  // ---------- Cursor: a blue ball that drags a thick, flat trail ----------
  // A chain of points, each easing toward the one ahead, drawn as one solid band as wide as the ball.
  // It stretches behind fast moves and pulls back into the ball when the mouse stops.
  // Mouse and trackpad only; touch screens and reduced motion keep the normal pointer.
  // The ball stays the trail's width everywhere, also over links (the hover motions on the page give the
  // feedback). On blue (the close-up, the part of a logo tile the flood has covered, or the open part of a
  // home row's bar) it turns white. The trail is always drawn in the ball's own colour, read from the ball,
  // so it also follows a project's accent colour.
  const ball = document.createElement("div"), trail = document.createElement("canvas");
  const cursorOn = matchMedia("(hover: hover) and (pointer: fine)").matches && !reduced;
  let onBlue = false;
  const cursorTo = (host, light = host !== document.body) => { if (cursorOn) { host.append(trail, ball); onBlue = light; } };
  if (cursorOn) {
    ball.className = "ball"; trail.className = "trail";
    ball.setAttribute("aria-hidden", "true"); trail.setAttribute("aria-hidden", "true");
    document.documentElement.classList.add("has-ball");
    cursorTo(document.body);
    const ctx = trail.getContext("2d"), N = 40, EASE = .72, W = 18;
    const ptr = { x: -100, y: -100 }, chain = Array.from({ length: N }, () => ({ x: -100, y: -100 }));
    let raf = 0, dpr = 1, tiles = [], hover = null, row = null;
    const size = () => { dpr = Math.min(2, devicePixelRatio || 1); trail.width = innerWidth * dpr; trail.height = innerHeight * dpr; };
    size(); addEventListener("resize", size);
    // The flooded part of a logo tile, from its --f (0 bare to 1 full, mid-transition too); null when bare
    const flood = tile => {
      const f = Math.min(1, parseFloat(getComputedStyle(tile).getPropertyValue("--f")) || 0);
      if (f <= 0 || !tile.isConnected) return null;
      const r = tile.getBoundingClientRect();
      return { x: r.left, y: r.bottom - r.height * f, w: r.width, h: r.height * f, done: f === 1 };
    };
    // The open band of a home row's blue bar, which opens from the middle out
    const band = a => {
      const bar = a.querySelector(".bar"), m = bar && /inset\(([\d.]+)%/.exec(getComputedStyle(bar).clipPath);
      const c = !bar || getComputedStyle(bar).display === "none" ? 50 : m ? +m[1] : 0;
      if (c >= 50 || !a.isConnected) return null;
      const r = bar.getBoundingClientRect();
      return { x: r.left, y: r.top + r.height * c / 100, w: r.width, h: r.height * (1 - c / 50), done: c === 0 };
    };
    const draw = () => {
      let moving = false;
      chain.forEach((p, i) => {
        const t = i ? chain[i - 1] : ptr;
        p.x += (t.x - p.x) * EASE; p.y += (t.y - p.y) * EASE;
        if (Math.abs(t.x - p.x) + Math.abs(t.y - p.y) > .3) moving = true;
      });
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, innerWidth, innerHeight);
      ctx.lineCap = ctx.lineJoin = "round"; ctx.lineWidth = W;
      const floods = tiles.map(flood), hf = floods[tiles.indexOf(hover)];
      tiles = tiles.filter((t, i) => t === hover || floods[i]);
      const rb = row && band(row);
      const zones = onBlue ? [{ x: 0, y: 0, w: innerWidth, h: innerHeight, done: true }] : [...floods, rb].filter(Boolean);
      ball.classList.toggle("white", zones.some(z => ptr.x >= z.x && ptr.x <= z.x + z.w && ptr.y >= z.y && ptr.y <= z.y + z.h));
      ctx.strokeStyle = getComputedStyle(ball).backgroundColor;
      ctx.beginPath(); ctx.moveTo(ptr.x, ptr.y);
      chain.forEach(p => ctx.lineTo(p.x, p.y));
      ctx.stroke();
      // Keep drawing while a flood or bar is still moving, even when the mouse is still
      const settling = !onBlue && (zones.some(z => !z.done) || !!hover && !(hf && hf.done) || !!row && !(rb && rb.done));
      raf = moving || settling ? requestAnimationFrame(draw) : 0;
    };
    addEventListener("pointermove", e => {
      if (e.pointerType !== "mouse") return;
      if (!ball.classList.contains("on")) chain.forEach(p => { p.x = e.clientX; p.y = e.clientY; });
      ptr.x = e.clientX; ptr.y = e.clientY;
      ball.style.translate = `${ptr.x}px ${ptr.y}px`;
      ball.classList.add("on");
      hover = onBlue ? null : e.target.closest(".logo");
      row = onBlue ? null : e.target.closest(".index a");
      const drag = !onBlue && !!e.target.closest(".roll-track");
      if (drag !== ball.classList.contains("drag")) { ball.dataset.label = `← ${T("drag")} →`; ball.classList.toggle("drag", drag); }
      if (hover && tiles[0] !== hover) tiles = [hover, ...tiles.filter(t => t !== hover)];
      if (!raf) raf = requestAnimationFrame(draw);
    }, { passive: true });
    document.addEventListener("pointerleave", () => { ball.classList.remove("on"); ctx.clearRect(0, 0, innerWidth, innerHeight); });
    addEventListener("pointerdown", () => ball.classList.add("press"));
    addEventListener("pointerup", () => ball.classList.remove("press"));
  }

  // ---------- Suggested music (Felipe, Oct 27 2026) ----------
  // "♪" in the corner menu drops down a small Spotify player with the song suggested for the page in view
  // (the project's `track`, or homeTrack on the home). Spotify loads only once it is opened. It keeps playing while
  // browsing, even closed: on another project it offers that project's song instead of cutting the one playing.
  const musicBtn = $("music-btn"), music = $("music"), musicFrame = $("music-frame"), musicSwap = $("music-swap");
  let loaded = null;
  const suggested = () => { const i = projectFromHash(); return (i >= 0 && S.projects[i].track) || S.homeTrack; };
  const songOf = t => `${t.name} — ${t.by}`;
  const loadSong = t => {
    loaded = t;
    musicFrame.innerHTML = `<iframe title="Spotify — ${esc(songOf(t))}" src="https://open.spotify.com/embed/track/${encodeURIComponent(t.id)}?utm_source=generator" width="100%" height="80" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`;
  };
  const syncMusic = () => {
    const t = suggested(), i = projectFromHash();
    $("music-title").textContent = T("nowSuggested") + (i >= 0 ? ` · ${L(S.projects[i].title)}` : "");
    const other = !!(loaded && t && loaded.id !== t.id);
    musicSwap.hidden = !other;
    if (other) musicSwap.textContent = `▶ ${T("musicSwap")}: ${songOf(t)}`;
  };
  const openMusic = on => {
    if (on && !loaded && suggested()) loadSong(suggested());
    if (on && jingle) jingle.pause();
    music.hidden = !on; musicBtn.setAttribute("aria-expanded", String(on));
    syncMusic();
  };
  const note = `<span>♪<b> ${esc(T("music").replace(/^♪\s*/, ""))}</b></span>`;
  musicBtn.innerHTML = note + note;
  musicBtn.onclick = () => openMusic(music.hidden);
  $("music-close").onclick = () => openMusic(false);
  musicSwap.onclick = () => { loadSong(suggested()); syncMusic(); };
  addEventListener("hashchange", syncMusic);
  addEventListener("keydown", e => { if (e.key === "Escape" && !music.hidden) openMusic(false); });
  document.addEventListener("click", e => { if (!music.hidden && !music.contains(e.target) && !musicBtn.contains(e.target)) openMusic(false); });

  const first = projectFromHash();
  if (first >= 0) { finish(); openCase(first, false); }
  else if (reduced || resumeY !== null) finish(); else play();
  if (resumeY !== null) {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    const back = () => requestAnimationFrame(() => scrollTo({ top: +resumeY, behavior: "instant" }));
    document.readyState === "complete" ? back() : addEventListener("load", back, { once: true });
  }
})();
