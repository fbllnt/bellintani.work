// Pop quiz page (Felipe, Nov 17 2026). Copy: SITE.quiz in content.js. Answers: POST /api/ask (worker/index.js).
// Motion: kinetic letters (each letter travels on an arc to its place in the new words; the rest scatter or tumble in)
// on the cover rows, the question and the red reaction word. Voice in/out through the browser's own speech.
(() => {
  const S = window.SITE, Q = S && S.quiz;
  if (!Q) return;
  const read = k => { try { return localStorage.getItem(k); } catch { return null; } };
  const save = (k, v) => { try { localStorage.setItem(k, v); } catch {} };
  const qp = new URLSearchParams(location.search).get("lang");
  const lang = ["en", "pt", "es"].includes(qp) ? qp : (["en", "pt"].includes(read("lang")) ? read("lang") : "en");
  const C = Q[lang] || Q.en, LOCALE = { en: "en-US", pt: "pt-BR", es: "es-ES" }[lang];
  document.documentElement.lang = LOCALE;
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const $ = id => document.getElementById(id);
  const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  const rnd = (a, b) => a + Math.random() * (b - a);

  // static copy
  document.querySelectorAll("[data-k]").forEach(el => { const v = C[el.dataset.k]; if (v != null) el.textContent = Array.isArray(v) ? v.join("\n") : v; });
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
  const drawFrames = () => {
    // slivers of the other side's photos at both ends: the roll keeps going past the cut
    const other = Q.photos[mode === "personal" ? "professional" : "personal"];
    const sl = src => `<span class="sl" aria-hidden="true"><img src="${esc(src)}" alt="" loading="lazy" decoding="async"></span>`;
    frames.innerHTML = sl(other[4]) + C.frames[mode].map(([label, q], i) =>
      `<button type="button" class="fr" data-q="${esc(q)}" aria-label="${esc(q)}"><img src="${esc(Q.photos[mode][i])}" alt="" loading="lazy" decoding="async"><span>${esc(label)}</span></button>`).join("") + sl(other[0]);
    document.querySelectorAll(".qz-modes button").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.mode === mode)));
    $("edge-mode").textContent = mode === "personal" ? C.menuPer : C.menuPro;
  };
  const setMode = m => { mode = m; save("quizMode", m); drawFrames(); };
  drawFrames();
  frames.addEventListener("click", e => { const f = e.target.closest(".fr"); if (!f) return; frames.querySelectorAll(".fr").forEach(o => o.classList.toggle("on", o === f)); ask(f.dataset.q); });
  document.querySelectorAll(".qz-modes button").forEach(b => b.addEventListener("click", () => setMode(b.dataset.mode)));
  document.querySelectorAll(".cv-pick button").forEach(b => b.addEventListener("click", () => {
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
})();
