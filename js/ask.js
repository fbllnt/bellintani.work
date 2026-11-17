// Pop quiz (Felipe, Nov 17 2026): a side panel where a visitor asks anything about Felipe, by voice or by typing.
// Answers come from POST /api/ask (worker/index.js) and show as text; "Voice on" also reads them aloud.
// Copy lives in content.js (SITE.ask). The look is a first pass, to be redesigned from Felipe's references.
(() => {
  const S = window.SITE, C0 = S && S.ask;
  if (!C0) return;
  const lang = (document.documentElement.lang || "en").slice(0, 2);
  const C = C0[lang] || C0.en;
  const LOCALE = { en: "en-US", pt: "pt-BR", es: "es-ES" }[lang] || "en-US";
  const store = { get: k => { try { return localStorage.getItem(k); } catch { return null; } }, set: (k, v) => { try { localStorage.setItem(k, v); } catch {} } };
  const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  // Only project links and Felipe's email become links
  const render = s => esc(s)
    .replace(/\[([^\]]{1,80})\]\((\/p\/[a-z0-9-]+\/)\)/g, '<a href="$2">$1</a>')
    .replace(/felipe@bellintani\.work/g, '<a href="mailto:felipe@bellintani.work">felipe@bellintani.work</a>');
  const ICON = {
    close: '<svg class="arw-i" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 5l14 14M19 5 5 19"/></svg>',
    mic: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/></svg>',
    send: '<svg class="arw-i" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 12h17M14 5l7 7-7 7"/></svg>',
  };

  // Opener: for now right under the home tagline; Felipe will say where it lives
  const opener = document.createElement("button");
  opener.type = "button"; opener.className = "ask-open mono"; opener.textContent = C.open;
  opener.setAttribute("aria-haspopup", "dialog");
  (document.querySelector(".stage .tag") || document.body).append(opener);

  const panel = document.createElement("aside");
  panel.className = "ask"; panel.hidden = true;
  panel.setAttribute("role", "dialog"); panel.setAttribute("aria-modal", "true"); panel.setAttribute("aria-labelledby", "ask-title");
  panel.setAttribute("data-lenis-prevent", "");
  panel.innerHTML = `
    <div class="ask-head mono"><span id="ask-title">${esc(C.title)}</span>
      <span class="ask-tools"><button type="button" class="ask-voice" aria-pressed="false"></button><button type="button" class="ask-close" aria-label="${esc(C.close)}">${ICON.close}</button></span></div>
    <p class="ask-intro">${esc(C.intro)}</p>
    <div class="ask-modes mono" role="group">
      <button type="button" data-mode="professional" aria-pressed="true">${esc(C.professional)}</button>
      <button type="button" data-mode="personal" aria-pressed="false">${esc(C.personal)}</button>
    </div>
    <div class="ask-log" aria-live="polite"></div>
    <div class="ask-starters"></div>
    <form class="ask-form">
      <input type="text" maxlength="300" autocomplete="off" placeholder="${esc(C.placeholder)}" aria-label="${esc(C.placeholder)}">
      <button type="button" class="ask-mic" aria-label="${esc(C.mic)}">${ICON.mic}</button>
      <button type="submit" class="ask-send" aria-label="${esc(C.send)}">${ICON.send}</button>
    </form>
    <p class="ask-note mono">${render(C.note)}</p>`;
  document.body.append(panel);
  const $ = s => panel.querySelector(s);
  const log = $(".ask-log"), input = $("input"), form = $(".ask-form"), mic = $(".ask-mic"), voiceBtn = $(".ask-voice"), startersEl = $(".ask-starters");

  let mode = "professional", history = [], busy = false;
  const starters = () => { startersEl.innerHTML = C.starters[mode].map(q => `<button type="button" class="mono">${esc(q)}</button>`).join(""); };
  starters();
  panel.querySelectorAll("[data-mode]").forEach(b => b.addEventListener("click", () => {
    mode = b.dataset.mode;
    panel.querySelectorAll("[data-mode]").forEach(o => o.setAttribute("aria-pressed", String(o === b)));
    starters();
  }));
  startersEl.addEventListener("click", e => { const b = e.target.closest("button"); if (b) send(b.textContent); });

  // Voice out: the browser's own speech for now (ElevenLabs voice to come)
  const canSpeak = "speechSynthesis" in window;
  let speak = canSpeak && store.get("askVoice") !== "off";
  const syncVoice = () => { voiceBtn.textContent = speak ? C.voiceOn : C.voiceOff; voiceBtn.setAttribute("aria-pressed", String(speak)); };
  if (canSpeak) { syncVoice(); voiceBtn.addEventListener("click", () => { speak = !speak; store.set("askVoice", speak ? "on" : "off"); if (!speak) speechSynthesis.cancel(); syncVoice(); }); }
  else voiceBtn.hidden = true;
  const say = text => {
    if (!speak || !canSpeak) return;
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1"));
    u.lang = LOCALE; u.rate = 1.05; u.pitch = 1.15;
    const v = speechSynthesis.getVoices().find(v => v.lang && v.lang.replace("_", "-").startsWith(LOCALE.slice(0, 2)));
    if (v) u.voice = v;
    speechSynthesis.speak(u);
  };

  const add = (who, html, cls = "") => {
    const row = document.createElement("div");
    row.className = `ask-msg ${who} ${cls}`.trim();
    row.innerHTML = `<span class="mono">${esc(who === "q" ? C.you : C.buddy)}</span><p>${html}</p>`;
    log.append(row); log.scrollTop = log.scrollHeight;
    return row;
  };

  async function send(text) {
    const q = String(text || "").trim().slice(0, 300);
    if (!q || busy) return;
    busy = true; input.value = ""; startersEl.hidden = true;
    add("q", esc(q));
    const wait = add("a", esc(C.thinking), "wait");
    try {
      const r = await fetch("/api/ask", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ q, mode, lang, history }) });
      const data = await r.json().catch(() => ({}));
      if (!r.ok || !data.answer) throw new Error(r.status === 429 ? "slow" : "error");
      wait.classList.remove("wait"); wait.querySelector("p").innerHTML = render(data.answer);
      history.push({ role: "user", content: q }, { role: "assistant", content: data.answer });
      history = history.slice(-6);
      say(data.answer);
    } catch (e) {
      wait.classList.remove("wait"); wait.classList.add("err");
      wait.querySelector("p").textContent = e.message === "slow" ? C.slow : C.error;
    }
    log.scrollTop = log.scrollHeight;
    busy = false;
  }
  form.addEventListener("submit", e => { e.preventDefault(); send(input.value); });

  // Voice in: the browser's speech recognition (Chrome, Edge, Safari); others keep typing
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  let rec = null;
  if (!SR) mic.hidden = true;
  else mic.addEventListener("click", () => {
    if (rec) { rec.stop(); return; }
    canSpeak && speechSynthesis.cancel();
    rec = new SR(); rec.lang = LOCALE; rec.interimResults = true; rec.maxAlternatives = 1;
    let final = "";
    mic.classList.add("on"); mic.setAttribute("aria-label", C.stop); input.placeholder = C.listening;
    rec.onresult = e => { let t = ""; for (const r of e.results) t += r[0].transcript; input.value = t; if (e.results[e.results.length - 1].isFinal) final = t; };
    rec.onerror = e => { if (e.error === "not-allowed" || e.error === "service-not-allowed") add("a", esc(C.noVoice), "err"); };
    rec.onend = () => {
      mic.classList.remove("on"); mic.setAttribute("aria-label", C.mic); input.placeholder = C.placeholder; rec = null;
      if ((final || input.value).trim()) send(final || input.value);
    };
    rec.start();
  });

  // Open / close: Esc and the × close it; focus returns to the button
  const open = () => { panel.hidden = false; document.documentElement.classList.add("ask-on"); requestAnimationFrame(() => input.focus()); };
  const close = () => { panel.hidden = true; document.documentElement.classList.remove("ask-on"); if (rec) rec.stop(); canSpeak && speechSynthesis.cancel(); opener.focus(); };
  opener.addEventListener("click", open);
  $(".ask-close").addEventListener("click", close);
  panel.addEventListener("keydown", e => { if (e.key === "Escape") close(); });
  panel.addEventListener("click", e => { if (e.target.closest(".ask-log a[href^='/p/']")) close(); });
})();
