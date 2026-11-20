// Pop quiz page (Felipe, Nov 17 2026). Copy: SITE.quiz in content.js. Answers: POST /api/ask (worker/index.js).
// Music match (Nov 20 2026): quick picks + the visitor's artists, scored against his Last.fm by POST /api/match.
// Motion: kinetic letters (each letter travels on an arc to its place in the new words; the rest scatter or tumble in)
// on the cover rows, the question and the red reaction word. Voice in/out through the browser's own speech.
(() => {
  const S = window.SITE, Q = S && S.quiz;
  if (!Q) return;
  const read = k => { try { return localStorage.getItem(k); } catch { return null; } };
  const save = (k, v) => { try { localStorage.setItem(k, v); } catch {} };
  // English only (Felipe, Nov 20 2026: "Just english, forget the other languages")
  const lang = "en";
  const C = Q[lang] || Q.en, LOCALE = { en: "en-US", pt: "pt-BR", es: "es-ES" }[lang];
  document.documentElement.lang = LOCALE;
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const $ = id => document.getElementById(id);
  const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  const rnd = (a, b) => a + Math.random() * (b - a);

  // static copy; "{n}" = his Last.fm scrobbles, refreshed weekly by the worker (GET /api/music)
  let SCROBBLES = "283,802";
  const N = t => String(t).replace(/\{n\}/g, SCROBBLES);
  const fillCopy = () => document.querySelectorAll("[data-k]").forEach(el => { const v = C[el.dataset.k]; if (v != null) el.textContent = N(Array.isArray(v) ? v.join("\n") : v); });
  fillCopy();
  fetch("/api/music").then(r => r.ok ? r.json() : null).then(d => {
    if (!d || !d.scrobbles) return;
    SCROBBLES = Number(d.scrobbles).toLocaleString(LOCALE); fillCopy();
    const p = document.querySelector("#mt-stage .mt-p:not(.wait)"); if (p && C.match) p.textContent = N(C.match.intro);
  }).catch(() => {});
  $("input").placeholder = matchMedia("(max-width:760px)").matches ? C.inputShort : C.input;
  $("input").setAttribute("aria-label", C.input);

  // ---------- kinetic letters ----------
  const render = (el, lines) => {
    el.innerHTML = lines.map(l => `<span class="ln">${l.split(" ").map(w => `<span class="wd">${[...w].map(c => `<span class="k">${esc(c)}</span>`).join("")}</span>`).join(" ")}</span>`).join("");
    return [...el.querySelectorAll(".k")];
  };
  const morph = (el, lines) => {
    if (reduced || !el.querySelector(".k")) { render(el, lines); return; }
    const box = el.getBoundingClientRect(), cs = getComputedStyle(el);
    const old = [...el.querySelectorAll(".k")].map(k => ({ c: k.textContent, r: k.getBoundingClientRect() }));
    const fresh = render(el, lines), used = new Set();
    const H = Math.max(box.height, 200), W = Math.max(box.width, 300);
    fresh.forEach(k => {
      const r = k.getBoundingClientRect();
      const j = old.findIndex((o, n) => !used.has(n) && o.c.toLowerCase() === k.textContent.toLowerCase());
      let from;
      if (j >= 0) { used.add(j); from = { x: old[j].r.left - r.left, y: old[j].r.top - r.top, o: 1 }; }
      else from = { x: rnd(-.25, .25) * W, y: (Math.random() < .5 ? -1 : 1) * rnd(.3, .7) * H, o: 0 };
      k.animate([
        { transform: `translate(${from.x}px,${from.y}px) rotate(0deg)`, opacity: from.o },
        { transform: `translate(${from.x * .45}px,${from.y * .45 + rnd(-.2, .2) * H}px) rotate(${rnd(-50, 50)}deg)`, opacity: 1, offset: .5 },
        { transform: "none", opacity: 1 },
      ], { duration: 1100 + rnd(-150, 250), delay: rnd(0, 180), easing: "cubic-bezier(.7,0,.2,1)", fill: "backwards" });
    });
    old.forEach((o, n) => {
      if (used.has(n)) return;
      const g = document.createElement("span");
      g.className = "ghost"; g.textContent = o.c; g.setAttribute("aria-hidden", "true");
      Object.assign(g.style, { left: o.r.left - box.left + "px", top: o.r.top - box.top + "px", font: cs.font, letterSpacing: cs.letterSpacing, color: cs.color, textTransform: cs.textTransform });
      el.append(g);
      g.animate([{ transform: "none", opacity: 1 }, { transform: `translate(${rnd(-.3, .3) * W}px,${(Math.random() < .5 ? -1 : 1) * rnd(.4, .8) * H}px) rotate(${rnd(-90, 90)}deg)`, opacity: 0 }],
        { duration: 900, delay: rnd(0, 150), easing: "cubic-bezier(.6,0,.8,.4)", fill: "forwards" }).finished.then(() => g.remove());
    });
  };

  // ---------- cover: the red rows rebuild themselves every few seconds while on screen ----------
  const rows = $("rows");
  let r = 0, rowTimer = null;
  render(rows, C.rows[0]);
  const rowLoop = on => { clearInterval(rowTimer); rowTimer = null; if (on && !reduced) rowTimer = setInterval(() => { r = (r + 1) % C.rows.length; morph(rows, C.rows[r]); }, 4200); };
  new IntersectionObserver(([e]) => rowLoop(e.isIntersecting && !document.hidden), { threshold: .3 }).observe($("cover"));
  document.addEventListener("visibilitychange", () => rowLoop(!document.hidden && $("cover").getBoundingClientRect().bottom > 0));

  // ---------- mode + the contact strip ----------
  let mode = read("quizMode") === "personal" ? "personal" : "professional";
  const frames = $("frames");
  // Photos (Felipe, Nov 20 2026): bands he likes, shuffled on every visit (js/quiz-bands.js, free-licence photos from
  // Wikimedia Commons, credited on quiz-credits.html). Without that file the strip falls back to his work photos.
  const BANDS = (window.QUIZ_BANDS || []).slice();
  for (let i = BANDS.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [BANDS[i], BANDS[j]] = [BANDS[j], BANDS[i]]; }
  const roll = BANDS.length >= 10
    ? { professional: BANDS.slice(0, 5), personal: BANDS.slice(5, 10) }
    : { professional: Q.photos.professional.map(src => ({ src })), personal: Q.photos.personal.map(src => ({ src })) };
  const drawFrames = () => {
    // slivers of the other side's photos at both ends: the roll keeps going past the cut
    const other = roll[mode === "personal" ? "professional" : "personal"];
    const credit = b => b.artist ? `${b.artist}. Photo: ${b.by}, ${b.lic}` : "";
    const sl = b => `<span class="sl" aria-hidden="true"><img src="${esc(b.src)}" alt="" loading="lazy" decoding="async"></span>`;
    frames.innerHTML = sl(other[4]) + C.frames[mode].map(([label, q], i) => { const b = roll[mode][i];
      return `<button type="button" class="fr" data-q="${esc(q)}" aria-label="${esc(q)}" title="${esc(credit(b))}"><img src="${esc(b.src)}" alt="" loading="lazy" decoding="async">${b.artist ? `<em>${esc(b.artist)}</em>` : ""}<span>${esc(label)}</span></button>`; }).join("") + sl(other[0]);
    document.querySelectorAll(".qz-modes button").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.mode === mode)));
    $("edge-mode").textContent = mode === "personal" ? C.menuPer : C.menuPro;
  };
  const setMode = m => { mode = m; save("quizMode", m); drawFrames(); };
  drawFrames();
  frames.addEventListener("click", e => { const f = e.target.closest(".fr"); if (!f) return; frames.querySelectorAll(".fr").forEach(o => o.classList.toggle("on", o === f)); ask(f.dataset.q); });
  document.querySelectorAll(".qz-modes button").forEach(b => b.addEventListener("click", () => setMode(b.dataset.mode)));
  document.querySelectorAll(".cv-pick button[data-mode]").forEach(b => b.addEventListener("click", () => {
    setMode(b.dataset.mode);
    $("quiz").scrollIntoView({ behavior: reduced ? "auto" : "smooth" });
    setTimeout(() => $("input").focus({ preventScroll: true }), reduced ? 0 : 700);
  }));

  // ---------- question, answer, reaction ----------
  const qEl = $("q"), aEl = $("a"), react = $("react");
  render(react, [C.reactions.idle]);
  render(qEl, [C.frames[mode][0][1]]);
  aEl.innerHTML = "";
  // only project links and Felipe's email become links
  const linkify = s => esc(s)
    .replace(/\[([^\]]{1,80})\]\((\/p\/[a-z0-9-]+\/)\)/g, '<a href="$2">$1</a>')
    .replace(/felipe@bellintani\.work/g, '<a href="mailto:felipe@bellintani.work">felipe@bellintani.work</a>');
  const DODGE = /^\W*(oh man|hmm+|ha\b|nice try|my lips|that one'?s above|he told me not|boa tentativa|ih|meus lábios|buen intento|ay\b|mis labios)/i;
  const pick = a => a[Math.floor(Math.random() * a.length)];
  let history = [], busy = false, count = 0;

  async function ask(text) {
    const q = String(text || "").trim().slice(0, 300);
    if (!q || busy) return;
    busy = true; count++;
    $("input").value = "";
    morph(qEl, [q]);
    aEl.className = "wait"; aEl.textContent = "…";
    try {
      const res = await fetch("/api/ask", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ q, mode, lang, history }) });
      const data = await res.json().catch(() => ({}));
      if (res.status === 401) { location.reload(); return; }
      if (!res.ok || !data.answer) throw new Error(res.status === 429 ? "slow" : "error");
      aEl.className = ""; aEl.innerHTML = linkify(data.answer);
      void aEl.offsetWidth; aEl.classList.add("fade");
      history.push({ role: "user", content: q }, { role: "assistant", content: data.answer }); history = history.slice(-6);
      // the red word reacts to dodges, and now and then to a straight answer
      if (DODGE.test(data.answer)) morph(react, [pick(C.reactions.dodge)]);
      else if (count % 3 === 0) morph(react, [pick(C.reactions.fact)]);
      else if (react.textContent !== C.reactions.idle && count % 2 === 0) morph(react, [C.reactions.idle]);
      say(data.answer);
    } catch (e) {
      aEl.className = "";
      aEl.textContent = e.message === "slow" ? (S.ask?.[lang]?.slow || "Easy! Give me a second.") : (S.ask?.[lang]?.error || "Hmm, my line dropped. Try again?");
    } finally { busy = false; }
  }
  $("form").addEventListener("submit", e => { e.preventDefault(); ask($("input").value); });
  const focusInput = () => { $("quiz").scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "end" }); setTimeout(() => $("input").focus({ preventScroll: true }), reduced ? 0 : 500); };
  $("another").addEventListener("click", focusInput);
  $("endask").addEventListener("click", focusInput);

  // ---------- voice out ----------
  const canSpeak = "speechSynthesis" in window;
  let speak = canSpeak && read("askVoice") !== "off";
  const voiceBtn = $("voice");
  const syncVoice = () => { voiceBtn.textContent = speak ? (S.ask?.[lang]?.voiceOn || "Voice on") : (S.ask?.[lang]?.voiceOff || "Voice off"); voiceBtn.setAttribute("aria-pressed", String(speak)); };
  if (canSpeak) { syncVoice(); voiceBtn.addEventListener("click", () => { speak = !speak; save("askVoice", speak ? "on" : "off"); if (!speak) speechSynthesis.cancel(); syncVoice(); }); }
  else voiceBtn.hidden = true;
  function say(text) {
    if (!speak || !canSpeak) return;
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1"));
    u.lang = LOCALE; u.rate = 1.05; u.pitch = 1.1;
    const v = speechSynthesis.getVoices().find(v => (v.lang || "").replace("_", "-").startsWith(LOCALE.slice(0, 2)));
    if (v) u.voice = v;
    speechSynthesis.speak(u);
  }

  // ---------- voice in ----------
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition, mic = $("mic");
  mic.setAttribute("aria-label", S.ask?.[lang]?.mic || "Ask by voice");
  let rec = null;
  if (!SR) mic.hidden = true;
  else mic.addEventListener("click", () => {
    if (rec) { rec.stop(); return; }
    if (canSpeak) speechSynthesis.cancel();
    rec = new SR(); rec.lang = LOCALE; rec.interimResults = true;
    let final = "";
    mic.classList.add("on"); $("input").placeholder = S.ask?.[lang]?.listening || "Listening…";
    rec.onresult = e => { let t = ""; for (const x of e.results) t += x[0].transcript; $("input").value = t; if (e.results[e.results.length - 1].isFinal) final = t; };
    rec.onend = () => { mic.classList.remove("on"); $("input").placeholder = C.input; const t = (final || $("input").value).trim(); rec = null; if (t) ask(t); };
    rec.onerror = () => {};
    rec.start();
  });
  // ---------- Music match: six picks, then the visitor's artists; the score comes from his Last.fm (/api/match) ----------
  const MT = C.match, big = $("mt-big"), sub = $("mt-sub"), stage = $("mt-stage");
  if (MT && big) {
    const two = n => String(n).padStart(2, "0"), total = MT.qs.length + 1;
    let step = -1, picks = [], artists = [], mBusy = false, last = null;
    const paint = html => { stage.innerHTML = html; stage.classList.remove("fade"); void stage.offsetWidth; stage.classList.add("fade"); };
    const counter = n => { morph(big, [two(n)]); sub.textContent = `${MT.step} ${two(n)} ${MT.of} ${two(total)}`; };
    const intro = () => {
      step = -1; picks = []; artists = []; last = null;
      morph(big, ["??%"]); sub.textContent = C.mTitle.replace(/^\[\s*/, "");
      paint(`<p class="mt-p">${esc(N(MT.intro))}</p><button type="button" class="mt-go" data-act="start"><svg viewBox="0 0 70 24" aria-hidden="true"><path d="M2 2v14h62M54 8l10 8-10 8"/></svg><b>${esc(MT.start)}</b></button>`);
    };
    const question = () => {
      const [q, opts] = MT.qs[step];
      counter(step + 1);
      paint(`<h2 class="mt-q">${esc(q)}</h2><div class="mt-opts">${opts.map(([label], i) =>
        `<button type="button" data-i="${i}"><small>${two(i + 1)}</small>${esc(label)}</button>`).join("")}</div>${step ? `<button type="button" class="mt-back tiny" data-act="back">${esc(MT.undo)}</button>` : ""}`);
    };
    const chips = () => artists.map((a, i) => `<button type="button" class="mt-chip" data-x="${i}" aria-label="${esc(a)} ✕">${esc(a)}<i aria-hidden="true">✕</i></button>`).join("");
    const artistStep = () => {
      counter(total);
      paint(`<h2 class="mt-q">${esc(MT.artistsQ)}</h2><div class="mt-chips" id="mt-chips">${chips()}</div>
        <form class="mt-in" id="mt-form"><input id="mt-input" maxlength="60" autocomplete="off" enterkeyhint="done" placeholder="${esc(MT.artistsPh)}" aria-label="${esc(MT.artistsQ)}"></form>
        <div class="mt-row"><button type="button" class="mt-back tiny" data-act="back">${esc(MT.undo)}</button><span class="tiny mt-hint">${esc(MT.artistsHint)}</span>
        <button type="button" class="mt-go" data-act="result"><svg viewBox="0 0 70 24" aria-hidden="true"><path d="M2 2v14h62M54 8l10 8-10 8"/></svg><b>${esc(artists.length ? MT.next : MT.skip)}</b></button></div>`);
      const input = $("mt-input");
      $("mt-form").addEventListener("submit", e => { e.preventDefault(); addArtist(input.value); });
      if (matchMedia("(hover:hover)").matches) input.focus({ preventScroll: true });
    };
    const addArtist = v => {
      const a = String(v || "").trim().slice(0, 60);
      if (a && artists.length < 5 && !artists.some(x => x.toLowerCase() === a.toLowerCase())) artists.push(a);
      $("mt-chips").innerHTML = chips(); $("mt-input").value = "";
      stage.querySelector('[data-act="result"] b').textContent = artists.length ? MT.next : MT.skip;
      $("mt-input").disabled = artists.length >= 5;
    };
    const tierOf = n => MT.tiers.find(([min]) => n >= min)[1];
    async function result() {
      if (mBusy) return;
      const pending = $("mt-input") && $("mt-input").value.trim();
      if (pending) addArtist(pending);
      mBusy = true;
      morph(big, ["…"]); sub.textContent = N(MT.thinking);
      paint(`<p class="mt-p wait">${esc(N(MT.thinking))}</p>`);
      try {
        const res = await fetch("/api/match", { method: "POST", headers: { "content-type": "application/json" },
          body: JSON.stringify({ lang, artists, picks: picks.map(([label, w, tag]) => ({ label, w, tag })) }) });
        const d = await res.json().catch(() => ({}));
        if (res.status === 401) { location.reload(); return; }
        if (!res.ok || !d.score) throw new Error(res.status === 429 ? "slow" : "error");
        last = d;
        const song = `${d.song.by} – ${d.song.title}`;
        const verdict = d.verdict || MT.fallback.replace("{n}", d.score).replace("{song}", song);
        morph(big, [`${d.score}%`]); sub.textContent = C.mTitle.replace(/^\[\s*/, "");
        const shared = d.shared.length ? `<ul>${d.shared.map(a => `<li><span>${esc(a.name)}</span><em>${a.plays ? `${a.plays.toLocaleString(LOCALE)} ${esc(MT.plays)}` : esc(MT.inLib)}</em></li>`).join("")}</ul>` : `<p class="mt-none">${esc(MT.noShared)}</p>`;
        paint(`<h2 class="mt-q mt-tier">${esc(tierOf(d.score))}</h2>
          <p class="mt-verdict">${esc(verdict)}</p>
          <div class="mt-res"><div class="mt-shared"><b class="tiny">[ ${esc(MT.youBoth)}</b>${shared}</div>
          <div class="mt-song"><b class="tiny">[ ${esc(MT.send)}</b><a href="https://open.spotify.com/search/${encodeURIComponent(d.song.by + " " + d.song.title)}" target="_blank" rel="noopener"><span>${esc(d.song.title)}</span><small>${esc(d.song.by)} · ${esc(MT.listen)}</small></a></div></div>
          <div class="mt-acts"><button type="button" data-act="again">${esc(MT.again)}</button><button type="button" data-act="share">${esc(MT.share)}</button><button type="button" data-act="askmusic">${esc(MT.askMore)}</button></div>`);
        say(verdict);
      } catch (e) {
        morph(big, ["??%"]);
        paint(`<p class="mt-p">${esc(e.message === "slow" ? MT.slow : MT.error)}</p><button type="button" class="mt-go" data-act="result"><svg viewBox="0 0 70 24" aria-hidden="true"><path d="M2 2v14h62M54 8l10 8-10 8"/></svg><b>${esc(MT.again)}</b></button>`);
      } finally { mBusy = false; }
    }
    const goQuiz = q => { setMode("personal"); $("quiz").scrollIntoView({ behavior: reduced ? "auto" : "smooth" }); setTimeout(() => ask(q), reduced ? 0 : 600); };
    stage.addEventListener("click", async e => {
      const opt = e.target.closest(".mt-opts button");
      if (opt) { picks[step] = MT.qs[step][1][+opt.dataset.i]; step++; step < MT.qs.length ? question() : artistStep(); return; }
      const x = e.target.closest(".mt-chip");
      if (x) { artists.splice(+x.dataset.x, 1); addArtist(""); return; }
      const act = e.target.closest("[data-act]")?.dataset.act;
      if (act === "start") { step = 0; question(); }
      else if (act === "back") { step = Math.max(0, step - 1); picks.length = step; question(); }
      else if (act === "result") result();
      else if (act === "again") { intro(); step = 0; question(); }
      else if (act === "askmusic") goQuiz(MT.asks[0]);
      else if (act === "share" && last) {
        const text = MT.shareText.replace("{n}", last.score), url = location.origin + "/popquiz";
        const btn = e.target.closest("button");
        try { if (navigator.share) await navigator.share({ text, url }); else { await navigator.clipboard.writeText(`${text} ${url}`); btn.textContent = MT.copied; } } catch {}
      }
    });
    $("mt-asks").innerHTML = MT.asks.map(q => `<button type="button">${esc(q)}</button>`).join("");
    $("mt-asks").addEventListener("click", e => { const b = e.target.closest("button"); if (b) goQuiz(b.textContent); });
    document.querySelector('.cv-pick [data-go="match"]')?.addEventListener("click", () => $("match").scrollIntoView({ behavior: reduced ? "auto" : "smooth" }));
    render(big, ["??%"]);
    intro();
  }
})();
