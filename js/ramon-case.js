/* Ramón's original identity and credited photographs; isolated from other cases. */
(() => {
  const pad = n => String(n + 1).padStart(2, '0');
  const context = ({ L, esc, arwSvg, data }) => ({ L, esc, arwSvg, d: data, c: key => esc(L(data.copy[key])), br: key => esc(L(data.copy[key])).replaceAll('\n', '<br>') });
  function sequence(x, start, cls = '') {
    const { d, c, esc, L, arwSvg } = x, ph = d.photos[start];
    return `<figure class="rv-sequence ${cls}" data-rv-sequence data-start="${start}"><div class="rv-photo-stage"><button type="button" class="rv-open-photo" data-rv-photo="${start}" aria-label="${c('viewPhoto')}"><img src="${esc(ph.src)}" alt="${esc(L(ph.alt))}" fetchpriority="${start === 0 ? 'high' : 'auto'}"></button></div><figcaption class="rv-sequence-bar mono"><span class="rv-frame-count">${pad(start)} / ${pad(d.photos.length - 1)}</span><button type="button" data-rv-play aria-pressed="false">${c('pause')}</button><span class="rv-frame-nav"><button type="button" data-rv-prev aria-label="${c('prev')}">${arwSvg('prev')}</button><button type="button" data-rv-next aria-label="${c('next')}">${arwSvg('next')}</button></span></figcaption></figure>`;
  }
  function hero(args) {
    const x = context(args), { d, c, br, esc } = x;
    return `<header class="rv-hero"><div class="rv-hero-copy"><p class="mono rv-eyebrow">${c('location')}</p><h1 class="rv-brand" tabindex="-1"><img src="${esc(d.assets.signature)}" alt="Ramón Vasconcelos"></h1><p class="rv-statement">${br('hero')}</p><p class="rv-hero-note">${c('heroNote')}</p></div>${sequence(x, 0, 'rv-hero-sequence')}</header>`;
  }
  function render(args) {
    const x = context(args), { d, c, br, esc, L, arwSvg } = x;
    const sections = ['idea', 'system', 'photography', 'applications'];
    const image = (src, alt, cls = '') => `<img class="${cls}" src="${esc(src)}" alt="${alt}" loading="lazy">`;
    return `<div class="rv-case"><nav class="rv-jump mono" aria-label="${c('nav')}">${sections.map((s, i) => `<button type="button" data-rv-jump="${s}"${i === 0 ? ' aria-current="location"' : ''}><span>${pad(i)}</span>${c(s)}</button>`).join('')}</nav>
    <section class="rv-section rv-idea" id="rv-idea" data-rv-section="idea"><div class="rv-section-heading"><p class="mono">01 / ${c('idea')}</p><h2>${br('ideaHead')}</h2></div><div class="rv-idea-copy"><p>${c('ideaText')}</p><ol class="rv-equation mono"><li>${c('accent')}</li><li>${c('click')}</li><li>${c('lens')}</li></ol></div><button type="button" class="rv-camera" data-rv-invert aria-pressed="false" aria-label="${c('invert')}">${image(d.assets.symbol, c('symbol'))}<span class="rv-camera-cue mono">${c('invert')} ↔</span></button></section>
    <section class="rv-section" id="rv-system" data-rv-section="system"><div class="rv-section-heading"><p class="mono">02 / ${c('system')}</p><h2>${br('systemHead')}</h2></div><p class="rv-section-note">${c('systemText')}</p><div class="rv-lockups"><figure class="rv-lockup rv-lockup-wide">${image(d.assets.wordmark, c('wordmark'), 'rv-white-source')}<figcaption class="mono">01 / ${c('wordmark')}</figcaption></figure><figure class="rv-lockup rv-lockup-dark">${image(d.assets.symbol, c('symbol'))}<figcaption class="mono">02 / ${c('symbol')}</figcaption></figure><figure class="rv-lockup rv-lockup-signature">${image(d.assets.signature, c('signature'), 'rv-white-source')}<figcaption class="mono">03 / ${c('signature')}</figcaption></figure></div></section>
    <section class="rv-section rv-colour" id="rv-photography" data-rv-section="photography"><div class="rv-section-heading"><p class="mono">03 / ${c('photography')}</p><h2>${br('photoHead')}</h2></div><p class="rv-section-note">${c('photoText')}</p><div class="rv-photo-layout"><figure class="rv-phone-figure"><div class="rv-phone"><div class="rv-phone-speaker" aria-hidden="true"></div><div class="rv-phone-head">${image(d.assets.wordmark, 'Ramón', 'rv-white-source')}<span aria-hidden="true">☰</span></div><div class="rv-phone-grid">${d.photos.map((ph, i) => `<button type="button" data-rv-photo="${i}" aria-label="${c('viewPhoto')} ${pad(i)}">${image(ph.src, esc(L(ph.alt)))}</button>`).join('')}</div><p class="rv-phone-foot mono">TORONTO / PHOTOGRAPHY</p></div><figcaption class="mono">${c('phone')}</figcaption></figure><div class="rv-colour-sequence"><p class="mono rv-sequence-label">${c('sequence')} / 01—${pad(d.photos.length - 1)}</p>${sequence(x, 2)}<div class="rv-photo-links mono"><a href="${esc(d.assets.gif)}" download>${c('gif')} ↗</a><a href="https://ramonvasconcelos.com/" target="_blank" rel="noopener">${c('visit')} ↗</a></div></div></div><p class="rv-credit mono">${c('photoCredit')}</p></section>
    <section class="rv-section rv-applications" id="rv-applications" data-rv-section="applications"><div class="rv-section-heading"><p class="mono">04 / ${c('applications')}</p><h2>${br('appHead')}</h2></div><p class="rv-section-note">${c('appText')}</p><div class="rv-mockups">${d.assets.mockups.map((src, i) => `<figure class="rv-mockup${i === 0 ? ' rv-mockup-lead' : ''}">${image(src, c(['paper', 'cards', 'folio'][i]))}<figcaption class="mono">${pad(i)} / ${c(['paper', 'cards', 'folio'][i])}</figcaption></figure>`).join('')}</div><p class="mono rv-credit">${c('mockupNote')}</p></section>
    <details class="rv-originals"><summary><span>${c('originals')}</span><span class="mono">12 +</span></summary><p class="mono">${c('originalNote')}</p><div class="rv-board-grid">${d.boards.map((b, i) => `<button type="button" data-rv-board="${i}" aria-label="${c('originals')} ${pad(i)}">${image(b.src, c('originals') + ' ' + pad(i))}<span class="mono">${pad(i)}</span></button>`).join('')}</div></details>
    <dialog class="rv-view" aria-label="${c('photography')}"><div class="rv-view-top mono"><span data-rv-count></span><button type="button" data-rv-close>${c('close')} ${arwSvg('close')}</button></div><div class="rv-view-stage"><img alt=""></div><div class="rv-view-bottom mono"><button type="button" data-rv-back>${arwSvg('prev')}${c('prev')}</button><span data-rv-caption></span><button type="button" data-rv-forward>${c('next')}${arwSvg('next')}</button></div></dialog></div>`;
  }
  function setup({ root, data, L, reduced }) {
    const ac = new AbortController(), signal = ac.signal, c = k => L(data.copy[k]);
    const timers = [], observers = [], dlg = root.querySelector('.rv-view');
    const all = sel => [...root.querySelectorAll(sel)];
    let group = data.photos, current = 0;
    const show = () => { const ph = group[current], im = dlg.querySelector('img');im.src = ph.src;im.alt = L(ph.alt) || c('originals');dlg.querySelector('[data-rv-count]').textContent = `${pad(current)} / ${pad(group.length - 1)}`;dlg.querySelector('[data-rv-caption]').textContent = group === data.photos ? c('photoCredit') : `${c('originals')} · ${pad(current)}`; };
    const step = dir => {current = (current + dir + group.length) % group.length;show();};
    const open = (items, index) => { group = items;current = index;show();dlg.showModal(); };
    all('[data-rv-photo]').forEach(b => b.addEventListener('click', () => open(data.photos, +b.dataset.rvPhoto), { signal }));
    all('[data-rv-board]').forEach(b => b.addEventListener('click', () => open(data.boards, +b.dataset.rvBoard), { signal }));
    dlg.querySelector('[data-rv-close]').addEventListener('click', () => dlg.close(), { signal });
    dlg.querySelector('[data-rv-back]').addEventListener('click', () => step(-1), { signal });
    dlg.querySelector('[data-rv-forward]').addEventListener('click', () => step(1), { signal });
    dlg.addEventListener('keydown', e => {if(e.key === 'ArrowRight' || e.key === 'ArrowLeft'){e.preventDefault();step(e.key === 'ArrowRight' ? 1 : -1);}}, { signal });
    let startX = 0;dlg.addEventListener('touchstart', e => {startX = e.changedTouches[0].clientX;}, {passive:true, signal});
    dlg.addEventListener('touchend', e => { const dx = e.changedTouches[0].clientX - startX;if(Math.abs(dx)>45)step(dx<0?1:-1);}, {passive:true, signal});
    all('[data-rv-jump]').forEach(b => b.addEventListener('click', () => root.querySelector(`#rv-${b.dataset.rvJump}`).scrollIntoView({behavior:reduced?'instant':'smooth',block:'start'}), {signal}));
    const nav = root.querySelector('.rv-jump');
    if(window.IntersectionObserver){const io = new IntersectionObserver(es => {for(const e of es)if(e.isIntersecting)all('[data-rv-jump]').forEach(b => b.dataset.rvJump === e.target.dataset.rvSection ? b.setAttribute('aria-current', 'location') : b.removeAttribute('aria-current'));}, {rootMargin:'-15% 0px -60% 0px'});all('[data-rv-section]').forEach(s=>io.observe(s));observers.push(io);}
    all('[data-rv-invert]').forEach(b=>b.addEventListener('click',()=>{const on=b.getAttribute('aria-pressed')!=='true';b.setAttribute('aria-pressed',String(on));},{signal}));
    data.photos.forEach(ph => {const im = new Image();im.src = ph.src;});
    all('[data-rv-sequence]').forEach(box => {
      let k = +box.dataset.start, paused = reduced, visible = false;
      const img=box.querySelector('img'), openButton=box.querySelector('[data-rv-photo]'), play=box.querySelector('[data-rv-play]');
      const paint = () => {img.src=data.photos[k].src;img.alt=L(data.photos[k].alt);openButton.dataset.rvPhoto=k;box.querySelector('.rv-frame-count').textContent=`${pad(k)} / ${pad(data.photos.length-1)}`;};
      const sync = () => {play.textContent=c(paused?'play':'pause');play.setAttribute('aria-pressed',String(paused));};
      const move = dir => {k=(k+dir+data.photos.length)%data.photos.length;paint();};
      play.addEventListener('click',()=>{paused=!paused;sync();},{signal});
      box.querySelector('[data-rv-prev]').addEventListener('click',()=>{paused=true;move(-1);sync();},{signal});
      box.querySelector('[data-rv-next]').addEventListener('click',()=>{paused=true;move(1);sync();},{signal});
      if(window.IntersectionObserver){const io=new IntersectionObserver(es=>{visible=es[0].isIntersecting;},{threshold:.15});io.observe(box);observers.push(io);}else visible=true;
      timers.push(setInterval(()=>{if(visible&&!paused&&!document.hidden&&!dlg.open)move(1);},1100));sync();
    });
    return () => {ac.abort();timers.forEach(clearInterval);observers.forEach(o=>o.disconnect());if(dlg.open)dlg.close();};
  }
  window.RamonCase = { hero, render, setup };
})();
