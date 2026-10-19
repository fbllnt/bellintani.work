// All site copy and projects live here. Edit this file to update the site.
// Text in two languages is written as { en: "…", pt: "…" }. Plain strings are the same in both.
window.SITE = {
  name: "Bellintani",
  year: "26",
  email: "felipe@bellintani.work",
  social: [
    { label: "Instagram", url: "https://www.instagram.com/fbllnt/" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/fbellintani/" },
  ],
  tagline: {
    en: "Multidisciplinary designer, art director, and a few other things",
    pt: "Designer multidisciplinar, diretor de arte e mais algumas coisas",
  },
  subline: {
    en: ["Branding, Identity, Advertising, Digital, Social and Multimedia"],
    pt: ["Branding, Identidade, Publicidade, Digital, Social e Multimídia"],
  },
  // Intro loader: each word cuts on in turn. Add loaderBig: { en, pt } to end on one big word.
  loader: {
    en: ["Hey", "don't", "blink", "→good", "things", "take", "a", "sec"],
    pt: ["Ei,", "não", "pisca", "→coisa", "boa", "leva", "um", "tempo"],
  },
  services: {
    en: ["Brand identity", "Typography", "Posters & print", "Packaging", "Editorial design", "Art direction"],
    pt: ["Identidade de marca", "Tipografia", "Pôsteres e impressos", "Embalagem", "Design editorial", "Direção de arte"],
  },

  // Interface labels
  ui: {
    en: {
      work: "Work", services: "Services", letsTalk: "Let's talk",
      skip: "Skip intro →", replay: "↻ Replay intro", index: "Index", grid: "Grid", view: "View",
      gotProject: "( Got a project? )", allWork: "← All work", next: "( Next project )", about: "( About )",
      client: "Client", year: "Year", scope: "Scope", role: "Role", live: "Live",
      dragToRotate: "⟷ Drag to rotate", play: "Play", pause: "Pause", soundOn: "Sound on", soundOff: "Sound off", fullscreen: "Full screen",
      placeholder: "Placeholder", selectedWork: "Selected work",
      placeholderText: "Placeholder text. Replace with the project story: the brief, the idea, and what was made.",
      langSwitch: "PT", langLabel: "Ver em português",
      description: "Bellintani — multidisciplinary designer and art director.",
    },
    pt: {
      work: "Trabalhos", services: "Serviços", letsTalk: "Vamos conversar",
      skip: "Pular intro →", replay: "↻ Rever intro", index: "Lista", grid: "Grade", view: "Visualização",
      gotProject: "( Tem um projeto? )", allWork: "← Todos os trabalhos", next: "( Próximo projeto )", about: "( Sobre )",
      client: "Cliente", year: "Ano", scope: "Escopo", role: "Função", live: "No ar",
      dragToRotate: "⟷ Arraste para girar", play: "Play", pause: "Pausar", soundOn: "Com som", soundOff: "Sem som", fullscreen: "Tela cheia",
      placeholder: "Provisório", selectedWork: "Trabalhos selecionados",
      placeholderText: "Texto provisório. Substitua pela história do projeto: o briefing, a ideia e o que foi feito.",
      langSwitch: "EN", langLabel: "View in English",
      description: "Bellintani — designer multidisciplinar e diretor de arte.",
    },
  },

  // Projects. `placeholder: true` marks example entries until real work replaces them.
  // Add `image: "images/file.jpg"` to use a real cover instead of the generated one.
  // Project page fields (all optional):
  //   client, role, summary: { en, pt }, stats: [["4", { en, pt }]],
  //   gallery: [{ src: "images/x.jpg", size: "full" }, { video: "x.mp4", webm: "x.webm", poster: "x.jpg", size: "half" }, …]
  //   Consecutive "half", "third" or "quarter" items sit side by side. `caption` can be { en, pt }.
  //   layout: "loose" places each item freely: { col, span, shift, speed } and allows { text } lines.
  //   hero: "bleed" runs the cover edge to edge.
  projects: [
    {
      title: "Seja ANTI",
      client: "ANTI Creative Finance",
      year: "2026",
      scope: { en: "Campaign // Activation // Digital", pt: "Campanha // Ativação // Digital" },
      image: "images/anti/skeletons.jpg",
      link: { label: "naoespere.sejaanti.com.br", url: "https://naoespere.sejaanti.com.br" },
      summary: {
        en: "“Não espere uma vida para receber.” Don't wait a lifetime to get paid. At the Clube de Criação de São Paulo festival, four benches were taken by skeletons still waiting for their money: the Influencer, the Producer, the Creator and the Creative. The idea then ran through films, street posters, social and a landing page.",
        pt: "“Não espere uma vida para receber.” No festival do Clube de Criação de São Paulo, quatro bancos foram ocupados por esqueletos que ainda esperam o pagamento: o Influencer, o Produtor, o Creator e o Criativo. A ideia seguiu para filmes, lambe-lambes, redes sociais e uma landing page.",
      },
      stats: [
        ["4", { en: "Benches", pt: "Bancos" }],
        ["4", { en: "Films", pt: "Filmes" }],
        ["23", { en: "Posters", pt: "Pôsteres" }],
        ["117", { en: "Social statics", pt: "Estáticos para redes" }],
        ["30", { en: "Animations", pt: "Animações" }],
        ["1", { en: "Landing page", pt: "Landing page" }],
      ],
      // Loose layout: benches float as a staggered collage, the campaign line sits big between them and the films
      layout: "loose",
      gallery: [
        { src: "images/anti/bench-influencer.jpg", ar: "9/5", col: 1, span: 7, speed: .04, caption: { en: "Bench 01 — Influencer", pt: "Banco 01 — Influencer" } },
        { src: "images/anti/bench-produtor.jpg", ar: "9/5", col: 7, span: 5, shift: "-34vh", speed: -.05, caption: { en: "Bench 02 — Producer", pt: "Banco 02 — Produtor" } },
        { src: "images/anti/bench-creator.jpg", ar: "9/5", col: 2, span: 5, shift: "-22vh", speed: .06, caption: { en: "Bench 03 — Creator", pt: "Banco 03 — Creator" } },
        { src: "images/anti/bench-criativo.jpg", ar: "9/5", col: 6, span: 6, shift: "-30vh", speed: -.03, caption: { en: "Bench 04 — Creative", pt: "Banco 04 — Criativo" } },
        { src: "images/anti/street-posters.jpg", ar: "2000/1121", col: 1, span: 12, shift: "-10vh", speed: .02, caption: { en: "Lambe-lambe posters on the street, São Paulo", pt: "Lambe-lambes na rua, São Paulo" } },
        { text: "Não espere uma vida para receber.", col: 1, span: 9 },
        { video: "images/anti/film-freela.mp4", webm: "images/anti/film-freela.webm", poster: "images/anti/film-freela-poster.jpg", ar: "16/9", col: 1, span: 7, speed: .03, caption: { en: "Film 001 — Free my freela", pt: "Filme 001 — Free my freela" } },
        { video: "images/anti/film-jab.mp4", webm: "images/anti/film-jab.webm", poster: "images/anti/film-jab-poster.jpg", ar: "16/9", col: 6, span: 6, shift: "-32vh", speed: -.05, caption: { en: "Film 002 — Jab", pt: "Filme 002 — Jab" } },
        { video: "images/anti/film-umavida.mp4", webm: "images/anti/film-umavida.webm", poster: "images/anti/film-umavida-poster.jpg", ar: "16/9", col: 2, span: 5, shift: "-18vh", speed: .05, caption: { en: "Film 003 — Uma vida", pt: "Filme 003 — Uma vida" } },
        { video: "images/anti/film-payday.mp4", webm: "images/anti/film-payday.webm", poster: "images/anti/film-payday-poster.jpg", ar: "16/9", col: 7, span: 5, shift: "-30vh", speed: -.03, caption: { en: "Film 004 — Payday", pt: "Filme 004 — Payday" } },
        { src: "images/anti/landing.jpg", ar: "1670/1015", col: 2, span: 10, shift: "4vh", speed: .02, caption: { en: "Landing page, desktop and mobile", pt: "Landing page, desktop e mobile" } },
        { spin: { frames: "images/anti/spin/###.jpg", count: 120 }, ar: "16/9", col: 1, span: 12, shift: "6vh", caption: { en: "The waiting skeleton, in 360°", pt: "O esqueleto que espera, em 360°" } },
      ],
    },
    {
      title: "Warriors of the Turf",
      client: "Adidas",
      scope: { en: "Key Visual // Film", pt: "Key Visual // Filme" },
      image: "images/warriors/key-visual.jpg",
      summary: {
        en: "Legends from different eras meet on the same rain-soaked pitch. A key visual and a short film for Adidas, built on the grit of the game: mud, rain and the slide tackle.",
        pt: "Lendas de épocas diferentes se encontram no mesmo gramado encharcado. Um key visual e um filme curto para a Adidas, construídos sobre a garra do jogo: lama, chuva e o carrinho.",
      },
      // Told in storyboard order: duel films, the finale, the second key visual with the end line, then the storyboard as process
      hero: "bleed",
      layout: "loose",
      gallery: [
        { video: "images/warriors/film.mp4", webm: "images/warriors/film.webm", poster: "images/warriors/film-poster.jpg", ar: "16/9", col: 1, span: 9, speed: .03, caption: { en: "Film 01 — Messi vs Beckenbauer", pt: "Filme 01 — Messi vs Beckenbauer" } },
        { text: { en: "Adidas — official FIFA World Cup ball supplier since 1970.", pt: "Adidas — fornecedora oficial da bola da Copa do Mundo FIFA desde 1970." }, col: 6, span: 7, shift: "4vh" },
        { video: "images/warriors/film-02.mp4", webm: "images/warriors/film-02.webm", poster: "images/warriors/film-02-poster.jpg", ar: "16/9", col: 4, span: 9, speed: -.03, caption: { en: "Film 02 — The breakaway", pt: "Filme 02 — A arrancada" } },
        { text: { en: "Higuita, final boss.", pt: "Higuita, o chefão final." }, col: 1, span: 6, shift: "6vh" },
        { video: "images/warriors/film-03.mp4", webm: "images/warriors/film-03.webm", poster: "images/warriors/film-03-poster.jpg", ar: "16/9", col: 4, span: 9, speed: .02, caption: { en: "Film 03 — Finale: Yamal scores", pt: "Filme 03 — Final: Yamal marca" } },
        { src: "images/warriors/key-visual-02.jpg", ar: "2000/1116", col: 1, span: 7, shift: "-30vh", speed: .05, caption: { en: "Key visual 02 — Yamal vs Higuita", pt: "Key visual 02 — Yamal vs Higuita" } },
        { src: "images/warriors/storyboard.jpg", ar: "2000/1116", col: 1, span: 12, shift: "4vh", caption: { en: "Storyboard — six scenes, from Pelé to the end card", pt: "Storyboard — seis cenas, de Pelé ao end card" } },
      ],
    },
    { title: { en: "Packaging", pt: "Embalagem" }, scope: { en: "Packaging // Illustration", pt: "Embalagem // Ilustração" }, year: "2025", hue: [200, 70, 45], placeholder: true },
    { title: { en: "Type Specimen", pt: "Espécime Tipográfico" }, scope: { en: "Custom Typography", pt: "Tipografia Customizada" }, year: "2025", hue: [0, 0, 15], placeholder: true },
    { title: { en: "Campaign", pt: "Campanha" }, scope: { en: "Advertising // Art Direction", pt: "Publicidade // Direção de Arte" }, year: "2024", hue: [150, 55, 40], placeholder: true },
    { title: { en: "Editorial", pt: "Editorial" }, scope: { en: "Layout // Publication", pt: "Layout // Publicação" }, year: "2024", hue: [18, 85, 55], placeholder: true },
  ],
};
