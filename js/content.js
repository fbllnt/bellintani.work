// All site copy and projects live here. Edit this file to update the site.
// Text in two languages is written as { en: "…", pt: "…" }. Plain strings are the same in both.
window.SITE = {
  name: "Bellintani",
  year: "27",
  email: "felipe@bellintani.work",
  social: [
    { label: "Instagram", url: "https://www.instagram.com/fbllnt/" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/fbellintani/" },
  ],
  tagline: {
    en: "Multidisciplinary designer, art director, creative mind, hyperfocused ADHD brain, dad of a 7-year-old princess, music freak, amateur photographer, and whatever comes next.",
    pt: "Designer multidisciplinar, diretor de arte, criativo hiperfocado (valeu, TDAH), pai de uma princesa de 7 anos, viciado em música, fotógrafo amador e o que mais vier.", es: "Diseñador multidisciplinario, director de arte, creativo hiperenfocado (gracias, TDAH), papá de una princesa de 7 años, fanático de la música, fotógrafo aficionado y lo que venga.",
  },
  subline: {
    en: ["Branding & Identity, Advertising, Digital, Social, Vibe Coding and AI Workflows"],
    pt: ["Branding & identidade, publicidade, digital, social, vibe coding e workflows com IA"], es: ["Branding & identidad, publicidad, digital, social, vibe coding y workflows con IA"],
  },
  // Intro loader: lines of words, left-aligned; each word cuts on in turn (a word starting with * shows in blue).
  // loaderBig ends on one huge line that then bursts toward the viewer and reveals the site (Felipe, Oct 27 2026).
  // English only, in both languages (Felipe).
  loader: [["Daft", "Punk", "is", "playing"], ["at", "my", "house,"]],
  loaderBig: "My house",
  // Suggested music (Felipe, Oct 27 2026): a small Spotify player behind "Soundtrack" in the top-right corner (was "♪ Music" until Oct 29 2026).
  // Each project sets track: { id (Spotify track id, from open.spotify.com/track/<id>), name, by }; the home plays homeTrack.
  // false: "Falta" placeholders ("?" meta, todo boxes, empty chapters) stay off the site; true brings them back
  showMissing: false,
  homeTrack: { id: "73mlvsfJM2qwlDUJxeaatI", name: "Daft Punk Is Playing at My House", by: "LCD Soundsystem" },
  // Services follow the tagline/subline and the kinds of work shown (Oct 27 2026 review)
  services: {
    en: ["Branding & identity", "Campaigns & advertising", "Art direction", "Video, Content & TV", "Digital & social", "Vibe coding & AI workflows"],
    pt: ["Branding & identidade", "Campanhas & publicidade", "Direção de arte", "Video, Content & TV", "Digital & social", "Vibe coding & workflows com IA"], es: ["Branding & identidad", "Campañas & publicidad", "Dirección de arte", "Video, Content & TV", "Digital & social", "Vibe coding & workflows con IA"],
  },

  // About, run as film end credits (content from LinkedIn).
  // Each block: { head, rows }. A row is { role, name, years, url } (name, role, years on one ruled line) or a single
  // value; `flow: true` runs single values as one line of text. `placeholder: true` marks unfinished blocks.
  about: {
    intro: {
      en: "I build brands, design systems and creative operations that scale. For over 20 years I've led branding, design and creative work across Latin America, Europe and North America.",
      pt: "Crio marcas, sistemas de design e operações criativas que crescem junto com a empresa. Faz mais de 20 anos que lidero branding, design e criação na América Latina, na Europa e na América do Norte.", es: "Creo marcas, sistemas de diseño y operaciones creativas que crecen junto con la empresa. Hace más de 20 años que lidero branding, diseño y creación en América Latina, Europa y Norteamérica.",
    },
    credits: [
      { head: { en: "Experience", pt: "Experiência", es: "Experiencia" }, rows: [
        { role: "Senior Visual Designer", name: "Housecall Pro", years: { en: "2026 — now", pt: "2026 — hoje", es: "2026 — hoy" } },
        { role: "Creative Director", name: "500 Designs", years: "2026" },
        { role: "Owner / Design Director", name: "Haute Rift", years: "2018 — 2025" },
        { role: "Brand Design Specialist", name: "JBS", years: "2021 — 2023" },
        { role: "Senior Art Director", name: "VML", years: "2020 — 2022" },
        { role: "Lead Designer", name: "Globo", years: "2014 — 2018" },
        { role: "Senior Art Director", name: "Lew'Lara\\TBWA", years: "2012 — 2014" },
        { role: "Head of Art", name: "Havas (EuroRSCG 4D)", years: "2010 — 2011" },
        { role: "Interactive Art Director / Team Lead", name: "AgênciaClick", years: "2008 — 2010" },
        { role: "Interactive Art Director / Team Lead", name: "Wunderman Thompson", years: "2006 — 2008" },
      ] },
      { head: { en: "Clients", pt: "Clientes", es: "Clientes" }, flow: true, rows: [
        "Adidas", "Globo", "Meta", "Pernod Ricard", "Diageo", "Absolut", "Gatorade", "Nissan", "Land Rover", "Nokia", "Philips",
        "FIAT", "TIM", "Banco do Brasil", "Velo / Vuse", "Qiddiya", "JBS", "Housecall Pro", "ANTI Creative Finance", "SCRV.ag",
      ] },
      { head: { en: "Education", pt: "Formação", es: "Formación" }, rows: [
        { role: { en: "MBA, Data-Driven Marketing and AI", pt: "MBA, Marketing Orientado a Dados e IA", es: "MBA, Marketing Basado en Datos e IA" }, name: "USP / Esalq", years: "2026 — 2027" },
        { role: { en: "Master's, Branding", pt: "Mestrado, Branding", es: "Maestría, Branding" }, name: "ESPM", years: "2022 — 2024" },
        { role: { en: "UX/UI Design", pt: "UX/UI Design", es: "UX/UI Design" }, name: "EBAC", years: "2020 — 2022" },
        { role: { en: "Master's, Design and Applied Arts", pt: "Mestrado, Design e Artes Aplicadas", es: "Maestría, Diseño y Artes Aplicadas" }, name: "IDEP Barcelona", years: "2005 — 2006" },
        { role: { en: "Bachelor's, Advertising and Marketing", pt: "Bacharelado, Propaganda e Marketing", es: "Licenciatura, Publicidad y Marketing" }, name: "FAAP", years: "1998 — 2002" },
      ] },
      { head: { en: "Languages", pt: "Idiomas", es: "Idiomas" }, rows: [
        { role: { en: "Native or bilingual", pt: "Nativo ou bilíngue", es: "Nativo o bilingüe" }, name: { en: "Portuguese", pt: "Português", es: "Portugués" } },
        { role: { en: "Native or bilingual", pt: "Nativo ou bilíngue", es: "Nativo o bilingüe" }, name: { en: "English", pt: "Inglês", es: "Inglés" } },
        { role: { en: "Native or bilingual", pt: "Nativo ou bilíngue", es: "Nativo o bilingüe" }, name: { en: "Spanish", pt: "Espanhol", es: "Español" } },
        { role: { en: "Limited working", pt: "Proficiência limitada", es: "Competencia limitada" }, name: { en: "Italian", pt: "Italiano", es: "Italiano" } },
        { role: { en: "Limited working", pt: "Proficiência limitada", es: "Competencia limitada" }, name: { en: "Catalan", pt: "Catalão", es: "Catalán" } },
      ] },
      { head: { en: "Contact", pt: "Contato", es: "Contacto" }, rows: [
        { role: "Email", name: "felipe@bellintani.work", url: "mailto:felipe@bellintani.work" },
        { role: "Instagram", name: "@fbllnt", url: "https://www.instagram.com/fbllnt/" },
        { role: "LinkedIn", name: "in/fbellintani", url: "https://www.linkedin.com/in/fbellintani/" },
      ] },
    ],
    end: { en: "No pixels were harmed in the making of this portfolio.", pt: "Nenhum pixel foi ferido durante a produção deste portfólio.", es: "Ningún píxel salió herido durante la producción de este portafolio." },
  },

  // Interface labels
  ui: {
    en: {
      homeNav: "Home", work: "Work", backHome: "← Home", services: "Services", letsTalk: "Let's talk",
      skip: "Skip intro →", replay: "↻ Replay intro", index: "Index", grid: "Grid", view: "View",
      gotProject: "( Got a project? )", allWork: "← All work", next: "( Next project )", about: "( About )",
      client: "Client", year: "Year", scope: "Scope", role: "Role", type: "Type", before: "Before", after: "After", sector: "Sector", deliverables: "Deliverables", tools: "Tools & AI", openSite: "Open the site", aiMark: "AI", live: "Live",
      dragToRotate: "⟷ Drag to rotate", play: "Play", pause: "Pause", soundOn: "Sound on", soundOff: "Sound off", fullscreen: "Full screen", all: "All", filter: "Filter by sector", close: "Close", prev: "Previous", nextItem: "Next", brandCases: "Cases", caseOf: "Case {n} of {t}", closeCase: "Close", soon: "Under construction", scrollToPlay: "Scroll to play ↓", aboutNav: "About", scrollDown: "Scroll down to see the work", overview: "Overview", camera: "Camera", film: "Film", drag: "Drag", aboutTitle: "About",
      logoHint: "Click the logo to close · ← → to browse", logoHintTouch: "Tap the logo to close · Swipe to browse",
      placeholder: "Placeholder", missing: "Missing", selectedWork: "Selected work",
      placeholderText: "Placeholder text. Replace with the project story: the brief, the idea, and what was made.",
      music: "Soundtrack", musicLabel: "Suggested music", nowSuggested: "Suggested soundtrack", musicSwap: "Play this project's song",
      fullCase: "See the full case", moreChapters: "{n} more chapters", turning: "Turning B®", langLabel: "Language", viewProject: "View", skipToContent: "Skip to content", projectNav: "Project navigation", filterArea: "Filter projects by discipline", filterGroup: "Project categories", soundtrack: "Portfolio soundtrack",
      description: "Bellintani — Multidisciplinary designer, art director, creative mind, hyperfocused ADHD brain, dad of a 7-year-old princess, music freak, amateur photographer, and whatever comes next.",
    },
    pt: {
      homeNav: "Início", work: "Trabalhos", backHome: "← Início", services: "Serviços", letsTalk: "Vamos conversar",
      skip: "Pular intro →", replay: "↻ Rever intro", index: "Lista", grid: "Grade", view: "Ver",
      gotProject: "( Tem um projeto? )", allWork: "← Todos os trabalhos", next: "( Próximo projeto )", about: "( Sobre )",
      client: "Cliente", year: "Ano", scope: "Escopo", role: "Função", type: "Tipo", before: "Antes", after: "Depois", sector: "Setor", deliverables: "Entregas", tools: "Ferramentas & IA", openSite: "Abrir o site", aiMark: "IA", live: "No ar",
      dragToRotate: "⟷ Arrasta pra girar", play: "Play", pause: "Pausar", soundOn: "Com som", soundOff: "Sem som", fullscreen: "Tela cheia", all: "Todos", filter: "Filtrar por setor", close: "Fechar", prev: "Anterior", nextItem: "Próximo", brandCases: "Cases", caseOf: "Case {n} de {t}", closeCase: "Fechar", soon: "Em construção", scrollToPlay: "Desce pra assistir ↓", aboutNav: "Sobre", scrollDown: "Desce pra ver os trabalhos", overview: "Visão geral", camera: "Câmera", film: "Filme", drag: "Arrasta", aboutTitle: "Sobre",
      logoHint: "Clica no logo pra fechar · ← → pra navegar", logoHintTouch: "Toca no logo pra fechar · Arrasta pro lado pra navegar",
      placeholder: "Provisório", missing: "Falta", selectedWork: "Trabalhos selecionados",
      placeholderText: "Texto provisório. Aqui entra a história do projeto: o briefing, a ideia e o que saiu dele.",
      music: "Trilha", musicLabel: "Música sugerida", nowSuggested: "Trilha sugerida", musicSwap: "Tocar a música deste projeto",
      fullCase: "Ver o case completo", moreChapters: "mais {n} capítulos", turning: "Girando o B®", langLabel: "Idioma", viewProject: "Ver", skipToContent: "Pular para o conteúdo", projectNav: "Navegação entre projetos", filterArea: "Filtrar projetos por disciplina", filterGroup: "Categorias de projeto", soundtrack: "Trilha do portfólio",
      description: "Bellintani — Designer multidisciplinar, diretor de arte, criativo hiperfocado (valeu, TDAH), pai de uma princesa de 7 anos, viciado em música, fotógrafo amador e o que mais vier.",
    },
    es: {
      homeNav: "Inicio", work: "Trabajos", backHome: "← Inicio", services: "Servicios", letsTalk: "Hablemos",
      skip: "Saltar intro →", replay: "↻ Ver intro de nuevo", index: "Lista", grid: "Cuadrícula", view: "Vista",
      gotProject: "( ¿Tienes un proyecto? )", allWork: "← Todos los trabajos", next: "( Siguiente proyecto )", about: "( Sobre mí )",
      client: "Cliente", year: "Año", scope: "Alcance", role: "Rol", type: "Tipo", before: "Antes", after: "Después", sector: "Sector", deliverables: "Entregables", tools: "Herramientas & IA", openSite: "Abrir el sitio", aiMark: "IA", live: "En línea",
      dragToRotate: "⟷ Arrastra para girar", play: "Play", pause: "Pausa", soundOn: "Con sonido", soundOff: "Sin sonido", fullscreen: "Pantalla completa", all: "Todos", filter: "Filtrar por sector", close: "Cerrar", prev: "Anterior", nextItem: "Siguiente", brandCases: "Casos", caseOf: "Caso {n} de {t}", closeCase: "Cerrar", soon: "En construcción", scrollToPlay: "Desliza para ver ↓", aboutNav: "Sobre mí", scrollDown: "Desliza para ver los trabajos", overview: "Visión general", camera: "Cámara", film: "Película", drag: "Arrastra", aboutTitle: "Sobre mí",
      logoHint: "Haz clic en el logo para cerrar · ← → para navegar", logoHintTouch: "Toca el logo para cerrar · Desliza para navegar",
      placeholder: "Provisional", missing: "Falta", selectedWork: "Trabajos seleccionados",
      placeholderText: "Texto provisional. Reemplázalo con la historia del proyecto: el brief, la idea y lo que se hizo.",
      music: "Banda sonora", musicLabel: "Música sugerida", nowSuggested: "Banda sonora sugerida", musicSwap: "Reproducir la canción de este proyecto",
      fullCase: "Ver el caso completo", moreChapters: "{n} capítulos más", turning: "Girando la B®", langLabel: "Idioma", viewProject: "Ver", skipToContent: "Saltar al contenido", projectNav: "Navegación entre proyectos", filterArea: "Filtrar proyectos por disciplina", filterGroup: "Categorías de proyecto", soundtrack: "Banda sonora del portafolio",
      description: "Bellintani — Diseñador multidisciplinario, director de arte, creativo hiperenfocado (gracias, TDAH), papá de una princesa de 7 años, fanático de la música, fotógrafo aficionado y lo que venga.",
    },
  },

  // Kinds of work. Each project sets `type` and tells its story in that kind's chapter pattern:
  //   branding: 01 Intro · Desafio · Naming/Símbolo · Sistema (cor, tipo) · Posicionamento/Estratégia · Identidade aplicada
  //   campaign: 01 Ideia · Ativação/Key visual · Peças (rua, digital, social) · Filmes · 360°/extras
  //   motion:   01 Ideia · Filme · Frames · Processo
  types: {
    branding: { en: "Branding", pt: "Branding", es: "Branding" },
    campaign: { en: "Campaign · Advertising", pt: "Campanha · Publicidade", es: "Campaña · Publicidad" },
    motion: { en: "Motion · Film", pt: "Motion · Filme", es: "Motion · Cine" },
    poster: { en: "Poster · Lettering", pt: "Pôster · Lettering", es: "Póster · Lettering" },
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
    // Curated work order (Oct 28 2026): brand and campaign work first, alternating disciplines; Logofolio last. Navigation follows this list.
    {
      title: "Seja ANTI",
      track: { id: "59WN2psjkt1tyaxjspN8fp", name: "Killing In The Name", by: "Rage Against The Machine" },
      type: "campaign",
      client: "ANTI Creative Finance",
      // Credits (ficha técnica): shown in the meta after Tools; url makes the name a link
      credits: [
        { role: { en: "Agency", pt: "Agência", es: "Agencia" }, name: "Fair Creativity Shop", url: "https://fair.com.ag/" },
        { role: "COO", name: "Mauricio Prado" },
        { role: "CCO / Copywriter", name: "Juliano Ribas" },
        { role: { en: "Production", pt: "Produção", es: "Producción" }, name: "CASAAS", url: "https://casaas.com.br/" },
      ],
      year: "2026",
      role: { en: "Lead Designer / Art Director / AI Creator / UX/UI", pt: "Lead Designer / Diretor de Arte / AI Creator / UX/UI", es: "Lead Designer / Director de Arte / AI Creator / UX/UI" },
      scope: { en: "Campaign // Activation // Digital", pt: "Campanha // Ativação // Digital", es: "Campaña // Activación // Digital" },
      sector: { en: "Finance for creatives", pt: "Finanças para criativos", es: "Finanzas para creativos" },
      deliverables: { en: "Activation, films, posters, social content and landing page", pt: "Ativação, filmes, pôsteres, conteúdo de redes sociais e landing page", es: "Activación, videos, pósteres, contenido para redes y landing page" },
      tags: { en: ["Campaign", "Activation", "OOH", "Digital"], pt: ["Campanha", "Ativação", "OOH", "Digital"], es: ["Campaña", "Activación", "OOH", "Digital"] },
      // Black page, white type, ANTI lime accent
      theme: { bg: "#000000", fg: "#ffffff", mute: "#8e8e8e", line: "#2a2a2a", panel: "#111111", accent: "#d7f205" },
      // Tools in use order; a leading * marks an AI tool
      tools: ["Adobe CC", "*Flora.AI", "*Claude Code", "*Midjourney"],
      image: "images/anti/skeletons.jpg",
      link: { label: "naoespere.sejaanti.com.br", url: "https://naoespere.sejaanti.com.br" },
      summary: {
        en: "“Não espere uma vida para receber.” Don't wait a lifetime to get paid. At the Clube de Criação de São Paulo festival, four benches were taken by skeletons still waiting for their money: the Influencer, the Producer, the Creator and the Creative. The idea then ran through films, street posters, social and a landing page.",
        pt: "“Não espere uma vida para receber.” No festival do Clube de Criação de São Paulo, quatro esqueletos tomaram quatro bancos, ainda à espera do pagamento: o Influencer, o Produtor, o Creator e o Criativo. Depois, a ideia ganhou filmes, lambe-lambes, redes sociais e uma landing page.", es: "“Não espere uma vida para receber.” No esperes toda una vida para cobrar. En el festival del Clube de Criação de São Paulo, cuatro esqueletos ocuparon cuatro bancos, todavía esperando su pago: el Influencer, el Productor, el Creator y el Creativo. Después, la idea saltó a videos, carteles pegados en la calle, redes sociales y una landing page.",
      },
      stats: [
        ["4", { en: "Benches", pt: "Bancos", es: "Bancos" }],
        ["4", { en: "Films", pt: "Filmes", es: "Videos" }],
        ["23", { en: "Posters", pt: "Pôsteres", es: "Pósteres" }],
        ["117", { en: "Social statics", pt: "Posts estáticos", es: "Estáticos para redes" }],
        ["30", { en: "Animations", pt: "Animações", es: "Animaciones" }],
        ["1", { en: "Landing page", pt: "Landing page", es: "Landing page" }],
      ],
      // Loose layout: benches float as a staggered collage, the campaign line sits big between them and the films
      layout: "loose", grid: "fluxo",
      gallery: [
        { chapter: { en: "01 · Idea", pt: "01 · Ideia", es: "01 · Idea" }, kicker: { en: "Receba antes, seja ANTI", pt: "Receba antes, seja ANTI", es: "Receba antes, seja ANTI" },
          head: { en: "Don't wait a *lifetime* to get paid.", pt: "Não espere uma *vida* para receber.", es: "No esperes toda una *vida* para cobrar." },
          text: { en: "The campaign line, taken literally: people who waited so long for their money that only the skeleton is left. The Influencer, the Producer, the Creator and the Creative.", pt: "A frase da campanha, levada ao pé da letra: gente que esperou tanto pelo pagamento que só sobrou o esqueleto. O Influencer, o Produtor, o Creator e o Criativo.", es: "La frase de la campaña, tomada al pie de la letra: gente que esperó tanto su pago que solo le quedó el esqueleto. El Influencer, el Productor, el Creator y el Creativo." } },
        { chapter: { en: "02 · Activation", pt: "02 · Ativação", es: "02 · Activación" }, kicker: { en: "Clube de Criação de São Paulo", pt: "Clube de Criação de São Paulo", es: "Clube de Criação de São Paulo" },
          head: { en: "Four benches, four skeletons, *still waiting.*", pt: "Quatro bancos, quatro esqueletos, *ainda esperando.*", es: "Cuatro bancos, cuatro esqueletos, *todavía esperando.*" },
          text: { en: "At the Clube de Criação de São Paulo festival, four benches were taken by skeletons still waiting for their money.", pt: "No festival do Clube de Criação de São Paulo, quatro esqueletos tomaram quatro bancos, ainda à espera do pagamento.", es: "En el festival del Clube de Criação de São Paulo, cuatro esqueletos ocuparon cuatro bancos, todavía esperando su pago." } },
        { flip: [
            { src: "images/anti/bench-influencer.jpg", ar: "9/5", caption: { en: "Bench 01 — Influencer", pt: "Banco 01 — Influencer", es: "Banco 01 — Influencer" } },
            { src: "images/anti/bench-produtor.jpg", ar: "9/5", caption: { en: "Bench 02 — Producer", pt: "Banco 02 — Produtor", es: "Banco 02 — Productor" } },
            { src: "images/anti/bench-creator.jpg", ar: "9/5", caption: { en: "Bench 03 — Creator", pt: "Banco 03 — Creator", es: "Banco 03 — Creator" } },
            { src: "images/anti/bench-criativo.jpg", ar: "9/5", caption: { en: "Bench 04 — Creative", pt: "Banco 04 — Criativo", es: "Banco 04 — Creativo" } },
          ], col: 1, span: 12 },
        { chapter: { en: "03 · Street", pt: "03 · Rua", es: "03 · Calle" }, kicker: { en: "Lambe-lambes · São Paulo", pt: "Lambe-lambes · São Paulo", es: "Lambe-lambes · São Paulo" },
          head: { en: "From the festival to the *street.*", pt: "Do festival para a *rua.*", es: "Del festival a la *calle.*" } },
        // Free my freela poster removed for now (Felipe, Oct 26 2026); file kept. Backstage film (film-ccsp) moved to
        // 04 Digital, beside the headline (Felipe, Oct 27 2026)
        { src: "images/anti/poster-skeleton.jpg", ar: "1411/2000", col: 1, span: 6 },
        { src: "images/anti/poster-anti.jpg", ar: "1411/2000", col: 7, span: 6 },
        { src: "images/anti/street-posters.jpg", ar: "2000/1121", col: 1, span: 12, caption: { en: "Lambe-lambe posters on the street, São Paulo", pt: "Lambe-lambes nas ruas de São Paulo", es: "Carteles pegados en las calles de São Paulo" } },
        { src: "images/anti/street-wall-night.jpg", ar: "2000/1121", col: 1, span: 12 },
        // Yellow poster wall (street-wall-yellow.jpg) removed by Felipe, Oct 26 2026; file kept
        { chapter: { en: "04 · Digital", pt: "04 · Digital", es: "04 · Digital" }, kicker: { en: "naoespere.sejaanti.com.br", pt: "naoespere.sejaanti.com.br", es: "naoespere.sejaanti.com.br" },
          head: { en: "A landing page that counts the *wait.*", pt: "Uma landing page que conta a *espera.*", es: "Una landing page que cuenta la *espera.*" } },
        { embed: { url: "https://naoespere.sejaanti.com.br", src: "embeds/anti/index.html", w: 1440, h: 900 }, poster: "images/anti/site-espere.jpg", col: 1, span: 12, featureWide: true,
          side: { video: "images/anti/film-ccsp.mp4", poster: "images/anti/film-ccsp-poster.jpg", ar: "9/16", caption: { en: "Backstage — ANTI at the CCSP festival", pt: "Bastidores — ANTI no festival do CCSP", es: "Detrás de cámaras — ANTI en el festival del CCSP" } },
          caption: { en: "Landing page, live — click to open the site", pt: "Landing page no ar — clique para abrir o site", es: "Landing page online — haz clic para abrir el sitio" } },
        { chapter: { en: "05 · Films", pt: "05 · Filmes", es: "05 · Videos" }, kicker: { en: "4 films", pt: "4 filmes", es: "4 videos" },
          head: { en: "The same wait, *in motion.*", pt: "A mesma espera, *em movimento.*", es: "La misma espera, *en movimiento.*" } },
        // 2×2, yellow and red on the diagonal; each film starts at a different point so the four never look in sync
        { video: "images/anti/film-freela.mp4", webm: "images/anti/film-freela.webm", poster: "images/anti/film-freela-poster.jpg", ar: "16/9", offset: 0, col: 1, span: 6, caption: { en: "Film 001 — Free my freela", pt: "Filme 001 — Free my freela", es: "Video 001 — Free my freela" } },
        { video: "images/anti/film-umavida.mp4", webm: "images/anti/film-umavida.webm", poster: "images/anti/film-umavida-poster.jpg", ar: "16/9", offset: 2.5, col: 7, span: 6, caption: { en: "Film 003 — Uma vida", pt: "Filme 003 — Uma vida", es: "Video 003 — Uma vida" } },
        { video: "images/anti/film-payday.mp4", webm: "images/anti/film-payday.webm", poster: "images/anti/film-payday-poster.jpg", ar: "16/9", offset: 5, col: 1, span: 6, caption: { en: "Film 004 — Payday", pt: "Filme 004 — Payday", es: "Video 004 — Payday" } },
        { video: "images/anti/film-jab.mp4", webm: "images/anti/film-jab.webm", poster: "images/anti/film-jab-poster.jpg", ar: "16/9", offset: 7.5, col: 7, span: 6, caption: { en: "Film 002 — Jab", pt: "Filme 002 — Jab", es: "Video 002 — Jab" } },
        { spin: { frames: "images/anti/spin/###.jpg", count: 120 }, ar: "16/9", col: 1, span: 12, caption: { en: "The waiting skeleton, in 360°", pt: "O esqueleto à espera, em 360°", es: "El esqueleto que espera, en 360°" } },
      ],
    },
    {
      title: "Globo",
      track: { id: "4NexI5goFxDd1zXcLF2x6x", name: "Do Leme ao Pontal", by: "Tim Maia" },
      // A brand case (Felipe, Nov 13 2026, same navigation as Housecall Pro): Globo opens on the brand, then its three
      // cases in this order: Globo, Globo On, Globoplay. Old links /p/globo-on/ and /p/globoplay/ land on their case here.
      type: "branding",
      client: "Globo",
      year: "2014 — 2018",
      role: { en: "Lead Designer / Head of Art / Illustrator / Senior Multidisciplinary Designer", pt: "Lead Designer / Head of Art / Ilustrador / Designer multidisciplinar sênior", es: "Lead Designer / Head of Art / Ilustrador / Diseñador multidisciplinario sénior" },
      scope: { en: "Branding // On air // Streaming", pt: "Branding // On air // Streaming", es: "Branding // On air // Streaming" },
      sector: { en: "TV broadcaster", pt: "Emissora de TV", es: "Canal de TV" },
      tags: { en: ["Branding", "OnAir", "Motion", "Streaming"], pt: ["Branding", "OnAir", "Motion", "Streaming"], es: ["Branding", "OnAir", "Motion", "Streaming"] },
      tools: ["Adobe CC"],
      // Cover (Felipe, Nov 15 2026): the 3D mark film, large, above the cases; the gradient still went to the Rebranding case
      image: "images/globo/nave-mae-poster.jpg",
      coverVideo: { mp4: "images/globo/nave-mae.mp4", webm: "images/globo/nave-mae.webm" },
      hero: "bleed",
      heroAr: "16/9",
      // Intro of the brand page (Felipe, Nov 15 2026: suggestion based on his LinkedIn, Lead Designer 2014-2018)
      summary: {
        en: "Four years at Globo, 2014 to 2018, as Lead Designer for branding and identity: from the brand itself to entertainment, news and sports products and events, in Brazil and abroad. Three cases tell the story: Globo's rebrand, Globo On and Globoplay.",
        pt: "Quatro anos na Globo, de 2014 a 2018, como Lead Designer de branding e identidade: da própria marca a produtos e eventos de entretenimento, jornalismo e esporte, no Brasil e em outros países. Três cases contam essa história: o rebranding da Globo, o Globo On e o Globoplay.",
        es: "Cuatro años en Globo, de 2014 a 2018, como Lead Designer de branding e identidad: desde la propia marca hasta productos y eventos de entretenimiento, periodismo y deportes, en Brasil y en otros países. Tres casos cuentan esta historia: el rebranding de Globo, Globo On y Globoplay.",
      },
      layout: "loose", grid: "fluxo",
      gallery: [],
      cases: [
        {
          // The 2016 graphic system (was the "Globo" project until Nov 13 2026; just "Rebranding" inside the brand, Felipe Nov 15 2026)
          slug: "rebranding",
          title: { en: "Rebranding", pt: "Rebranding", es: "Rebranding" },
          fold: 4, // v2: shorter case, the rest behind "See the full case" (Nov 16 2026)
          // Each case keeps its own cover (Felipe, Nov 15 2026): the living gradient that was the Globo page's cover
          image: "images/globo/cover.jpg",
          heroAr: "2500/1562",
          coverFlow: [
            [6, 40, 75, "#e68ba4", 16, 12, 13],
            [4, 104, 70, "#bf338f", 14, -10, 16],
            [30, 52, 58, "#ece0d2", 22, -14, 11],
            [52, 44, 52, "#6dd8cf", -18, 16, 12],
            [68, 6, 62, "#36a6bd", -14, 14, 14],
            [102, 32, 72, "#26569c", -12, 10, 13],
            [100, 106, 72, "#2d3377", -14, -8, 17],
            [56, 104, 52, "#8178a4", 16, -12, 15],
          ],
          type: "branding",
          client: "Globo",
          // Ficha técnica (Felipe, Nov 1 2026: credit Plau and Estúdio Sílvia Girão here, never in highlighted text)
          credits: [
            { role: "Type design", name: "Plau" },
            { role: { en: "Signage", pt: "Sinalização", es: "Señalización" }, name: "Estúdio Sílvia Girão" },
          ],
          year: "2014 — 2018",
          role: { en: "Lead Designer / Head of Art / Illustrator / Senior Multidisciplinary Designer", pt: "Lead Designer / Head of Art / Ilustrador / Designer multidisciplinar sênior", es: "Lead Designer / Head of Art / Ilustrador / Diseñador multidisciplinario sénior" },
          scope: { en: "Branding // Rebrand // Motion", pt: "Branding // Rebranding // Motion", es: "Branding // Rebranding // Motion" },
          sector: { en: "TV broadcaster", pt: "Emissora de TV", es: "Canal de TV" },
          deliverables: { en: "Design system, colours and gradients, type family, show identities, openings and vignettes", pt: "Sistema de design, cores e degradês, família tipográfica, identidades de programas, aberturas e vinhetas", es: "Sistema de diseño, colores y degradados, familia tipográfica, identidades de programas, aperturas y viñetas" },
          tags: { en: ["Branding", "Rebrand", "Motion"], pt: ["Branding", "Rebranding", "Motion"], es: ["Branding", "Rebranding", "Motion"] },
          tools: ["Adobe CC"],
          summary: {
            en: "Globo's rebrand, Brazil's largest broadcaster: the new design system, brand volume rules, colours and gradients, the new type family and the materials behind the new brandbook. Around it, on-air studies, show identities, openings and vignettes.",
            pt: "O rebranding da Globo, a maior emissora do Brasil: o novo sistema de design, as regras de volume da marca, cores e degradês, a nova família tipográfica e o material que alimentou o novo brandbook. Em volta dele, estudos on air, identidades de programas, aberturas e vinhetas.",
            es: "El rebranding de Globo, el canal más grande de Brasil: el nuevo sistema de diseño, las reglas de volumen de la marca, colores y degradados, la nueva familia tipográfica y el material que alimentó el nuevo brandbook. A su alrededor, estudios on air, identidades de programas, aperturas y viñetas.",
          },
          layout: "loose", grid: "trilho",
          gallery: [
            { chapter: { en: "01 · Intro", pt: "01 · Intro", es: "01 · Intro" }, kicker: { en: "2014 — 2018", pt: "2014 — 2018", es: "2014 — 2018" },
              head: { en: "Four years at Brazil's largest *broadcaster.*", pt: "Quatro anos na maior *emissora* do Brasil.", es: "Cuatro años en el *canal* más grande de Brasil." } },
            { video: "images/globo/nave-mae.mp4", webm: "images/globo/nave-mae.webm", poster: "images/globo/nave-mae-poster.jpg", ar: "16/9", col: 1, span: 12, caption: { en: "The 3D mark, always in motion", pt: "A marca 3D, sempre em movimento", es: "La marca 3D, siempre en movimiento" } },
            { chapter: { en: "02 · Challenge", pt: "02 · Desafio", es: "02 · Desafío" }, kicker: { en: "Graphic system", pt: "Linguagem gráfica", es: "Sistema gráfico" },
              head: { en: "Circle and gradient, *always moving.*", pt: "Círculo e degradê, *sempre em movimento.*", es: "Círculo y degradado, *siempre en movimiento.*" },
              text: { en: "Join Globo's circle and gradient into a metaphor for endless motion: a flexible device, on film or in print, that speaks for the brand with or without a show on screen.", pt: "Juntar o círculo e o degradê da Globo numa metáfora de movimento sem fim: um recurso flexível, no filme ou no impresso, que fala pela marca com ou sem programa na tela.", es: "Unir el círculo y el degradado de Globo en una metáfora de movimiento sin fin: un recurso flexible, en video o en impresos, que habla por la marca con o sin programa en pantalla." },
              pills: [{ en: "One screen → many", pt: "Uma tela → várias", es: "Una pantalla → varias" }, { en: "Monologue → conversation", pt: "Monólogo → conversa", es: "Monólogo → conversación" }, { en: "Solidity → lightness", pt: "Solidez → leveza", es: "Solidez → ligereza" }, { en: "Linear → non-linear", pt: "Linear → não linear", es: "Lineal → no lineal" }, { en: "Certainty → beta", pt: "Certeza → beta", es: "Certeza → beta" }, { en: "*Me → us", pt: "*Eu → nós", es: "*Yo → nosotros" }] },
            // The cover already shows the living gradient, so the movement diagram sits beside the Challenge text
            // (Felipe, Oct 29 2026: the repeated gradient here was redundant; degrade.jpg is kept in images/). `vh: 56` keeps it
            // well below the screen height (Felipe, Oct 29 2026: "dar uma boa diminuída").
            { src: "images/globo/movimento-diagrama.png", ar: "1854/1577", vh: 56, col: 1, span: 12, caption: { en: "Movement and its meanings", pt: "O movimento e seus significados", es: "El movimiento y sus significados" } },
            { grid: "trilho", chapter: { en: "04 · System", pt: "04 · Sistema", es: "04 · Sistema" }, kicker: { en: "Logo · graphics · colour", pt: "Logo · grafismos · cores", es: "Logo · gráficos · colores" },
              head: { en: "A new design system for the *network.*", pt: "Um novo sistema de design para a *emissora.*", es: "Un nuevo sistema de diseño para el *canal.*" },
              text: { en: "The logo's circle and rainbow take on new roles. The 3D logo stays institutional; the flat version takes the palette's colours. Gradients name the three pillars: news, sport and entertainment.", pt: "O círculo e o arco-íris do logo ganham novos papéis. O logo 3D fica com o institucional; o vetor assume as cores da paleta. Os degradês dão nome aos três pilares: jornalismo, esporte e entretenimento.", es: "El círculo y el arcoíris del logo ganan nuevos papeles. El logo 3D se queda con lo institucional; el vectorial toma los colores de la paleta. Los degradados le ponen nombre a los tres pilares: noticias, deportes y entretenimiento." },
              pills: [{ en: "3D logo", pt: "Logo 3D", es: "Logo 3D" }, { en: "Flat logo", pt: "Logo vetor", es: "Logo vectorial" }, { en: "Circle pattern", pt: "Pattern de círculos", es: "Patrón de círculos" }, { en: "8 colours", pt: "8 cores", es: "8 colores" }, { en: "*Gradients", pt: "*Degradês", es: "*Degradados" }] },
            { src: "images/globo/logo-3d-vetor.jpg", ar: "1397/646", col: 1, span: 6, caption: { en: "Logo — 3D and flat versions", pt: "Logo — versões 3D e vetor", es: "Logo — versiones 3D y vectorial" } },
            { src: "images/globo/grafismos.jpg", ar: "1962/1088", col: 7, span: 6, caption: { en: "Free circle pattern, white and solid colour", pt: "Pattern livre de círculos, branco e cor sólida", es: "Patrón libre de círculos, blanco y color sólido" } },
            // One large editorial infographic on the right; decorative gradient removed from this row.
            { src: "images/globo/gradientes-funcionais.jpg", ar: "1743/904", col: 1, span: 12, caption: { en: "Functional gradients — news, sport, entertainment", pt: "Degradês funcionais — jornalismo, esporte, entretenimento", es: "Degradados funcionales — noticias, deportes, entretenimiento" } },
            { gradientPalette: true },
            { chapter: { en: "06 · Type", pt: "06 · Tipografia", es: "06 · Tipografía" }, kicker: { en: "Globoface → Globotipo", pt: "Globoface → Globotipo", es: "Globoface → Globotipo" },
              head: { en: "From Globoface to *Globotipo.*", pt: "Da Globoface à *Globotipo.*", es: "De la Globoface a la *Globotipo.*" },
              text: { en: "Globotipo was born on Globoplay, replacing a mix of Swiss, Avant Garde and Futura. The idea was mine: a more modern Futura with rounded corners. It was drawn with the Globo team, especially Mariana Sá, Sérgio Valente and Cristiano Calvé. The June 2016 manual sets three classes, Text, Condensed and Rounded, each in five weights.", pt: "A Globotipo nasceu no Globoplay, no lugar de uma mistura de Swiss, Avant Garde e Futura. A ideia foi minha: uma Futura mais moderna, com cantos arredondados. O desenho saiu junto com o time da Globo, principalmente Mariana Sá, Sérgio Valente e Cristiano Calvé. O manual de junho de 2016 define três classes, Texto, Condensada e Arredondada, cada uma com cinco pesos.", es: "La Globotipo nació en Globoplay, en lugar de una mezcla de Swiss, Avant Garde y Futura. La idea fue mía: una Futura más moderna, con esquinas redondeadas. El diseño salió junto con el equipo de Globo, sobre todo Mariana Sá, Sérgio Valente y Cristiano Calvé. El manual de junio de 2016 define tres clases, Texto, Condensada y Redondeada, cada una con cinco pesos." },
              pills: [{ en: "Text", pt: "Texto", es: "Texto" }, { en: "Condensed", pt: "Condensada", es: "Condensada" }, { en: "*Rounded", pt: "*Arredondada", es: "*Redondeada" }, { en: "5 weights + italics", pt: "5 pesos + itálicos", es: "5 pesos + itálicas" }, { en: "Concept: Felipe Bellintani", pt: "Conceito: Felipe Bellintani", es: "Concepto: Felipe Bellintani" }] },
            { video: "images/globo/globotipo.mp4", poster: "images/globo/globotipo-poster.jpg", ar: "16/9", col: 1, span: 12, caption: { en: "Globotipo — the making-of", pt: "Globotipo — o making of", es: "Globotipo — el making of" } },
            { src: "images/globo/globotipo-familia.jpg", ar: "1901/1028", col: 1, span: 12, caption: { en: "Three classes, five weights, roman and italic: 30 fonts", pt: "Três classes, cinco pesos, romanos e itálicos: 30 fontes", es: "Tres clases, cinco pesos, redondas e itálicas: 30 fuentes" } },
            { src: "images/globo/globotipo-caracteres.jpg", ar: "1573/1031", col: 1, span: 6, caption: { en: "Globotipo Rounded, for titles", pt: "Globotipo Arredondada, para títulos", es: "Globotipo Redondeada, para títulos" } },
            { src: "images/globo/globotipo-uso.jpg", ar: "16/9", col: 7, span: 6, caption: { en: "Rounded and Condensed over the brand gradient", pt: "Arredondada e Condensada sobre o degradê da marca", es: "Redondeada y Condensada sobre el degradado de la marca" } },
            { text: { en: "Rounding, figures and accents — 29.01.2016", pt: "Arredondamento, numerais e acentos — 29.01.2016", es: "Redondeo, números y acentos — 29.01.2016" }, col: 1, span: 12 },
            { flip: [
              { src: "images/globo/tipo/f2-09.jpg", ar: "16/9", caption: { en: "Globoface revisions — 01/11", pt: "Revisões da Globoface — 01/11", es: "Revisiones de la Globoface — 01/11" } },
              { src: "images/globo/tipo/f2-03.jpg", ar: "16/9", caption: { en: "Globoface revisions — 02/11", pt: "Revisões da Globoface — 02/11", es: "Revisiones de la Globoface — 02/11" } },
              { src: "images/globo/tipo/f2-04.jpg", ar: "16/9", caption: { en: "Globoface revisions — 03/11", pt: "Revisões da Globoface — 03/11", es: "Revisiones de la Globoface — 03/11" } },
              { src: "images/globo/tipo/f2-05.jpg", ar: "16/9", caption: { en: "Globoface revisions — 04/11", pt: "Revisões da Globoface — 04/11", es: "Revisiones de la Globoface — 04/11" } },
              { src: "images/globo/tipo/f2-07.jpg", ar: "16/9", caption: { en: "Globoface revisions — 05/11", pt: "Revisões da Globoface — 05/11", es: "Revisiones de la Globoface — 05/11" } },
              { src: "images/globo/tipo/f2-08.jpg", ar: "16/9", caption: { en: "Globoface revisions — 06/11", pt: "Revisões da Globoface — 06/11", es: "Revisiones de la Globoface — 06/11" } },
              { src: "images/globo/tipo/f2-10.jpg", ar: "16/9", caption: { en: "Globoface revisions — 07/11", pt: "Revisões da Globoface — 07/11", es: "Revisiones de la Globoface — 07/11" } },
              { src: "images/globo/tipo/f2-11.jpg", ar: "16/9", caption: { en: "Globoface revisions — 08/11", pt: "Revisões da Globoface — 08/11", es: "Revisiones de la Globoface — 08/11" } },
              { src: "images/globo/tipo/f2-12.jpg", ar: "16/9", caption: { en: "Globoface revisions — 09/11", pt: "Revisões da Globoface — 09/11", es: "Revisiones de la Globoface — 09/11" } },
              { src: "images/globo/tipo/f2-13.jpg", ar: "16/9", caption: { en: "Globoface revisions — 10/11", pt: "Revisões da Globoface — 10/11", es: "Revisiones de la Globoface — 10/11" } },
              { src: "images/globo/tipo/f2-14.jpg", ar: "16/9", caption: { en: "Globoface revisions — 11/11", pt: "Revisões da Globoface — 11/11", es: "Revisiones de la Globoface — 11/11" } }
            ], cols: 6, col: 1, span: 12 },
            { grid: "fluxo", fullWidthIntro: true, chapter: { en: "07 · On air", pt: "07 · No ar", es: "07 · Al aire" }, kicker: { en: "Promos · vignettes", pt: "Chamadas · vinhetas", es: "Promos · viñetas" },
              head: { en: "Entertainment, journalism and *sport.*", pt: "Entretenimento, jornalismo e *esporte.*", es: "Entretenimiento, periodismo y *deporte.*" },
              text: { en: "The system on screen. \"A seguir\" (up next) reveals the show through a circle and closes on the 3D mark. \"Hoje na Globo\" (tonight) gives each show its own gradient: news, drama and sport.", pt: "O sistema na tela. O \"A seguir\" revela o programa num círculo e fecha na marca 3D. O \"Hoje na Globo\" dá a cada programa seu próprio degradê: jornalismo, novela e esporte.", es: "El sistema en pantalla. \"A seguir\" (a continuación) revela el programa dentro de un círculo y cierra con la marca 3D. \"Hoje na Globo\" (hoy en Globo) le da a cada programa su propio degradado: noticias, telenovela y deporte." } },
            { video: "images/globo/a-seguir-na-globo.mp4", webm: "images/globo/a-seguir-na-globo.webm", poster: "images/globo/a-seguir-na-globo-poster.jpg", ar: "16/9", col: 1, span: 12, caption: { en: "A seguir na Globo — coming up next", pt: "A seguir na Globo", es: "A seguir na Globo — a continuación" } },
            { video: "images/globo/hoje-na-globo.mp4", webm: "images/globo/hoje-na-globo.webm", poster: "images/globo/hoje-na-globo-poster.jpg", ar: "16/9", col: 1, span: 12, caption: { en: "Hoje na Globo — tonight's line-up in 30 seconds", pt: "Hoje na Globo — a programação da noite em 30 segundos", es: "Hoje na Globo — la programación de la noche en 30 segundos" } },
            // "Hoje na Globo" promo, circles version (nova_v1), sent by Felipe Oct 27 2026
            { src: "images/globo/a-seguir-04.jpg", ar: "16/9", col: 4, span: 3 },
            { src: "images/globo/a-seguir-10.jpg", ar: "16/9", col: 7, span: 3 },
            { src: "images/globo/a-seguir-16.jpg", ar: "16/9", col: 10, span: 3 },
            { src: "images/globo/a-seguir-18.jpg", ar: "16/9", col: 1, span: 3 },
            { src: "images/globo/a-seguir-20.jpg", ar: "16/9", col: 4, span: 3 },
            { src: "images/globo/a-seguir-22.jpg", ar: "16/9", col: 7, span: 3 },
            { src: "images/globo/a-seguir-23.jpg", ar: "16/9", col: 10, span: 3, caption: { en: "Hoje na Globo — one gradient per show, closing in circles", pt: "Hoje na Globo — um degradê por programa, fechando em círculos", es: "Hoje na Globo — un degradado por programa, que cierra en círculos" } },
            // "Hoje na Globo" on-air promos (chamadas), sent by Felipe Oct 27 2026
            { src: "images/globo/chamada-hoje-na-globo.jpg", ar: "16/9", col: 1, span: 6 },
            { src: "images/globo/chamada-pilulas.jpg", ar: "16/9", col: 7, span: 6 },
            { src: "images/globo/chamada-grade.jpg", ar: "16/9", col: 1, span: 6 },
            { src: "images/globo/chamada-jornal-nacional.jpg", ar: "16/9", col: 1, span: 6 },
            { src: "images/globo/chamada-velho-chico.jpg", ar: "16/9", col: 7, span: 6 },
            { src: "images/globo/chamada-brasileirao.jpg", ar: "16/9", col: 1, span: 6 },
            { src: "images/globo/chamada-logo.jpg", ar: "16/9", col: 7, span: 6, caption: { en: "Tonight on Globo — news, drama, sport and the network signature", pt: "Hoje na Globo — jornalismo, novela, esporte e a assinatura da emissora", es: "Hoje na Globo — noticias, telenovela, deporte y la firma del canal" } },
            { grid: "trilho", chapter: { en: "08 · On-air studies", pt: "08 · Estudos on air", es: "08 · Estudios on air" }, kicker: { en: "4 routes", pt: "4 caminhos", es: "4 caminos" },
              head: { en: "One promo, *four routes.*", pt: "Uma chamada, *quatro caminhos.*", es: "Una promo, *cuatro caminos.*" },
              text: { en: "One promo, drawn four ways: the gradient over the image (the films above), vertical colour bands, sliding panels and a typographic route. Click or use the arrows to flip through each album.", pt: "A mesma chamada, desenhada de quatro jeitos: o degradê sobre a imagem (os filmes lá em cima), faixas verticais de cor, painéis deslizantes e um caminho tipográfico. Clique ou use as setas pra folhear cada álbum.", es: "La misma promo, diseñada de cuatro maneras: el degradado sobre la imagen (los videos de arriba), franjas verticales de color, paneles que se deslizan y un camino tipográfico. Haz clic o usa las flechas para hojear cada álbum." },
              pills: [{ en: "*1 · Gradient", pt: "*1 · Degradê", es: "*1 · Degradado" }, { en: "2 · Bands", pt: "2 · Faixas", es: "2 · Franjas" }, { en: "3 · Panels", pt: "3 · Painéis", es: "3 · Paneles" }, { en: "4 · Type", pt: "4 · Tipográfico", es: "4 · Tipográfico" }] },
            { text: { en: "Route 1 — Gradient", pt: "Caminho 1 — Degradê", es: "Camino 1 — Degradado" }, col: 1, span: 12 },
            { flip: [
              { src: "images/globo/estudos/p01.jpg", ar: "16/9", caption: { en: "Route 1 · Gradient — 01/12", pt: "Caminho 1 · Degradê — 01/12", es: "Camino 1 · Degradado — 01/12" } },
              { src: "images/globo/estudos/p04.jpg", ar: "16/9", caption: { en: "Route 1 · Gradient — 02/12", pt: "Caminho 1 · Degradê — 02/12", es: "Camino 1 · Degradado — 02/12" } },
              { src: "images/globo/estudos/p07.jpg", ar: "16/9", caption: { en: "Route 1 · Gradient — 03/12", pt: "Caminho 1 · Degradê — 03/12", es: "Camino 1 · Degradado — 03/12" } },
              { src: "images/globo/estudos/p08.jpg", ar: "16/9", caption: { en: "Route 1 · Gradient — 04/12", pt: "Caminho 1 · Degradê — 04/12", es: "Camino 1 · Degradado — 04/12" } },
              { src: "images/globo/estudos/p09.jpg", ar: "16/9", caption: { en: "Route 1 · Gradient — 05/12", pt: "Caminho 1 · Degradê — 05/12", es: "Camino 1 · Degradado — 05/12" } },
              { src: "images/globo/estudos/p12.jpg", ar: "16/9", caption: { en: "Route 1 · Gradient — 06/12", pt: "Caminho 1 · Degradê — 06/12", es: "Camino 1 · Degradado — 06/12" } },
              { src: "images/globo/estudos/p16.jpg", ar: "16/9", caption: { en: "Route 1 · Gradient — 07/12", pt: "Caminho 1 · Degradê — 07/12", es: "Camino 1 · Degradado — 07/12" } },
              { src: "images/globo/estudos/p20.jpg", ar: "16/9", caption: { en: "Route 1 · Gradient — 08/12", pt: "Caminho 1 · Degradê — 08/12", es: "Camino 1 · Degradado — 08/12" } },
              { src: "images/globo/estudos/p28.jpg", ar: "16/9", caption: { en: "Route 1 · Gradient — 09/12", pt: "Caminho 1 · Degradê — 09/12", es: "Camino 1 · Degradado — 09/12" } },
              { src: "images/globo/estudos/p34.jpg", ar: "16/9", caption: { en: "Route 1 · Gradient — 10/12", pt: "Caminho 1 · Degradê — 10/12", es: "Camino 1 · Degradado — 10/12" } },
              { src: "images/globo/estudos/p35.jpg", ar: "16/9", caption: { en: "Route 1 · Gradient — 11/12", pt: "Caminho 1 · Degradê — 11/12", es: "Camino 1 · Degradado — 11/12" } },
              { src: "images/globo/estudos/p36.jpg", ar: "16/9", caption: { en: "Route 1 · Gradient — 12/12", pt: "Caminho 1 · Degradê — 12/12", es: "Camino 1 · Degradado — 12/12" } }
            ], cols: 6, col: 1, span: 12 },
            { text: { en: "Route 2 — Bands", pt: "Caminho 2 — Faixas", es: "Camino 2 — Franjas" }, col: 1, span: 12 },
            { flip: [
              { src: "images/globo/estudos/p39.jpg", ar: "16/9", caption: { en: "Route 2 · Bands — 01/12", pt: "Caminho 2 · Faixas — 01/12", es: "Camino 2 · Franjas — 01/12" } },
              { src: "images/globo/estudos/p40.jpg", ar: "16/9", caption: { en: "Route 2 · Bands — 02/12", pt: "Caminho 2 · Faixas — 02/12", es: "Camino 2 · Franjas — 02/12" } },
              { src: "images/globo/estudos/p42.jpg", ar: "16/9", caption: { en: "Route 2 · Bands — 03/12", pt: "Caminho 2 · Faixas — 03/12", es: "Camino 2 · Franjas — 03/12" } },
              { src: "images/globo/estudos/p43.jpg", ar: "16/9", caption: { en: "Route 2 · Bands — 04/12", pt: "Caminho 2 · Faixas — 04/12", es: "Camino 2 · Franjas — 04/12" } },
              { src: "images/globo/estudos/p45.jpg", ar: "16/9", caption: { en: "Route 2 · Bands — 05/12", pt: "Caminho 2 · Faixas — 05/12", es: "Camino 2 · Franjas — 05/12" } },
              { src: "images/globo/estudos/p46.jpg", ar: "16/9", caption: { en: "Route 2 · Bands — 06/12", pt: "Caminho 2 · Faixas — 06/12", es: "Camino 2 · Franjas — 06/12" } },
              { src: "images/globo/estudos/p48.jpg", ar: "16/9", caption: { en: "Route 2 · Bands — 07/12", pt: "Caminho 2 · Faixas — 07/12", es: "Camino 2 · Franjas — 07/12" } },
              { src: "images/globo/estudos/p50.jpg", ar: "16/9", caption: { en: "Route 2 · Bands — 08/12", pt: "Caminho 2 · Faixas — 08/12", es: "Camino 2 · Franjas — 08/12" } },
              { src: "images/globo/estudos/p52.jpg", ar: "16/9", caption: { en: "Route 2 · Bands — 09/12", pt: "Caminho 2 · Faixas — 09/12", es: "Camino 2 · Franjas — 09/12" } },
              { src: "images/globo/estudos/p56.jpg", ar: "16/9", caption: { en: "Route 2 · Bands — 10/12", pt: "Caminho 2 · Faixas — 10/12", es: "Camino 2 · Franjas — 10/12" } },
              { src: "images/globo/estudos/p60.jpg", ar: "16/9", caption: { en: "Route 2 · Bands — 11/12", pt: "Caminho 2 · Faixas — 11/12", es: "Camino 2 · Franjas — 11/12" } },
              { src: "images/globo/estudos/p62.jpg", ar: "16/9", caption: { en: "Route 2 · Bands — 12/12", pt: "Caminho 2 · Faixas — 12/12", es: "Camino 2 · Franjas — 12/12" } }
            ], cols: 6, col: 1, span: 12 },
            { text: { en: "Route 3 — Panels", pt: "Caminho 3 — Painéis", es: "Camino 3 — Paneles" }, col: 1, span: 12 },
            { flip: [
              { src: "images/globo/estudos/p63.jpg", ar: "16/9", caption: { en: "Route 3 · Panels — 01/12", pt: "Caminho 3 · Painéis — 01/12", es: "Camino 3 · Paneles — 01/12" } },
              { src: "images/globo/estudos/p64.jpg", ar: "16/9", caption: { en: "Route 3 · Panels — 02/12", pt: "Caminho 3 · Painéis — 02/12", es: "Camino 3 · Paneles — 02/12" } },
              { src: "images/globo/estudos/p65.jpg", ar: "16/9", caption: { en: "Route 3 · Panels — 03/12", pt: "Caminho 3 · Painéis — 03/12", es: "Camino 3 · Paneles — 03/12" } },
              { src: "images/globo/estudos/p66.jpg", ar: "16/9", caption: { en: "Route 3 · Panels — 04/12", pt: "Caminho 3 · Painéis — 04/12", es: "Camino 3 · Paneles — 04/12" } },
              { src: "images/globo/estudos/p67.jpg", ar: "16/9", caption: { en: "Route 3 · Panels — 05/12", pt: "Caminho 3 · Painéis — 05/12", es: "Camino 3 · Paneles — 05/12" } },
              { src: "images/globo/estudos/p68.jpg", ar: "16/9", caption: { en: "Route 3 · Panels — 06/12", pt: "Caminho 3 · Painéis — 06/12", es: "Camino 3 · Paneles — 06/12" } },
              { src: "images/globo/estudos/p69.jpg", ar: "16/9", caption: { en: "Route 3 · Panels — 07/12", pt: "Caminho 3 · Painéis — 07/12", es: "Camino 3 · Paneles — 07/12" } },
              { src: "images/globo/estudos/p70.jpg", ar: "16/9", caption: { en: "Route 3 · Panels — 08/12", pt: "Caminho 3 · Painéis — 08/12", es: "Camino 3 · Paneles — 08/12" } },
              { src: "images/globo/estudos/p71.jpg", ar: "16/9", caption: { en: "Route 3 · Panels — 09/12", pt: "Caminho 3 · Painéis — 09/12", es: "Camino 3 · Paneles — 09/12" } },
              { src: "images/globo/estudos/p72.jpg", ar: "16/9", caption: { en: "Route 3 · Panels — 10/12", pt: "Caminho 3 · Painéis — 10/12", es: "Camino 3 · Paneles — 10/12" } },
              { src: "images/globo/estudos/p73.jpg", ar: "16/9", caption: { en: "Route 3 · Panels — 11/12", pt: "Caminho 3 · Painéis — 11/12", es: "Camino 3 · Paneles — 11/12" } },
              { src: "images/globo/estudos/p74.jpg", ar: "16/9", caption: { en: "Route 3 · Panels — 12/12", pt: "Caminho 3 · Painéis — 12/12", es: "Camino 3 · Paneles — 12/12" } }
            ], cols: 6, col: 1, span: 12 },
            { text: { en: "Route 4 — Type", pt: "Caminho 4 — Tipográfico", es: "Camino 4 — Tipográfico" }, col: 1, span: 12 },
            { flip: [
              { src: "images/globo/estudos/p75.jpg", ar: "16/9", caption: { en: "Route 4 · Type — 01/06", pt: "Caminho 4 · Tipográfico — 01/06", es: "Camino 4 · Tipográfico — 01/06" } },
              { src: "images/globo/estudos/p76.jpg", ar: "16/9", caption: { en: "Route 4 · Type — 02/06", pt: "Caminho 4 · Tipográfico — 02/06", es: "Camino 4 · Tipográfico — 02/06" } },
              { src: "images/globo/estudos/p77.jpg", ar: "16/9", caption: { en: "Route 4 · Type — 03/06", pt: "Caminho 4 · Tipográfico — 03/06", es: "Ruta 4 · Tipografía — 03/06" } },
              { src: "images/globo/estudos/p78.jpg", ar: "16/9", caption: { en: "Route 4 · Type — 04/06", pt: "Caminho 4 · Tipográfico — 04/06", es: "Ruta 4 · Tipografía — 04/06" } },
              { src: "images/globo/estudos/p79.jpg", ar: "16/9", caption: { en: "Route 4 · Type — 05/06", pt: "Caminho 4 · Tipográfico — 05/06", es: "Ruta 4 · Tipografía — 05/06" } },
              { src: "images/globo/estudos/p80.jpg", ar: "16/9", caption: { en: "Route 4 · Type — 06/06", pt: "Caminho 4 · Tipográfico — 06/06", es: "Ruta 4 · Tipografía — 06/06" } }
            ], cols: 6, col: 1, span: 12 },
            { chapter: { en: "09 · Signage", pt: "09 · Sinalização", es: "09 · Señalización" }, kicker: { en: "Globo team", pt: "Equipe Globo", es: "Equipo Globo" },
              head: { en: "The brand *inside the building.*", pt: "A marca *dentro do prédio.*", es: "La marca *dentro del edificio.*" },
              text: { en: "The system leaves the screen for the building: signs shaped like the on-air pills, gradients, rounded pictograms and walls of circles. Two projects, the second from June 2016. Here, the twelve key pieces in four groups.", pt: "O sistema sai da tela e vai pro prédio: placas no formato das pílulas do on air, degradês, pictogramas arredondados e paredes de círculos. Foram dois projetos, o segundo de junho de 2016. Aqui estão as doze peças principais, em quatro grupos.", es: "El sistema sale de la pantalla y se va al edificio: placas con la forma de las píldoras del on air, degradados, pictogramas redondeados y paredes de círculos. Fueron dos proyectos, el segundo de junio de 2016. Aquí están las doce piezas principales, en cuatro grupos." },
              pills: [{ en: "Directional", pt: "Orientação", es: "Orientación" }, { en: "Doors", pt: "Portas", es: "Puertas" }, { en: "Pictograms", pt: "Pictogramas", es: "Pictogramas" }, { en: "Walls", pt: "Paredes", es: "Paredes" }, { en: "*Globo team", pt: "*Equipe Globo", es: "*Equipo Globo" }] },
            // Signage (Felipe, Oct 28 2026): the 12 most relevant of 35 in four groups, one at a time; the rest stay in images/globo/sinal/
            { roomsAuto: true, rooms: [
              { name: { en: "Doors and rooms", pt: "Portas e salas", es: "Puertas y salas" }, items: [{ src: "images/globo/sinal/b07.jpg", ar: "1932/1347", caption: { en: "Proposal 1 · door sign", pt: "Proposta 1 · placa de porta", es: "Propuesta 1 · placa de puerta" } }, { src: "images/globo/sinal/b13.jpg", ar: "1932/1347", caption: { en: "Meeting room: free", pt: "Sala de reunião: livre", es: "Sala de reuniones: libre" } }, { src: "images/globo/sinal/a11.jpg", ar: "16/9", caption: { en: "Restroom signs", pt: "Placas de banheiro", es: "Placas de baño" } }] },
              { name: { en: "Pictograms", pt: "Pictogramas", es: "Pictogramas" }, items: [{ src: "images/globo/sinal/a12.jpg", ar: "16/9", caption: { en: "Pictograms", pt: "Pictogramas", es: "Pictogramas" } }, { src: "images/globo/sinal/b18.jpg", ar: "1932/1347", caption: { en: "Pictograms", pt: "Pictogramas", es: "Pictogramas" } }, { src: "images/globo/sinal/a29.jpg", ar: "16/9", caption: { en: "Warning signs", pt: "Placas de advertência", es: "Placas de advertencia" } }] },
              { name: { en: "Wayfinding", pt: "Orientação", es: "Orientación" }, items: [{ src: "images/globo/sinal/a08.jpg", ar: "16/9", caption: { en: "Directional sign", pt: "Placa de orientação", es: "Placa de orientación" } }, { src: "images/globo/sinal/a19.jpg", ar: "16/9", caption: { en: "Flag sign", pt: "Placa bandeira", es: "Placa bandera" } }, { src: "images/globo/sinal/b43.jpg", ar: "1932/1347", caption: { en: "Stairs", pt: "Escadas", es: "Escaleras" } }] },
              { name: { en: "Spaces", pt: "Ambientes", es: "Ambientes" }, items: [{ src: "images/globo/sinal/b26.jpg", ar: "1932/1347", caption: { en: "Reception", pt: "Recepção", es: "Recepción" } }, { src: "images/globo/sinal/b30.jpg", ar: "1932/1347", caption: { en: "Lift hall and corridor", pt: "Hall de elevadores e corredor", es: "Hall de ascensores y pasillo" } }, { src: "images/globo/sinal/b39.jpg", ar: "1932/1347", caption: { en: "Interactive panel", pt: "Painel interativo", es: "Panel interactivo" } }] }
            ], ar: "16/10", col: 1, span: 12 },
          ],
        },
        {
          // Globo On, 2015/2016 (own project Nov 11-13 2026); its cream theme takes over while it is open
          slug: "globo-on",
          title: "Globo On",
          fold: 4, // v2: shorter case, the rest behind "See the full case" (Nov 16 2026)
          // Published Nov 13 2026 (Felipe: "pode subir").
          type: "branding",
          client: "Globo",
          year: "2016",
          role: "?",
          before: "?",
          scope: { en: "Refresh // Visual and verbal identity // On air", pt: "Refresh // Identidade visual e verbal // On air", es: "Refresh // Identidad visual y verbal // On air" },
          sector: { en: "International TV channel · Angola and Mozambique", pt: "Canal de TV internacional · Angola e Moçambique", es: "Canal de TV internacional · Angola y Mozambique" },
          deliverables: { en: "Logo and versions, colour and gradients, typography, verbal identity, 3D signature, on-air package, brand book", pt: "Logo e versões, cores e degradês, tipografia, identidade verbal, assinatura 3D, pacote on air, brandbook", es: "Logo y versiones, colores y degradados, tipografía, identidad verbal, firma 3D, paquete on air, brandbook" },
          tags: { en: ["Branding", "Refresh", "OnAir", "VerbalIdentity"], pt: ["Branding", "Refresh", "OnAir", "IdentidadeVerbal"], es: ["Branding", "Refresh", "OnAir", "IdentidadVerbal"] },
          tools: ["Adobe CC"],
          image: "images/globo-on/cover-bege.jpg",
          // Felipe, Nov 11 2026: the cover starts in the sand tone and slowly runs through the colours (no green); a click changes it.
          coverCycle: ["images/globo-on/onair/logo-02.jpg", "images/globo-on/onair/logo-03.jpg", "images/globo-on/cover-roxo.jpg", "images/globo-on/onair/logo-04.jpg"],
          hero: "bleed",
          heroAr: "1920/1080",
          theme: { bg: "#faf7ee", fg: "#1e1b18", mute: "#716a5e", line: "#e2dbc8", panel: "#f0eadb", accent: "#e71d73", accentText: "#c4145f", cursor: "#1a2bff" },
          summary: {
            en: "A 2016 refresh of Globo On, Globo's channel for Angola and Mozambique: a new mark, a palette with no favourite colour, a voice built on one word, ON, and the on-air package that carries it all.",
            pt: "O refresh de 2016 do Globo On, o canal da Globo para Angola e Moçambique: marca nova, uma paleta sem cor preferida, uma voz construída sobre uma palavra, ON, e o pacote on air que leva tudo isso para a tela.",
            es: "El refresh de 2016 de Globo On, el canal de Globo para Angola y Mozambique: una marca nueva, una paleta sin color preferido, una voz construida sobre una palabra, ON, y el paquete on air que lo lleva todo a la pantalla.",
          },
          layout: "loose", grid: "trilho",
          gallery: [
            { chapter: { en: "01 · Intro", pt: "01 · Intro", es: "01 · Intro" }, kicker: { en: "Angola · Mozambique · 2016", pt: "Angola · Moçambique · 2016", es: "Angola · Mozambique · 2016" },
              head: { en: "Stay *ON.*", pt: "Fique *ON.*", es: "Quédate *ON.*" },
              text: { en: "Globo On is Globo's channel for Angola and Mozambique, launched in 2015. In 2016, on its first birthday, it got a refresh made with the Globo Internacional team: a new mark, new colours, a new voice and a new on-air package. It all starts with a 60-second film.", pt: "O Globo On é o canal da Globo para Angola e Moçambique, lançado em 2015. Em 2016, no primeiro aniversário, ganhou um refresh feito com a equipe da Globo Internacional: marca nova, cores novas, uma voz nova e um pacote on air novo. Tudo começa num filme de 60 segundos.", es: "Globo On es el canal de Globo para Angola y Mozambique, lanzado en 2015. En 2016, en su primer aniversario, recibió un refresh hecho con el equipo de Globo Internacional: una marca nueva, colores nuevos, una voz nueva y un paquete on air nuevo. Todo empieza con una película de 60 segundos." } },
            { video: "images/globo-on/filme-720.mp4", webm: "images/globo-on/filme-720.webm", poster: "images/globo-on/filme-poster.jpg", ar: "16/9", col: 1, span: 12, caption: { en: "Institutional film — 60s", pt: "Filme institucional — 60s", es: "Película institucional — 60s" } },
            { chapter: { en: "02 · Challenge", pt: "02 · Desafio", es: "02 · Desafío" }, kicker: { en: "2015 → 2016", pt: "2015 → 2016", es: "2015 → 2016" },
              // Story from Felipe, Nov 11 2026: created from scratch in 2015, refresh at one year old, like Brazil's Viva but
              // nothing there was a rerun; free on open TV to bring in Globo Internacional subscribers.
              head: { en: "Soap operas *never seen before.*", pt: "Novela *nunca vista.*", es: "Telenovelas *nunca vistas.*" },
              text: { en: "Globo On was created from scratch in 2015. It works a bit like Viva, Globo's classics channel in Brazil, with one difference: in Angola and Mozambique these soap operas had never aired, so nothing on it was a rerun. The channel goes free on open TV and opens the door to Globo Internacional, the global reference for Portuguese-language television, for whoever wants to subscribe. One year later it was time for a refresh: the same channel, a brighter screen.", pt: "O Globo On foi criado do zero em 2015. Funciona um pouco como o nosso Viva, com uma diferença: em Angola e Moçambique essas novelas nunca tinham passado, então nada ali era reprise. O canal entra de graça na TV aberta e abre a porta da Globo Internacional, referência mundial de TV em língua portuguesa, para quem quiser assinar. Um ano depois chegou a hora do refresh: o mesmo canal, uma tela mais viva.", es: "Globo On se creó desde cero en 2015. Funciona un poco como Viva, el canal de clásicos de Globo en Brasil, con una diferencia: en Angola y Mozambique esas telenovelas nunca se habían emitido, así que nada era repetición. El canal entra gratis en la TV abierta y abre la puerta de Globo Internacional, referencia mundial de la televisión en portugués, para quien quiera suscribirse. Un año después llegó el refresh: el mismo canal, una pantalla más viva." } },
            {"src":"data:image/png;base64,Warning: truncated output (original token count: 20589)\nTotal output lines: 1\n\n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…589 tokens truncated…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","ar":"750/266","col":1,"span":12},
            { chapter: { en: "03 · Symbol", pt: "03 · Símbolo", es: "03 · Símbolo" }, kicker: { en: "Studies · seal · 3 versions", pt: "Estudos · selo · 3 versões", es: "Estudios · sello · 3 versiones" },
              // Felipe, Nov 11 2026: the O is not a ring; it stands for the planet, the globe of the parent brand.
              head: { en: "The *O* is the globe.", pt: "O *O* é o globo.", es: "La *O* es el globo." },
              text: { en: "In the March 2016 studies, the O of ON grows into a planet, a nod to the globe of the parent brand, and GLOBO shrinks to sit on top of the N. Three versions come out of it: the seal, inside a larger circle; GLOBOON, horizontal, for narrow spaces and small sizes; and ON on its own. The negative version comes first.", pt: "Nos estudos de março de 2016, o O de ON cresce e vira um planeta, uma referência ao globo da marca-mãe, e o GLOBO diminui até sentar em cima do N. Daí saem três versões: o selo, dentro de um círculo maior; o GLOBOON, horizontal, para espaços estreitos e tamanhos pequenos; e o ON sozinho. O negativo vem primeiro.", es: "En los estudios de marzo de 2016, la O de ON crece y se vuelve un planeta, una referencia al globo de la marca madre, y GLOBO se achica hasta quedar sobre la N. De ahí salen tres versiones: el sello, dentro de un círculo mayor; GLOBOON, horizontal, para espacios estrechos y tamaños pequeños; y ON solo. El negativo va primero." },
              pillsAll: true, pills: [{ en: "Seal", pt: "Selo", es: "Sello" }, "GLOBOON", "ON"] },
            { goMarca: true, col: 1, span: 12 },
            { src: "images/globo-on/estudos/estudo-02-c.jpg", ar: "2000/1414", col: 1, span: 6, caption: { en: "Studies, March 2016 — weights of GLOBO against ON", pt: "Estudos, março de 2016 — pesos de GLOBO contra o ON", es: "Estudios, marzo de 2016 — pesos de GLOBO frente a ON" } },
            { src: "images/globo-on/estudos/estudo-04-c.jpg", ar: "2000/1414", col: 7, span: 6, caption: { en: "Studies, April 2016 — horizontal and vertical", pt: "Estudos, abril de 2016 — horizontal e vertical", es: "Estudios, abril de 2016 — horizontal y vertical" } },
            { chapter: { en: "04 · Colour", pt: "04 · Cor", es: "04 · Color" }, kicker: { en: "Plurality and diversity", pt: "Pluralidade e diversidade", es: "Pluralidad y diversidad" },
              head: { en: "A brand with *no favourite colour.*", pt: "Uma marca *sem cor preferida.*", es: "Una marca *sin color preferido.*" },
              text: { en: "Like its parent brand, Globo On is always moving: six colours and a cream, mixed in gradients at 45°, always 75% of one and 25% of the other. The logo and text in negative are always cream, never white. On air, the gradient turns into diagonal bands.", pt: "Como a marca-mãe, o Globo On está sempre em movimento: seis cores e um creme, misturados em degradês a 45°, sempre 75% de uma e 25% de outra. Logo e textos em negativo são sempre creme, nunca branco. No ar, o degradê vira faixas diagonais.", es: "Como su marca madre, Globo On siempre está en movimiento: seis colores y un crema, mezclados en degradados a 45°, siempre 75% de uno y 25% del otro. El logo y los textos en negativo son siempre crema, nunca blancos. Al aire, el degradado se vuelve franjas diagonales." },
              pillsAll: true, pills: ["#E71D73", "#E94E1B", "#32B3CA", "#FFCC00", "#A48A7B", "#F5F0E0"] },
            { goCores: true, col: 1, span: 12 },
            { chapter: { en: "05 · Type", pt: "05 · Tipografia", es: "05 · Tipografía" }, kicker: "Brandon Grotesque · Futura",
              head: { en: "Clarity and *legibility.*", pt: "Clareza e *legibilidade.*", es: "Claridad y *legibilidad.*" },
              text: { en: "Brandon Grotesque is the main typeface, in six weights, set in upper and lower case: titles are never all caps. Futura comes in as the secondary family, for support text.", pt: "A Brandon Grotesque é a fonte principal, em seis pesos, sempre em caixa alta e baixa: título nunca vai só em caixa alta. A Futura entra como família secundária, nos textos de apoio.", es: "Brandon Grotesque es la tipografía principal, en seis pesos, siempre en altas y bajas: los títulos nunca van solo en mayúsculas. Futura entra como familia secundaria, en los textos de apoyo." } },
            { src: "images/globo-on/tipo-glifos-2.jpg", ar: "2000/1125", col: 1, span: 12, caption: { en: "Brandon Grotesque — the main typeface", pt: "Brandon Grotesque — a fonte principal", es: "Brandon Grotesque — la tipografía principal" } },
            { src: "images/globo-on/tipo-pesos-2.jpg", ar: "2000/1125", col: 1, span: 12, caption: { en: "Six weights, one line", pt: "Seis pesos, uma frase", es: "Seis pesos, una frase" } },
            { chapter: { en: "06 · Verbal identity", pt: "06 · Identidade verbal", es: "06 · Identidad verbal" }, kicker: { en: "Fique ON", pt: "Fique ON", es: "Fique ON" },
              head: { en: "Being *ON* connects us.", pt: "Ficar *ON* nos conecta.", es: "Estar *ON* nos conecta." },
              text: { en: "ON is switched on, connected, on air. The FIQUE ON (\"stay on\") signature leads a family of lines for the vignettes: being ON brings us closer, shortens distances, connects us. Sometimes ON hides inside the words, in sONhos (dreams) and cONecta (connects).", pt: "ON é ligado, conectado, no ar. A assinatura FIQUE ON puxa uma família de frases para as vinhetas: Ficar ON aproxima, diminui distâncias, nos conecta. Às vezes o ON se esconde dentro das palavras, em sONhos e cONecta.", es: "ON es encendido, conectado, al aire. La firma FIQUE ON (\"quédate on\") abre una familia de frases para las viñetas: estar ON acerca, acorta distancias, nos conecta. A veces el ON se esconde dentro de las palabras, en sONhos (sueños) y cONecta (conecta)." },
              pills: ["*FIQUE ON", "Ficar ON aproxima", "É ficando ON que ficamos juntos", "sONhos · cONecta"] },
            { word: { glyph: "ON", img: "images/globo-on/on-brandon.png", lang: "en", head: "ON · on", note: { en: "English · switched on, connected, on air", pt: "inglês · ligado, conectado, no ar", es: "inglés · encendido, conectado, al aire" } }, col: 1, span: 12 },
            { video: "images/globo-on/vinhetas/vinheta-2.mp4", webm: "images/globo-on/vinhetas/vinheta-2.webm", poster: "images/globo-on/vinhetas/vinheta-2-poster.jpg", ar: "16/9", offset: 0, col: 1, span: 12, caption: { en: "Vignette — Ficar ON é se ligar em tudo que emociona", pt: "Vinheta — Ficar ON é se ligar em tudo que emociona", es: "Viñeta — Ficar ON é se ligar em tudo que emociona" } },
            { video: "images/globo-on/vinhetas/vinheta-4.mp4", webm: "images/globo-on/vinhetas/vinheta-4.webm", poster: "images/globo-on/vinhetas/vinheta-4-poster.jpg", ar: "16/9", offset: 0, col: 1, span: 12, caption: { en: "Vignette — Ligue a energia da emoção, dos sonhos, da imaginação", pt: "Vinheta — Ligue a energia da emoção, dos sonhos, da imaginação", es: "Viñeta — Ligue a energia da emoção, dos sonhos, da imaginação" } },
            { video: "images/globo-on/vinhetas/vinheta-3.mp4", webm: "images/globo-on/vinhetas/vinheta-3.webm", poster: "images/globo-on/vinhetas/vinheta-3-poster.jpg", ar: "16/9", offset: 0, col: 1, span: 4 },
            { video: "images/globo-on/vinhetas/vinheta-6.mp4", webm: "images/globo-on/vinhetas/vinheta-6.webm", poster: "images/globo-on/vinhetas/vinheta-6-poster.jpg", ar: "16/9", offset: 1.5, col: 5, span: 4 },
            { video: "images/globo-on/vinhetas/vinheta-7.mp4", webm: "images/globo-on/vinhetas/vinheta-7.webm", poster: "images/globo-on/vinhetas/vinheta-7-poster.jpg", ar: "16/9", offset: 3, col: 9, span: 4, caption: { en: "É ficando ON que ficamos juntos · Ficar ON aproxima · nos cONecta com os sONhos", pt: "É ficando ON que ficamos juntos · Ficar ON aproxima · nos cONecta com os sONhos", es: "É ficando ON que ficamos juntos · Ficar ON aproxima · nos cONecta com os sONhos" } },
            { chapter: { en: "07 · 3D signature", pt: "07 · Assinatura 3D", es: "07 · Firma 3D" }, kicker: { en: "End of every vignette", pt: "Fim de cada vinheta", es: "Final de cada viñeta" },
              head: { en: "The mark in *three dimensions.*", pt: "A marca em *três dimensões.*", es: "La marca en *tres dimensiones.*" },
              text: { en: "To close vignettes and promos, the seal gets volume: extruded in cream, over the gradient. FIQUE ON became an object too, in white letters.", pt: "Para fechar vinhetas e chamadas, o selo ganha volume: extrudado em creme, sobre o degradê. O FIQUE ON também virou objeto, em letras brancas.", es: "Para cerrar viñetas y promos, el sello gana volumen: extruido en crema, sobre el degradado. FIQUE ON también se volvió objeto, en letras blancas." } },
            { src: "images/globo-on/onair/fique-on-03.jpg", ar: "16/9", col: 1, span: 12, caption: { en: "FIQUE ON, the signature in 3D", pt: "FIQUE ON, a assinatura em 3D", es: "FIQUE ON, la firma en 3D" } },
            { src: "images/globo-on/onair/fique-on-05.jpg", ar: "16/9", col: 1, span: 4 },
            { src: "images/globo-on/onair/fique-on-04.jpg", ar: "16/9", col: 5, span: 4 },
            { src: "images/globo-on/onair/fique-on-06.jpg", ar: "16/9", col: 9, span: 4, caption: { en: "One card per colour", pt: "Uma cartela por cor", es: "Una cartela por color" } },
            { src: "images/globo-on/fique-on-3d-1.jpg", ar: "16/9", col: 1, span: 6 },
            { src: "images/globo-on/fique-on-3d-2.jpg", ar: "16/9", col: 7, span: 6, caption: { en: "White on white — the object before the colour", pt: "Branco sobre branco — o objeto antes da cor", es: "Blanco sobre blanco — el objeto antes del color" } },
            { grid: "fluxo", fullWidthIntro: true, chapter: { en: "08 · On air", pt: "08 · No ar", es: "08 · Al aire" }, kicker: { en: "On air 2016", pt: "On air 2016", es: "On air 2016" },
              head: { en: "From *You're watching* to *Today.*", pt: "Do *Você está assistindo* ao *Hoje.*", es: "De *Estás viendo* a *Hoy.*" },
              text: { en: "The system on screen: schedule cards with the photo cut by an arc, Luanda and Maputo times side by side, and a FIQUE ON card closing each vignette.", pt: "O sistema na tela: os cards de programação com a foto recortada por um arco, os horários de Luanda e Maputo lado a lado e uma cartela FIQUE ON fechando cada vinheta.", es: "El sistema en pantalla: las tarjetas de programación con la foto cortada por un arco, los horarios de Luanda y Maputo lado a lado y una cartela FIQUE ON que cierra cada viñeta." } },
            { video: "images/globo-on/onair/assistindo-rosa.mp4", webm: "images/globo-on/onair/assistindo-rosa.webm", poster: "images/globo-on/onair/assistindo-rosa-poster.jpg", ar: "16/9", offset: 0, col: 1, span: 12, caption: { en: "You're watching", pt: "Você está assistindo", es: "Estás viendo" } },
            { video: "images/globo-on/onair/assistindo-azul-escuro.mp4", webm: "images/globo-on/onair/assistindo-azul-escuro.webm", poster: "images/globo-on/onair/assistindo-azul-escuro-poster.jpg", ar: "16/9", offset: 0, col: 1, span: 3 },
            { video: "images/globo-on/onair/assistindo-laranja.mp4", webm: "images/globo-on/onair/assistindo-laranja.webm", poster: "images/globo-on/onair/assistindo-laranja-poster.jpg", ar: "16/9", offset: 1, col: 4, span: 3 },
            { video: "images/globo-on/onair/assistindo-azul.mp4", webm: "images/globo-on/onair/assistindo-azul.webm", poster: "images/globo-on/onair/assistindo-azul-poster.jpg", ar: "16/9", offset: 2, col: 7, span: 3 },
            { video: "images/globo-on/onair/assistindo-bege.mp4", webm: "images/globo-on/onair/assistindo-bege.webm", poster: "images/globo-on/onair/assistindo-bege-poster.jpg", ar: "16/9", offset: 3, col: 10, span: 3, caption: { en: "You're watching — the same card in other colours", pt: "Você está assistindo — o mesmo card em outras cores", es: "Estás viendo — la misma tarjeta en otros colores" } },
            { video: "images/globo-on/onair/dia-azul-escuro.mp4", webm: "images/globo-on/onair/dia-azul-escuro.webm", poster: "images/globo-on/onair/dia-azul-escuro-poster.jpg", ar: "16/9", offset: 0, col: 1, span: 12, caption: { en: "Show of the day — the photo inside the circle, Luanda and Maputo times, and the seal closing it", pt: "Programa do dia — a foto dentro do círculo, os horários de Luanda e Maputo e o selo fechando", es: "Programa del día — la foto dentro del círculo, los horarios de Luanda y Maputo y el sello que cierra" } },
            { video: "images/globo-on/onair/dia-rosa.mp4", webm: "images/globo-on/onair/dia-rosa.webm", poster: "images/globo-on/onair/dia-rosa-poster.jpg", ar: "16/9", offset: 0, col: 1, span: 3 },
            { video: "images/globo-on/onair/dia-laranja.mp4", webm: "images/globo-on/onair/dia-laranja.webm", poster: "images/globo-on/onair/dia-laranja-poster.jpg", ar: "16/9", offset: 1, col: 4, span: 3 },
            { video: "images/globo-on/onair/dia-azul.mp4", webm: "images/globo-on/onair/dia-azul.webm", poster: "images/globo-on/onair/dia-azul-poster.jpg", ar: "16/9", offset: 2, col: 7, span: 3 },
            { video: "images/globo-on/onair/dia-bege.mp4", webm: "images/globo-on/onair/dia-bege.webm", poster: "images/globo-on/onair/dia-bege-poster.jpg", ar: "16/9", offset: 3, col: 10, span: 3 },
            { video: "images/globo-on/onair/hoje-rosa.mp4", webm: "images/globo-on/onair/hoje-rosa.webm", poster: "images/globo-on/onair/hoje-rosa-poster.jpg", ar: "16/9", offset: 0, col: 1, span: 12, caption: { en: "Today — the show of the night inside the circle, Luanda and Maputo times below", pt: "Hoje — o programa da noite dentro do círculo, horários de Luanda e Maputo embaixo", es: "Hoy — el programa de la noche dentro del círculo, horarios de Luanda y Maputo abajo" } },
            { video: "images/globo-on/onair/hoje-azul-escuro.mp4", webm: "images/globo-on/onair/hoje-azul-escuro.webm", poster: "images/globo-on/onair/hoje-azul-escuro-poster.jpg", ar: "16/9", offset: 0, col: 1, span: 3 },
            { video: "images/globo-on/onair/hoje-laranja.mp4", webm: "images/globo-on/onair/hoje-laranja.webm", poster: "images/globo-on/onair/hoje-laranja-poster.jpg", ar: "16/9", offset: 1, col: 4, span: 3 },
            { video: "images/globo-on/onair/hoje-azul.mp4", webm: "images/globo-on/onair/hoje-azul.webm", poster: "images/globo-on/onair/hoje-azul-poster.jpg", ar: "16/9", offset: 2, col: 7, span: 3 },
            { video: "images/globo-on/onair/hoje-bege.mp4", webm: "images/globo-on/onair/hoje-bege.webm", poster: "images/globo-on/onair/hoje-bege-poster.jpg", ar: "16/9", offset: 3, col: 10, span: 3, caption: { en: "Today — the same card in other colours", pt: "Hoje — o mesmo card em outras cores", es: "Hoy — la misma tarjeta en otros colores" } },
            { grid: "fluxo", fullWidthIntro: true, chapter: { en: "09 · Styleframes", pt: "09 · Styleframes", es: "09 · Styleframes" }, kicker: { en: "The originals, 2016", pt: "Os originais, 2016", es: "Los originales, 2016" },
              head: { en: "The screen, *frame by frame.*", pt: "A tela, *quadro a quadro.*", es: "La pantalla, *cuadro a cuadro.*" },
              text: { en: "The original styleframes, before they moved: the week line-up, Watch now, Today and Tomorrow, each show in its own colour, with Luanda and Maputo times side by side.", pt: "Os styleframes originais, antes de ganharem movimento: a grade da semana, o Assista agora, o Hoje e o Amanhã, cada programa na sua cor, com os horários de Luanda e Maputo lado a lado.", es: "Los styleframes originales, antes de moverse: la programación de la semana, Assista agora, Hoje y Amanhã, cada programa en su color, con los horarios de Luanda y Maputo lado a lado." } },
            { goFrames: [
                { src: "images/globo-on/styleframes/semana-seq-a.jpg" },
                { src: "images/globo-on/styleframes/semana-seq-b.jpg" },
                { src: "images/globo-on/styleframes/semana-seq-c.jpg" },
                { src: "images/globo-on/styleframes/semana-seq-d.jpg" },
                { src: "images/globo-on/styleframes/semana-seq-e.jpg" },
                { src: "images/globo-on/styleframes/semana-seq-f.jpg" },
                { src: "images/globo-on/styleframes/semana-seq-g.jpg" },
                { src: "images/globo-on/styleframes/semana-seq-h.jpg" },
                { src: "images/globo-on/styleframes/semana-seq-i.jpg" },
                { src: "images/globo-on/styleframes/semana-seq-j.jpg" },
              ], seq: true, col: 1, span: 12, caption: { en: "Series of the week — the promo frame by frame, Monday to Friday", pt: "Séries da semana — a chamada quadro a quadro, de segunda a sexta", es: "Series de la semana — la promo cuadro a cuadro, de lunes a viernes" } },
            { goFrames: [
                { src: "images/globo-on/styleframes/semana-1.jpg", big: true },
                { src: "images/globo-on/styleframes/assista-rosa.jpg" },
                { src: "images/globo-on/styleframes/dia-rosa.jpg" },
                { src: "images/globo-on/styleframes/hoje-rosa.jpg" },
                { src: "images/globo-on/styleframes/assistindo-rosa.jpg" },
                { src: "images/globo-on/styleframes/selo-magenta.jpg" },
                { src: "images/globo-on/styleframes/semana-2.jpg", big: true, right: true },
                { src: "images/globo-on/styleframes/selo-roxo.jpg" },
                { src: "images/globo-on/styleframes/assista-laranja.jpg" },
                { src: "images/globo-on/styleframes/assista-areia.jpg" },
                { src: "images/globo-on/styleframes/assista-azul.jpg" },
                { src: "images/globo-on/styleframes/hoje-azul.jpg" },
                { src: "images/globo-on/styleframes/semana-3.jpg", big: true },
                { src: "images/globo-on/styleframes/amanha.jpg" },
                { src: "images/globo-on/styleframes/fique-on-areia.jpg" }
              ], col: 1, span: 12, caption: { en: "Original styleframes — Globo On on air, 2016", pt: "Styleframes originais — on air do Globo On, 2016", es: "Styleframes originales — on air de Globo On, 2016" } },
          ],
        },
        {
          // Globoplay, 2015 (own project until Nov 13 2026)
          slug: "globoplay",
          title: "Globoplay",
          type: "branding",
          client: "Globo",
          credits: [
            { role: { en: "Animation", pt: "Animação", es: "Animación" }, name: "Bild" },
            { role: "Type design", name: "Plau" },
            { role: { en: "Globo team", pt: "Time Globo", es: "Equipo Globo" }, name: "Mariana Sá, Sérgio Valente, Cristiano Calvé" },
          ],
          year: "2015",
          role: { en: "Lead Designer / Illustrator", pt: "Lead Designer / Ilustrador", es: "Lead Designer / Ilustrador" },
          scope: { en: "Visual identity // Vignette // Motion", pt: "Identidade visual // Vinheta // Motion", es: "Identidad visual // Viñeta // Motion" },
          sector: { en: "Streaming · TV", pt: "Streaming · TV", es: "Streaming · TV" },
          deliverables: { en: "Logo and symbol, vignette, sign-off of the launch film", pt: "Logo e símbolo, vinheta, assinatura do filme de lançamento", es: "Logo y símbolo, viñeta, firma del comercial de lanzamiento" },
          tags: { en: ["Branding", "Streaming", "Motion"], pt: ["Branding", "Streaming", "Motion"], es: ["Branding", "Streaming", "Motion"] },
          tools: ["Adobe CC"],
          image: "images/globoplay/vinheta-poster.jpg",
          coverVideo: { mp4: "images/globoplay/vinheta.mp4" },
          summary: {
            en: "Visual identity for Globoplay, Globo's streaming platform, and direction of its vignette. This is where Globotipo, Globo's own typeface, was born.",
            pt: "Identidade visual do Globoplay, o streaming da Globo, e direção da vinheta. Foi nesse projeto que nasceu a Globotipo, a fonte própria da casa.", es: "Identidad visual de Globoplay, el streaming de Globo, y dirección de la viñeta. En este proyecto nació Globotipo, la tipografía propia de la casa.",
          },
          layout: "loose", grid: "destaque",
          gallery: [
            { chapter: { en: "02 · Type", pt: "02 · Tipografia", es: "02 · Tipografía" }, kicker: { en: "Where Globotipo was born", pt: "Onde nasceu a Globotipo", es: "Donde nació Globotipo" },
              head: { en: "A more modern *Futura.*", pt: "Uma Futura *mais moderna.*", es: "Una Futura *más moderna.*" },
              text: { en: "Globo still mixed Swiss, Avant Garde and Futura. Globoplay is when we decided on our own typeface: my idea was a more modern Futura with rounded corners.", pt: "A Globo ainda misturava Swiss, Avant Garde e Futura. Foi no Globoplay que a gente decidiu ter uma fonte própria: minha ideia era uma Futura mais moderna, com cantos arredondados.", es: "Globo todavía mezclaba Swiss, Avant Garde y Futura. Con Globoplay decidimos tener una tipografía propia: mi idea era una Futura más moderna, de esquinas redondeadas." },
              pills: ["Swiss", "Avant Garde", "Futura", "*Globotipo"] },
            { src: "images/globoplay/logo-05.jpg", ar: "1920/480", col: 1, span: 12, caption: { en: "The logo, already with the rounded letters", pt: "O logo, já com as letras arredondadas", es: "El logo, ya con las letras redondeadas" } },
            { src: "images/globo/globotipo-familia.jpg", ar: "1901/1028", col: 1, span: 12, caption: { en: "Globotipo, the family that grew out of it", pt: "Globotipo, a família que saiu daqui", es: "Globotipo, la familia que salió de aquí" } },
            { chapter: { en: "03 · Brand", pt: "03 · Marca", es: "03 · Marca" }, kicker: { en: "Logo and symbol", pt: "Logo e símbolo", es: "Logo y símbolo" },
              head: { en: "Globo's circle *hits play.*", pt: "O círculo da Globo *aperta o play.*", es: "El círculo de Globo *le da play.*" },
              text: { en: "The symbol joins the Globo circle to a play button. In the vignette, strokes and colour build the full name, which then folds into the symbol.", pt: "O símbolo junta o círculo da Globo com o botão de play. Na vinheta, traços e cor vão montando o nome inteiro, que depois se fecha no símbolo.", es: "El símbolo junta el círculo de Globo con el botón de play. En la viñeta, trazos y color van armando el nombre completo, que después se cierra en el símbolo." } },
            { loop: { frames: ["images/globoplay/logo-01.jpg", "images/globoplay/logo-02.jpg", "images/globoplay/logo-03.jpg", "images/globoplay/logo-04.jpg", "images/globoplay/logo-05.jpg", "images/globoplay/logo-06.jpg"], fps: 4, ar: "1920/480" }, caption: { en: "Vignette", pt: "Vinheta", es: "Viñeta" }, col: 1, span: 12 }, // v2: was a flip of these frames (Nov 16 2026)
            { chapter: { en: "04 · Launch", pt: "04 · Lançamento", es: "04 · Lanzamiento" }, kicker: { en: "Launch film", pt: "Filme de lançamento", es: "Comercial de lanzamiento" },
              head: { en: "Globo's faces, *in the palm of your hand.*", pt: "Os rostos da Globo *na palma da mão.*", es: "Los rostros de Globo, *en la palma de tu mano.*" },
              text: { en: "In the launch film the network's faces jump onto phones, tablets and laptops, and the Globoplay sign-off closes it.", pt: "No filme de lançamento, os rostos da casa pulam pro celular, pro tablet e pro notebook, e a assinatura do Globoplay fecha o filme.", es: "En el comercial de lanzamiento, los rostros de la casa saltan al celular, a la tablet y a la laptop, y la firma de Globoplay cierra el comercial." } },
            { video: "images/globoplay/filme.mp4", webm: "images/globoplay/filme.webm", poster: "images/globoplay/filme-poster.jpg", ar: "16/9", col: 1, span: 12, caption: { en: "Launch film — 30s", pt: "Filme de lançamento — 30s", es: "Comercial de lanzamiento — 30s" } },
            { loop: { frames: ["images/globoplay/filme-01.jpg", "images/globoplay/filme-02.jpg", "images/globoplay/filme-03.jpg", "images/globoplay/filme-04.jpg", "images/globoplay/filme-05.jpg", "images/globoplay/filme-06.jpg"], fps: 2, ar: "16/9" }, caption: { en: "Launch film", pt: "Filme de lançamento", es: "Comercial de lanzamiento" }, col: 1, span: 12 }, // v2: was a flip of these frames (Nov 16 2026)
          ],
        },
      ],
    },
    {
      title: "SCRV*",
      track: { id: "0LrwgdLsFaWh9VXIjBRe8t", name: "Changes", by: "David Bowie" },
      type: "branding",
      client: "SCRV.ag",
      year: "2025",
      role: { en: "Brand Strategist / Brand Consultant / Lead Designer / Art Director / Motion Designer", pt: "Brand Strategist / Consultor de marca / Lead Designer / Diretor de Arte / Motion Designer", es: "Brand Strategist / Consultor de marca / Lead Designer / Director de Arte / Motion Designer" },
      scope: { en: "Rebranding // Positioning // Brand content", pt: "Rebranding // Posicionamento // Conteúdo de marca", es: "Rebranding // Posicionamiento // Contenido de marca" },
      sector: { en: "Branding and brand content agency", pt: "Agência de branding e conteúdo de marca", es: "Agencia de branding y contenido de marca" },
      deliverables: { en: "Symbol, logo, colour, type, kinetic type, posters, social and deck", pt: "Símbolo, logotipo, cores, tipografia, tipografia cinética, lambe-lambes, redes e deck", es: "Símbolo, logotipo, colores, tipografía, tipografía cinética, carteles pegados en la calle, redes y deck" },
      tags: { en: ["Rebranding", "Positioning", "BrandContent"], pt: ["Rebranding", "Posicionamento", "ConteúdoDeMarca"], es: ["Rebranding", "Posicionamiento", "ContenidoDeMarca"] },
      // SCRV's own code: Deep Black page, Hey Grey type, Red Fuse accent
      theme: { bg: "#000000", fg: "#c2cec9", mute: "#7f8a86", line: "#2a2e2c", panel: "#111111", accent: "#f61009" },
      tools: ["Adobe CC", "*Midjourney", "*Flora.AI"],
      image: "images/scriva/cover.jpg",
      summary: {
        en: "Rebranding for SCRV.ag, an agency that only posts when it makes sense. Think (+), create (×), position (✱): three verbs, three marks that together make the asterisk. Red Fuse, Deep Black and Hey Grey, in Mango Grotesque and Space Mono.",
        pt: "Rebranding da SCRV.ag, agência que só posta quando faz sentido. Pensar (+), criar (×), posicionar (✱): três verbos, três sinais que, juntos, formam o asterisco. Red Fuse, Deep Black e Hey Grey, em Mango Grotesque e Space Mono.", es: "Rebranding de SCRV.ag, una agencia que solo publica cuando tiene sentido. Pensar (+), crear (×), posicionar (✱): tres verbos, tres signos que juntos forman el asterisco. Red Fuse, Deep Black y Hey Grey, en Mango Grotesque y Space Mono.",
      },
      // Story: the symbol, the system, type in motion, the street, then the agency's own voice
      layout: "loose", grid: "cartaz",
      gallery: [
        { chapter: { en: "01 · Challenge", pt: "01 · Desafio", es: "01 · Desafío" }, kicker: { en: "The brief", pt: "O briefing", es: "El brief" },
          head: { en: "Break the *status quo.*", pt: "Quebrar o *status quo.*", es: "Romper el *status quo.*" },
          text: { en: "The Venezuelan founder took the name from escriba, Spanish for scribe. His way of working is almost revolutionary, and the agency needed a face to match: modern, disruptive, even aggressive, to break the status quo of brand agencies.", pt: "O fundador é venezuelano e tirou o nome de escriba, quem escreve. O jeito dele de trabalhar é quase revolucionário, e a agência precisava de uma cara à altura: moderna, disruptiva, até agressiva, pra quebrar o status quo das agências de branding.", es: "El fundador es venezolano y sacó el nombre de escriba, el que escribe. Su forma de trabajar es casi revolucionaria, y la agencia necesitaba una cara a la altura: moderna, disruptiva, hasta agresiva, para romper el status quo de las agencias de branding." } },
        { chapter: { en: "02 · Symbol", pt: "02 · Símbolo", es: "02 · Símbolo" }, kicker: { en: "Think + · Create × · Position ✱", pt: "Pensar + · Criar × · Posicionar ✱", es: "Pensar + · Crear × · Posicionar ✱" },
          head: { en: "Three verbs, *three marks.*", pt: "Três verbos, *três sinais.*", es: "Tres verbos, *tres signos.*" },
          text: { en: "An agency that only posts when it makes sense. Think (+), create (×), position (✱): three verbs became three marks, and together they make the asterisk.", pt: "Uma agência que só posta quando faz sentido. Pensar (+), criar (×), posicionar (✱): três verbos viraram três sinais, e juntos formam o asterisco.", es: "Una agencia que solo publica cuando tiene sentido. Pensar (+), crear (×), posicionar (✱): tres verbos se convirtieron en tres signos, y juntos forman el asterisco." } },
        { video: "images/scriva/asterisk.mp4", webm: "images/scriva/asterisk.webm", poster: "images/scriva/asterisk-poster.jpg", ar: "16/9", col: 1, span: 12, caption: { en: "The asterisk, in 3D", pt: "O asterisco, em 3D", es: "El asterisco, en 3D" } },
        { word: { glyph: "ἀστερίσκος", lang: "grc", head: "ἀστερίσκος · asteriskos", note: { en: "Greek · little star", pt: "grego · estrelinha", es: "griego · estrellita" } }, col: 1, span: 12 },
        { chapter: { en: "03 · System", pt: "03 · Sistema", es: "03 · Sistema" }, kicker: { en: "Red Fuse · Deep Black · Hey Grey", pt: "Red Fuse · Deep Black · Hey Grey", es: "Red Fuse · Deep Black · Hey Grey" },
          head: { en: "Mango Grotesque and *Space Mono.*", pt: "Mango Grotesque e *Space Mono.*", es: "Mango Grotesque y *Space Mono.*" } },
        // Colour + type open the chapter; the symbols and seal pair was removed (Felipe, Oct 27 2026), files kept in images/scriva/.
        { src: "images/scriva/color.jpg", ar: "16/9", col: 1, span: 6, caption: { en: "Color code", pt: "Cores", es: "Colores" } },
        { src: "images/scriva/type.jpg", ar: "16/9", col: 7, span: 6, caption: { en: "Type: Mango Grotesque and Space Mono", pt: "Tipografia: Mango Grotesque e Space Mono", es: "Tipografía: Mango Grotesque y Space Mono" } },
        { src: "images/scriva/logo-red.jpg", ar: "16/9", col: 1, span: 6, caption: { en: "Wordmark", pt: "Logotipo", es: "Logotipo" } },
        { src: "images/scriva/logo-versions.jpg", ar: "16/9", col: 7, span: 6, caption: { en: "Versions", pt: "Versões", es: "Versiones" } },
        { src: "images/scriva/billboard-logo.jpg", ar: "3/2", col: 1, span: 12 },
        { chapter: { en: "04 · Motion", pt: "04 · Motion", es: "04 · Motion" }, kicker: { en: "Kinetic type", pt: "Tipografia cinética", es: "Tipografía cinética" },
          head: { en: "Type that *moves.*", pt: "Tipografia que se *mexe.*", es: "Tipografía que se *mueve.*" } },
        { video: "images/scriva/kinetic.mp4", poster: "images/scriva/kinetic-poster.jpg", ar: "16/9", col: 1, span: 12, caption: { en: "Kinetic type", pt: "Tipografia cinética", es: "Tipografía cinética" } },
        { tunnel: { word: "SCRV", bg: "#222" }, poster: "images/scriva/kinetic-outline.jpg", ar: "2000/833", col: 3, span: 10, caption: { en: "Kinetic type, outline", pt: "Tipografia cinética, contorno", es: "Tipografía cinética, contorno" } },
        { chapter: { en: "05 · Applied identity", pt: "05 · Identidade aplicada", es: "05 · Identidad aplicada" }, kicker: { en: "Street · Merch · Social", pt: "Rua · Brindes · Redes", es: "Calle · Merch · Redes" },
          head: { en: "Quem não se posiciona é *posicionado.*", pt: "Quem não se posiciona é *posicionado.*", es: "Quem não se posiciona é *posicionado.*" } },
        { src: "images/scriva/posters.jpg", ar: "16/9", col: 1, span: 12, caption: { en: "Lambe-lambe posters", pt: "Lambe-lambes", es: "Carteles pegados en la calle" } },
        { src: "images/scriva/flag.jpg", ar: "3/2", col: 1, span: 6 },
        { src: "images/scriva/bag.jpg", ar: "3/2", col: 7, span: 6 },
        { src: "images/scriva/instagram-profile.jpg", ar: "1103/2000", col: 1, span: 5, caption: { en: "Social: the grid as one image", pt: "Redes: o grid como uma imagem só", es: "Redes: el grid como una sola imagen" } },
        { src: "images/scriva/process.jpg", ar: "1920/1018", col: 6, span: 7 },
      ],
    },
    {
      title: "HOUSECALL PRO",
      track: { id: "4w3tQBXhn5345eUXDGBWZG", name: "9 to 5", by: "Dolly Parton" },
      type: "campaign",
      client: "Housecall Pro",
      year: "2026",
      role: "Senior Visual Designer",
      scope: { en: "Brand identity // Social // AI production", pt: "Identidade de marca // Social // Produção com IA", es: "Identidad de marca // Social // Producción con IA" },
      sector: { en: "Software for home-service businesses", pt: "Software para empresas de serviços residenciais", es: "Software para empresas de servicios para el hogar" },
      tags: { en: ["Campaign", "BrandIdentity", "Social", "AI"], pt: ["Campanha", "IdentidadeDeMarca", "Social", "IA"], es: ["Campaña", "IdentidadDeMarca", "Social", "IA"] },
      // Night-navy page from the campaign blue, cream type, the countdown orange as accent
      theme: { bg: "#0b1a33", fg: "#f3efe6", mute: "#9aa6b8", line: "#22345a", panel: "#10223f", accent: "#f7a823" },
      // Tools in use order; a leading * marks an AI tool
      tools: ["Adobe CC", "*Flora.AI", "*Claude Code"],
      // A brand case (Felipe, Nov 13 2026): the page is about what Felipe did for Housecall Pro; its campaigns open
      // inside it from the list of `cases`. Cover = the brand line "Everything to run and grow your business".
      // The orange cover stays still; a click on it plays the stop motion (Felipe, Nov 13 2026). The film also sits small in chapter 01.
      image: "images/top50/everything-still.jpg",
      coverPlay: { mp4: "images/top50/everything-stopmotion.mp4", webm: "images/top50/everything-stopmotion.webm" },
      hero: "bleed",
      heroAr: "2000/1116",
      summary: "?",
      layout: "loose", grid: "fluxo",
      gallery: [
        { chapter: { en: "01 · The brand", pt: "01 · A marca", es: "01 · La marca" }, kicker: { en: "Lettering · stop motion", pt: "Lettering · stop motion", es: "Lettering · stop motion" },
          head: { en: "Everything to run and *grow your business.*", pt: "Everything to run and *grow your business.*", es: "Everything to run and *grow your business.*" } },
        { video: "images/top50/everything-stopmotion.mp4", webm: "images/top50/everything-stopmotion.webm", poster: "images/top50/everything-stopmotion-poster.jpg", ar: "16/9", col: 6, span: 7, caption: { en: "Stop motion — the line, letter by letter", pt: "Stop motion — a frase, letra por letra", es: "Stop motion — la frase, letra por letra" } },
      ],
      cases: [
        {
          // Full name "Top 50 Unforgettable Home Service Brand Names"; under the Housecall Pro umbrella it is "Top 50 Brands" (Felipe, Nov 13 2026)
          slug: "top-50",
          title: "Top 50 Brands",
          type: "campaign",
          year: "2026",
          scope: { en: "Brand identity // Social // AI production", pt: "Identidade de marca // Social // Produção com IA", es: "Identidad de marca // Social // Producción con IA" },
          role: { en: "Campaign logo, key visual, AI van and films, social system, winners carousels and kit", pt: "Logo da campanha, key visual, van e filmes com IA, sistema de social, carrosséis dos vencedores e kit", es: "Logo de la campaña, key visual, van y videos con IA, sistema de social, carruseles de ganadores y kit" },
          deliverables: { en: "Campaign logo, type system, van renders, films, social, email and finalist kit", pt: "Logo da campanha, sistema tipográfico, vans, filmes, social, e-mail e kit dos finalistas", es: "Logo de la campaña, sistema tipográfico, vans, videos, social, email y kit de finalistas" },
          tools: ["Adobe CC", "*Flora.AI", "*Claude Code"],
          summary: {
            en: "Housecall Pro let the public vote for America's 50 most unforgettable home-service business names. The campaign needed a trade-shop badge, loud on a van and clean on a phone. Almost all of it was made with AI in Flora: logo, vans and films.",
            pt: "A Housecall Pro abriu uma votação pública pra eleger os 50 nomes de empresas de serviços residenciais mais inesquecíveis dos EUA. A campanha pedia um selo com cara de oficina, que gritasse numa van e ficasse limpo no celular. Quase tudo saiu de IA, no Flora: logo, vans e filmes.", es: "Housecall Pro abrió una votación pública para elegir los 50 nombres de empresas de servicios para el hogar más inolvidables de EE. UU. La campaña pedía un sello con aire de taller, que gritara en una van y se viera limpio en el celular. Casi todo salió de la IA, en Flora: logo, vans y videos.",
          },
          stats: [
            [{ en: "1,340", pt: "1.340", es: "1.340" }, { en: "Names submitted", pt: "Nomes inscritos", es: "Nombres inscritos" }],
            ["460+", { en: "In the first 6 hours", pt: "Nas primeiras 6 horas", es: "En las primeras 6 horas" }],
            ["50", { en: "Unforgettable names", pt: "Nomes inesquecíveis", es: "Nombres inolvidables" }],
            ["4", { en: "Press outlets", pt: "Veículos de imprensa", es: "Medios de prensa" }],
          ],
          // Lettering only, its blue texture taken out so it sits on the page (Felipe, Nov 13 2026)
          image: "images/top50/cover-lettering.png",
          heroAr: "2000/1047",
          layout: "loose", grid: "fluxo",
          gallery: [
            { chapter: { en: "01 · Idea", pt: "01 · Ideia", es: "01 · Idea" }, kicker: { en: "Crowdsourced naming · public vote", pt: "Nomes enviados pelo público · voto popular", es: "Nombres enviados por el público · votación abierta" },
              head: { en: "Your company name belongs on *this list.*", pt: "O nome da sua empresa tem que estar *nessa lista.*", es: "El nombre de tu empresa tiene que estar *en esta lista.*" },
              text: { en: "Pros submitted their business names on a landing page and the public voted for the 50 most unforgettable. 1,340 names came in, more than 460 in the first six hours.", pt: "Os profissionais inscreveram o nome das suas empresas numa landing page, e o público votou nos 50 mais inesquecíveis. Chegaram 1.340 nomes, mais de 460 nas primeiras seis horas.", es: "Los profesionales inscribieron el nombre de su empresa en una landing page y el público votó por los 50 más inolvidables. Llegaron 1.340 nombres, más de 460 en las primeras seis horas." } },
            { chapter: { en: "02 · Key visual", pt: "02 · Key visual", es: "02 · Key visual" }, kicker: { en: "The logo, born in Flora", pt: "Um logo que nasceu no Flora", es: "Un logo que nació en Flora" },
              head: { en: "A trade-shop badge, *re-lettered by AI.*", pt: "Um selo de oficina, *com lettering refeito por IA.*", es: "Un sello de taller, *con lettering rehecho por IA.*" },
              text: { en: "Twenty-odd directions on one Flora canvas. The winner started as a vintage badge, re-lettered with AI, then redrawn by hand as vector with a crossed hammer and wrench.", pt: "Umas vinte direções num canvas só do Flora. A vencedora começou como um selo vintage, ganhou lettering novo com IA e depois foi redesenhada à mão em vetor, com martelo e chave cruzados.", es: "Unas veinte direcciones en un solo canvas de Flora. La ganadora arrancó como un sello vintage, recibió lettering nuevo con IA y después se redibujó a mano en vector, con martillo y llave cruzados." },
              pills: ["*Flora.AI", "Adobe CC"] },
            { src: "images/top50/explorations.jpg", ar: "1/1", col: 1, span: 6, caption: { en: "Twenty-odd directions, side by side", pt: "Umas vinte direções, lado a lado", es: "Unas veinte direcciones, lado a lado" } },
            { src: "images/top50/flora.jpg", ar: "1600/1477", col: 7, span: 6, caption: { en: "The Flora canvas", pt: "O canvas no Flora", es: "El canvas en Flora" } },
            { src: "images/top50/lockups.png", ar: "2000/831", col: 1, span: 12, caption: { en: "Main and stacked lockups", pt: "Assinaturas principal e empilhada", es: "Firmas principal y apilada" } },
            // Process steps as one narrower strip, with breathing room on both sides
            { strip: [1, 2, 3, 4, 5].map(k => ({ src: `images/top50/logo-step-${k}.jpg`, ar: "960/735" })), narrow: true, col: 1, span: 12 },
            { src: "images/top50/type-gin.png", ar: "16/9", col: 1, span: 6, caption: { en: "Gin, for headlines and the countdown", pt: "Gin, para títulos e a contagem regressiva", es: "Gin, para títulos y la cuenta regresiva" } },
            { src: "images/top50/type-citrus.png", ar: "16/9", col: 7, span: 6, caption: { en: "Citrus Gothic, the everyday voice", pt: "Citrus Gothic, a voz do dia a dia", es: "Citrus Gothic, la voz del día a día" } },
            { chapter: { en: "03 · The van", pt: "03 · A van", es: "03 · La van" }, kicker: { en: "Photo → Flora.AI → film", pt: "Foto → Flora.AI → filme", es: "Foto → Flora.AI → video" },
              head: { en: "No van was wrapped in the *making of this campaign.*", pt: "Nenhuma van foi envelopada durante *a produção desta campanha.*", es: "Ninguna van fue rotulada durante *la producción de esta campaña.*" },
              text: { en: "A real white van became the plate: repainted in Housecall navy, wrapped with the crest and tagline, then put in motion, all in Flora.", pt: "Uma van branca de verdade virou a base: ganhou o azul Housecall, foi envelopada com o brasão e a assinatura e depois entrou em movimento, tudo no Flora.", es: "Una van blanca de verdad fue la base: se repintó con el azul Housecall, se rotuló con el escudo y el eslogan y después se puso en movimiento, todo en Flora." } },
            // Process steps as one narrower strip, with breathing room on both sides
            { strip: [1, 2, 3, 4, 5, 6].map(k => ({ src: `images/top50/van-step-${k}.jpg`, ar: "960/735" })), narrow: true, col: 1, span: 12 },
            { flip: [
                { src: "images/top50/van-plate-back.jpg", ar: "2000/1116", caption: { en: "Plate — rear doors", pt: "Base — portas traseiras", es: "Base — puertas traseras" } },
                { src: "images/top50/van-logo-back.jpg", ar: "2000/1116", caption: { en: "Logo applied — rear doors", pt: "Logo aplicado — portas traseiras", es: "Logo aplicado — puertas traseras" } },
                { src: "images/top50/van-plate-hood.jpg", ar: "2000/1116", caption: { en: "Plate — hood", pt: "Base — capô", es: "Base — capó" } },
                { src: "images/top50/van-logo-hood.jpg", ar: "2000/1116", caption: { en: "Logo applied — hood", pt: "Logo aplicado — capô", es: "Logo aplicado — capó" } },
              ], col: 1, span: 12 },
            { src: "images/top50/van-hero.jpg", ar: "2000/1121", col: 1, span: 12, caption: { en: "The full wrap: crest, trades and “Trusted. Reliable. Unforgettable.”", pt: "O envelopamento completo: brasão, ofícios e “Trusted. Reliable. Unforgettable.”", es: "El rotulado completo: escudo, oficios y “Trusted. Reliable. Unforgettable.”" } },
            { chapter: { en: "04 · Social", pt: "04 · Social", es: "04 · Social" }, kicker: { en: "Launch · FAQ · countdown · voting", pt: "Lançamento · FAQ · contagem · votação", es: "Lanzamiento · FAQ · cuenta regresiva · votación" },
              head: { en: "From launch to the *last vote.*", pt: "Do lançamento ao *último voto.*", es: "Del lanzamiento al *último voto.*" },
              text: { en: "One system for every step: a rules FAQ, a countdown, the voting launch, a finalist kit and an email for the 50 who made it.", pt: "Um sistema só pra todas as etapas: FAQ das regras, contagem regressiva, abertura da votação, kit dos finalistas e um e-mail pros 50 que chegaram lá.", es: "Un solo sistema para todas las etapas: FAQ de las reglas, cuenta regresiva, apertura de la votación, kit de finalistas y un email para los 50 que llegaron." } },
            { marquee: [1, 2, 3, 4, 5, 6, 7].map(k => ({ src: `images/top50/carousel-0${k}.jpg`, ar: "1200/1500" })),
              col: 1, span: 12, caption: { en: "FAQ carousel: everything you need to know", pt: "Carrossel de FAQ: tudo o que você precisa saber", es: "Carrusel de FAQ: todo lo que necesitas saber" } },
            { src: "images/top50/countdown-ig.jpg", ar: "1200/1500", col: 1, span: 4, caption: { en: "Countdown, Instagram", pt: "Contagem regressiva, Instagram", es: "Cuenta regresiva, Instagram" } },
            { src: "images/top50/countdown-fb.jpg", ar: "2000/1045", col: 5, span: 8, caption: { en: "Countdown, Facebook and LinkedIn", pt: "Contagem regressiva, Facebook e LinkedIn", es: "Cuenta regresiva, Facebook y LinkedIn" } },
            { src: "images/top50/voting-open.jpg", ar: "2000/1045", col: 1, span: 12, caption: { en: "Voting has opened", pt: "A votação está aberta", es: "La votación está abierta" } },
            { src: "images/top50/vote-for.jpg", ar: "2000/1045", col: 1, span: 6, caption: { en: "Finalist kit: “We've been selected — vote for…”", pt: "Kit dos finalistas: “Fomos selecionados — vote em…”", es: "Kit de finalistas: “Fuimos seleccionados — vota por…”" } },
            { src: "images/top50/email-made-it.jpg", ar: "2000/666", col: 7, span: 6, caption: { en: "Email header for the 50 finalists", pt: "Header de e-mail para os 50 finalistas", es: "Header de email para los 50 finalistas" } },
            { chapter: { en: "05 · The 50 winners", pt: "05 · Os 50 vencedores", es: "05 · Los 50 ganadores" }, kicker: { en: "1080 × 1350 · six carousels", pt: "1080 × 1350 · seis carrosséis", es: "1080 × 1350 · seis carruseles" },
              head: { en: "Every name got *a slide of its own.*", pt: "Cada nome ganhou *um slide só seu.*", es: "Cada nombre tuvo *su propio slide.*" },
              text: { en: "Motherflushers Plumbing, Honey Go Fix It, Sprinklers and Stinkers: the names were the content. Six carousels gave each of the 50 winners its moment, and a kit of templates let the Pros show it off themselves.", pt: "Motherflushers Plumbing, Honey Go Fix It, Sprinklers and Stinkers: os nomes eram o conteúdo. Seis carrosséis deram a cada um dos 50 vencedores o seu momento, e um kit de templates deixou os próprios Pros mostrarem a conquista.", es: "Motherflushers Plumbing, Honey Go Fix It, Sprinklers and Stinkers: los nombres eran el contenido. Seis carruseles le dieron a cada uno de los 50 ganadores su momento, y un kit de plantillas dejó que los propios Pros lo mostraran." } },
            { strip: [12, 13, 31, 32, 48].map(k => ({ src: `images/top50/win-${k}.jpg`, ar: "1080/1350" })), col: 1, span: 12, caption: { en: "Winners #12, #13, #31, #32 and #48", pt: "Vencedores #12, #13, #31, #32 e #48", es: "Ganadores #12, #13, #31, #32 y #48" } },
            { chapter: { en: "06 · Films", pt: "06 · Filmes", es: "06 · Videos" }, kicker: "Flora.AI",
              head: { en: "The van, *in motion.*", pt: "A van, *em movimento.*", es: "La van, *en movimiento.*" },
              text: { en: "The shot list was written as one cinematic prompt and cut in four; stills from the shoot were resized for Stories.", pt: "A decupagem virou um prompt cinematográfico só, cortado em quatro; os stills da produção foram adaptados pra Stories.", es: "La lista de planos se convirtió en un solo prompt cinematográfico, cortado en cuatro; los stills de la producción se adaptaron para Stories." } },
            { video: "images/top50/film-van.mp4", webm: "images/top50/film-van.webm", poster: "images/top50/film-van-poster.jpg", ar: "16/9", col: 1, span: 12, caption: { en: "Film — the van in motion", pt: "Filme — a van em movimento", es: "Video — la van en movimiento" } },
            { src: "images/top50/van-scene.jpg", ar: "1080/1920", col: 1, span: 4 },
            { src: "images/top50/van-worker.jpg", ar: "1080/1920", col: 5, span: 4 },
            { src: "images/top50/van-branding.jpg", ar: "1080/1920", col: 9, span: 4 },
          ],
        },
        {
          // The Home Depot × Housecall Pro: paid launch creative for the Pro Business Hub app (Felipe's Behance panels, Nov 13 2026).
          // It wears the material's own look: the panels' warm grey page, near-black ink and Home Depot orange.
          slug: "the-home-depot-pilot",
          title: "The Home Depot (Pilot)",
          type: "campaign",
          year: "2026",
          theme: { bg: "#edebe7", fg: "#1c1d1f", mute: "#5f5f5f", line: "#c9c5be", panel: "#e2dfd9", accent: "#f96302" },
          scope: { en: "Paid launch creative // Meta // Yahoo", pt: "Criação da campanha de lançamento // Meta // Yahoo", es: "Creatividad de lanzamiento // Meta // Yahoo" },
          role: { en: "Lead designer on the paid creative: concept, imagery, layout system, production", pt: "Designer líder da mídia paga: conceito, imagem, sistema de layout, produção", es: "Diseñador líder de la pauta paga: concepto, imagen, sistema de layout, producción" },
          deliverables: { en: "30 ad units in 10 formats and 3 concepts: Meta feed and stories, Yahoo billboard, display and mobile", pt: "30 peças em 10 formatos e 3 conceitos: feed e stories na Meta, billboard no Yahoo, display e mobile", es: "30 piezas en 10 formatos y 3 conceptos: feed y stories en Meta, billboard en Yahoo, display y mobile" },
          summary: {
            en: "Housecall Pro and The Home Depot launched Pro Business Hub, a free co-branded business app for Pro Xtra members. I designed the paid ad inventory that introduced it: four creative rounds in seventeen days, from first concept to a 30-unit set across Meta and Yahoo. Live on September 1.",
            pt: "A Housecall Pro e a The Home Depot lançaram o Pro Business Hub, um app de gestão gratuito e co-branded para os membros do Pro Xtra. Eu desenhei a mídia paga que apresentou o app: quatro rodadas de criação em dezessete dias, do primeiro conceito a um conjunto de 30 peças na Meta e no Yahoo. No ar em 1º de setembro.",
            es: "Housecall Pro y The Home Depot lanzaron Pro Business Hub, una app de gestión gratuita y co-branded para los miembros de Pro Xtra. Diseñé la pauta paga que la presentó: cuatro rondas creativas en diecisiete días, del primer concepto a un set de 30 piezas en Meta y Yahoo. Al aire el 1 de septiembre.",
          },
          stats: [
            ["17", { en: "Days from first concept to sign-off", pt: "Dias do primeiro conceito à aprovação", es: "Días del primer concepto a la aprobación" }],
            ["4", { en: "Creative rounds", pt: "Rodadas de criação", es: "Rondas creativas" }],
            ["30", { en: "Ad units in 10 formats", pt: "Peças em 10 formatos", es: "Piezas en 10 formatos" }],
            ["~900", { en: "Pros enrolled in the pilot", pt: "Pros inscritos no piloto", es: "Pros inscritos en el piloto" }],
          ],
          image: "images/hcp-thd/billboard-1.jpg",
          heroAr: "1960/504",
          layout: "loose", grid: "fluxo",
          gallery: [
            { chapter: { en: "01 · Brief", pt: "01 · Briefing", es: "01 · Brief" }, kicker: { en: "Two brands · one app", pt: "Duas marcas · um app", es: "Dos marcas · una app" },
              head: { en: "Two brands, one app, *one month* to launch.", pt: "Duas marcas, um app, *um mês* pro lançamento.", es: "Dos marcas, una app, *un mes* para el lanzamiento." },
              text: { en: "Pro Business Hub puts Housecall Pro's estimates, scheduling and invoicing inside a free app for Home Depot Pros, with Home Depot prices built into every estimate. The pilot opened in three stores on September 1 and the ads had to be ready first. They had to sell a new product, read unmistakably as The Home Depot and still say “powered by Housecall Pro”, through two creative teams and two sets of brand rules.",
                pt: "O Pro Business Hub coloca orçamento, agenda e faturamento da Housecall Pro dentro de um app gratuito para os Pros da Home Depot, com os preços da Home Depot em cada orçamento. O piloto abriu em três lojas em 1º de setembro e as peças tinham que estar prontas antes. Elas precisavam vender um produto novo, ser Home Depot sem dúvida nenhuma e ainda dizer “powered by Housecall Pro”, passando por dois times de criação e dois manuais de marca.",
                es: "Pro Business Hub pone los presupuestos, la agenda y la facturación de Housecall Pro dentro de una app gratuita para los Pros de Home Depot, con los precios de Home Depot en cada presupuesto. El piloto abrió en tres tiendas el 1 de septiembre y las piezas tenían que estar listas antes. Debían vender un producto nuevo, ser Home Depot sin duda alguna y aun así decir “powered by Housecall Pro”, pasando por dos equipos creativos y dos manuales de marca." },
              pills: [
                { en: "The partner's orange leads", pt: "O laranja do parceiro na frente", es: "El naranja del socio adelante" },
                { en: "Bright, clean imagery", pt: "Imagem clara e limpa", es: "Imagen clara y limpia" },
                { en: "AI only where the rules allow", pt: "IA só onde as regras deixam", es: "IA solo donde las reglas lo permiten" },
                { en: "The product as the hero", pt: "O produto como herói", es: "El producto como héroe" },
                { en: "Claims cleared by legal", pt: "Claims aprovados pelo jurídico", es: "Claims aprobados por legal" },
              ] },
            { chapter: { en: "02 · Process", pt: "02 · Processo", es: "02 · Proceso" }, kicker: { en: "Aug 5 to Aug 21, 2026", pt: "De 5 a 21 de agosto de 2026", es: "Del 5 al 21 de agosto de 2026" },
              head: { en: "Four rounds, *one direction.*", pt: "Quatro rodadas, *uma direção.*", es: "Cuatro rondas, *una dirección.*" },
              text: { en: "Each round answered the feedback from the one before. The fastest way to agreement was to put finished-looking options on the table, early and often.", pt: "Cada rodada respondia ao feedback da anterior. O caminho mais rápido até o acordo foi pôr na mesa opções com cara de peça pronta, cedo e sempre.", es: "Cada ronda respondía al feedback de la anterior. El camino más rápido al acuerdo fue poner sobre la mesa opciones con cara de pieza terminada, temprano y seguido." } },
            { text: { en: "Round 1 · Aug 5 — Eight concepts overnight. Partner feedback: too AI.", pt: "Rodada 1 · 5 ago — Oito conceitos de um dia pro outro. O parceiro achou “IA demais”.", es: "Ronda 1 · 5 ago — Ocho conceptos de un día para otro. El socio los encontró “demasiado IA”." }, col: 1, span: 12 },
            { src: "images/hcp-thd/r1-1.jpg", ar: "550/550", col: 1, span: 4, caption: { en: "Prices in the estimate", pt: "Preços no orçamento", es: "Precios en el presupuesto" } },
            { src: "images/hcp-thd/r1-2.jpg", ar: "548/550", col: 5, span: 4, caption: { en: "Get paid before the truck", pt: "Receba antes de voltar pra caminhonete", es: "Cobra antes de volver a la camioneta" } },
            { src: "images/hcp-thd/r1-3.jpg", ar: "550/550", col: 9, span: 4, caption: { en: "Invoice tonight", pt: "Fature hoje à noite", es: "Factura esta noche" } },
            { text: { en: "Round 2 · Aug 11 — Back to real light: photography, warmer grading, less Housecall blue.", pt: "Rodada 2 · 11 ago — De volta à luz de verdade: fotografia, cor mais quente, menos azul Housecall.", es: "Ronda 2 · 11 ago — De vuelta a la luz real: fotografía, color más cálido, menos azul Housecall." }, col: 1, span: 12 },
            { src: "images/hcp-thd/r2-1.jpg", ar: "550/550", col: 1, span: 4, caption: { en: "A · Phone in hand", pt: "A · Celular na mão", es: "A · Celular en la mano" } },
            { src: "images/hcp-thd/r2-2.jpg", ar: "548/550", col: 5, span: 4, caption: { en: "B · Floating UI", pt: "B · Interface flutuante", es: "B · Interfaz flotante" } },
            { src: "images/hcp-thd/r2-3.jpg", ar: "550/550", col: 9, span: 4, caption: { en: "C · Pro focused", pt: "C · Foco no Pro", es: "C · Foco en el Pro" } },
            { text: { en: "Round 3 · Aug 12–14 — The charcoal panel: the photo on top, the message below. The move that unlocked the system.", pt: "Rodada 3 · 12–14 ago — O painel grafite: a foto em cima, a mensagem embaixo. A virada que destravou o sistema.", es: "Ronda 3 · 12–14 ago — El panel grafito: la foto arriba, el mensaje abajo. El giro que destrabó el sistema." }, col: 1, span: 12 },
            { src: "images/hcp-thd/r3-1.jpg", ar: "838/838", col: 1, span: 6, caption: { en: "Product close-up", pt: "Close no produto", es: "Primer plano del producto" } },
            { src: "images/hcp-thd/r3-2.jpg", ar: "838/838", col: 7, span: 6, caption: { en: "Job progress card", pt: "Card de andamento da obra", es: "Tarjeta de avance de la obra" } },
            { text: { en: "Round 4 · Aug 17 — Headlines that clear legal, cut to three concepts.", pt: "Rodada 4 · 17 ago — Títulos que passam no jurídico, cortados para três conceitos.", es: "Ronda 4 · 17 ago — Títulos que pasan por legal, reducidos a tres conceptos." }, col: 1, span: 12 },
            { src: "images/hcp-thd/r4-1.jpg", ar: "550/550", col: 1, span: 4, caption: { en: "Launch news", pt: "Notícia de lançamento", es: "Noticia de lanzamiento" } },
            { src: "images/hcp-thd/r4-2.jpg", ar: "548/550", col: 5, span: 4, caption: { en: "Introducing", pt: "Apresentando", es: "Presentando" } },
            { src: "images/hcp-thd/r4-3.jpg", ar: "550/550", col: 9, span: 4, caption: { en: "Time saved", pt: "Tempo ganho", es: "Tiempo ganado" } },
            { chapter: { en: "03 · The product", pt: "03 · O produto", es: "03 · El producto" }, kicker: { en: "Real UI only · readable at 300 × 50", pt: "Só interface real · legível em 300 × 50", es: "Solo interfaz real · legible en 300 × 50" },
              head: { en: "The product, *on every screen.*", pt: "O produto, *em cada tela.*", es: "El producto, *en cada pantalla.*" },
              text: { en: "Every phone shows real Pro Business Hub screens: estimates, purchase orders, job schedules. Composited by hand to match angle, light and reflections, in a placement workflow built to repeat across every format.", pt: "Todo celular mostra telas reais do Pro Business Hub: orçamentos, pedidos de compra, agenda de obras. Montadas à mão para casar ângulo, luz e reflexos, num fluxo de aplicação feito pra se repetir em todos os formatos.", es: "Cada celular muestra pantallas reales de Pro Business Hub: presupuestos, órdenes de compra, agenda de obras. Montadas a mano para igualar ángulo, luz y reflejos, en un flujo de aplicación pensado para repetirse en todos los formatos." } },
            { src: "images/hcp-thd/craft-1.jpg", ar: "1274/1418", col: 1, span: 5 },
            { src: "images/hcp-thd/craft-2.jpg", ar: "1106/690", col: 6, span: 7 },
            { src: "images/hcp-thd/craft-3.jpg", ar: "1106/692", col: 1, span: 12 },
            { chapter: { en: "04 · The system", pt: "04 · O sistema", es: "04 · El sistema" }, kicker: { en: "Meta · Yahoo · display · mobile", pt: "Meta · Yahoo · display · mobile", es: "Meta · Yahoo · display · mobile" },
              head: { en: "Three concepts, *ten formats.*", pt: "Três conceitos, *dez formatos.*", es: "Tres conceptos, *diez formatos.*" },
              text: { en: "Win More Jobs, Limited-Time Free Offer, Invoice and Get Paid. One rule carries them all: the photo above, the charcoal panel below, the lockup bottom right.", pt: "Win More Jobs, Limited-Time Free Offer, Invoice and Get Paid. Uma regra leva todos: a foto em cima, o painel grafite embaixo, a assinatura no canto inferior direito.", es: "Win More Jobs, Limited-Time Free Offer, Invoice and Get Paid. Una sola regla los lleva a todos: la foto arriba, el panel grafito abajo, la firma en la esquina inferior derecha." } },
            { device: "iphone", src: "images/hcp-thd/story-1.jpg", ar: "508/904", col: 1, span: 4, caption: { en: "Meta stories 1080 × 1920", pt: "Stories Meta 1080 × 1920", es: "Stories Meta 1080 × 1920" } },
            { device: "iphone", src: "images/hcp-thd/story-2.jpg", ar: "504/904", col: 5, span: 4 },
            { device: "iphone", src: "images/hcp-thd/story-3.jpg", ar: "508/904", col: 9, span: 4 },
            { src: "images/hcp-thd/feed-1.jpg", ar: "784/784", col: 1, span: 4, caption: { en: "Meta feed 1080 × 1080", pt: "Feed Meta 1080 × 1080", es: "Feed Meta 1080 × 1080" } },
            { src: "images/hcp-thd/feed-2.jpg", ar: "784/784", col: 5, span: 4 },
            { src: "images/hcp-thd/feed-3.jpg", ar: "784/784", col: 9, span: 4 },
            { src: "images/hcp-thd/billboard-2.jpg", ar: "1960/504", col: 1, span: 12, caption: { en: "Yahoo billboard 970 × 250", pt: "Billboard Yahoo 970 × 250", es: "Billboard Yahoo 970 × 250" } },
            { src: "images/hcp-thd/billboard-3.jpg", ar: "1960/504", col: 1, span: 12 },
            { src: "images/hcp-thd/display-1.jpg", ar: "420/840", col: 1, span: 3, caption: { en: "Display 300 × 600", pt: "Display 300 × 600", es: "Display 300 × 600" } },
            { src: "images/hcp-thd/display-2.jpg", ar: "420/840", col: 4, span: 3 },
            { src: "images/hcp-thd/display-3.jpg", ar: "256/840", col: 7, span: 2, caption: { en: "160 × 600", pt: "160 × 600", es: "160 × 600" } },
            { src: "images/hcp-thd/display-4.jpg", ar: "256/840", col: 9, span: 1 },
            { src: "images/hcp-thd/display-5.jpg", ar: "520/432", col: 10, span: 3, caption: { en: "300 × 250", pt: "300 × 250", es: "300 × 250" } },
            { src: "images/hcp-thd/leader-1.jpg", ar: "1520/188", col: 1, span: 12, caption: { en: "Leaderboard 728 × 90", pt: "Leaderboard 728 × 90", es: "Leaderboard 728 × 90" } },
            { src: "images/hcp-thd/leader-2.jpg", ar: "1520/188", col: 1, span: 12 },
          ],
        },
        {
          // Organic social, Apr 2026 on (Felipe's case pages, Nov 13 2026). It is the Housecall Pro brand itself
          // (Denim + Golden Hour), so it keeps the brand page's colours.
          slug: "social-media",
          title: "Social Media",
          type: "campaign",
          year: "2026",
          scope: { en: "Organic social // Template system // Automation", pt: "Social orgânico // Sistema de templates // Automação", es: "Social orgánico // Sistema de plantillas // Automatización" },
          role: { en: "Owner of organic social design: carousels, statics, events, seasonal and customer stories", pt: "Responsável pelo design do social orgânico: carrosséis, posts estáticos, eventos, datas sazonais e histórias de clientes", es: "Responsable del diseño del social orgánico: carruseles, posts estáticos, eventos, fechas de temporada e historias de clientes" },
          deliverables: { en: "Feed design for Facebook, Instagram and LinkedIn, the master template and the production tooling", pt: "Design do feed no Facebook, Instagram e LinkedIn, o template mestre e as ferramentas de produção", es: "Diseño del feed en Facebook, Instagram y LinkedIn, la plantilla maestra y las herramientas de producción" },
          tools: ["Adobe CC", "ExtendScript", "*Claude Code", "Google Sheets", "Monday.com"],
          summary: {
            en: "I took over Housecall Pro's organic social design in April 2026, standardized it into one template system, and then automated the most time-heavy format: a weekly customer story carousel now goes from a calendar row to an editable five-slide Photoshop file in minutes.",
            pt: "Assumi o design do social orgânico da Housecall Pro em abril de 2026, padronizei tudo num sistema de templates só e depois automatizei o formato que mais tomava tempo: o carrossel semanal de história de cliente agora sai de uma linha do calendário para um arquivo de Photoshop editável, com cinco slides, em minutos.",
            es: "Asumí el diseño del social orgánico de Housecall Pro en abril de 2026, lo estandaricé en un solo sistema de plantillas y después automaticé el formato que más tiempo tomaba: el carrusel semanal de historia de cliente ahora pasa de una fila del calendario a un archivo de Photoshop editable, con cinco slides, en minutos.",
          },
          stats: [
            [{ en: "2 wks", pt: "2 sem.", es: "2 sem." }, { en: "From my first day to the first set live", pt: "Do primeiro dia ao primeiro post no ar", es: "Del primer día al primer post al aire" }],
            ["61", { en: "Deliverables in July, up from 9 in April", pt: "Entregas em julho, contra 9 em abril", es: "Entregas en julio, frente a 9 en abril" }],
            ["23 / 23", { en: "October posts delivered (8 carousels, 14 videos, 1 other)", pt: "Posts de outubro entregues (8 carrosséis, 14 vídeos, 1 outro)", es: "Posts de octubre entregados (8 carruseles, 14 videos, 1 otro)" }],
            ["4", { en: "Customer stories in October, one a week, five slides each", pt: "Histórias de cliente em outubro, uma por semana, cinco slides cada", es: "Historias de cliente en octubre, una por semana, cinco slides cada una" }],
            ["1 → 5", { en: "One calendar row, a five-slide carousel", pt: "Uma linha do calendário, um carrossel de cinco slides", es: "Una fila del calendario, un carrusel de cinco slides" }],
          ],
          image: "images/hcp-social/faq-grid.jpg",
          heroAr: "1992/1652",
          layout: "loose", grid: "fluxo",
          gallery: [
            { chapter: { en: "01 · Brief", pt: "01 · Briefing", es: "01 · Brief" }, kicker: { en: "Facebook · Instagram · LinkedIn", pt: "Facebook · Instagram · LinkedIn", es: "Facebook · Instagram · LinkedIn" },
              head: { en: "Own the feed, *then make it faster.*", pt: "Assumir o feed e *depois acelerar.*", es: "Hacerse cargo del feed y *después acelerar.*" },
              text: { en: "Housecall Pro posts several times a week: customer stories, feature explainers, events, seasonal moments and trade celebrations. When I joined, every post started from a blank file and the calendar lived in two places that drifted apart. The job grew from designing posts to owning how they get made.", pt: "A Housecall Pro posta várias vezes por semana: histórias de clientes, explicações de funcionalidades, eventos, datas sazonais e homenagens aos ofícios. Quando entrei, cada post começava de um arquivo em branco e o calendário vivia em dois lugares que não batiam. O trabalho cresceu de desenhar posts para cuidar de como eles são feitos.", es: "Housecall Pro publica varias veces por semana: historias de clientes, explicaciones de funciones, eventos, fechas de temporada y homenajes a los oficios. Cuando entré, cada post empezaba en un archivo en blanco y el calendario vivía en dos lugares que no coincidían. El trabajo pasó de diseñar posts a cuidar cómo se hacen." },
              pills: [
                { en: "The 2026 brand guide", pt: "O guia de marca 2026", es: "La guía de marca 2026" },
                { en: "Real Pros only", pt: "Só Pros de verdade", es: "Solo Pros reales" },
                { en: "Slide one stops the scroll", pt: "O primeiro slide para o scroll", es: "El primer slide detiene el scroll" },
                { en: "4:5, built for the feed", pt: "4:5, feito pro feed", es: "4:5, hecho para el feed" },
                { en: "Quotes stay verbatim", pt: "Depoimentos sem edição", es: "Testimonios sin editar" },
              ] },
            { roll: [12, 13, 31, 32, 48].map(k => ({ src: `images/top50/win-${k}.jpg`, ar: "1080/1350" })), auto: true,
              name: { en: "Top 50 Unforgettable Brand Names · winners", pt: "Top 50 Unforgettable Brand Names · vencedores", es: "Top 50 Unforgettable Brand Names · ganadores" },
              caption: { en: "Five slides, each winner with its own logo", pt: "Cinco slides, cada vencedor com o próprio logo", es: "Cinco slides, cada ganador con su propio logo" } },
            { chapter: { en: "02 · Process", pt: "02 · Processo", es: "02 · Proceso" }, kicker: { en: "April 2026 to now", pt: "De abril de 2026 até hoje", es: "De abril de 2026 a hoy" },
              head: { en: "Own, standardize, *automate.*", pt: "Assumir, padronizar, *automatizar.*", es: "Asumir, estandarizar, *automatizar.*" },
              text: { en: "The system grew in four stages, each one out of a real pain point in the weekly calendar.", pt: "O sistema cresceu em quatro etapas, cada uma nascida de uma dor real do calendário semanal.", es: "El sistema creció en cuatro etapas, cada una nacida de un problema real del calendario semanal." } },
            { text: { en: "Apr to Jun — Own the feed", pt: "Abr a jun — Assumir o feed", es: "Abr a jun — Hacerse cargo del feed" }, col: 1, span: 12 },
            { src: "images/hcp-social/hvac.jpg", ar: "1026/1400", col: 1, span: 4, caption: { en: "Trade explainer · April (9 deliverables that month, 50+ a month from May)", pt: "Explicação de ofício · abril (9 entregas no mês, 50+ por mês a partir de maio)", es: "Explicación de oficio · abril (9 entregas ese mes, 50+ por mes desde mayo)" } },
            { src: "images/hcp-social/spring-summit.jpg", ar: "1080/1350", col: 5, span: 4, caption: { en: "Event lineup · June", pt: "Line-up de evento · junho", es: "Line-up de evento · junio" } },
            { src: "images/hcp-social/tradesmen.jpg", ar: "1080/1350", col: 9, span: 4, caption: { en: "Trade celebration · September", pt: "Homenagem aos ofícios · setembro", es: "Homenaje a los oficios · septiembre" } },
            { text: { en: "September — One template system", pt: "Setembro — Um sistema de templates", es: "Septiembre — Un sistema de plantillas" }, col: 1, span: 12 },
            { src: "images/hcp-social/strip-1.jpg", ar: "2000/500", col: 1, span: 12, caption: { en: "5400 × 1350 · five slides, one file", pt: "5400 × 1350 · cinco slides, um arquivo", es: "5400 × 1350 · cinco slides, un archivo" } },
            { text: { en: "October — A carousel that builds itself", pt: "Outubro — Um carrossel que se monta sozinho", es: "Octubre — Un carrusel que se arma solo" }, col: 1, span: 12 },
            { src: "images/hcp-social/strip-2.jpg", ar: "2000/500", col: 1, span: 12, caption: { en: "A Photoshop fill script and a Claude skill read the calendar row, write the slides, place real photos and save the file; a designer reviews and ships every one", pt: "Um script de Photoshop e uma skill do Claude leem a linha do calendário, escrevem os slides, colocam fotos reais e salvam o arquivo; um designer revisa e publica cada um", es: "Un script de Photoshop y una skill de Claude leen la fila del calendario, escriben los slides, colocan fotos reales y guardan el archivo; un diseñador revisa y publica cada uno" } },
            { src: "images/hcp-social/strip-3.jpg", ar: "2000/500", col: 1, span: 12 },
            { text: { en: "Ongoing — A calendar that agrees with itself", pt: "Contínuo — Um calendário que bate consigo mesmo", es: "Continuo — Un calendario que coincide consigo mismo" }, col: 1, span: 12 },
            { src: "images/hcp-social/winter-1.jpg", ar: "1080/1350", col: 1, span: 4, caption: { en: "The Google Sheet and the Monday.com board, cross-checked every month", pt: "A planilha do Google e o quadro do Monday.com, conferidos todo mês", es: "La planilla de Google y el tablero de Monday.com, cruzados cada mes" } },
            { src: "images/hcp-social/winter-2.jpg", ar: "1080/1350", col: 5, span: 4 },
            { src: "images/hcp-social/winter-3.jpg", ar: "1080/1350", col: 9, span: 4 },
            { chapter: { en: "03 · The feed", pt: "03 · O feed", es: "03 · El feed" }, kicker: { en: "1080 × 1350 · one grid, one type ladder", pt: "1080 × 1350 · um grid, uma escala tipográfica", es: "1080 × 1350 · una grilla, una escala tipográfica" },
              head: { en: "One system, *every kind of post.*", pt: "Um sistema, *todo tipo de post.*", es: "Un sistema, *todo tipo de post.*" },
              text: { en: "Customer stories, seasonal series, events and feature explainers, all on the same grid.", pt: "Histórias de clientes, séries sazonais, eventos e explicações de funcionalidades, tudo no mesmo grid.", es: "Historias de clientes, series de temporada, eventos y explicaciones de funciones, todo en la misma grilla." } },
            { src: "images/hcp-social/story-cranford.jpg", ar: "2000/500", col: 1, span: 12 },
            { src: "images/hcp-social/story-marer.jpg", ar: "2000/500", col: 1, span: 12 },
            { src: "images/hcp-social/story-guedes.jpg", ar: "2000/500", col: 1, span: 12 },
            { src: "images/hcp-social/story-hirthe.jpg", ar: "2000/500", col: 1, span: 12, caption: { en: "Customer stories · October. Four Pros, four weeks, the same five-slide template, each one built from a calendar row", pt: "Histórias de cliente · outubro. Quatro Pros, quatro semanas, o mesmo template de cinco slides, cada um montado a partir de uma linha do calendário", es: "Historias de cliente · octubre. Cuatro Pros, cuatro semanas, la misma plantilla de cinco slides, cada una armada a partir de una fila del calendario" } },
            { src: "images/hcp-social/fire-week.jpg", ar: "2400/500", caption: { en: "Fire Prevention Week · October. Six slides", pt: "Fire Prevention Week · outubro. Seis slides", es: "Fire Prevention Week · octubre. Seis slides" }, col: 1, span: 12 },
            { src: "images/hcp-social/halloween-1.jpg", ar: "1080/1350", col: 1, span: 6, caption: { en: "Halloween series · October", pt: "Série de Halloween · outubro", es: "Serie de Halloween · octubre" } },
            { src: "images/hcp-social/halloween-2.jpg", ar: "1080/1350", col: 7, span: 6 },
            { src: "images/hcp-social/strip-4.jpg", ar: "2000/400", col: 1, span: 12, caption: { en: "A customer story carousel, all five slides", pt: "Um carrossel de história de cliente, os cinco slides", es: "Un carrusel de historia de cliente, los cinco slides" } },
            { chapter: { en: "04 · Results", pt: "04 · Resultados", es: "04 · Resultados" }, kicker: { en: "Deliverables per month, 2026", pt: "Entregas por mês, 2026", es: "Entregas por mes, 2026" },
              head: { en: "More output, *same craft.*", pt: "Mais entregas, *o mesmo cuidado.*", es: "Más entregas, *el mismo cuidado.*" },
              text: { en: "From 9 to 61 deliverables a month between April and July: more than six times as many, on the same template system.", pt: "De 9 para 61 entregas por mês entre abril e julho: mais de seis vezes mais, no mesmo sistema de templates.", es: "De 9 a 61 entregas por mes entre abril y julio: más de seis veces más, con el mismo sistema de plantillas." } },
            { bars: [[{ en: "Apr", pt: "Abr", es: "Abr" }, 9], [{ en: "May", pt: "Mai", es: "May" }, 50], [{ en: "Jun", pt: "Jun", es: "Jun" }, 56], [{ en: "Jul", pt: "Jul", es: "Jul" }, 61]],
              unit: { en: "My deliverables per month · counts from the creative team's tracking board", pt: "Minhas entregas por mês · contagem do quadro de acompanhamento do time de criação", es: "Mis entregas por mes · conteo del tablero de seguimiento del equipo creativo" } },
            { chapter: { en: "05 · The first months", pt: "05 · Os primeiros meses", es: "05 · Los primeros meses" }, kicker: { en: "May to August 2026", pt: "Maio a agosto de 2026", es: "Mayo a agosto de 2026" }, fullWidthIntro: true,
              head: { en: "Before the system, *post by post.*", pt: "Antes do sistema, *post a post.*", es: "Antes del sistema, *post a post.*" },
              text: { en: "Feed posts from the first months, in calendar order: trade days, product features, the Spring Summit and Trades Thursday.", pt: "Posts de feed dos primeiros meses, na ordem do calendário: datas dos ofícios, funcionalidades do produto, o Spring Summit e o Trades Thursday.", es: "Posts de feed de los primeros meses, en orden de calendario: días de los oficios, funciones del producto, el Spring Summit y el Trades Thursday." } },
            { patch: true, col: 1, span: 12, strip: [
              { src: "images/hcp-social/mural/05-bootcamp-recap.jpg", ar: "1080/1350" },
              { src: "images/hcp-social/mural/06-estimates.jpg", ar: "1080/1350" },
              { src: "images/hcp-social/mural/07-scheduling.jpg", ar: "1080/1350" },
              { src: "images/hcp-social/mural/08-summit-learn.jpg", ar: "1080/1350" },
              { src: "images/hcp-social/mural/09-giveaway.jpg", ar: "1080/1350" },
              { src: "images/hcp-social/mural/10-route.jpg", ar: "1080/1350" },
              { src: "images/hcp-social/mural/11-job-app.jpg", ar: "1080/1350" },
              { src: "images/hcp-social/mural/12-memorial-day.jpg", ar: "1080/1350" },
              { src: "images/hcp-social/mural/13-heat-day.jpg", ar: "1080/1350" },
              { src: "images/hcp-social/mural/15-reviews.jpg", ar: "1080/1350" },
              { src: "images/hcp-social/mural/18-fathers-day.jpg", ar: "1080/1350" },
              { src: "images/hcp-social/mural/19-trades-thursday.jpg", ar: "1080/1350" },
            ], caption: { en: "12 feed posts · May to August 2026", pt: "12 posts de feed · maio a agosto de 2026", es: "12 posts de feed · mayo a agosto de 2026" } },
          ],
        },
      ],
    },
    {
      title: "XP Inc.",
      track: { id: "5W3cjX2J3tjhG8zb6u0qHn", name: "Harder, Better, Faster, Stronger", by: "Daft Punk" },
      type: "campaign",
      client: "XP Inc.",
      year: "2021",
      role: { en: "Art Director", pt: "Diretor de Arte", es: "Director de Arte" },
      scope: { en: "Sponsorship identity // Campaign", pt: "Identidade de patrocínio // Campanha", es: "Identidad de patrocinio // Campaña" },
      sector: { en: "Investments · Sport", pt: "Investimentos · Esporte", es: "Inversiones · Deporte" },
      deliverables: { en: "Sponsorship sign-off, key visuals and athlete stories", pt: "Assinatura de patrocínio, key visuals e histórias de atletas", es: "Firma de patrocinio, key visuals e historias de atletas" },
      tags: { en: ["SponsorshipIdentity", "Campaign", "Sport"], pt: ["IdentidadeDePatrocínio", "Campanha", "Esporte"], es: ["IdentidadDePatrocinio", "Campaña", "Deporte"] },
      // Black page, white type, XP yellow accent
      theme: { bg: "#000000", fg: "#ffffff", mute: "#8e8e8e", line: "#2a2a2a", panel: "#111111", accent: "#fec142" },
      tools: ["Adobe CC"],
      image: "images/xp/stadium.jpg",
      hero: "bleed",
      heroAr: "16/9",
      summary: {
        en: "XP doesn't sponsor Brazilian sport, it invests in it. One crossed-out word becomes the sign-off: “Investidora oficial do esporte brasileiro”.",
        pt: "A XP não patrocina o esporte brasileiro: investe nele. Uma palavra riscada vira a assinatura: “Investidora oficial do esporte brasileiro”.", es: "XP no patrocina el deporte brasileño: invierte en él. Una palabra tachada se convierte en la firma: “Investidora oficial do esporte brasileiro”.",
      },
      layout: "loose", grid: "fluxo",
      gallery: [
        { chapter: { en: "01 · Idea", pt: "01 · Ideia", es: "01 · Idea" }, kicker: { en: "Sponsor → Investor", pt: "Patrocinadora → Investidora", es: "Patrocinadora → Inversora" },
          head: { en: "XP doesn't sponsor. *It invests.*", pt: "A XP não patrocina. *Investe.*", es: "XP no patrocina. *Invierte.*" },
          text: { en: "An investment company shouldn't sound like any other sponsor. The crossed-out word becomes a statement that works for the Brazilian Olympic Committee and for sport as a whole.", pt: "Uma empresa de investimentos não podia soar como qualquer patrocinador. A palavra riscada vira um posicionamento que serve pro Comitê Olímpico Brasileiro e pro esporte como um todo.", es: "Una empresa de inversiones no podía sonar como cualquier patrocinador. La palabra tachada se convierte en un posicionamiento que sirve para el Comité Olímpico Brasileño y para el deporte en general." } },
        { swap: { before: { en: "Patrocinadora", pt: "Patrocinadora", es: "Patrocinadora" }, after: { en: "Investidora", pt: "Investidora", es: "Investidora" } }, col: 1, span: 12 },
        { chapter: { en: "02 · Key visuals", pt: "02 · Key visuals", es: "02 · Key visuals" }, kicker: { en: "Black, white and gold", pt: "Preto, branco e dourado", es: "Negro, blanco y dorado" },
          head: { en: "The athlete at the centre, the *investment* around them.", pt: "O atleta no centro, o *investimento* em volta.", es: "El atleta en el centro, la *inversión* alrededor." },
          text: { en: "Black and white portraits of the athletes, lit by a spray of gold, with the crossed-out sign-off always at hand.", pt: "Retratos dos atletas em preto e branco, iluminados por uma explosão dourada, com a assinatura riscada sempre por perto.", es: "Retratos de los atletas en blanco y negro, iluminados por una explosión dorada, con la firma tachada siempre cerca." } },
        { src: "images/xp/design-01.jpg", ar: "16/9", col: 1, span: 12 },
        { src: "images/xp/design-02.jpg", ar: "16/9", col: 1, span: 12 },
        { src: "images/xp/design-03.jpg", ar: "16/9", col: 1, span: 12 },
        { fullWidthIntro: true, chapter: { en: "03 · Chegada / Largada", pt: "03 · Chegada / Largada", es: "03 · Chegada / Largada" }, kicker: { en: "Sport · Campaign extension", pt: "Esporte · Desdobramento de campanha", es: "Deporte · Extensión de campaña" },
          head: { en: "Every finish is *another start.*", pt: "Toda chegada é *uma nova largada.*", es: "Cada llegada es *un nuevo punto de partida.*" },
          text: { en: "A graphic system built around the idea that an athlete's finish line is also a new starting line, from typographic experiments to the swimming and judo campaign executions.", pt: "Um sistema gráfico construído em cima da ideia de que a linha de chegada de um atleta também é uma nova largada, dos estudos tipográficos às peças de natação e judô.", es: "Un sistema gráfico construido sobre la idea de que la meta de un atleta también es un nuevo punto de partida, de los estudios tipográficos a las piezas de natación y judo." } },
        { src: "images/xp/largada-empurra.gif", ar: "2560/1439", col: 1, span: 12, caption: { en: "Largada — hero typography", pt: "Largada — tipografia principal", es: "Largada — tipografía principal" } },
        { src: "images/xp/chegada-largada-03-hd.jpg", ar: "1719/966", col: 1, span: 6, caption: { en: "Swimming — Chegada / Largada", pt: "Natação — Chegada / Largada", es: "Natación — Chegada / Largada" } },
        { src: "images/xp/chegada-largada-04-hd.jpg", ar: "1719/966", col: 7, span: 6, caption: { en: "Judo — Ponto de partida / Ponto final", pt: "Judô — Ponto de partida / Ponto final", es: "Judo — Ponto de partida / Ponto final" } },
        { chapter: { en: "04 · Volleyball", pt: "04 · Vôlei", es: "04 · Vóley" }, grid: "fluxo", kicker: { en: "Athlete stories", pt: "Histórias de atletas", es: "Historias de atletas" },
          head: { en: "Turning a volleyball player into the voice of the LGBTQIA+ community in sport: *XP invests.*", pt: "Transformar um jogador de vôlei na voz da comunidade LGBTQIA+ no esporte: *a XP investe.*", es: "Convertir a un jugador de vóley en la voz de la comunidad LGBTQIA+ en el deporte: *XP invierte.*" } },
        { src: "images/xp/volei-01.jpg", ar: "16/9", col: 1, span: 6, caption: { en: "Story frames", pt: "Quadros da história", es: "Cuadros de la historia" } },
        { src: "images/xp/volei-02.jpg", ar: "16/9", col: 7, span: 6 },
        { src: "images/xp/volei-03.jpg", ar: "16/9", col: 1, span: 6 },
        { src: "images/xp/volei-04.jpg", ar: "16/9", col: 7, span: 6 },
        { chapter: { en: "05 · Swimming", pt: "05 · Natação", es: "05 · Natación" }, kicker: { en: "Athlete stories", pt: "Histórias de atletas", es: "Historias de atletas" },
          head: { en: "Turning a Brazilian into the first swimmer in history to win an Olympic medal at 32: *XP invests.*", pt: "Transformar um brasileiro no 1º nadador da história a ganhar medalha olímpica aos 32 anos: *a XP investe.*", es: "Convertir a un brasileño en el 1.er nadador de la historia en ganar una medalla olímpica a los 32 años: *XP invierte.*" } },
        { scrub: { frames: "images/xp/natacao-##.jpg", count: 5 }, ar: "16/9", col: 1, span: 12, caption: { en: "Story frames, played by scroll", pt: "Quadros da história, rodando no scroll", es: "Cuadros de la historia, que avanzan con el scroll" } },
      ],
    },
    {
      title: "Cinema Especial",
      track: { id: "2WWG2WjVJuJRVmgAxzbkad", name: "Cinema Paradiso", by: "Ennio Morricone" },
      type: "motion",
      client: "TV Globo",
      year: "2016",
      role: { en: "Lead Designer / Illustrator", pt: "Lead Designer / Ilustrador", es: "Lead Designer / Ilustrador" },
      scope: { en: "TV opening // Style frames // Motion", pt: "Abertura de TV // Style frames // Motion", es: "Apertura de TV // Style frames // Motion" },
      sector: { en: "TV · Entertainment", pt: "TV · Entretenimento", es: "TV · Entretenimiento" },
      deliverables: { en: "Opening (black & white base and colour version), style frames, logo and logo animation", pt: "Abertura (base P&B e versão colorida), style frames, logo e animação do logo", es: "Apertura (base en B&N y versión a color), style frames, logo y animación del logo" },
      tags: { en: ["TVOpening", "StyleFrames", "Motion"], pt: ["AberturaDeTV", "StyleFrames", "Motion"], es: ["AperturaDeTV", "StyleFrames", "Motion"] },
      theme: { bg: "#000000", fg: "#ffffff", mute: "#8e8e8e", line: "#2a2a2a", panel: "#111111", accent: "#ffffff" },
      tools: ["Adobe CC"],
      image: "images/cinema-especial/cover.jpg",
      coverVideo: { mp4: "images/cinema-especial/opening.mp4", webm: "images/cinema-especial/opening.webm" }, // v2: film-first cover (Nov 16 2026)
      summary: {
        en: "Opening for Cinema Especial, Globo's movie slot. Ink spreads over old film stock, the featured film's hero surfaces from the stains, and the title lands before the Globo mark closes. Style frames shown with The Amazing Spider-Man as the featured film.",
        pt: "Abertura do Cinema Especial, a faixa de filmes da Globo. A tinta se espalha sobre película antiga, o herói do filme da noite surge das manchas e o título entra antes da marca da Globo fechar. Style frames com O Espetacular Homem-Aranha como filme da noite.", es: "Apertura de Cinema Especial, la franja de películas de Globo. La tinta se esparce sobre película antigua, el héroe del filme de la noche surge de las manchas y el título entra antes de que cierre la marca Globo. Style frames con El Sorprendente Hombre Araña como película de la noche.",
      },
      layout: "loose", grid: "fluxo",
      // Order (Felipe, Oct 27 2026): logo, logo in motion, black & white opening, colour version frame by frame,
      // the full opening, and the Spider-Man style frames last and small. Grids mixed per chapter.
      gallery: [
        { chapter: { en: "01 · Logo", pt: "01 · Logo", es: "01 · Logo" }, kicker: { en: "Final logo", pt: "Logo final", es: "Logo final" },
          head: { en: "The title, *on its own.*", pt: "O título, *sozinho.*", es: "El título, *solo.*" },
          text: { en: "The final logo: CINEMA in heavy caps with the N cut through, ESPECIAL spaced out underneath.", pt: "O logo final: CINEMA em caixa-alta pesada, com o N cortado, e ESPECIAL espaçado embaixo.", es: "El logo final: CINEMA en mayúsculas gruesas, con la N cortada, y ESPECIAL espaciado debajo." } },
        { src: "images/cinema-especial/logo-final-dark.jpg", ar: "16/9", col: 1, span: 12 },
        { chapter: { en: "02 · Logo in motion", pt: "02 · Logo em movimento", es: "02 · Logo en movimiento" }, kicker: { en: "3s animation", pt: "Animação de 3s", es: "Animación de 3 s" }, grid: "fluxo",
          head: { en: "Ink sweeps, *the title settles.*", pt: "A tinta varre, *o título pousa.*", es: "La tinta barre, *el título se asienta.*" },
          text: { en: "In the 3-second animation, the ink sweeps across the screen until the title settles.", pt: "Na animação de 3 segundos, a tinta varre a tela até o título pousar.", es: "En la animación de 3 segundos, la tinta barre la pantalla hasta que el título se asienta." } },
        { video: "images/cinema-especial/logo-anim.mp4", webm: "images/cinema-especial/logo-anim.webm", poster: "images/cinema-especial/logo-anim-poster.jpg", ar: "16/9", col: 1, span: 12, caption: { en: "Logo animation — 3s", pt: "Animação do logo — 3s", es: "Animación del logo — 3 s" } },
        { loop: { frames: ["images/cinema-especial/logo-frame-01.jpg", "images/cinema-especial/logo-frame-02.jpg", "images/cinema-especial/logo-frame-03.jpg", "images/cinema-especial/logo-frame-04.jpg", "images/cinema-especial/logo-frame-05.jpg"], fps: 6, ar: "16/9" }, caption: { en: "The sweep, frame by frame", pt: "A varrida, quadro a quadro", es: "El barrido, cuadro a cuadro" }, col: 1, span: 12 }, // v2: was five frames in a row (Nov 16 2026)
        { chapter: { en: "03 · Black & white opening", pt: "03 · Abertura P&B", es: "03 · Apertura en B&N" }, grid: "fluxo", kicker: { en: "Ink · film stock · title", pt: "Tinta · película · título", es: "Tinta · película · título" },
          head: { en: "One base, *any film.*", pt: "Uma base, *qualquer filme.*", es: "Una base, *cualquier película.*" },
          text: { en: "The opening was built first in black and white, with no film inside: paper, ink stains, scratched film stock and the title. That base carries the whole sequence, from Globo Apresenta to the Cinema Especial logo.", pt: "A abertura nasceu em preto e branco, sem filme nenhum dentro: papel, manchas de tinta, película riscada e o título. Essa base segura a sequência inteira, do Globo Apresenta ao logo do Cinema Especial.", es: "La apertura nació en blanco y negro, sin ninguna película adentro: papel, manchas de tinta, película rayada y el título. Esa base sostiene toda la secuencia, desde Globo Apresenta hasta el logo de Cinema Especial." } },
        { loop: { frames: ["images/cinema-especial/base-01.jpg", "images/cinema-especial/base-02.jpg", "images/cinema-especial/base-03.jpg", "images/cinema-especial/base-04.jpg", "images/cinema-especial/base-05.jpg", "images/cinema-especial/base-06.jpg", "images/cinema-especial/base-07.jpg"], fps: 3, ar: "16/9" }, caption: { en: "Black & white base", pt: "Base P&B", es: "Base en B&N" }, col: 1, span: 12 }, // v2: was a flip of these frames (Nov 16 2026)
        { chapter: { en: "04 · Colour version", pt: "04 · Versão colorida", es: "04 · Versión a color" }, kicker: { en: "The film of the night", pt: "O filme da noite", es: "La película de la noche" },
          head: { en: "The same base, now *on fire.*", pt: "A mesma base, agora *pegando fogo.*", es: "La misma base, ahora *en llamas.*" },
          text: { en: "Over the same base, the paper turns warm, the ink burns in reds and browns, and the stars of the night's film surface from the stains while CINEMA and ESPECIAL slide in.", pt: "Na mesma base, o papel esquenta, a tinta queima em vermelhos e marrons e os astros do filme da noite surgem das manchas enquanto CINEMA e ESPECIAL deslizam pra dentro.", es: "Sobre la misma base, el papel se calienta, la tinta arde en rojos y marrones, y las estrellas de la película de la noche surgen de las manchas mientras CINEMA y ESPECIAL se deslizan en pantalla." } },
        { loop: { frames: ["images/cinema-especial/color-01.jpg", "images/cinema-especial/color-02.jpg", "images/cinema-especial/color-03.jpg", "images/cinema-especial/color-04.jpg", "images/cinema-especial/color-05.jpg", "images/cinema-especial/color-06.jpg", "images/cinema-especial/color-07.jpg"], fps: 3, ar: "16/9" }, caption: { en: "Colour version", pt: "Versão colorida", es: "Versión a color" }, col: 1, span: 12 }, // v2: was a flip of these frames (Nov 16 2026)
        { fullWidthIntro: true, chapter: { en: "05 · Opening", pt: "05 · Abertura", es: "05 · Apertura" }, kicker: { en: "Globo's movie slot", pt: "A faixa de filmes da Globo", es: "La franja de películas de Globo" }, grid: "fluxo",
          head: { en: "Ink, old film and the *hero of the night.*", pt: "Tinta, película antiga e o *herói da noite.*", es: "Tinta, película antigua y el *héroe de la noche.*" },
          text: { en: "Ink spreads over old film stock, the featured film's hero surfaces from the stains, and the title lands before the Globo mark closes.", pt: "A tinta se espalha sobre película antiga, o herói do filme da noite surge das manchas e o título entra antes da marca da Globo fechar.", es: "La tinta se esparce sobre película antigua, el héroe del filme de la noche surge de las manchas y el título entra antes de que cierre la marca Globo." } },
        { size: "cinema-finale", video: "images/cinema-especial/opening.mp4", webm: "images/cinema-especial/opening.webm", poster: "images/cinema-especial/opening-poster.jpg", ar: "16/9", col: 1, span: 12, caption: { en: "Opening — 7s preview", pt: "Abertura — prévia de 7s", es: "Apertura — avance de 7 s" } },
      ],
    },
    // Gig poster for Cine Joia (Felipe, Oct 27 2026); material from Drive "07. OUTROS/CINE JOIA & POSTERS/JOIA#04 - DIRTY PROJECTORS"
    {
      title: "PopStar",
      track: { id: "5I0WMWBGRuHiAwNa6yjm9r", name: "Lucky Star", by: "Madonna" },
      type: "motion",
      client: "TV Globo",
      year: "2017",
      role: { en: "Art Direction · Opening Design", pt: "Direção de Arte · Abertura", es: "Dirección de Arte · Apertura" },
      scope: { en: "TV opening // Visual identity // Entertainment", pt: "Abertura de TV // Identidade visual // Entretenimento", es: "Apertura de TV // Identidad visual // Entretenimiento" },
      sector: { en: "Television · Music · Entertainment", pt: "Televisão · Música · Entretenimento", es: "Televisión · Música · Entretenimiento" },
      deliverables: { en: "Opening title sequence, logo development and visual studies", pt: "Abertura, desenvolvimento de marca e estudos visuais", es: "Apertura, desarrollo de marca y estudios visuales" },
      tags: { en: ["TVOpening", "TitleSequence", "VisualIdentity"], pt: ["AberturaDeTV", "Vinheta", "IdentidadeVisual"], es: ["AperturaDeTV", "Viñeta", "IdentidadVisual"] },
      theme: { bg: "#070316", fg: "#ffffff", mute: "#a29bb9", line: "#39304d", panel: "#120b28", accent: "#e900d2" },
      tools: ["Adobe CC"],
      image: "images/popstar/neon.jpg",
      coverVideo: { mp4: "images/popstar/opening.mp4", webm: "images/popstar/opening.webm" }, // v2: film-first cover (Nov 16 2026)
      hero: "bleed",
      heroAr: "16/9",
      summary: {
        en: "A stage built for familiar faces in unfamiliar roles. In Globo's 2017 musical reality PopStar, 14 TV personalities took the spotlight as singers. I worked on the show's opening: a star-shaped identity moving from a stripped-back graphic symbol into a colourful, glowing entertainment spectacle.",
        pt: "Um palco pra rostos conhecidos em papéis inesperados. No PopStar, reality musical da Globo de 2017, 14 personalidades da TV encararam o microfone como cantores. Trabalhei na abertura do programa: uma identidade em torno da estrela, que sai de um símbolo gráfico enxuto e vira um espetáculo de luz e cor.", es: "Un escenario para caras conocidas en papeles inesperados. En PopStar, el reality musical de Globo de 2017, 14 personalidades de la TV se animaron a cantar frente al micrófono. Trabajé en la apertura del programa: una identidad construida alrededor de la estrella, que pasa de un símbolo gráfico mínimo a un espectáculo de luz y color.",
      },
      layout: "loose", grid: "fluxo",
      gallery: [
        { chapter: { en: "01 · Opening", pt: "01 · Abertura", es: "01 · Apertura" }, kicker: { en: "TV Globo · 2017", pt: "TV Globo · 2017", es: "TV Globo · 2017" },
          head: { en: "From familiar faces to *pop stars.*", pt: "De rostos conhecidos a *astros pop.*", es: "De caras conocidas a *estrellas pop.*" },
          text: { en: "The opening connects the show's central idea with the energy of a live music performance: 14 familiar faces step out of their usual roles and into the spotlight.", pt: "A abertura leva a ideia do programa pra energia de um show ao vivo: 14 rostos conhecidos saem dos papéis de sempre e vão pro centro do palco.", es: "La apertura lleva la idea del programa a la energía de un show en vivo: 14 caras conocidas dejan sus papeles de siempre y se van al centro del escenario." } },
        { fullWidthIntro: true, chapter: { en: "02 · Visual identity", pt: "02 · Identidade visual", es: "02 · Identidad visual" }, kicker: { en: "Symbol · Wordmark", pt: "Símbolo · Logotipo", es: "Símbolo · Logotipo" },
          head: { en: "The star starts *with a line.*", pt: "A estrela começa *com uma linha.*", es: "La estrella empieza *con una línea.*" },
          text: { en: "Simple strokes outline the star and staff-like graphic, setting up the foundation for the PopStar wordmark and the full on-screen identity.", pt: "Traços simples desenham a estrela sobre uma estrutura que lembra uma pauta musical. É a base do logotipo PopStar e de toda a identidade na tela.", es: "Trazos simples dibujan la estrella sobre una estructura que recuerda a un pentagrama. Es la base del logotipo PopStar y de toda la identidad en pantalla." } },
        { flipWide: true, flip: [
          { src: "images/popstar/symbol-tight.jpg", popstarInvert: true, ar: "16/9", caption: { en: "Symbol study", pt: "Estudo do símbolo", es: "Estudio del símbolo" } },
          { src: "images/popstar/logo-tight.jpg", popstarInvert: true, ar: "16/9", caption: { en: "Wordmark construction", pt: "Construção do logotipo", es: "Construcción del logotipo" } }
        ], col: 1, span: 12 },
        { video: "images/popstar/opening.mp4", webm: "images/popstar/opening.webm", poster: "images/popstar/neon.jpg", ar: "16/9", col: 1, span: 12, caption: { en: "Original PopStar opening · TV Globo · 2017", pt: "Abertura original do PopStar · TV Globo · 2017", es: "Apertura original de PopStar · TV Globo · 2017" } },
        { chapter: { en: "03 · Showtime", pt: "03 · Hora do show", es: "03 · Hora del show" }, kicker: { en: "The on-screen expression", pt: "A identidade na tela", es: "La identidad en pantalla" },
          head: { en: "From black lines to *neon lights.*", pt: "Do traço preto às *luzes de neon.*", es: "Del trazo negro a las *luces de neón.*" },
          text: { en: "The restrained graphic foundation transforms into a bright stage-world of glowing lines, saturated colour and showtime spectacle.", pt: "A base gráfica contida vira um universo de palco: linhas luminosas, cores saturadas e clima de grande show.", es: "La base gráfica contenida se convierte en un universo de escenario: líneas luminosas, colores saturados y clima de gran show." } },
        { src: "images/popstar/neon.jpg", ar: "16/9", col: 1, span: 12, caption: { en: "PopStar — final on-screen identity", pt: "PopStar — identidade final na tela", es: "PopStar — identidad final en pantalla" } },
        { chapter: { en: "04 · On air", pt: "04 · No ar", es: "04 · Al aire" }, kicker: { en: "Sunday afternoons · Globo", pt: "Domingo à tarde · Globo", es: "Domingos por la tarde · Globo" },
          head: { en: "Familiar faces. *Unexpected voices.*", pt: "Rostos conhecidos. *Vozes inesperadas.*", es: "Rostros conocidos. *Voces inesperadas.*" },
          text: { en: "Hosted by Fernanda Lima, the first season brought together André Frateschi, Claudio Lins, Eduardo Sterblitch, Fabiana Karla, Lucio Mauro Filho, Mariana Rios, Sabrina Parlatore and other TV personalities. André Frateschi won the 2017 final.", pt: "Apresentada por Fernanda Lima, a primeira temporada reuniu André Frateschi, Claudio Lins, Eduardo Sterblitch, Fabiana Karla, Lucio Mauro Filho, Mariana Rios, Sabrina Parlatore e outras personalidades da TV. André Frateschi venceu a final de 2017.", es: "Conducida por Fernanda Lima, la primera temporada reunió a André Frateschi, Claudio Lins, Eduardo Sterblitch, Fabiana Karla, Lucio Mauro Filho, Mariana Rios, Sabrina Parlatore y otras personalidades de la TV. André Frateschi ganó la final de 2017." } },
        { src: "images/popstar/cast.jpg", ar: "2048/1365", col: 1, span: 12, caption: { en: "Cast and host · PopStar, 2017", pt: "Elenco e apresentadora · PopStar, 2017", es: "Elenco y conductora · PopStar, 2017" } },
        { episodeLink: { url: "https://globoplay.globo.com/popstar/t/sDWCkghbGS/", title: { en: "Watch the grand final", pt: "Assistir à grande final", es: "Ver la gran final" }, detail: { en: "Episode 10 · 10 Sep 2017 · Globoplay", pt: "Episódio 10 · 10 set 2017 · Globoplay", es: "Episodio 10 · 10 sep 2017 · Globoplay" } } },
      ],
    },
    {
      title: "THURA",
      hidden: true, // Felipe, Oct 28 2026: off the site, everything kept (remove this line to bring it back)
      track: { id: "6aBUnkXuCEQQHAlTokv9or", name: "This Must Be the Place", by: "Talking Heads" },
      type: "branding",
      client: "THURA Negócios Imobiliários",
      year: "2025",
      role: { en: "Brand Strategist / Identity Designer / Brand Consultant", pt: "Brand Strategist / Designer de identidade / Consultor de marca", es: "Brand Strategist / Diseñador de identidad / Consultor de marca" },
      scope: { en: "Naming // Rebrand // Brand strategy", pt: "Naming // Rebranding // Estratégia de marca", es: "Naming // Rebranding // Estrategia de marca" },
      before: "DIGIMOB Invest",
      sector: { en: "Real estate", pt: "Mercado imobiliário", es: "Mercado inmobiliario" },
      deliverables: { en: "Naming, positioning, identity, communication and consulting", pt: "Naming, posicionamento, identidade, comunicação e consultoria", es: "Naming, posicionamiento, identidad, comunicación y consultoría" },
      tags: { en: ["Naming", "BrandStrategy", "Rebranding", "Founder-LedGrowth"], pt: ["Naming", "BrandStrategy", "Rebranding", "Founder-LedGrowth"], es: ["Naming", "EstrategiaDeMarca", "Rebranding", "FounderLedGrowth"] },
      // The page wears THURA's own colours: night green, cream type, mint accent
      theme: { bg: "#0c3829", fg: "#f3e6c4", mute: "#a3b5a5", line: "#2c5b48", panel: "#114634", accent: "#09d189" },
      tools: ["Adobe CC", "*Midjourney", "*Flora.AI"],
      image: "images/thura/cover.jpg",
      hero: "bleed",
      heroAr: "2400/1350",
      summary: {
        en: "A new name, a new positioning and a brand the size of the business. DIGIMOB Invest became THURA, a project done at SCRV.ag.",
        pt: "Nome novo, posicionamento novo e uma marca do tamanho do negócio. A DIGIMOB Invest virou THURA, num projeto feito na SCRV.ag.", es: "Nombre nuevo, posicionamiento nuevo y una marca a la medida del negocio. DIGIMOB Invest pasó a ser THURA, en un proyecto hecho en SCRV.ag.",
      },
      layout: "loose", grid: "trilho",
      gallery: [
        { chapter: { en: "01 · Intro", pt: "01 · Intro", es: "01 · Intro" }, kicker: { en: "Sell · Live · Invest", pt: "Vender · Morar · Investir", es: "Vender · Vivir · Invertir" },
          head: { en: "Some doors change *everything.*", pt: "Tem porta que muda *tudo.*", es: "Algunas puertas lo cambian *todo.*" },
          text: { en: "Some want to sell, some look for a home, some see an investment in a property. Three views, one market, and a brand that had to make room for all of them.", pt: "Tem gente que quer vender, gente que procura um lar e gente que vê num imóvel um investimento. Três olhares, um mercado só, e uma marca que precisava abrir espaço pra todos eles.", es: "Hay quien quiere vender, quien busca un hogar y quien ve una inversión en un inmueble. Tres miradas, un solo mercado y una marca que tenía que hacerle lugar a todos." } },
        { strip: [
          { src: "images/thura/campanha-02.jpg", ar: "1120/1400", caption: { en: "For those who want to sell", pt: "Para quem quer vender", es: "Para quien quiere vender" } },
          { src: "images/thura/card-lar.jpg", ar: "1120/1400", caption: { en: "For those looking for a home", pt: "Para quem procura um lar", es: "Para quien busca un hogar" } },
          { src: "images/thura/card-investe.jpg", ar: "1120/1400", caption: { en: "For those who invest", pt: "Para quem investe", es: "Para quien invierte" } },
        ], col: 1, span: 12 },
        { chapter: { en: "02 · Challenge", pt: "02 · Desafio", es: "02 · Desafío" }, kicker: "DIGIMOB → THURA",
          head: { en: "The business was bigger than the category.", pt: "O negócio era maior que a categoria.", es: "El negocio era más grande que la categoría." },
          text: { en: "DIGIMOB was seen as a real estate agency, but the business went beyond buying and selling. The challenge was to break that perception and build a brand the real size of the business, with personality and room to grow.", pt: "A DIGIMOB era vista como imobiliária, mas o negócio ia além de compra e venda. O desafio era quebrar essa percepção e construir uma marca do tamanho real do negócio, com personalidade e espaço pra crescer.", es: "DIGIMOB era vista como una inmobiliaria, pero el negocio iba más allá de comprar y vender. El desafío era romper esa percepción y construir una marca del tamaño real del negocio, con personalidad y espacio para crecer." } },
        { swap: { before: "DIGIMOB", after: "THURA" }, col: 1, span: 12 },
        { strip: [
          { src: "images/thura/campanha-01.jpg", ar: "1120/1400", caption: { en: "Launch · DIGIMOB Invest is now THURA", pt: "Lançamento · DIGIMOB Invest agora é THURA", es: "Lanzamiento · DIGIMOB Invest ahora es THURA" } },
          { src: "images/thura/campanha-04.jpg", ar: "1120/1400", caption: { en: "The natural evolution of a successful project", pt: "A evolução natural de um projeto de sucesso", es: "La evolución natural de un proyecto exitoso" } },
        ], col: 3, span: 8 },
        { chapter: { en: "03 · Naming", pt: "03 · Naming", es: "03 · Naming" }, kicker: { en: "θύρα · ancient Greek", pt: "θύρα · grego antigo", es: "θύρα · griego antiguo" },
          head: { en: "Door. Entrance. *Passage.*", pt: "Porta. Entrada. *Passagem.*", es: "Puerta. Entrada. *Paso.*" },
          text: { en: "THURA comes from the ancient Greek θύρα, door or entrance. More than a name, a territory: access, transition and possibility, where what exists meets what can begin.", pt: "THURA vem do grego antigo θύρα: porta, entrada. Mais que um nome, é um território de acesso, transição e possibilidade, onde o que existe encontra o que pode começar.", es: "THURA viene del griego antiguo θύρα: puerta, entrada. Más que un nombre, es un territorio de acceso, transición y posibilidad, donde lo que existe se encuentra con lo que puede empezar." } },
        { word: { glyph: "θύρα", lang: "grc", head: "θύρα · thýra", note: { en: "fem. noun · door, entrance", pt: "subst. fem. · porta, entrada", es: "sust. fem. · puerta, entrada" } }, col: 1, span: 12 },
        { src: "images/thura/grafismo.jpg", ar: "2000/1125", col: 1, span: 12, caption: { en: "Symbol and graphics · the half-open door becomes a system", pt: "Símbolo e grafismo · a porta entreaberta vira sistema", es: "Símbolo y gráfica · la puerta entreabierta se vuelve sistema" } },
        { chapter: { en: "04 · Positioning", pt: "04 · Posicionamento", es: "04 · Posicionamiento" }, kicker: { en: "Data + strategy + people", pt: "Dados + estratégia + pessoas", es: "Datos + estrategia + personas" },
          head: { en: "The market is made of opportunities. *Data helps find them.*", pt: "O mercado é feito de oportunidades. *Os dados ajudam a achar.*", es: "El mercado está hecho de oportunidades. *Los datos ayudan a encontrarlas.*" },
          text: { en: "Business intelligence, technology and closeness to people. THURA works from data and strategy and finds opportunities for those who sell, buy or invest.", pt: "Inteligência de negócio, tecnologia e proximidade com as pessoas. A THURA parte de dados e estratégia e encontra oportunidades para quem vende, compra ou investe.", es: "Inteligencia de negocio, tecnología y cercanía con las personas. THURA parte de datos y estrategia, y encuentra oportunidades para quien vende, compra o invierte." } },
        { src: "images/thura/campanha-03.jpg", ar: "1120/1400", col: 7, span: 5, caption: { en: "Technology, data and strategy", pt: "Tecnologia, dados e estratégia", es: "Tecnología, datos y estrategia" } },
        { src: "images/thura/assinatura.jpg", ar: "2000/1125", col: 1, span: 12, caption: { en: "Sign-off · Sell. Buy. Invest.", pt: "Assinatura · Vender. Comprar. Investir.", es: "Firma · Vender. Comprar. Invertir." } },
        { src: "images/thura/grafismo-edificios.jpg", ar: "2000/1125", col: 1, span: 12 },
        { chapter: { en: "05 · Strategy", pt: "05 · Estratégia", es: "05 · Estrategia" }, kicker: "Founder-Led Growth",
          head: { en: "From the brand to the *founders.*", pt: "Da marca aos *fundadores.*", es: "De la marca a los *fundadores.*" },
          text: { en: "Beyond naming, positioning and communication, consulting sessions with the founders shaped a Founder-Led Growth approach, with their voices at the heart of growth.", pt: "Além de naming, posicionamento e comunicação, as consultorias com os fundadores deram forma a uma abordagem de Founder-Led Growth, com a voz deles no centro do crescimento.", es: "Además del naming, el posicionamiento y la comunicación, las consultorías con los fundadores le dieron forma a un enfoque de Founder-Led Growth, con su voz en el centro del crecimiento." },
          pills: [{ en: "Naming", pt: "Naming", es: "Naming" }, { en: "Positioning", pt: "Posicionamento", es: "Posicionamiento" }, "Rebranding", { en: "Communication", pt: "Comunicação", es: "Comunicación" }, "*Founder-Led Growth"] },
        { src: "images/thura/linkedin-fundador.jpg", ar: "1400/700", col: 1, span: 12, caption: { en: "The founders' own LinkedIn", pt: "O LinkedIn dos próprios fundadores", es: "El LinkedIn de los propios fundadores" } },
        { chapter: { en: "06 · Applied identity", pt: "06 · Identidade aplicada", es: "06 · Identidad aplicada" }, kicker: { en: "Stationery · Gifts · Social", pt: "Papelaria · Brindes · Social", es: "Papelería · Regalos · Social" },
          head: { en: "An open door at every touchpoint.", pt: "Uma porta aberta em cada ponto de contato.", es: "Una puerta abierta en cada punto de contacto." } },
        { src: "images/thura/papelaria-laranja.jpg", ar: "2000/1125", col: 1, span: 12, caption: { en: "Stationery", pt: "Papelaria", es: "Papelería" } },
        { src: "images/thura/kit.jpg", ar: "1400/1089", col: 1, span: 6, caption: { en: "Deal Closed kit", pt: "Kit Negócio Fechado", es: "Kit Negocio Cerrado" } },
        { src: "images/thura/carta.jpg", ar: "1400/934", col: 7, span: 6, caption: { en: "Letter to the seller", pt: "Carta ao vendedor", es: "Carta al vendedor" } },
        { src: "images/thura/caneca.jpg", ar: "1400/831", col: 1, span: 6, caption: { en: "Mug", pt: "Caneca", es: "Taza" } },
        { src: "images/thura/ecobag.jpg", ar: "1400/1050", col: 7, span: 6, caption: { en: "Tote bag", pt: "Ecobag", es: "Tote bag" } },
        { marquee: ["campanha-01", "campanha-02", "campanha-03", "campanha-04", "carrossel-05"].map(f => ({ src: `images/thura/${f}.jpg`, ar: "1120/1400" })),
          col: 1, span: 12, caption: { en: "Social · launch carousel", pt: "Social · carrossel de lançamento", es: "Social · carrusel de lanzamiento" } },
        { src: "images/thura/social-laranja.jpg", ar: "2000/1125", col: 1, span: 12, caption: { en: "Social · listings campaign for owners", pt: "Social · campanha de captação", es: "Social · campaña de captación de inmuebles" } },
      ],
    },
    {
      title: "Tela Quente",
      track: { id: "6ZFbXIJkuI1dVNWvzJzown", name: "Time", by: "Hans Zimmer" },
      type: "motion",
      client: "TV Globo",
      year: "2016",
      role: { en: "Lead Designer / Concept / Illustrator", pt: "Lead Designer / Conceito / Ilustrador", es: "Lead Designer / Concepto / Ilustrador" },
      scope: { en: "TV opening // Logo // 3D // Motion", pt: "Abertura de TV // Logo // 3D // Motion", es: "Apertura de TV // Logo // 3D // Motion" },
      sector: { en: "TV · Entertainment", pt: "TV · Entretenimento", es: "TV · Entretenimiento" },
      deliverables: { en: "Opening, redesigned 3D logo, one opening per film, animatic and studies", pt: "Abertura, logo redesenhado em 3D, uma abertura para cada filme, animático e estudos", es: "Apertura, logo rediseñado en 3D, una apertura para cada película, animatic y estudios" },
      tags: { en: ["TVOpening", "3D", "Motion"], pt: ["AberturaDeTV", "3D", "Motion"], es: ["AperturaDeTV", "3D", "Motion"] },
      tools: ["Adobe CC"],
      image: "images/tela-quente/render-branco.jpg",
      coverVideo: { mp4: "images/tela-quente/abertura.mp4", webm: "images/tela-quente/abertura.webm" }, // v2: film-first cover (Nov 16 2026)
      summary: {
        en: "New opening for Tela Quente, one of Brazil's most classic movie slots, on Globo. The red and silver look gives way to Globo's white and 3D, and the coloured screens of the original logo come back as a rainbow.",
        pt: "Nova abertura da Tela Quente, uma das sessões de cinema mais clássicas do Brasil, na Globo. Sai o visual vermelho e prateado, entram o branco e o 3D da Globo, e as telas coloridas do logo original voltam em arco-íris.", es: "Nueva apertura de Tela Quente, una de las funciones de cine más clásicas de Brasil, en Globo. Sale el look rojo y plateado, entran el blanco y el 3D de Globo, y las pantallas de colores del logo original vuelven en arcoíris.",
      },
      layout: "loose", grid: "trilho",
      gallery: [
        { chapter: { en: "01 · Challenge", pt: "01 · Desafio", es: "01 · Desafío" }, kicker: { en: "Where it started", pt: "Onde tudo começou", es: "Dónde empezó todo" },
          head: { en: "Bring back the *coloured screens.*", pt: "Trazer de volta as *telas coloridas.*", es: "Traer de vuelta las *pantallas de colores.*" },
          text: { en: "The Tela Quente opening was all red and silver. I wanted to bring back the classic version, with coloured screens, and take it to Globo's new look: lots of white and 3D.", pt: "A abertura da Tela Quente era toda vermelha e prateada. Eu quis trazer de volta a versão clássica, com as telas coloridas, e levar isso pro visual novo da Globo: muito branco e 3D.", es: "La apertura de Tela Quente era toda roja y plateada. Quise traer de vuelta la versión clásica, con las pantallas de colores, y llevarla al nuevo look de Globo: mucho blanco y 3D." } },
        { src: "images/tela-quente/logo-1999.jpg", ar: "820/593", col: 1, span: 5, caption: { en: "The classic logo, 1999 — historical reference", pt: "O logo clássico, 1999 — referência histórica", es: "El logo clásico, 1999 — referencia histórica" } },
        { video: "images/tela-quente/abertura-anterior.mp4", webm: "images/tela-quente/abertura-anterior.webm", poster: "images/tela-quente/abertura-anterior-poster.jpg", ar: "16/9", col: 6, span: 7, caption: { en: "The previous opening, red and silver — reference", pt: "A abertura anterior, vermelha e prateada — referência", es: "La apertura anterior, roja y plateada — referencia" } },
        { chapter: { en: "02 · Concept", pt: "02 · Conceito", es: "02 · Concepto" }, kicker: { en: "White, 3D and colour", pt: "Branco, 3D e cor", es: "Blanco, 3D y color" },
          head: { en: "All white, and the screens *in rainbow.*", pt: "Tudo branco, e as telas *em arco-íris.*", es: "Todo blanco, y las pantallas *en arcoíris.*" },
          text: { en: "The letters became white 3D blocks and the screens of the E got their colour back, in a parallel with the LGBT rainbow flag, a conversation also happening at the time.", pt: "As letras viraram blocos brancos em 3D e as telas do E ganharam cor de novo, num paralelo com a bandeira LGBT do arco-íris, uma conversa que também estava rolando na época.", es: "Las letras se volvieron bloques blancos en 3D y las pantallas de la E volvieron a tener color, en un paralelo con la bandera arcoíris LGBT, una conversación que también estaba en el aire en ese momento." },
          pills: [{ en: "White", pt: "Branco", es: "Blanco" }, "3D", { en: "*Coloured screens", pt: "*Telas coloridas", es: "*Pantallas de colores" }, { en: "Rainbow", pt: "Arco-íris", es: "Arcoíris" }] },
        { src: "images/tela-quente/cover.jpg", ar: "2000/1124", col: 1, span: 12, caption: { en: "The new logo, white 3D with the rainbow screens", pt: "O novo logo, 3D branco com as telas em arco-íris", es: "El nuevo logo, 3D blanco con las pantallas en arcoíris" } },
        { chapter: { en: "03 · Opening", pt: "03 · Abertura", es: "03 · Apertura" }, kicker: { en: "The final opening", pt: "A abertura final", es: "La apertura final" },
          head: { en: "Glass, light and the logo *floating in the studio.*", pt: "Vidro, luz e o logo *flutuando no estúdio.*", es: "Vidrio, luz y el logo *flotando en el estudio.*" },
          text: { en: "In the final opening, glass shards swirl through a concrete studio, form a crystal car that shatters into light, and the logo settles, floating in the middle of the room.", pt: "Na abertura final, cacos de vidro giram por um estúdio de concreto, formam um carro de cristal que se desfaz em luz, e o logo pousa, flutuando no meio da sala.", es: "En la apertura final, fragmentos de vidrio giran por un estudio de concreto, forman un auto de cristal que se deshace en luz, y el logo se posa, flotando en medio de la sala." } },
        { video: "images/tela-quente/abertura.mp4", webm: "images/tela-quente/abertura.webm", poster: "images/tela-quente/abertura-poster.jpg", ar: "16/9", col: 1, span: 12, caption: { en: "Opening — 7s", pt: "Abertura — 7s", es: "Apertura — 7s" } },
        { loop: { frames: ["images/tela-quente/frame-01.jpg", "images/tela-quente/frame-02.jpg", "images/tela-quente/frame-03.jpg", "images/tela-quente/frame-04.jpg", "images/tela-quente/frame-05.jpg", "images/tela-quente/frame-06.jpg"], fps: 2, ar: "16/9" }, caption: { en: "Opening", pt: "Abertura", es: "Apertura" }, col: 1, span: 12 }, // v2: was a flip of these frames (Nov 16 2026)
        { chapter: { en: "04 · One opening per film", pt: "04 · Uma abertura para cada filme", es: "04 · Una apertura para cada película" }, kicker: { en: "The film of the night", pt: "O filme da noite", es: "La película de la noche" },
          head: { en: "The studio stays, *the film comes in.*", pt: "O estúdio fica, *o filme entra.*", es: "El estudio se queda, *la película entra.*" },
          text: { en: "As in Cinema Especial, the idea was for the opening to always link to the film. The studio and the logo stay, and the night's film takes over the room: the wave floods it, Maleficent walks in, the tornado passes through.", pt: "Como no Cinema Especial, a ideia era a abertura conversar sempre com o filme. O estúdio e o logo ficam, e o filme da noite toma conta da sala: a onda invade, a Malévola entra, o tornado passa.", es: "Como en Cinema Especial, la idea era que la apertura siempre dialogara con la película. El estudio y el logo se quedan, y la película de la noche se adueña de la sala: la ola la inunda, entra Maléfica, pasa el tornado." } },
        { src: "images/tela-quente/filme-a-onda.jpg", ar: "16/9", col: 1, span: 4, caption: { en: "The Wave", pt: "A Onda", es: "La ola" } },
        { src: "images/tela-quente/filme-malevola.jpg", ar: "16/9", col: 5, span: 4, caption: { en: "Maleficent", pt: "Malévola", es: "Maléfica" } },
        { src: "images/tela-quente/filme-no-olho-do-tornado.jpg", ar: "16/9", col: 9, span: 4, caption: { en: "Into the Storm", pt: "No Olho do Tornado", es: "En el tornado" } },
        { chapter: { en: "05 · Process", pt: "05 · Processo", es: "05 · Proceso" }, kicker: { en: "Animatic · studies", pt: "Animático · estudos", es: "Animatic · estudios" },
          head: { en: "Before the final, *other paths.*", pt: "Antes da versão final, *outros caminhos.*", es: "Antes de la versión final, *otros caminos.*" },
          text: { en: "The first animatic set the logo in an all-white world: a popcorn bucket opens onto it, surrounded by films turned into white objects. Another study dropped coloured glass pieces into the logo.", pt: "O primeiro animático colocava o logo num mundo todo branco: um balde de pipoca se abre e revela o logo, cercado de filmes transformados em objetos brancos. Outro estudo jogava peças de vidro coloridas sobre o logo.", es: "El primer animatic ponía el logo en un mundo todo blanco: un balde de palomitas se abre y revela el logo, rodeado de películas convertidas en objetos blancos. Otro estudio dejaba caer piezas de vidrio de colores sobre el logo." } },
        { video: "images/tela-quente/animatico.mp4", webm: "images/tela-quente/animatico.webm", poster: "images/tela-quente/animatico-poster.jpg", ar: "16/9", col: 1, span: 6, caption: { en: "First animatic — 6s", pt: "Primeiro animático — 6s", es: "Primer animatic — 6s" } },
        { video: "images/tela-quente/estudo-vidro.mp4", webm: "images/tela-quente/estudo-vidro.webm", poster: "images/tela-quente/estudo-vidro-poster.jpg", ar: "16/9", col: 7, span: 6, caption: { en: "Study, coloured glass — 8s", pt: "Estudo, vidro colorido — 8s", es: "Estudio, vidrio de colores — 8s" } },
        { src: "images/tela-quente/render-branco-icones.jpg", ar: "1920/1078", col: 1, span: 12, caption: { en: "The white world of the animatic, films turned into objects", pt: "O mundo branco do animático, com filmes virando objetos", es: "El mundo blanco del animatic, películas convertidas en objetos" } },
        { chapter: { en: "06 · Behind the scenes", pt: "06 · Bastidores", es: "06 · Detrás de cámaras" }, kicker: { en: "Many people, many ideas", pt: "Muita gente, muitas ideias", es: "Mucha gente, muchas ideas" },
          head: { en: "One opening, *many ideas.*", pt: "Uma abertura, *muitas ideias.*", es: "Una apertura, *muchas ideas.*" },
          text: { en: "At a broadcaster, many people take part in an opening. It went through many versions, and you learn to embrace ideas along the way. It is never one creation alone, and always a pleasure.", pt: "Numa emissora, muita gente participa de uma abertura. Essa passou por muitas versões, e a gente aprende a abraçar as ideias que aparecem no caminho. Nunca é criação de uma pessoa só, e é sempre um prazer.", es: "En una televisora, mucha gente participa en una apertura. Esta pasó por muchas versiones, y uno aprende a abrazar las ideas que aparecen en el camino. Nunca es creación de una sola persona, y siempre es un gusto." } },
      ],
    },
    {
      title: "CoreHi",
      track: { id: "5BXBi5pLeJhblMVH2ltjpl", name: "Computer Love", by: "Kraftwerk" },
      type: "branding",
      client: "CoreHuman Intelligence",
      year: "2025",
      role: { en: "Brand Strategist / Brand Consultant / Researcher / Head of Design", pt: "Brand Strategist / Consultor de marca / Pesquisador / Head de Design", es: "Brand Strategist / Consultor de marca / Investigador / Head of Design" },
      scope: { en: "Brand identity // Logo // Brandbook", pt: "Identidade de marca // Logo // Brandbook", es: "Identidad de marca // Logo // Brandbook" },
      sector: { en: "Artificial intelligence", pt: "Inteligência artificial", es: "Inteligencia artificial" },
      deliverables: { en: "Name lockups, icon, palette, typography and brandbook", pt: "Assinaturas, ícone, paleta, tipografia e brandbook", es: "Firmas, ícono, paleta, tipografía y brandbook" },
      tags: { en: ["BrandIdentity", "Logo", "Brandbook"], pt: ["IdentidadeDeMarca", "Logo", "Brandbook"], es: ["IdentidadDeMarca", "Logo", "Brandbook"] },
      // White page; the core red is the only accent
      theme: { accent: "#ea1e2a", accentText: "#d01436" },
      tools: ["Adobe CC", "*Flora.AI"],
      image: "images/corehi/tote.jpg",
      hero: "bleed",
      heroAr: "16/9",
      summary: {
        en: "CoreHuman Intelligence: human creativity at the core of artificial intelligence. The O of Core became the icon, a ring around an open centre where people sit. Shortened, the name says hello: Core.Hi.",
        pt: "CoreHuman Intelligence: a criatividade humana no centro da inteligência artificial. O O de Core virou o ícone, um anel em volta de um centro aberto, que é onde ficam as pessoas. Abreviado, o nome dá oi: Core.Hi.", es: "CoreHuman Intelligence: la creatividad humana en el centro de la inteligencia artificial. La O de Core se volvió el ícono, un anillo alrededor de un centro abierto, que es donde están las personas. Abreviado, el nombre saluda: Core.Hi.",
      },
      stats: [
        ["3", { en: "Lockups", pt: "Assinaturas", es: "Firmas" }],
        ["2", { en: "Typefaces", pt: "Fontes", es: "Tipografías" }],
        ["8", { en: "Colours", pt: "Cores", es: "Colores" }],
      ],
      // Editorial CoreHi case: four clear acts, from idea to identity in the world.
      layout: "loose", grid: "fluxo",
      gallery: [
        { fullWidthIntro: true, chapter: { en: "01 · The idea", pt: "01 · A ideia", es: "01 · La idea" },
          kicker: { en: "Human creativity × artificial intelligence", pt: "Criatividade humana × inteligência artificial", es: "Creatividad humana × inteligencia artificial" },
          head: { en: "The human at the *core.*", pt: "O humano no *centro.*", es: "Lo humano en el *centro.*" },
          text: { en: "What if an AI company put people, not technology, at the centre of its identity? I led the research, strategy and design to turn that proposition into a brand. The O became a bold ring around an open, human centre.", pt: "E se uma empresa de IA colocasse as pessoas, e não a tecnologia, no centro da sua identidade? Liderei a pesquisa, a estratégia e o design pra transformar essa proposta em marca. O O virou um anel forte em volta de um centro aberto e humano.", es: "¿Y si una empresa de IA pusiera a las personas, y no la tecnología, en el centro de su identidad? Lideré la investigación, la estrategia y el diseño para convertir esa idea en marca. La O se volvió un anillo potente alrededor de un centro abierto y humano." } },
        { src: "images/corehi/icon-light.jpg", corehiInteractive: true, ar: "16/9", col: 1, span: 12,
          caption: { en: "A simple shape. A human idea.", pt: "Uma forma simples. Uma ideia humana.", es: "Una forma simple. Una idea humana." } },

        { fullWidthIntro: true, chapter: { en: "02 · The name", pt: "02 · O nome", es: "02 · El nombre" },
          kicker: { en: "CoreHuman Intelligence → Core.Hi", pt: "CoreHuman Intelligence → Core.Hi", es: "CoreHuman Intelligence → Core.Hi" },
          head: { en: "A complex idea. A simple *hello.*", pt: "Uma ideia complexa. Um simples *oi.*", es: "Una idea compleja. Un simple *hola.*" },
          text: { en: "CoreHuman Intelligence is the full promise. Core.Hi makes it memorable: a shorter, friendlier name that even reads like a greeting. One visual system holds both.", pt: "CoreHuman Intelligence é a promessa completa. Core.Hi é o que fica na cabeça: um nome mais curto e simpático, que soa até como um cumprimento. Um único sistema visual segura os dois.", es: "CoreHuman Intelligence es la promesa completa. Core.Hi es lo que se queda en la cabeza: un nombre más corto y simpático, que hasta suena como un saludo. Un solo sistema visual sostiene a los dos." } },
        { scrub: { frames: "images/corehi/name-##.jpg", count: 4 }, ar: "16/9", col: 1, span: 12,
          caption: { en: "From the full name to a hello. Scroll to explore.", pt: "Do nome completo a um oi. Rola pra explorar.", es: "Del nombre completo a un hola. Desplázate para explorar." } },
        { src: "images/corehi/core-hi-red.jpg", ar: "16/9", col: 1, span: 12,
          caption: { en: "The compact signature", pt: "A assinatura compacta", es: "La firma compacta" } },

        { fullWidthIntro: true, chapter: { en: "03 · The system", pt: "03 · O sistema", es: "03 · El sistema" },
          kicker: { en: "Colour · typography · expression", pt: "Cor · tipografia · expressão", es: "Color · tipografía · expresión" },
          head: { en: "Quiet by default. Colour at the *core.*", pt: "Contido por fora. Cor no *núcleo.*", es: "Contenido por fuera. Color en el *núcleo.*" },
          text: { en: "A restrained grey foundation makes room for energy where it matters. The palette gives the core a voice, while Nexa and Bodoni Moda balance system and personality.", pt: "Uma base contida, em cinzas, abre espaço pra energia onde ela faz diferença. A paleta dá voz ao núcleo, e Nexa e Bodoni Moda equilibram sistema e personalidade.", es: "Una base contenida, en grises, abre espacio a la energía donde hace la diferencia. La paleta le da voz al núcleo, y Nexa y Bodoni Moda equilibran sistema y personalidad." } },
        { src: "images/corehi/palette-8.jpg", ar: "2500/496", col: 1, span: 12,
          caption: { en: "The palette: restraint meets energy", pt: "A paleta: contenção e energia", es: "La paleta: contención y energía" } },
        { flip: [
          { src: "images/corehi/colour-red.jpg", ar: "16/9", caption: { en: "Core red", pt: "Vermelho do núcleo", es: "Rojo núcleo" } },
          { src: "images/corehi/colour-cyan.jpg", ar: "16/9", caption: { en: "Core cyan", pt: "Ciano do núcleo", es: "Cian núcleo" } },
          { src: "images/corehi/colour-yellow.jpg", ar: "16/9", caption: { en: "Core yellow", pt: "Amarelo do núcleo", es: "Amarillo núcleo" } }
        ], col: 1, span: 12 },
        { src: "images/corehi/type-pair.jpg", ar: "2000/1124", col: 1, span: 12,
          caption: { en: "Nexa for clarity. Bodoni Moda for character.", pt: "Nexa para clareza. Bodoni Moda para personalidade.", es: "Nexa para la claridad. Bodoni Moda para la personalidad." } },

        { fullWidthIntro: true, chapter: { en: "04 · In the world", pt: "04 · No mundo", es: "04 · En el mundo" },
          kicker: { en: "Manifesto · environmental graphics", pt: "Manifesto · comunicação ambiental", es: "Manifiesto · gráfica ambiental" },
          head: { en: "A system designed to *speak.*", pt: "Um sistema feito pra *falar.*", es: "Un sistema hecho para *hablar.*" },
          text: { en: "The identity extends beyond a logo. Its core shape becomes a graphic gesture, framing messages and bringing the human idea into physical spaces.", pt: "A identidade vai além do logo. A forma do núcleo vira um gesto gráfico, que emoldura mensagens e leva a ideia humana pros espaços físicos.", es: "La identidad va más allá del logo. La forma del núcleo se vuelve un gesto gráfico que enmarca mensajes y lleva la idea humana a los espacios físicos." } },
        { src: "images/corehi/manifesto.jpg", ar: "16/9", col: 1, span: 12,
          caption: { en: "An idea that scales into communication", pt: "Uma ideia que cresce na comunicação", es: "Una idea que crece en la comunicación" } },
        { src: "images/corehi/window-manifesto.jpg", ar: "16/9", col: 1, span: 6 },
        { src: "images/corehi/window-core.jpg", ar: "16/9", col: 7, span: 6,
          caption: { en: "The identity in the environment", pt: "A identidade no ambiente", es: "La identidad en el ambiente" } },

        { chapter: { en: "05 · Applied identity", pt: "05 · Identidade aplicada", es: "05 · Identidad aplicada" },
          kicker: { en: "Stationery · social", pt: "Papelaria · redes", es: "Papelería · redes" },
          head: { en: "Grey on the outside. Red at the *core.*", pt: "Cinza por fora. Vermelho no *núcleo.*", es: "Gris por fuera. Rojo en el *núcleo.*" },
          text: { en: "The full name signs the institutional pieces; Core.Hi speaks on social and everywhere else. The logo stays grey, or white over strong colour, and colour only ever goes to the core.", pt: "O nome completo assina as peças institucionais; o Core.Hi fala nas redes e no resto. O logo fica em cinza, ou branco sobre cor forte, e a cor só vai pro núcleo.", es: "El nombre completo firma las piezas institucionales; Core.Hi habla en redes y en todo lo demás. El logo queda en gris, o blanco sobre color fuerte, y el color solo va al núcleo." } },
        { src: "images/corehi/mockup-stationery-1logo.jpg", ar: "2000/1342", col: 1, span: 12,
          caption: { en: "Letterhead, envelope and card", pt: "Papel timbrado, envelope e cartão", es: "Hoja membretada, sobre y tarjeta" } },
        { src: "images/corehi/mockup-cards.jpg", ar: "2000/1342", col: 1, span: 12,
          caption: { en: "Business cards, the core blind-embossed", pt: "Cartões de visita, com o núcleo em relevo seco", es: "Tarjetas de presentación, con el núcleo en relieve seco" } },
        { src: "images/corehi/mockup-phone.jpg", ar: "1600/1986", col: 1, span: 5,
          caption: { en: "Or just, Core.hi!", pt: "Ou só, Core.hi!", es: "O solo, Core.hi!" } },
        { src: "images/corehi/feed-grid.jpg", ar: "2000/2000", col: 6, span: 7,
          caption: { en: "A feed in red and greys", pt: "Um feed em vermelho e cinzas", es: "Un feed en rojo y grises" } },
      ],
    },
    {
      title: "Adidas 60",
      track: { id: "04HOx7AhRXimqJETzRRAS9", name: "Filho Maravilha (Fio Maravilha)", by: "Jorge Ben Jor" },
      type: "motion",
      client: "Adidas",
      year: "2009 / 2026",
      role: { en: "Creative Director / Art Director / Motion Designer / AI Creator", pt: "Diretor de Criação / Diretor de Arte / Motion Designer / AI Creator", es: "Director Creativo / Director de Arte / Motion Designer / AI Creator" },
      scope: { en: "Key Visual // Film", pt: "Key Visual // Filme", es: "Key Visual // Spot" },
      sector: { en: "Sportswear · Football", pt: "Esporte · Futebol", es: "Deporte · Fútbol" },
      deliverables: { en: "Studies, storyboards, tests and key visuals, towards a film", pt: "Estudos, storyboards, testes e key visuals, rumo a um filme", es: "Estudios, storyboards, pruebas y key visuals, rumbo a un spot" },
      tags: { en: ["WorkInProgress", "KeyVisual", "Film", "Football"], pt: ["WorkInProgress", "KeyVisual", "Filme", "Futebol"], es: ["WorkInProgress", "KeyVisual", "Spot", "Fútbol"] },
      theme: { bg: "#000000", fg: "#ffffff", mute: "#8e8e8e", line: "#2a2a2a", panel: "#111111", accent: "#ffffff" },
      tools: ["Adobe CC", "*Claude Code", "*Flora.AI", "*ElevenLabs"],
      image: "images/warriors/key-visual.jpg",
      summary: {
        en: "An idea from around 2009, back in 2026: Adidas has made the official World Cup ball for 56 years and reaches 60 at the next Cup. A work in progress: studies, storyboards and tests made with AI, towards a finished film.",
        pt: "Uma ideia de lá por 2009 que volta em 2026: a Adidas faz a bola oficial da Copa há 56 anos e chega aos 60 na próxima. Um work in progress: estudos, storyboards e testes feitos com IA, a caminho de um filme pronto.", es: "Una idea de alrededor de 2009 que vuelve en 2026: Adidas hace el balón oficial del Mundial desde hace 56 años y cumple 60 en el próximo. Un work in progress: estudios, storyboards y pruebas hechos con IA, camino a un spot terminado.",
      },
      // Told in storyboard order: duel films, the finale, the second key visual with the end line, then the storyboard as process
      hero: "bleed",
      layout: "loose", grid: "fluxo",
      gallery: [
        // The story Felipe told (Oct 27 2026): a print idea from about 2009 at AGE (Adidas account), carried to Lew'Lara\\TBWA in 2012, picked up again in 2026
        { chapter: { en: "01 · Idea", pt: "01 · Ideia", es: "01 · Idea" }, kicker: { en: "2009 · 2012 · print ads", pt: "2009 · 2012 · anúncios impressos", es: "2009 · 2012 · anuncios impresos" },
          head: { en: "From Beckenbauer to Messi. *The official World Cup ball for 40 years.*", pt: "De Beckenbauer a Messi. *A bola oficial da Copa há 40 anos.*", es: "De Beckenbauer a Messi. *El balón oficial del Mundial desde hace 40 años.*" },
          text: { en: "Around 2009, at AGE, the first agency that let me think about this game, we had the Adidas account and I found out the World Cup ball had been Adidas for 40 years. The joke became print-ad headlines, and came with me to Lew'Lara\\TBWA in 2012, also an Adidas agency.", pt: "Lá por 2009, na AGE, a primeira agência que me deixou pensar nesse jogo, a gente atendia a Adidas e eu descobri que a bola da Copa era Adidas fazia 40 anos. A piada virou título de anúncio impresso e veio comigo pra Lew'Lara\\TBWA em 2012, outra agência da Adidas.", es: "Hacia 2009, en AGE, la primera agencia que me dejó pensar en este juego, teníamos la cuenta de Adidas y descubrí que el balón del Mundial era Adidas desde hacía 40 años. La broma se volvió titular de anuncio impreso y se vino conmigo a Lew'Lara\\TBWA en 2012, otra agencia de Adidas." } },
        { chapter: { en: "02 · Film", pt: "02 · Filme", es: "02 · Spot" }, kicker: { en: "Work in progress · 56 → 60 years", pt: "Work in progress · 56 → 60 anos", es: "Work in progress · 56 → 60 años" },
          head: { en: "Today, 56 years. At the next Cup, *60.*", pt: "Hoje são 56 anos. Na próxima Copa, *60.*", es: "Hoy son 56 años. En el próximo Mundial, *60.*" },
          text: { en: "In 2026 I picked the idea up again as a film: legends from different eras on the same pitch. Studies, storyboards and tests, all made with AI, on the way to a finished film.", pt: "Em 2026 retomei a ideia como filme: lendas de épocas diferentes no mesmo gramado. Estudos, storyboards e testes, tudo feito com IA, a caminho de um filme pronto.", es: "En 2026 retomé la idea como spot: leyendas de distintas épocas en la misma cancha. Estudios, storyboards y pruebas, todos hechos con IA, camino a un spot terminado." } },
        // Film 02 (The breakaway) removed (Felipe, Oct 26 2026); files kept in images/warriors/
        { video: "images/warriors/film.mp4?v=2", webm: "images/warriors/film.webm?v=2", poster: "images/warriors/film-poster.jpg?v=2", ar: "16/9", col: 1, span: 12, caption: { en: "Test 01 — Messi vs Beckenbauer", pt: "Teste 01 — Messi vs Beckenbauer", es: "Prueba 01 — Messi vs Beckenbauer" } },
        { video: "images/warriors/film-04.mp4", webm: "images/warriors/film-04.webm", poster: "images/warriors/film-04-poster.jpg", ar: "1280/714", col: 1, span: 12, caption: { en: "Test 02 — Maradona vs Pelé", pt: "Teste 02 — Maradona vs Pelé", es: "Prueba 02 — Maradona vs Pelé" } },

        { chapter: { en: "03 · Visual studies", pt: "03 · Estudos visuais", es: "03 · Estudios visuales" }, kicker: { en: "Frames · Characters", pt: "Frames · Personagens", es: "Frames · Personajes" },
          head: { en: "Legends from different eras. *One pitch.*", pt: "Lendas de épocas diferentes. *Um só campo.*", es: "Leyendas de distintas épocas. *Una sola cancha.*" } },
        { src: "images/warriors/portrait-01.jpg", ar: "1376/768", col: 1, span: 6 },
        { src: "images/warriors/portrait-02.jpg", ar: "1920/1024", col: 7, span: 6 },
        { src: "images/warriors/frame-01.jpg", ar: "1920/1024", col: 1, span: 6 },
        { src: "images/warriors/frame-02.jpg", ar: "1920/1024", col: 7, span: 6 },
        { chapter: { en: "04 · Key visual", pt: "04 · Key visual", es: "04 · Key visual" }, kicker: { en: "Yamal vs Higuita", pt: "Yamal vs Higuita", es: "Yamal vs Higuita" },
          head: { en: "Higuita, *final boss.*", pt: "Higuita, o *chefão final.*", es: "Higuita, el *jefe final.*" } },
        { src: "images/warriors/key-visual-02.jpg", ar: "2000/1116", col: 1, span: 12, caption: { en: "Key visual 02 — Yamal vs Higuita", pt: "Key visual 02 — Yamal vs Higuita", es: "Key visual 02 — Yamal vs Higuita" } },
        { chapter: { en: "05 · Final showdown", pt: "05 · Confronto final", es: "05 · Duelo final" }, kicker: { en: "Yamal vs Higuita", pt: "Yamal vs Higuita", es: "Yamal vs Higuita" },
          head: { en: "One last match. *One final boss.*", pt: "O último confronto. *O chefão final.*", es: "El último duelo. *El jefe final.*" } },
        { video: "images/warriors/film-03.mp4", webm: "images/warriors/film-03.webm", poster: "images/warriors/film-03-poster.jpg", ar: "16/9", col: 1, span: 12, caption: { en: "Yamal vs Higuita — final film test", pt: "Yamal vs Higuita — teste do filme final", es: "Yamal vs Higuita — prueba del spot final" } },
      ],
    },
    {
      title: "DJ Shadow",
      fold: 4, // v2: shorter case, the rest behind "See the full case" (Nov 16 2026)
      // Approved by Felipe on the preview and published (Oct 29 2026). The hands poster was rejected at the time
      // (Felipe): only the silhouette line is shown, the black & white one first.
      track: { id: "1a9maLxqpx3cxjY1lTj62B", name: "Midnight In A Perfect World", by: "DJ Shadow" },
      type: "poster",
      client: "Cine Joia",
      year: "2012",
      role: { en: "Graphic Designer", pt: "Designer gráfico", es: "Diseñador gráfico" },
      scope: { en: "Gig poster // Black & white", pt: "Pôster de show // Preto e branco", es: "Póster de concierto // Blanco y negro" },
      sector: { en: "Concert venue, São Paulo", pt: "Casa de shows, São Paulo", es: "Sala de conciertos, São Paulo" },
      deliverables: { en: "Poster and digital pieces", pt: "Pôster e peças digitais", es: "Póster y piezas digitales" },
      tags: { en: ["GigPoster", "Halftone", "Music"], pt: ["PôsterDeShow", "Retícula", "Música"], es: ["PósterDeConcierto", "Semitono", "Música"] },
      // Felipe (Oct 29 2026): cream page, main type in black. The favourite version is black and white, so highlights
      // follow the colour rule for black/white projects and use the site blue.
      theme: { bg: "#f0efe8", fg: "#111111", mute: "#6c6b66", line: "#dcdbd2", panel: "#e6e5dd", accent: "#1a2bff" },
      tools: ["Adobe CC"],
      // Black-and-white applications, revised November 4, 2026.
      image: "images/dj-shadow/mockup-wall-muted-v3.jpg",
      hero: "bleed",
      heroAr: "3/2",
      summary: {
        en: "Poster for DJ Shadow at Cine Joia, São Paulo, 19.10.12, the night of the Chocolate party's 10th anniversary. A figure pressed against frosted glass, in halftone, with the name cut across a circle. In black and white.",
        pt: "Pôster do DJ Shadow no Cine Joia, São Paulo, 19.10.12, na noite dos 10 anos da festa Chocolate. Uma figura colada num vidro fosco, em retícula, com o nome cortado num círculo. Em preto e branco.", es: "Póster de DJ Shadow en Cine Joia, São Paulo, 19.10.12, la noche de los 10 años de la fiesta Chocolate. Una figura pegada a un vidrio esmerilado, en semitono, con el nombre cortado en un círculo. En blanco y negro.",
      },
      layout: "loose", grid: "trilho",
      gallery: [
        // The black & white version, Felipe's favourite, large and centred right under the cover
        { fullWidthIntro: true, grid: "fluxo", chapter: { en: "01 · The poster", pt: "01 · O pôster", es: "01 · El póster" }, kicker: { en: "Cine Joia presents · 19.10.12", pt: "Cine Joia apresenta · 19.10.12", es: "Cine Joia presenta · 19.10.12" },
          head: { en: "A shadow *behind the glass.*", pt: "Uma sombra *atrás do vidro.*", es: "Una sombra *detrás del vidrio.*" },
          text: { en: "A figure pressed against frosted glass, one hand raised, drawn only with halftone dots. The name is cut along the diagonal of a circle.", pt: "Uma figura colada num vidro fosco, com uma mão levantada, desenhada só com pontos de retícula. O nome é cortado na diagonal de um círculo.", es: "Una figura pegada a un vidrio esmerilado, con una mano levantada, dibujada solo con puntos de semitono. El nombre se corta en la diagonal de un círculo. " } },
        { src: "images/dj-shadow/poster-bw.jpg", ar: "1428/2000", col: 1, span: 12 },
        { chapter: { en: "02 · Negative", pt: "02 · Negativo", es: "02 · Negativo" }, kicker: { en: "Black · white", pt: "Preto · branco", es: "Negro · blanco" }, grid: "fluxo", fullWidthIntro: true,
          head: { en: "The same shadow, *in reverse.*", pt: "A mesma sombra, *ao contrário.*", es: "La misma sombra, *al revés.*" },
          text: { en: "The inverted version brings the figure forward in white against a black ground.", pt: "Na versão invertida, a figura aparece em branco sobre o fundo preto.", es: "En la versión invertida, la figura aparece en blanco sobre el fondo negro." } },
        { src: "images/dj-shadow/version-black.jpg", ar: "999/1400", col: 1, span: 12 },
        { chapter: { en: "03 · Up close", pt: "03 · De perto", es: "03 · De cerca" }, kicker: { en: "Halftone · type", pt: "Retícula · tipografia", es: "Semitono · tipografía" }, grid: "fluxo", fullWidthIntro: true,
          head: { en: "The dot *does the blur.*", pt: "O ponto *faz o desfoque.*", es: "El punto *hace el desenfoque.*" },
          text: { en: "Close up, the shadow is only halftone dots getting bigger and smaller. The name breaks along the diagonal that splits the circle.", pt: "De perto, a sombra é só ponto de retícula aumentando e diminuindo. O nome quebra na diagonal que corta o círculo.", es: "De cerca, la sombra es solo puntos de semitono que crecen y se achican. El nombre se quiebra en la diagonal que divide el círculo." } },
        { src: "images/dj-shadow/detail-x.jpg", ar: "1000/664", col: 1, span: 4 },
        { src: "images/dj-shadow/detail-x2.jpg", ar: "1000/664", col: 5, span: 4 },
        { src: "images/dj-shadow/detail-z.jpg", ar: "1000/664", col: 9, span: 4 },
        // Proposed applications (Felipe, Nov 15 2026: no "mockup" label in site text).
        { chapter: { en: "04 · Applications", pt: "04 · Aplicações", es: "04 · Aplicaciones" }, kicker: { en: "T-shirt · vinyl", pt: "Camiseta · vinil", es: "Camiseta · vinilo" }, grid: "fluxo", fullWidthIntro: true,
          head: { en: "Beyond *the poster.*", pt: "Além *do pôster.*", es: "Más allá *del póster.*" },
          text: { en: "Two proposed applications of the black-and-white artwork: a concert T-shirt and a vinyl sleeve.", pt: "Duas propostas de aplicação da arte em preto e branco: camiseta de show e capa de vinil.", es: "Dos propuestas de aplicación del arte en blanco y negro: camiseta de concierto y portada de vinilo." } },
        { src: "images/dj-shadow/mockup-shirt-bw-v2.jpg", ar: "3/2", col: 1, span: 6, caption: { en: "T-shirt · concept", pt: "Camiseta · conceitual", es: "Camiseta · conceptual" } },
        { src: "images/dj-shadow/mockup-vinyl-bw-v2.jpg", ar: "3/2", col: 7, span: 6, caption: { en: "Vinyl · concept", pt: "Vinil · conceitual", es: "Vinilo · conceptual" } },
        { chapter: { en: "05 · Stickers", pt: "05 · Adesivos", es: "05 · Stickers" }, kicker: { en: "Wear", pt: "Desgaste", es: "Desgaste" }, grid: "fluxo", fullWidthIntro: true,
          head: { en: "Just *the circle.*", pt: "Só *o círculo.*", es: "Solo *el círculo.*" },
          text: { en: "The circle as a black-and-white sticker on a worn club bathroom door. Layers of paper, torn edges and traces of glue.", pt: "O círculo em adesivos preto e branco na porta gasta de um banheiro de casa noturna. Camadas de papel, bordas rasgadas e marcas de cola.", es: "El círculo en stickers blancos y negros sobre la puerta gastada de un baño de club. Capas de papel, bordes rasgados y marcas de pegamento." } },
        { src: "images/dj-shadow/mockup-sticker-torn-v2.jpg", ar: "1/1", col: 1, span: 5, caption: { en: "Torn sticker", pt: "Adesivo rasgado", es: "Sticker rasgado" } },
        { src: "images/dj-shadow/mockup-stickers-bathroom-v2.jpg", ar: "3/2", col: 6, span: 7, caption: { en: "Club bathroom · concept", pt: "Banheiro de casa noturna · conceitual", es: "Baño de club · conceptual" } },
        // The night: facts from Cine Joia's own film (YouTube description) and Popload's announcement (Aug 2012; its
        // picture is a different flyer, so it is not shown). Photos: Serjão Carvalho on Flickr, all rights reserved,
        // credited and linked; Felipe to ask him (Oct 29 2026).
        { grid: "trilho", chapter: { en: "06 · The night", pt: "06 · A noite", es: "06 · La noche" }, kicker: { en: "Friday, 19.10.12", pt: "Sexta, 19.10.12", es: "Viernes, 19.10.12" },
          head: { en: "Chocolate *turns ten.*", pt: "A Chocolate *faz dez anos.*", es: "La Chocolate *cumple diez años.*" },
          text: { en: "The first night of the 10th anniversary of Chocolate, one of São Paulo's main hip hop parties. Its founders, Guigo Lima and Kadu Mattar, brought DJ Shadow to Cine Joia, with Dubstrong, Nuts and Tamenpi on the decks the same night, the eve of Planeta Terra.", pt: "A primeira noite do aniversário de 10 anos da Chocolate, uma das festas de hip hop mais importantes de São Paulo. Os criadores, Guigo Lima e Kadu Mattar, trouxeram o DJ Shadow pro Cine Joia, e na mesma noite ainda tinha Dubstrong, Nuts e Tamenpi nas pick-ups, na véspera do Planeta Terra.", es: "La primera noche de los 10 años de la Chocolate, una de las fiestas de hip hop más importantes de São Paulo. Sus creadores, Guigo Lima y Kadu Mattar, trajeron a DJ Shadow al Cine Joia, y esa misma noche también estaban Dubstrong, Nuts y Tamenpi en los platos, un día antes del Planeta Terra." } },
        { roomsAuto: true, rooms: [
          { name: { en: "DJ Shadow at Cine Joia", pt: "DJ Shadow no Cine Joia", es: "DJ Shadow en el Cine Joia" }, items: [
            { src: "images/dj-shadow/show/show-04.jpg", ar: "1024/591", caption: { en: "Cine Joia, 19.10.12 · photo: Serjão Carvalho", pt: "Cine Joia, 19.10.12 · foto: Serjão Carvalho", es: "Cine Joia, 19.10.12 · foto: Serjão Carvalho" } },
            { src: "images/dj-shadow/show/show-03.jpg", ar: "1024/679", caption: { en: "Cine Joia, 19.10.12 · photo: Serjão Carvalho", pt: "Cine Joia, 19.10.12 · foto: Serjão Carvalho", es: "Cine Joia, 19.10.12 · foto: Serjão Carvalho" } },
            { src: "images/dj-shadow/show/show-05.jpg", ar: "1024/726", caption: { en: "Cine Joia, 19.10.12 · photo: Serjão Carvalho", pt: "Cine Joia, 19.10.12 · foto: Serjão Carvalho", es: "Cine Joia, 19.10.12 · foto: Serjão Carvalho" } },
            { src: "images/dj-shadow/show/show-02.jpg", ar: "1024/607", caption: { en: "Cine Joia, 19.10.12 · photo: Serjão Carvalho", pt: "Cine Joia, 19.10.12 · foto: Serjão Carvalho", es: "Cine Joia, 19.10.12 · foto: Serjão Carvalho" } },
            { src: "images/dj-shadow/show/show-01.jpg", ar: "1024/639", caption: { en: "Cine Joia, 19.10.12 · photo: Serjão Carvalho", pt: "Cine Joia, 19.10.12 · foto: Serjão Carvalho", es: "Cine Joia, 19.10.12 · foto: Serjão Carvalho" } }
          ] },
        ], ar: "3/2", col: 1, span: 12 },
        { yt: "YYq4k9wMJfs", ar: "16/9", caption: { en: "“Chocolate 10 anos @ Cine Joia – DJ Shadow” · video: Cine Joia / YouTube (camera Henrique EDMX Montanari, edit Abner Palma)", pt: "“Chocolate 10 anos @ Cine Joia – DJ Shadow” · vídeo: Cine Joia / YouTube (câmera Henrique EDMX Montanari, montagem Abner Palma)", es: "“Chocolate 10 anos @ Cine Joia – DJ Shadow” · video: Cine Joia / YouTube (cámara Henrique EDMX Montanari, edición Abner Palma)" } },
        { yt: "j-TbaO_Bxik", ar: "16/9", caption: { en: "The night, by the party · video: GuigoChocolate / YouTube", pt: "A noite, pelo olhar da festa · vídeo: GuigoChocolate / YouTube", es: "La noche, vista por la fiesta · video: GuigoChocolate / YouTube" } },
        { yt: "JTAPlO8-QeQ", ar: "16/9", caption: { en: "“Organ Donor”, from the crowd · video: MarcosB79 / YouTube", pt: "“Organ Donor”, da pista · vídeo: MarcosB79 / YouTube", es: "“Organ Donor”, desde la pista · video: MarcosB79 / YouTube" } },
        { episodeLink: { url: "https://www.flickr.com/photos/serjaocarvalho/albums/72157631839299293", title: { en: "More photos by Serjão Carvalho", pt: "Mais fotos de Serjão Carvalho", es: "Más fotos de Serjão Carvalho" }, detail: { en: "Photos: Serjão Carvalho · Flickr", pt: "Fotos: Serjão Carvalho · Flickr", es: "Fotos: Serjão Carvalho · Flickr" } } },
        { episodeLink: { url: "https://www.popload.com.br/dj-shadow-tem-show-confirmado-no-cine-joia-em-sp", title: { en: "Read the announcement", pt: "Ler o anúncio", es: "Leer el anuncio" }, detail: { en: "Popload · August 2012", pt: "Popload · agosto de 2012", es: "Popload · agosto de 2012" } } },
        // Dubstrong's own recording of his set that night (SoundCloud), which Felipe loves
        { chapter: { en: "07 · Dubstrong live", pt: "07 · Dubstrong ao vivo", es: "07 · Dubstrong en vivo" }, kicker: { en: "Same night · SoundCloud", pt: "Na mesma noite · SoundCloud", es: "Esa misma noche · SoundCloud" }, grid: "trilho",
          head: { en: "Before *the Shadow.*", pt: "Antes *do Shadow.*", es: "Antes *de Shadow.*" },
          text: { en: "DJ Dubstrong recorded his set that night at Cine Joia, and put it online.", pt: "O DJ Dubstrong gravou o set daquela noite no Cine Joia e soltou na internet.", es: "DJ Dubstrong grabó su set de esa noche en el Cine Joia y lo subió a internet." } },
        { soundcloud: "https://soundcloud.com/dubstrong/djdubstrong-live-chocolate10anos", h: 166, caption: { en: "DJ Dubstrong live @ Cine Joia, Chocolate 10 anos · SoundCloud", pt: "DJ Dubstrong ao vivo no Cine Joia, Chocolate 10 anos · SoundCloud", es: "DJ Dubstrong en vivo en el Cine Joia, Chocolate 10 anos · SoundCloud" } },
        { chapter: { en: "08 · Listen", pt: "08 · Pra ouvir", es: "08 · Para escuchar" }, kicker: { en: "Sample-based", pt: "Tudo sampleado", es: "Todo sampleado" }, grid: "trilho",
          head: { en: "Built from *other records.*", pt: "Feito de *outros discos.*", es: "Hecho de *otros discos.*" },
          text: { en: "DJ Shadow builds his music from samples. Start with Endtroducing..... (1996) and “Midnight in a Perfect World”.", pt: "O DJ Shadow monta as músicas dele com samples. Pra começar: Endtroducing..... (1996) e “Midnight in a Perfect World”.", es: "DJ Shadow arma sus canciones con samples. Para empezar: Endtroducing..... (1996) y “Midnight in a Perfect World”." } },
        { spotify: "artist/5CE2IfdYZEQGIDsfiRm8SI", h: 452, caption: { en: "DJ Shadow on Spotify", pt: "DJ Shadow no Spotify", es: "DJ Shadow en Spotify" } },
      ],
    },
    {
  "title": "DISORD/AIR",
  "slug": "disorder",
  "track": {"id":"3SKH53SPQbEnZR4cJPVaz2", "name":"Messy", "by":"Lola Young"},
  "type": "branding",
  "year": "2024",
  "client": {"en":"Personal digital project","pt":"Projeto pessoal digital","es":"Proyecto personal digital"},
  "scope": {
    "en": "Music, culture & editorial identity",
    "pt": "Música, cultura e identidade editorial",
    "es": "Música, cultura e identidad editorial"
  },
  "sector": {
    "en": "Music & culture",
    "pt": "Música e cultura",
    "es": "Música y cultura"
  },
  "deliverables": {
    "en": "Visual identity, Instagram & editorial content",
    "pt": "Identidade visual, Instagram e conteúdo editorial",
    "es": "Identidad visual, Instagram y contenido editorial"
  },
  "tags": {
    "en": [
      "Music",
      "Editorial",
      "Identity",
      "Social"
    ],
    "pt": [
      "Música",
      "Editorial",
      "Identidade",
      "Social"
    ],
    "es": [
      "Música",
      "Editorial",
      "Identidad",
      "Social"
    ]
  },
  "image": "images/disorder/manifesto.jpg",
  "theme": {
    "bg": "#f1d9bd",
    "fg": "#12110f",
    "mute": "#625445",
    "line": "#bca58a",
    "panel": "#f1d9bd",
    "accent": "#ff4e23",
    "accentText": "#a6260a"
  },
  "summary": {
    "en": "DISORD/AIR was a personal digital project I launched and ran for a while. Discovering things and telling stories is one of my favourite things in life. Music is another passion, so I put them together on Instagram: discoveries, stories behind the artists and little oddities worth sharing. The project is on pause and should return soon, in a different format.",
    "pt": "DISORD/AIR foi um projeto pessoal digital que coloquei no ar e toquei durante um tempo. Descobrir coisas e contar histórias é um dos grandes baratos da minha vida. Como música é outra paixão, juntei tudo num Instagram: descobertas, histórias por trás dos artistas e umas doideirinhas que mereciam ser compartilhadas. O projeto está em pausa e deve voltar em breve, em outro formato.",
    "es": "DISORD/AIR fue un proyecto personal digital que lancé y llevé durante un tiempo. Descubrir cosas y contar historias es una de las cosas que más disfruto en la vida. La música es otra pasión, así que lo junté todo en Instagram: descubrimientos, historias de los artistas y pequeñas rarezas para compartir. El proyecto está en pausa y debería volver pronto, en otro formato."
},
  "layout": "disorder",
  "gallery": []
},
    {
      title: "Dirty Projectors",
      track: { id: "0uX0CZRfsZlFPihkuIMMFp", name: "Gun Has No Trigger", by: "Dirty Projectors" },
      type: "poster",
      client: "Cine Joia",
      year: "2012",
      role: { en: "Graphic Designer / Illustrator", pt: "Designer gráfico / Ilustrador", es: "Diseñador gráfico / Ilustrador" },
      scope: { en: "Gig poster // Lettering", pt: "Pôster de show // Lettering", es: "Póster de concierto // Lettering" },
      sector: { en: "Concert venue, São Paulo", pt: "Casa de shows, São Paulo", es: "Sala de conciertos, São Paulo" },
      deliverables: { en: "Poster, lettering, versions and social posts", pt: "Pôster, lettering, versões e posts pras redes", es: "Póster, lettering, versiones y posts para redes" },
      tags: { en: ["GigPoster", "Lettering", "Music"], pt: ["PôsterDeShow", "Lettering", "Música"], es: ["PósterDeConcierto", "Lettering", "Música"] },
      // The poster's own colours: cream paper, navy ink, red and cyan faces; the title in the poster's cyan (Felipe, Oct 28 2026)
      theme: { bg: "#f6f5ec", fg: "#00002e", mute: "#6d6d7e", line: "#dedbcc", panel: "#ecead9", accent: "#ec163c", accentText: "#ec163c", title: "#02adef" },
      tools: ["Adobe CC"],
      // Cover: the signed poster framed on Felipe's wall (Felipe, Oct 28 2026); the old lettering cover is kept as cover.jpg
      image: "images/dirty-projectors/cover-signed.jpg",
      hero: "bleed",
      heroAr: "2500/1359",
      summary: {
        en: "Poster for Dirty Projectors at Cine Joia, São Paulo, 30.11.12. Two faces, one cyan and one red, and the band's name in angular, cut-out letters. The band signed it.",
        pt: "Pôster do show do Dirty Projectors no Cine Joia, São Paulo, 30.11.12. Dois rostos, um azul e outro vermelho, e o nome da banda em letras angulosas, recortadas. A banda autografou.", es: "Póster del concierto de Dirty Projectors en el Cine Joia, São Paulo, 30.11.12. Dos rostros, uno azul y otro rojo, y el nombre de la banda en letras angulosas, recortadas. La banda lo autografió.",
      },
      // Grids mixed by chapter (Felipe, Oct 28 2026): trilho for the poster and the night, modulos for the lettering set, destaque for the prints
      layout: "loose", grid: "trilho",
      gallery: [
        { chapter: { en: "01 · The poster", pt: "01 · O pôster", es: "01 · El póster" }, kicker: { en: "Cine Joia presents · 30.11.12", pt: "Cine Joia apresenta · 30.11.12", es: "Cine Joia presenta · 30.11.12" },
          head: { en: "Two faces, *one show.*", pt: "Dois rostos, *um show.*", es: "Dos rostros, *un concierto.*" },
          text: { en: "A cyan face and a red face meet in the middle, eyes wide, a tear running. Flat colours on cream paper, and the band's name stacked in the corner.", pt: "Um rosto azul e um vermelho se encontram no meio, de olhos arregalados e uma lágrima escorrendo. Cores chapadas no papel creme e o nome da banda empilhado no canto.", es: "Un rostro azul y uno rojo se encuentran en el medio, con los ojos muy abiertos y una lágrima cayendo. Colores planos sobre papel crema y el nombre de la banda apilado en la esquina." } },
        // The art and the printed poster side by side, one row filling the column (no empty side)
        { src: "images/dirty-projectors/poster.jpg", ar: "1337/1964", col: 1, span: 6 },
        { src: "images/dirty-projectors/poster-room.jpg", ar: "800/991", col: 7, span: 6, caption: { en: "Printed", pt: "Impresso", es: "Impreso" } },
        { chapter: { en: "02 · Lettering", pt: "02 · Lettering", es: "02 · Lettering" }, kicker: "DIRTY / PROJE / CTORS", grid: "modulos", cols: 3, cell: "3/5", bare: true,
          head: { en: "Letters with *sharp edges.*", pt: "Letras de *corte seco.*", es: "Letras de *corte seco.*" },
          text: { en: "The name broken into three lines and drawn in angular, uneven letters, in red and cyan.", pt: "O nome quebrado em três linhas e desenhado com letras angulosas e irregulares, em vermelho e azul.", es: "El nombre partido en tres líneas y dibujado en letras angulosas e irregulares, en rojo y azul." } },
        // Second row of studies (red/cyan Cinejoia, navy, navy 3D) removed (Felipe, Oct 28 2026); files kept in images/dirty-projectors/
        { src: "images/dirty-projectors/type-02.jpg", ar: "879/1392" },
        { src: "images/dirty-projectors/type-01.jpg", ar: "879/1392" },
        { src: "images/dirty-projectors/tshirt-01.jpg", ar: "843/1520" },
        { chapter: { en: "03 · Print", pt: "03 · Impressão", es: "03 · Impresión" }, kicker: { en: "On paper", pt: "No papel", es: "En papel" }, grid: "destaque",
          head: { en: "Off the press, *in a pile.*", pt: "Na mão, *aos montes.*", es: "Recién impresos, *a montones.*" } },
        { src: "images/dirty-projectors/print-01.jpg", ar: "2000/1494" },
        { src: "images/dirty-projectors/print-02.jpg", ar: "2000/1494" },
        { src: "images/dirty-projectors/print-detail.jpg", ar: "1280/594" },
        // Mockups (Oct 29 2026): Flora scenes with the real artwork composited on top
        { chapter: { en: "04 · On the street", pt: "04 · Na rua", es: "04 · En la calle" }, grid: "fluxo", fullWidthIntro: true,
          head: { en: "Two faces *on every wall.*", pt: "Dois rostos *em cada muro.*", es: "Dos rostros *en cada muro.*" },
          text: { en: "The poster taken out to the street: wheat-pasted in a row downtown and as stickers on a street box.", pt: "O pôster indo pra rua: em lambe-lambe, lado a lado no centro, e em adesivo numa caixa de luz.", es: "El póster saliendo a la calle: pegado en fila en el centro y en stickers sobre una caja de luz." } },
        { src: "images/dirty-projectors/mockup-wall.jpg", ar: "2000/1341", col: 1, span: 12, caption: { en: "Wheat-pasted", pt: "Lambe-lambe", es: "Pegado en muro" } },
        { chapter: { en: "05 · The show", pt: "05 · O show", es: "05 · El concierto" }, kicker: { en: "Cine Joia · Friday, 30.11.12", pt: "Cine Joia · sexta, 30.11.12", es: "Cine Joia · viernes, 30.11.12" }, grid: "trilho",
          head: { en: "The night *itself.*", pt: "A noite *em si.*", es: "La noche *en sí.*" },
          text: { en: "Dirty Projectors at Cine Joia, São Paulo, with Holger opening. About an hour, encore included, mostly Swing Lo Magellan.", pt: "Dirty Projectors no Cine Joia, em São Paulo, com abertura do Holger. Coisa de uma hora, contando o bis, quase tudo do Swing Lo Magellan.", es: "Dirty Projectors en el Cine Joia, en São Paulo, con Holger abriendo. Cerca de una hora contando el encore, casi todo de Swing Lo Magellan." } },
        { yt: "_Ekh2BRJwLc", ar: "16/9", caption: { en: "“About to Die”, live at Cine Joia · video: sapiamaia / YouTube", pt: "“About to Die”, ao vivo no Cine Joia · vídeo: sapiamaia / YouTube", es: "“About to Die”, en vivo en el Cine Joia · video: sapiamaia / YouTube" } },
        { src: "images/dirty-projectors/show-01.jpg", ar: "600/307", caption: { en: "Photo: Fabrício Vianna / Popload, via Monkeybuzz", pt: "Foto: Fabrício Vianna / Popload, via Monkeybuzz", es: "Foto: Fabrício Vianna / Popload, vía Monkeybuzz" } },
        { todo: { en: "More photos of the show", pt: "Mais fotos do show", es: "Más fotos del concierto" }, ar: "3/2", col: 1, span: 6 },
        { chapter: { en: "06 · Signed", pt: "06 · Autografado", es: "06 · Autografiado" }, kicker: { en: "After the show", pt: "Depois do show", es: "Después del concierto" },
          head: { en: "Signed by *the band.*", pt: "Autografado pela *banda.*", es: "Autografiado por *la banda.*" } },
        { todo: { en: "Photo of the band holding the signed poster", pt: "Foto da banda segurando o pôster autografado", es: "Foto de la banda sosteniendo el póster autografiado" }, ar: "3/2", col: 1, span: 6 },
        { todo: { en: "Photo of the signed poster", pt: "Foto do pôster autografado", es: "Foto del póster autografiado" }, ar: "3/4", col: 7, span: 6 },
      ],
    },
    {
      title: "DMA",
      fold: 4, // v2: shorter case, the rest behind "See the full case" (Nov 16 2026)
      track: { id: "2VEZx7NWsZ1D0eJ4uv5Fym", name: "Digital Love", by: "Daft Punk" },
      type: "branding",
      client: "JBS",
      year: "2022",
      role: { en: "Brand Consultant / Brand Designer", pt: "Consultor de marca / Designer de marca", es: "Consultor de marca / Diseñador de marca" },
      scope: { en: "Brand identity // Brandbook // Launch", pt: "Identidade de marca // Brandbook // Lançamento", es: "Identidad de marca // Brandbook // Lanzamiento" },
      sector: { en: "Corporate education", pt: "Educação corporativa", es: "Educación corporativa" },
      deliverables: { en: "Monogram, logo system, palette, typography, pattern, brandbook, launch campaign, stationery and merchandise", pt: "Monograma, sistema de logos, paleta, tipografia, padrão, brandbook, campanha de lançamento, papelaria e brindes", es: "Monograma, sistema de logos, paleta, tipografía, patrón, brandbook, campaña de lanzamiento, papelería y merch" },
      tags: { en: ["Branding", "VisualSystem", "Brandbook", "Launch"], pt: ["Branding", "SistemaVisual", "Brandbook", "Lançamento"], es: ["Branding", "SistemaVisual", "Brandbook", "Lanzamiento"] },
      // Felipe, Nov 13 2026: done alone; the academy launched and became the base for all of JBS's digital initiatives (incl. Seara Minha Receita, a case still to come). Photo scenes are Flora mockups; Felipe, Nov 15 2026: never say "mockup" in site text.
      tools: ["Adobe CC", "*Flora.AI"],
      image: "images/dma/mockup-mural.jpg",
      hero: "bleed",
      heroAr: "2500/1061",
      theme: { bg: "#f2efe1", fg: "#111111", mute: "#5c5a55", line: "#d4d2c6", panel: "#e8e4d2", accent: "#ff0068", accentText: "#c40055" },
      summary: {
        en: "Digital Marketing Academy by JBS, a school for the marketing teams of one of the world's largest food companies. A brand built from the smallest unit of a screen.",
        pt: "Digital Marketing Academy by JBS, uma escola para os times de marketing de uma das maiores empresas de alimentos do mundo. Uma marca que nasce da menor unidade de uma tela.", es: "Digital Marketing Academy by JBS, una escuela para los equipos de marketing de una de las mayores empresas de alimentos del mundo. Una marca que nace de la unidad más pequeña de una pantalla.",
      },
      layout: "loose", grid: "trilho",
      gallery: [
        { chapter: { en: "01 · Intro", pt: "01 · Intro", es: "01 · Intro" }, kicker: { en: "Digital Marketing Academy", pt: "Digital Marketing Academy", es: "Digital Marketing Academy" },
          head: { en: "Every screen starts with a *pixel.*", pt: "Toda tela começa num *pixel.*", es: "Toda pantalla empieza en un *pixel.*" },
          text: { en: "A school for digital marketing needed a brand that spoke the language of its subject. The idea starts at the smallest unit of a screen: the pixel. From it come the monogram, the palette, the pattern and everything the academy puts out into the world.", pt: "Uma escola de marketing digital precisava de uma marca que falasse a língua do que ensina. A ideia parte da menor unidade de uma tela: o pixel. Dele saem o monograma, a paleta, o padrão e tudo o que a academia põe no mundo.", es: "Una escuela de marketing digital necesitaba una marca que hablara el idioma de lo que enseña. La idea parte de la unidad más pequeña de una pantalla: el pixel. De ahí salen el monograma, la paleta, el patrón y todo lo que la academia pone en el mundo." } },
        { src: "images/dma/teaser-four.jpg", ar: "2000/900", col: 1, span: 12, caption: { en: "One message, four colourways", pt: "Uma mensagem, quatro cores", es: "Un mensaje, cuatro colores" } },
        { chapter: { en: "02 · Challenge", pt: "02 · Desafio", es: "02 · Desafío" }, kicker: { en: "The brief", pt: "O briefing", es: "El brief" },
          head: { en: "One academy, *one face.*", pt: "Uma academia, *uma cara só.*", es: "Una academia, *una sola cara.*" },
          text: { en: "Under contract with JBS, I worked directly with then-CMO Sérgio Valente. He wanted a digital academy to mentor staff and leaders at Seara, Swift, Friboi and the group's other companies, with one name and one face. Digital Marketing Academy was born from the pixel, and went on to become the base for all of JBS's digital initiatives.", pt: "Contratado pela JBS, trabalhei direto com o Sérgio Valente, CMO na época. Ele queria uma academia digital pra mentorar funcionários e líderes da Seara, Swift, Friboi e outras empresas do grupo, com um nome e uma cara só. Daí nasceu a Digital Marketing Academy, a partir do pixel, que virou a base de todas as iniciativas digitais da JBS.", es: "Contratado por JBS, trabajé directo con Sérgio Valente, el CMO de ese momento. Él quería una academia digital para mentorear a empleados y líderes de Seara, Swift, Friboi y otras empresas del grupo, con un solo nombre y una sola cara. De ahí nació Digital Marketing Academy, a partir del pixel, que se volvió la base de todas las iniciativas digitales de JBS." } },
        { src: "images/dma/mockup-stage.jpg", ar: "2000/1116", col: 1, span: 12, caption: { en: "The academy on the big screen", pt: "A academia no telão", es: "La academia en la pantalla grande" } },
        { chapter: { en: "03 · The pixel", pt: "03 · O pixel", es: "03 · El pixel" }, kicker: "pix · el",
          head: { en: "The heart of the brand is *a pixel.*", pt: "O coração da marca é *um pixel.*", es: "El corazón de la marca es *un pixel.*" },
          text: { en: "Pixel comes from pix (pictures) and el (element): the smallest element of an image on a screen. Each one alone is just a coloured square; thousands together make any picture. The brand works the same way, square by square.", pt: "Pixel vem de pix (pictures, imagens) e el (element, elemento): a menor parte de uma imagem numa tela. Sozinho é só um quadradinho colorido; aos milhares, forma qualquer imagem. A marca funciona do mesmo jeito, quadradinho por quadradinho.", es: "Pixel viene de pix (pictures, imágenes) y el (element, elemento): la parte más pequeña de una imagen en una pantalla. Solo es apenas un cuadrito de color; por miles, forma cualquier imagen. La marca funciona igual, cuadrito por cuadrito." } },
        { word: { glyph: "pixel", lang: "en", head: "pix·el · pixel", note: { en: "noun · pix (pictures) + el (element), the smallest element of a digital image", pt: "subst. · pix (pictures) + el (element), a menor parte de uma imagem digital", es: "sust. · pix (pictures) + el (element), la parte más pequeña de una imagen digital" } }, col: 1, span: 12 },
        { src: "images/dma/pixel-born.jpg", ar: "2000/610", col: 1, span: 12, caption: { en: "A pixel-born brand", pt: "Uma marca que nasceu de um pixel", es: "Una marca que nació de un pixel" } },
        { chapter: { en: "04 · Monogram", pt: "04 · Monograma", es: "04 · Monograma" }, kicker: { en: "D · M · A", pt: "D · M · A", es: "D · M · A" },
          head: { en: "Built *pixel by pixel.*", pt: "Construído *pixel a pixel.*", es: "Construido *pixel a pixel.*" },
          text: { en: "Three letters stacked on a grid, each one drawn square by square. The monogram comes in two weights, solid and outlined, and carries the full name, Digital Marketing Academy by JBS, beside it or at its foot.", pt: "Três letras empilhadas num grid, cada uma desenhada quadradinho por quadradinho. O monograma tem dois pesos, cheio e vazado, e leva o nome completo, Digital Marketing Academy by JBS, ao lado ou embaixo.", es: "Tres letras apiladas sobre una retícula, cada una dibujada cuadrito por cuadrito. El monograma tiene dos pesos, sólido y calado, y lleva el nombre completo, Digital Marketing Academy by JBS, al lado o abajo." },
          pills: [{ en: "Solid", pt: "Cheio", es: "Sólido" }, { en: "Outlined", pt: "Vazado", es: "Calado" }, { en: "Horizontal", pt: "Horizontal", es: "Horizontal" }, { en: "Vertical", pt: "Vertical", es: "Vertical" }] },
        { src: "images/dma/monogram-pair.jpg", ar: "1408/1195", col: 1, span: 6, caption: { en: "Monogram, two weights", pt: "Monograma, dois pesos", es: "Monograma, dos pesos" } },
        { src: "images/dma/logo-vertical-pair.jpg", ar: "1486/1245", col: 7, span: 6, caption: { en: "Full name at its foot", pt: "Nome completo embaixo", es: "Nombre completo abajo" } },
        { src: "images/dma/logo-horizontal-air.jpg", ar: "2000/769", col: 1, span: 12, caption: { en: "Full name beside it", pt: "Nome completo ao lado", es: "Nombre completo al lado" } },
        { chapter: { en: "05 · System", pt: "05 · Sistema", es: "05 · Sistema" }, kicker: { en: "A variable-voice brand", pt: "Uma marca de voz variável", es: "Una marca de voz variable" },
          head: { en: "No favourite version, *a few clear rules.*", pt: "Nenhuma versão preferida, *poucas regras claras.*", es: "Ninguna versión preferida, *pocas reglas claras.*" },
          text: { en: "DMA has no preferred logo: whoever applies it picks the version that fits best, in six colours or in negative. What holds it together is short: a safe area drawn from the monogram's own letters, minimum sizes for print and screen, and a list of what never to do.", pt: "A DMA não tem logo preferido: quem aplica escolhe a versão que funciona melhor, em seis cores ou em negativo. O que segura tudo é curto: uma área de proteção desenhada com as próprias letras do monograma, tamanhos mínimos pra impresso e tela e uma lista do que nunca fazer.", es: "DMA no tiene logo preferido: quien lo aplica elige la versión que mejor funciona, en seis colores o en negativo. Lo que sostiene todo es corto: un área de protección dibujada con las propias letras del monograma, tamaños mínimos para impreso y pantalla y una lista de lo que nunca hay que hacer." } },
        { src: "images/dma/colour-tags.jpg", ar: "2000/760", col: 1, span: 12, caption: { en: "Six colours, full name below", pt: "Seis cores, nome completo embaixo", es: "Seis colores, nombre completo abajo" } },
        { src: "images/dma/negatives-2.jpg", ar: "2091/940", col: 1, span: 12, caption: { en: "Negative versions", pt: "Versões em negativo", es: "Versiones en negativo" } },
        { src: "images/dma/safe-area.jpg", ar: "2000/1054", col: 1, span: 6, caption: { en: "Safe area and minimum sizes", pt: "Área de proteção e tamanhos mínimos", es: "Área de protección y tamaños mínimos" } },
        { src: "images/dma/dos-donts.jpg", ar: "2000/894", col: 7, span: 6, caption: { en: "What not to do", pt: "O que não fazer", es: "Qué no hacer" } },
        { chapter: { en: "06 · Colour and type", pt: "06 · Cor e tipo", es: "06 · Color y tipo" }, kicker: "Gotham",
          head: { en: "Six colours, *no shy ones.*", pt: "Seis cores, *nenhuma tímida.*", es: "Seis colores, *ninguno tímido.*" },
          text: { en: "Paradise Pink, Midnight Blue, Fluorescent Blue, Sunglow Yellow, Deep Saffron and Smart Green, over a warm off-white and greys for the monogram. Gotham sets the type, from Light to Ultra. Less is more: two sizes per piece, three at most, aligned left.", pt: "Paradise Pink, Midnight Blue, Fluorescent Blue, Sunglow Yellow, Deep Saffron e Smart Green, sobre um off-white quente e cinzas pro monograma. A Gotham faz o texto, do Light ao Ultra. Menos é mais: dois tamanhos por peça, no máximo três, alinhados à esquerda.", es: "Paradise Pink, Midnight Blue, Fluorescent Blue, Sunglow Yellow, Deep Saffron y Smart Green, sobre un off-white cálido y grises para el monograma. Gotham compone el texto, del Light al Ultra. Menos es más: dos tamaños por pieza, como mucho tres, alineados a la izquierda." },
          pillsAll: true, pills: ["#FF0068", "#1B1464", "#00EFE8", "#FFCB05", "#FF9933", "#E2E214"] },
        { src: "images/dma/palette-main.jpg", ar: "2000/757", col: 1, span: 12, caption: { en: "Main palette", pt: "Paleta principal", es: "Paleta principal" } },
        { src: "images/dma/type-gotham.jpg", ar: "2000/845", col: 1, span: 12, caption: { en: "Gotham, six weights", pt: "Gotham, seis pesos", es: "Gotham, seis pesos" } },
        { chapter: { en: "07 · Pattern", pt: "07 · Padrão", es: "07 · Patrón" }, kicker: { en: "Square grids are very welcome", pt: "Grades de quadrados são muito bem-vindas", es: "Las retículas de cuadrados son muy bienvenidas" },
          head: { en: "Type *inside the box.*", pt: "Tipo *dentro da caixa.*", es: "Tipo *dentro de la caja.*" },
          text: { en: "The same pixels that build the monogram break apart into a pattern that dresses every surface. Words go inside boxes too: set in Gotham on off-white blocks, they pile up like pixels and turn text into image.", pt: "Os mesmos pixels que formam o monograma se desmancham num padrão que veste todas as superfícies. As palavras também entram em caixas: em Gotham, sobre blocos off-white, elas se empilham como pixels e o texto vira imagem.", es: "Los mismos pixeles que forman el monograma se deshacen en un patrón que viste todas las superficies. Las palabras también entran en cajas: en Gotham, sobre bloques off-white, se apilan como pixeles y el texto se vuelve imagen." } },
        { src: "images/dma/pattern-wide-2.jpg", ar: "2000/887", col: 1, span: 12, caption: { en: "The pixel pattern", pt: "O padrão de pixels", es: "El patrón de pixeles" } },
        { src: "images/dma/teaser-scatter.jpg", ar: "2000/987", col: 1, span: 12, caption: { en: "Type in boxes, scattered over the pattern", pt: "Tipo em caixas, espalhado sobre o padrão", es: "Tipo en cajas, sobre el patrón" } },
        { chapter: { en: "08 · Attitude", pt: "08 · Atitude", es: "08 · Actitud" }, kicker: { en: "Experiment · Explore · Create", pt: "Experimentar · Explorar · Criar", es: "Experimentar · Explorar · Crear" },
          head: { en: "Don't be *afraid.*", pt: "Sem *medo.*", es: "Sin *miedo.*" },
          text: { en: "Learning digital marketing means testing, getting it wrong and trying again. The brand's voice says it straight: don't be afraid to experiment, to explore, to innovate, to subvert, to create.", pt: "Aprender marketing digital é testar, errar e tentar de novo. A voz da marca diz isso sem rodeio: não tenha medo de experimentar, explorar, inovar, subverter, criar.", es: "Aprender marketing digital es probar, equivocarse y volver a intentarlo. La voz de la marca lo dice sin rodeos: no tengas miedo de experimentar, explorar, innovar, subvertir, crear." } },
        { src: "images/dma/mockup-wall.jpg", ar: "2000/1116", col: 1, span: 12, caption: { en: "The lines on a training room wall", pt: "As frases na parede da sala de aula", es: "Las frases en la pared del aula" } },
        { chapter: { en: "09 · Launch", pt: "09 · Lançamento", es: "09 · Lanzamiento" }, kicker: { en: "Coming on January 6th 2023", pt: "Coming on January 6th 2023", es: "Coming on January 6th 2023" },
          head: { en: "We do really *love our pixels.*", pt: "A gente ama *nossos pixels.* De verdade.", es: "Amamos *nuestros pixeles.* En serio." },
          text: { en: "The launch teaser came with a date and a wink: “think inside the box”, set upside down, for a brand made of little boxes. In Portuguese the invitation became a pun: “Venha pixaprender”, come pixel-learn.", pt: "O teaser de lançamento veio com uma data e uma piscadinha: “think inside the box”, de ponta-cabeça, pra uma marca feita de quadradinhos. Em português, o convite virou trocadilho: “Venha pixaprender”.", es: "El teaser de lanzamiento llegó con una fecha y un guiño: “think inside the box”, al revés, para una marca hecha de cuadritos. En portugués, la invitación se volvió juego de palabras: “Venha pixaprender”." },
          pills: ["*We do really love our pixels!", "Think inside the box", "Venha pixaprender"] },
        { src: "images/dma/teaser-cyan.jpg", ar: "1932/1044", col: 1, span: 12, caption: { en: "Teaser", pt: "Teaser", es: "Teaser" } },
        { src: "images/dma/mockup-posters.jpg", ar: "2000/1116", col: 1, span: 12, caption: { en: "Teaser posters on the street", pt: "Cartazes do teaser na rua", es: "Afiches del teaser en la calle" } },
        { src: "images/dma/feed.jpg", ar: "2000/2000", col: 1, span: 6, caption: { en: "Launch feed", pt: "Feed de lançamento", es: "Feed de lanzamiento" } },
        { src: "images/dma/mockup-phone-full.jpg", ar: "1600/1986", col: 7, span: 6, caption: { en: "The teaser on social", pt: "O teaser nas redes", es: "El teaser en redes" } },
        { chapter: { en: "10 · Applied identity", pt: "10 · Identidade aplicada", es: "10 · Identidad aplicada" }, kicker: { en: "Stationery · Merchandise", pt: "Papelaria · Brindes", es: "Papelería · Merch" },
          head: { en: "A pixel at every *touchpoint.*", pt: "Um pixel em cada *ponto de contato.*", es: "Un pixel en cada *punto de contacto.*" },
          text: { en: "Stationery for the day to day and a kit for whoever joins the academy: bags, badges, stickers and pins, phone cases, a desk mat, a bottle, a flash drive, sticky notes and a power bank. Every piece in the six colours, with the monogram never far away.", pt: "Papelaria pro dia a dia e um kit pra quem entra na academia: sacolas, crachá, adesivos e bottons, capinhas, mousepad, garrafa, pen drive, post-its e power bank. Tudo nas seis cores, com o monograma sempre por perto.", es: "Papelería para el día a día y un kit para quien entra a la academia: bolsas, credencial, stickers y pines, fundas, mousepad, botella, pendrive, notas adhesivas y power bank. Todo en los seis colores, con el monograma siempre cerca." } },
        { src: "images/dma/mockup-stationery-2500.jpg", ar: "2500/1581", col: 1, span: 12, caption: { en: "Stationery on the desk", pt: "Papelaria na mesa", es: "Papelería en la mesa" } },
        { src: "images/dma/letter-pink-2.jpg", ar: "1831/979", col: 1, span: 6 },
        { src: "images/dma/letter-cyan-2.jpg", ar: "1968/1052", col: 7, span: 6 },
        { src: "images/dma/badge-detail-pink-20261115.jpg", ar: "1152/1536", col: 1, span: 6, caption: { en: "Badge detail", pt: "Detalhe do crachá", es: "Detalle de la credencial" } },
        { src: "images/dma/cracha-pessoa.jpg", ar: "1600/1986", col: 7, span: 6, caption: { en: "Badge in use", pt: "Crachá em uso", es: "Credencial en uso" } },
        { src: "images/dma/tote-flora-20261115.jpg", ar: "2000/2000", col: 1, span: 12, caption: { en: "Tote bag", pt: "Sacola", es: "Bolsa" } },
        { src: "images/dma/totes-4.jpg", ar: "1996/691", col: 1, span: 12, caption: { en: "Bags", pt: "Sacolas", es: "Bolsas" } },
        { src: "images/dma/stickers-pins.jpg", ar: "1944/1014", col: 1, span: 12, caption: { en: "Stickers and pins", pt: "Adesivos e bottons", es: "Stickers y pines" } },
        { src: "images/dma/mockup-deskpad.jpg", ar: "2000/1116", col: 1, span: 12, caption: { en: "Desk mat, 90 × 40 cm", pt: "Mousepad, 90 × 40 cm", es: "Mousepad, 90 × 40 cm" } },
        { src: "images/dma/gamer-pads.jpg", ar: "2000/930", col: 1, span: 12, caption: { en: "Desk mats", pt: "Mousepads", es: "Mousepads" } },
        { src: "images/dma/mockup-phonecase.jpg", ar: "1600/1986", col: 1, span: 6, caption: { en: "Phone case", pt: "Capinha", es: "Funda" } },
        { src: "images/dma/mockup-bottle.jpg", ar: "1600/1986", col: 7, span: 6, caption: { en: "Bottle", pt: "Garrafa", es: "Botella" } },
        { src: "images/dma/mockup-powerbank.jpg", ar: "2000/1116", col: 1, span: 12, caption: { en: "Power bank", pt: "Power bank", es: "Power bank" } },
        { src: "images/dma/posters-wall.jpg", ar: "2000/900", col: 1, span: 12, caption: { en: "Posters", pt: "Pôsteres", es: "Afiches" } },
      ],
    },
    {
      title: "Lomography",
      hidden: true, // Felipe, Oct 27 2026: kept here but off the site (remove this line to bring it back)
      track: { id: "3f0U5NaD1bCk8nmKpn2ZJY", name: "Kodachrome", by: "Paul Simon" },
      scope: { en: "Analogue photography", pt: "Fotografia analógica", es: "Fotografía analógica" },
      image: "images/lomography/supersampler-losangeles-01.jpg",
      summary: {
        en: "Film photography shot on three Lomography cameras: the LC-A, the Fisheye and the Super Sampler. Flares, double exposures and whatever the street gives.",
        pt: "Fotografia em filme feita com três câmeras Lomography: a LC-A, a Fisheye e a Super Sampler. Flares, dupla exposição e o que a rua der.", es: "Fotografía analógica con tres cámaras Lomography: la LC-A, la Fisheye y la Super Sampler. Flares, doble exposición y lo que dé la calle.",
      },
      // Film rolls: one horizontal strip per camera, in the order the cameras first appear below. Two or three photos show at a time;
      // arrows, drag and swipe move along the roll. No full-screen view. Each photo: { src, ar: "w/h", camera, caption }.
      layout: "lomo",
      photos: [
        { src: "images/lomography/fisheye-cet.jpg", ar: "2000/1326", camera: "Fisheye" },
        { src: "images/lomography/fisheye-mx.jpg", ar: "2000/1326", camera: "Fisheye" },
        { src: "images/lomography/fisheye-sassasushi.jpg", ar: "2000/1326", camera: "Fisheye" },
        { src: "images/lomography/fisheye-bronx.jpg", ar: "2000/1326", camera: "Fisheye" },
        { src: "images/lomography/fisheye-rochavera.jpg", ar: "2000/1326", camera: "Fisheye" },
        { src: "images/lomography/fisheye-retrovisor.jpg", ar: "2000/1326", camera: "Fisheye" },
        { src: "images/lomography/fisheye-poste.jpg", ar: "2000/1326", camera: "Fisheye" },
        { src: "images/lomography/supersampler-coachella-01.jpg", ar: "2000/1326", camera: "Super Sampler" },
        { src: "images/lomography/supersampler-coachella-02.jpg", ar: "1326/2000", camera: "Super Sampler" },
        { src: "images/lomography/supersampler-losangeles-01.jpg", ar: "2000/1340", camera: "Super Sampler" },
        { src: "images/lomography/supersampler-coachella-03.jpg", ar: "1326/2000", camera: "Super Sampler" },
        { src: "images/lomography/supersampler-santamonica.jpg", ar: "2000/1340", camera: "Super Sampler" },
        { src: "images/lomography/supersampler-losangeles-02.jpg", ar: "2000/1340", camera: "Super Sampler" },
        { src: "images/lomography/lca-saopaulo.jpg", ar: "2000/1326", camera: "LC-A" },
        { src: "images/lomography/lca-chouchin.jpg", ar: "2000/1326", camera: "LC-A" },
        { src: "images/lomography/lca-dancingshoes.jpg", ar: "2000/1326", camera: "LC-A" },
        { src: "images/lomography/lca-redlight.jpg", ar: "2000/1326", camera: "LC-A" },
        { src: "images/lomography/lca-loveclub.jpg", ar: "2000/1326", camera: "LC-A" },
      ],
    },
    {
      title: "Explosions in the Sky",
      // Approved by Felipe on the preview and published (Oct 29 2026)
      track: { id: "3HBcQ5GenzAlBhCIgDGL3x", name: "Your Hand in Mine", by: "Explosions in the Sky" },
      type: "poster",
      client: "Sesc Belenzinho",
      year: "2013",
      role: { en: "Graphic Designer / Illustrator", pt: "Designer gráfico / Ilustrador", es: "Diseñador gráfico / Ilustrador" },
      scope: { en: "Gig poster // Illustration // Screen print", pt: "Pôster de show // Ilustração // Serigrafia", es: "Póster de concierto // Ilustración // Serigrafía" },
      sector: { en: "Cultural centre, São Paulo", pt: "Centro cultural, São Paulo", es: "Centro cultural, São Paulo" },
      deliverables: { en: "Poster, skyline illustration, signed limited screen print", pt: "Pôster, ilustração da cidade, serigrafia limitada e assinada", es: "Póster, ilustración de la ciudad, serigrafía limitada y firmada" },
      tags: { en: ["GigPoster", "Illustration", "ScreenPrint", "Music"], pt: ["PôsterDeShow", "Ilustração", "Serigrafia", "Música"], es: ["PósterDeConcierto", "Ilustración", "Serigrafía", "Música"] },
      // The poster's own colours: dark slate ink, white, the pink of the windows (Felipe, Oct 29 2026)
      theme: { bg: "#26353a", fg: "#f1f1f3", mute: "#93a1a6", line: "#3c4c52", panel: "#2e3e44", accent: "#e01563", accentText: "#ff6699" },
      tools: ["Adobe CC"],
      // Cover: Felipe's night sky with the band's logo, slate matched to the page (#253231 -> #273639 ~ #26353a), a little shorter
      image: "images/explosions-in-the-sky/cover-night.jpg",
      hero: "bleed",
      heroAr: "2500/1250",
      summary: {
        en: "Poster for Explosions in the Sky at Sesc Belenzinho, São Paulo, 22 and 23 May 2013. A city of lit windows with the band's logo across it. A small screen-printed run, signed by me and by the band.",
        pt: "Pôster do show do Explosions in the Sky no Sesc Belenzinho, São Paulo, 22 e 23 de maio de 2013. Uma cidade de janelas acesas com o logo da banda atravessando. Uma tiragem pequena em serigrafia, assinada por mim e pela banda.", es: "Póster del concierto de Explosions in the Sky en el Sesc Belenzinho, São Paulo, 22 y 23 de mayo de 2013. Una ciudad de ventanas encendidas atravesada por el logo de la banda. Un tiraje chico en serigrafía, firmado por mí y por la banda.",
      },
      layout: "loose", grid: "trilho",
      gallery: [
        // The poster right under the cover, large and centred (Felipe: a poster loses its weight small at the side).
        // Mockup: the real artwork composited on a Flora scene, so every text is the original.
        { fullWidthIntro: true, grid: "fluxo", chapter: { en: "01 · The poster", pt: "01 · O pôster", es: "01 · El póster" }, kicker: { en: "Sesc Belenzinho · 22–23.05.13", pt: "Sesc Belenzinho · 22–23.05.13", es: "Sesc Belenzinho · 22–23.05.13" },
          head: { en: "A city that *lights up.*", pt: "Uma cidade que *se acende.*", es: "Una ciudad que *se enciende.*" },
          text: { en: "Buildings drawn as lit windows in pink and white, the band's logo across the skyline, and the lights running down like rain.", pt: "Prédios desenhados como janelas acesas, em rosa e branco, o logo da banda cruzando a cidade e as luzes escorrendo feito chuva.", es: "Edificios dibujados como ventanas encendidas, en rosa y blanco, el logo de la banda cruzando la ciudad y las luces chorreando como lluvia." } },
        { src: "images/explosions-in-the-sky/poster-hanging.jpg", ar: "1856/2304", col: 1, span: 12, caption: { en: "The poster", pt: "O pôster", es: "El póster" } },
        { grid: "trilho", chapter: { en: "02 · The invitation", pt: "02 · O convite", es: "02 · La invitación" }, kicker: { en: "One of my favourite bands", pt: "Uma das minhas bandas favoritas", es: "Una de mis bandas favoritas" },
          head: { en: "A small show, *a deep sound.*", pt: "Um show pequeno, *um som profundo.*", es: "Un concierto pequeño, *un sonido profundo.*" },
          text: { en: "A small show at Sesc Belenzinho. A friend was producing it and invited me to make the poster. Music, and anything made for it, is one of the things I love most: drawing this one and then watching the band live was deeply moving.", pt: "Um show pequeno no Sesc Belenzinho. Uma amiga estava produzindo e me chamou pra fazer o pôster. Música, e tudo que se faz pra ela, é uma das coisas que eu mais amo: desenhar esse pôster e depois ver a banda ao vivo foi muito emocionante.", es: "Un concierto chico en el Sesc Belenzinho. Una amiga lo estaba produciendo y me llamó para hacer el póster. La música, y todo lo que se hace para ella, es de lo que más amo: dibujar este póster y después ver a la banda en vivo fue muy emocionante." } },
        // The band's own handwritten logo (not Felipe's lettering: Oct 29 2026), as a transparent PNG over the page's slate
        { src: "images/explosions-in-the-sky/band-logo.png", ar: "2000/346", col: 1, span: 12 },
        // The three print photos as one row of equal height (Felipe, Oct 29 2026: "destaque" left a big void beside the text)
        { fullWidthIntro: true, chapter: { en: "03 · Screen print", pt: "03 · Serigrafia", es: "03 · Serigrafía" }, kicker: { en: "Limited and signed", pt: "Limitada e assinada", es: "Limitada y firmada" }, grid: "fluxo",
          head: { en: "A rare, *signed run.*", pt: "Uma tiragem *rara e assinada.*", es: "Un tiraje *raro y firmado.*" },
          text: { en: "Screen printed in a small limited series, signed by me and by the band. Very few copies were made.", pt: "Serigrafia numa série pequena e limitada, assinada por mim e pela banda. Saíram pouquíssimas cópias.", es: "Serigrafía en una serie chica y limitada, firmada por mí y por la banda. Salieron poquísimas copias." } },
        { src: "images/explosions-in-the-sky/print-01.jpg", ar: "2000/1500", col: 1, span: 4 },
        { src: "images/explosions-in-the-sky/print-03.jpg", ar: "1500/2000", col: 5, span: 4 },
        { src: "images/explosions-in-the-sky/print-02.jpg", ar: "2000/1500", col: 9, span: 4 },
        { chapter: { en: "04 · Out in the city", pt: "04 · Na cidade", es: "04 · En la ciudad" }, grid: "destaque",
          head: { en: "The city *on the street.*", pt: "A cidade *na rua.*", es: "La ciudad *en la calle.*" },
          text: { en: "The skyline taken off the paper: pasted on a São Paulo wall, on a tote bag and on a t-shirt.", pt: "A cidade saindo do papel: colada num muro de São Paulo, numa ecobag e numa camiseta.", es: "La ciudad saliendo del papel: pegada en un muro de São Paulo, en una tote bag y en una camiseta." } },
        { src: "images/explosions-in-the-sky/mockup-wall-paste.jpg", ar: "2000/1342", caption: { en: "Wheat-pasted", pt: "Lambe-lambe", es: "Pegado en muro" } },
        { src: "images/explosions-in-the-sky/mockup-tote-canvas.jpg", ar: "1856/2304", caption: { en: "Tote bag", pt: "Ecobag", es: "Tote bag" } },
        { src: "images/explosions-in-the-sky/mockup-tshirt.jpg", ar: "1856/2304", caption: { en: "T-shirt", pt: "Camiseta", es: "Camiseta" } },
        // The second night, photographed by edi fortini (Flickr efortini, all rights reserved; Felipe knows her and
        // is asking her personally, Oct 29 2026). Her signature stays on the photos; credit and link below the carousel.
        { grid: "trilho", chapter: { en: "05 · The night", pt: "05 · A noite", es: "05 · La noche" }, kicker: { en: "Thursday, 23.05.13", pt: "Quinta, 23.05.13", es: "Jueves, 23.05.13" },
          head: { en: "Two nights, *sold out.*", pt: "Duas noites, *esgotadas.*", es: "Dos noches, *agotadas.*" },
          text: { en: "Explosions in the Sky played Sesc Belenzinho on 22 and 23 May 2013, both nights sold out. The photos and the film are from the second night.", pt: "O Explosions in the Sky tocou no Sesc Belenzinho nos dias 22 e 23 de maio de 2013, com as duas noites esgotadas. As fotos e o vídeo são da segunda noite.", es: "Explosions in the Sky tocó en el Sesc Belenzinho el 22 y 23 de mayo de 2013, con las dos noches agotadas. Las fotos y el video son de la segunda noche." } },
        { roomsAuto: true, rooms: [
          { name: { en: "Live at Sesc Belenzinho", pt: "Ao vivo no Sesc Belenzinho", es: "En vivo en el Sesc Belenzinho" }, items: [
            { src: "images/explosions-in-the-sky/show/show-01.jpg", ar: "1600/1060", caption: { en: "Sesc Belenzinho, 23.05.13 · photo: edi fortini", pt: "Sesc Belenzinho, 23.05.13 · foto: edi fortini", es: "Sesc Belenzinho, 23.05.13 · foto: edi fortini" } },
            { src: "images/explosions-in-the-sky/show/show-02.jpg", ar: "698/1024", caption: { en: "Sesc Belenzinho, 23.05.13 · photo: edi fortini", pt: "Sesc Belenzinho, 23.05.13 · foto: edi fortini", es: "Sesc Belenzinho, 23.05.13 · foto: edi fortini" } },
            { src: "images/explosions-in-the-sky/show/show-03.jpg", ar: "1600/1060", caption: { en: "Sesc Belenzinho, 23.05.13 · photo: edi fortini", pt: "Sesc Belenzinho, 23.05.13 · foto: edi fortini", es: "Sesc Belenzinho, 23.05.13 · foto: edi fortini" } },
            { src: "images/explosions-in-the-sky/show/show-04.jpg", ar: "1600/1060", caption: { en: "Sesc Belenzinho, 23.05.13 · photo: edi fortini", pt: "Sesc Belenzinho, 23.05.13 · foto: edi fortini", es: "Sesc Belenzinho, 23.05.13 · foto: edi fortini" } },
            { src: "images/explosions-in-the-sky/show/show-05.jpg", ar: "1600/1060", caption: { en: "Sesc Belenzinho, 23.05.13 · photo: edi fortini", pt: "Sesc Belenzinho, 23.05.13 · foto: edi fortini", es: "Sesc Belenzinho, 23.05.13 · foto: edi fortini" } },
            { src: "images/explosions-in-the-sky/show/show-06.jpg", ar: "1600/1060", caption: { en: "Sesc Belenzinho, 23.05.13 · photo: edi fortini", pt: "Sesc Belenzinho, 23.05.13 · foto: edi fortini", es: "Sesc Belenzinho, 23.05.13 · foto: edi fortini" } },
            { src: "images/explosions-in-the-sky/show/show-07.jpg", ar: "1600/1060", caption: { en: "Sesc Belenzinho, 23.05.13 · photo: edi fortini", pt: "Sesc Belenzinho, 23.05.13 · foto: edi fortini", es: "Sesc Belenzinho, 23.05.13 · foto: edi fortini" } },
            { src: "images/explosions-in-the-sky/show/show-08.jpg", ar: "1600/1193", caption: { en: "Sesc Belenzinho, 23.05.13 · photo: edi fortini", pt: "Sesc Belenzinho, 23.05.13 · foto: edi fortini", es: "Sesc Belenzinho, 23.05.13 · foto: edi fortini" } },
            { src: "images/explosions-in-the-sky/show/show-09.jpg", ar: "1600/1060", caption: { en: "Sesc Belenzinho, 23.05.13 · photo: edi fortini", pt: "Sesc Belenzinho, 23.05.13 · foto: edi fortini", es: "Sesc Belenzinho, 23.05.13 · foto: edi fortini" } },
            { src: "images/explosions-in-the-sky/show/show-10.jpg", ar: "678/1023", caption: { en: "Sesc Belenzinho, 23.05.13 · photo: edi fortini", pt: "Sesc Belenzinho, 23.05.13 · foto: edi fortini", es: "Sesc Belenzinho, 23.05.13 · foto: edi fortini" } },
            { src: "images/explosions-in-the-sky/show/show-11.jpg", ar: "1600/1060", caption: { en: "Sesc Belenzinho, 23.05.13 · photo: edi fortini", pt: "Sesc Belenzinho, 23.05.13 · foto: edi fortini", es: "Sesc Belenzinho, 23.05.13 · foto: edi fortini" } },
            { src: "images/explosions-in-the-sky/show/show-12.jpg", ar: "1600/1060", caption: { en: "Sesc Belenzinho, 23.05.13 · photo: edi fortini", pt: "Sesc Belenzinho, 23.05.13 · foto: edi fortini", es: "Sesc Belenzinho, 23.05.13 · foto: edi fortini" } }
          ] },
        ], ar: "3/2", col: 1, span: 12 },
        // The same night on film: "First Breath After Coma", 23.05.2013 (YouTube, Hominis Canidae)
        { yt: "GNbmcK3z4J8", ar: "16/9", caption: { en: "“First Breath After Coma”, live at Sesc Belenzinho, 23.05.13 · video: Hominis Canidae / YouTube", pt: "“First Breath After Coma”, ao vivo no Sesc Belenzinho, 23.05.13 · vídeo: Hominis Canidae / YouTube", es: "“First Breath After Coma”, en vivo en el Sesc Belenzinho, 23.05.13 · video: Hominis Canidae / YouTube" } },
        { episodeLink: { url: "https://www.flickr.com/photos/efortini/", title: { en: "More by edi fortini", pt: "Mais fotos de edi fortini", es: "Más fotos de edi fortini" }, detail: { en: "Photos: edi fortini · Flickr", pt: "Fotos: edi fortini · Flickr", es: "Fotos: edi fortini · Flickr" } } },
        { chapter: { en: "06 · Listen", pt: "06 · Pra ouvir", es: "06 · Para escuchar" }, kicker: { en: "Instrumental · post-rock", pt: "Instrumental · post-rock", es: "Instrumental · post-rock" }, grid: "trilho",
          head: { en: "If you don't know them, *you should.*", pt: "Quem não conhece *devia conhecer.*", es: "Si no los conoces, *deberías.*" },
          text: { en: "Instrumental, long songs, post-rock, the real thing. Start with “Your Hand in Mine” and “First Breath After Coma”.", pt: "Instrumental, músicas longas, post-rock de verdade. Pra começar: “Your Hand in Mine” e “First Breath After Coma”.", es: "Instrumental, canciones largas, post-rock de verdad. Para empezar: “Your Hand in Mine” y “First Breath After Coma”." } },
        { spotify: "artist/1uQWmt1OhuHGRKmZ2ZcL6p", h: 452, caption: { en: "Explosions in the Sky on Spotify", pt: "Explosions in the Sky no Spotify", es: "Explosions in the Sky en Spotify" } },
        // The night itself: the Rolling Stone Brasil review (its photo is Rodrigo Lacal's, so it is linked, not copied) and the setlist
        { episodeLink: { url: "https://rollingstone.com.br/noticia/explosions-sky-propoe-viagens-sonoras-e-instrumentais-em-sao-paulo/", title: { en: "Read the review of the night", pt: "Ler a crítica da noite", es: "Leer la reseña de la noche" }, detail: { en: "Rolling Stone Brasil · 23 May 2013 · photo: Rodrigo Lacal", pt: "Rolling Stone Brasil · 23 de maio de 2013 · foto: Rodrigo Lacal", es: "Rolling Stone Brasil · 23 de mayo de 2013 · foto: Rodrigo Lacal" } } },
        { episodeLink: { url: "https://screamyell.com.br/site/2013/05/31/explosions-in-the-sky-em-sp-e-no-rio/", title: { en: "Another review of the night", pt: "Outra crítica da noite", es: "Otra reseña de la noche" }, detail: { en: "Scream & Yell · 31 May 2013 · Leonardo Vinhas", pt: "Scream & Yell · 31 de maio de 2013 · Leonardo Vinhas", es: "Scream & Yell · 31 de mayo de 2013 · Leonardo Vinhas" } } },
        { episodeLink: { url: "https://www.setlist.fm/setlist/explosions-in-the-sky/2013/sesc-belenzinho-sao-paulo-brazil-73d84299.html", title: { en: "See what they played", pt: "Ver o que eles tocaram", es: "Ver lo que tocaron" }, detail: { en: "Setlist · Sesc Belenzinho, 22 May 2013", pt: "Setlist · Sesc Belenzinho, 22 de maio de 2013", es: "Setlist · Sesc Belenzinho, 22 de mayo de 2013" } } },
      ],
    },
    // Ramón: year and concept supplied by Felipe. Preview only; credits pending.
    {
      "title": "Ramón Vasconcelos",
      "slug": "ramon-vasconcelos",
      "hidden": true,
      "draft": true,
      "type": "branding",
      "client": "Ramón Vasconcelos",
      "year": "2018",
      "role": "?",
      "scope": {
        "en": "Visual identity",
        "pt": "Identidade visual",
        "es": "Identidad visual"
      },
      "sector": {
        "en": "Photography · Toronto",
        "pt": "Fotografia · Toronto",
        "es": "Fotografía · Toronto"
      },
      "tags": {
        "en": [
          "Branding",
          "Photography",
          "Identity"
        ],
        "pt": [
          "Branding",
          "Fotografia",
          "Identidade"
        ],
        "es": [
          "Branding",
          "Fotografía",
          "Identidad"
        ]
      },
      "tools": [
        "*FLORA"
      ],
      "image": "images/ramon/identity-01_black.jpg",
      "layout": "ramon",
      "gallery": [],
      "summary": {
        "en": "A visual identity for Toronto-based photographer Ramón Vasconcelos. The idea starts in his name: the accent becomes the element above the camera, joining the shutter click to the lens. A black-and-white signature leaves the colour to his photographs.",
        "pt": "Uma identidade visual para Ramón Vasconcelos, fotógrafo que vive em Toronto. A ideia começa no nome: o acento vira o elemento sobre a câmera, unindo o clique à lente. Uma assinatura em preto e branco deixa a cor por conta das fotografias.",
        "es": "Una identidad visual para Ramón Vasconcelos, fotógrafo que vive en Toronto. La idea nace en el nombre: el acento se convierte en el elemento sobre la cámara, uniendo el clic con la lente. Una firma en blanco y negro deja el color a las fotografías."
      },
      "link": {
        "label": "ramonvasconcelos.com",
        "url": "https://ramonvasconcelos.com/"
      },
      "theme": {
        "bg": "#ffffff",
        "fg": "#000000",
        "mute": "#595959",
        "line": "#dddddd",
        "panel": "#ffffff",
        "accent": "#000000"
      }
    },
    // Carbono: draft, year confirmed by Felipe. Placement provisional until review.
    {
      "title": "Carbono",
      "slug": "carbono",
      "hidden": true,
      "draft": true,
      "type": "branding",
      "client": "Carbono",
      "year": "2025",
      "role": "?",
      "scope": {
        "en": "Rebrand // Social // Promotion",
        "pt": "Rebrand // Social // Promoção",
        "es": "Rebrand // Redes // Promoción"
      },
      "sector": {
        "en": "Furniture & design",
        "pt": "Mobiliário & design",
        "es": "Mobiliario y diseño"
      },
      "deliverables": {
        "en": "Visual system, social layouts and promotional identity",
        "pt": "Sistema visual, layouts para social e identidade promocional",
        "es": "Sistema visual, layouts para redes e identidad promocional"
      },
      "tags": {
        "en": [
          "Branding",
          "Rebrand",
          "Social",
          "Promo"
        ],
        "pt": [
          "Branding",
          "Rebrand",
          "Social",
          "Promoção"
        ],
        "es": [
          "Branding",
          "Rebrand",
          "Redes",
          "Promoción"
        ]
      },
      "image": "images/carbono/clean-01.jpg",
      "hero": "bleed",
      "heroAr": "16/9",
      "hue": [
        24,
        80,
        45
      ],
      "theme": {
        "bg": "#eeecdf",
        "fg": "#000000",
        "mute": "#59574d",
        "line": "#ccc9bc",
        "panel": "#eeecdf",
        "accent": "#d96415",
        "accentText": "#9b4407"
      },
      "summary": {
        "en": "A new breath for Carbono’s social and promotional communication. “Reoxigenar” connects the cut-corner Carbono Box, earthy colours, product photography and typography that opens up, repeats and breaks apart. The system extends to feeds, carousels and the “Quebra Tudo” promotion.",
        "pt": "Um novo respiro para a comunicação da Carbono em social e promoção. “Reoxigenar” conecta o Carbono Box, as cores terrosas, a fotografia de produto e uma tipografia que se abre, se repete e se desmonta. O sistema se desdobra em feeds, carrosséis e na promoção “Quebra Tudo”.",
        "es": "Un nuevo aire para la comunicación de Carbono en redes y promoción. “Reoxigenar” conecta el Carbono Box, los colores terrosos, la fotografía de producto y una tipografía que se abre, se repite y se desarma. El sistema se extiende a feeds, carruseles y la promoción “Quebra Tudo”."
      },
      "layout": "loose",
      "fold": 3,
      "grid": "fluxo",
      "gallery": [ // v2 (Nov 16 2026): Carbono on the site's standard case system; all 29 original boards in the flow
        {"chapter":{"en":"01 · Reoxigenar","pt":"01 · Reoxigenar","es":"01 · Reoxigenar"},"head":{"en":"Rescue. Revitalise. *Give new meaning.*","pt":"Resgatar. Revitalizar. *Ressignificar.*","es":"Rescatar. Revitalizar. *Resignificar.*"},"text":{"en":"“Reoxigenar” is the starting point: bring Carbono’s own character back into its communication. The window opens. Typography echoes. There is room for what comes next.","pt":"“Reoxigenar” é o ponto de partida: trazer a cara da Carbono de volta à comunicação. A janela se abre. A tipografia se repete. Tem espaço para o que vem a seguir.","es":"“Reoxigenar” es el punto de partida: devolver el carácter de Carbono a su comunicación. La ventana se abre. La tipografía se repite. Hay espacio para lo que viene."}},
        {"src":"images/carbono/clean-03.jpg","ar":"2000/1125","caption":{"en":"Reoxigenar · typographic rhythm","pt":"Reoxigenar · ritmo tipográfico","es":"Reoxigenar · ritmo tipográfico"},"col":1,"span":12},
        {"src":"images/carbono/clean-04.jpg","ar":"2000/1125","caption":{"en":"The concept: renewal and new energy","pt":"O conceito: renovação e novo ânimo","es":"El concepto: renovación y nueva energía"},"col":1,"span":6},
        {"src":"images/carbono/clean-05.jpg","ar":"2000/1125","caption":{"en":"Shall we open the window?","pt":"Vamos abrir a janela?","es":"¿Abrimos la ventana?"},"span":6},
        {"src":"images/carbono/clean-02.jpg","ar":"2000/1125","caption":{"en":"Carbono Box · negative mark","pt":"Carbono Box · marca negativa","es":"Carbono Box · marca negativa"},"col":1,"span":12},
        {"chapter":{"en":"02 · The system","pt":"02 · O sistema","es":"02 · El sistema"},"head":{"en":"One corner. *A whole system.*","pt":"Um canto. *Um sistema inteiro.*","es":"Una esquina. *Todo un sistema.*"},"text":{"en":"The cut corner of the Carbono Box becomes a frame, a colour field and an invitation. Earthy colours connect the graphics to the furniture. Try the palette.","pt":"O canto cortado do Carbono Box vira moldura, campo de cor e convite. Os tons terrosos aproximam o grafismo do mobiliário. Experimente a paleta.","es":"La esquina recortada del Carbono Box se convierte en marco, campo de color e invitación. Los tonos terrosos acercan los gráficos al mobiliario. Prueba la paleta."}},
        {"cbPalette":true},
        {"loop":{"frames":["images/carbono/clean-06.jpg","images/carbono/clean-07.jpg","images/carbono/clean-08.jpg"],"fps":1.5,"ar":"2000/1125"},"caption":{"en":"Motion study · the first window opens","pt":"Estudo de movimento · a primeira janela se abre","es":"Estudio de movimiento · se abre la primera ventana"},"col":1,"span":12},
        {"src":"images/carbono/clean-09.jpg","ar":"2000/1125","caption":{"en":"The frame meets typography","pt":"A moldura encontra a tipografia","es":"El marco encuentra la tipografía"},"col":1,"span":12},
        {"src":"images/carbono/clean-10.jpg","ar":"2000/1125","caption":{"en":"Colour studies","pt":"Estudos de cor","es":"Estudios de color"},"col":1,"span":4},
        {"src":"images/carbono/clean-11.jpg","ar":"2000/1125","caption":{"en":"Earthy colour palette","pt":"Paleta de tons terrosos","es":"Paleta de tonos terrosos"},"span":4},
        {"src":"images/carbono/clean-12.jpg","ar":"2000/1125","caption":{"en":"A palette drawn from the product","pt":"Uma paleta que vem do produto","es":"Una paleta que nace del producto"},"span":4},
        {"chapter":{"en":"03 · Social","pt":"03 · Social","es":"03 · Redes"},"head":{"en":"A grid with *room to breathe.*","pt":"Um grid com *espaço para respirar.*","es":"Una cuadrícula con *espacio para respirar.*"},"text":{"en":"Products, people and typography share the same language. Change the view to compare the original feed and the two visual directions.","pt":"Produtos, pessoas e tipografia passam a falar a mesma língua. Alterne a visualização para comparar o feed original e os dois caminhos visuais.","es":"Productos, personas y tipografía comparten un mismo lenguaje. Cambia la vista para comparar el feed original y las dos propuestas visuales."}},
        {"cbFeed":true},
        {"src":"images/carbono/clean-14.jpg","ar":"2000/1125","caption":{"en":"Instagram · communication direction","pt":"Instagram · direção da comunicação","es":"Instagram · dirección de comunicación"},"col":1,"span":12},
        {"src":"images/carbono/clean-15.jpg","ar":"2000/1125","caption":{"en":"Feed 01 · before and after","pt":"Feed 01 · antes e depois","es":"Feed 01 · antes y después"},"col":1,"span":6},
        {"src":"images/carbono/clean-21.jpg","ar":"2000/1125","caption":{"en":"Feed 02 · before and after","pt":"Feed 02 · antes e depois","es":"Feed 02 · antes y después"},"span":6},
        {"src":"images/carbono/clean-16.jpg","ar":"2000/1125","caption":{"en":"Feed 01 · paired posts","pt":"Feed 01 · posts casados","es":"Feed 01 · publicaciones conectadas"},"col":1,"span":6},
        {"src":"images/carbono/clean-22.jpg","ar":"2000/1125","caption":{"en":"Feed 02 · grid and paired posts","pt":"Feed 02 · grid e posts casados","es":"Feed 02 · cuadrícula y publicaciones conectadas"},"span":6},
        {"text":{"en":"One image. More than one post.","pt":"Uma imagem. Mais de um post.","es":"Una imagen. Más de una publicación."},"col":1,"span":12},
        {"src":"images/carbono/clean-23.jpg","ar":"2000/1125","caption":{"en":"Product and invitation across three posts. The furniture continues from one tile to the next. Graphic elements make the connection; the product keeps the leading role.","pt":"Produto e convite em três posts. O móvel continua de um quadro para o outro. Os elementos gráficos fazem a conexão; o produto segue como protagonista.","es":"Producto e invitación en tres publicaciones. El mueble continúa de un cuadro a otro. Los elementos gráficos crean la conexión; el producto sigue siendo protagonista."},"col":1,"span":12},
        {"chapter":{"en":"04 · Beyond the frame","pt":"04 · Além da moldura.","es":"04 · Más allá del marco."},"head":{"en":"Beyond *the frame.*","pt":"Além da *moldura.*","es":"Más allá *del marco.*"},"text":{"en":"The plus sign opens into corners. A new space appears. The carousel takes the product beyond the phone.","pt":"O sinal de mais se abre em cantos. Um novo espaço aparece. O carrossel leva o produto para além do celular.","es":"El signo de más se abre en esquinas. Aparece un nuevo espacio. El carrusel lleva el producto más allá del teléfono."},"grid":"cartaz"},
        {"loop":{"frames":["images/carbono/clean-18.jpg","images/carbono/clean-19.jpg"],"fps":1,"ar":"2000/1125"},"caption":{"en":"Plus sign · transition study","pt":"Sinal de mais · estudo de transição","es":"Signo de más · estudio de transición"},"col":1,"span":12},
        {"src":"images/carbono/carousel-clean.jpg","ar":"2000/1125","caption":{"en":"Carousel · original artwork","pt":"Carrossel · arte original","es":"Carrusel · arte original"},"col":1,"span":12},
        {"chapter":{"en":"05 · Quebra Tudo","pt":"05 · Quebra Tudo","es":"05 · Quebra Tudo"},"head":{"en":"Break the type. *Keep the identity.*","pt":"Desmontar a tipografia. *Manter a identidade.*","es":"Desarmar la tipografía. *Mantener la identidad.*"},"text":{"en":"“Quebra Tudo” turns the promotional line into a graphic identity. Letters, rules and the asterisk break apart and come together in posts, tags and the original reel.","pt":"“Quebra Tudo” transforma a chamada promocional em identidade gráfica. Letras, fios e asterisco se desmontam e se reorganizam em posts, tags e no reel original.","es":"“Quebra Tudo” convierte la frase promocional en identidad gráfica. Letras, líneas y asterisco se desarman y se reorganizan en publicaciones, etiquetas y el reel original."},"grid":"fluxo"},
        {"src":"images/carbono/clean-24.jpg","ar":"2000/1125","caption":{"en":"Quebra Tudo · campaign line","pt":"Quebra Tudo · chamada da campanha","es":"Quebra Tudo · frase de campaña"},"col":1,"span":12},
        {"device":"iphone","video":"images/carbono/qt-reel.mp4","webm":"images/carbono/qt-reel.webm","poster":"images/carbono/qt-reel-poster.jpg","ar":"720/1280","caption":{"en":"Original promotional reel","pt":"Reel promocional original","es":"Reel promocional original"},"col":1,"span":4},
        {"src":"images/carbono/clean-25.jpg","ar":"2000/1125","caption":{"en":"Promotional identity · main composition","pt":"Identidade promocional · composição principal","es":"Identidad promocional · composición principal"},"span":8},
        {"loop":{"frames":["images/carbono/clean-26.jpg","images/carbono/clean-27.jpg","images/carbono/clean-28.jpg"],"fps":1.5,"ar":"2000/1125"},"caption":{"en":"Type in motion · composition studies","pt":"Tipografia em movimento · estudos de composição","es":"Tipografía en movimiento · estudios de composición"},"col":1,"span":12},
        {"src":"images/carbono/clean-29.jpg","ar":"2000/1125","caption":{"en":"Logo variations and promotional tags","pt":"Variações de marca e tags promocionais","es":"Variaciones de marca y etiquetas promocionales"},"col":1,"span":12},
        {"src":"images/carbono/clean-17.jpg","ar":"2000/1125","caption":{"en":"Quebra Tudo · paired posts","pt":"Quebra Tudo · posts casados","es":"Quebra Tudo · publicaciones conectadas"},"col":1,"span":6},
        {"src":"images/carbono/clean-30.jpg","ar":"2000/1125","caption":{"en":"Post sequence · typographic states","pt":"Sequência de posts · estados da tipografia","es":"Secuencia de publicaciones · estados tipográficos"},"span":6},
        {"src":"images/carbono/clean-31.jpg","ar":"2000/1125","caption":{"en":"Quebra Tudo · reel storyboard","pt":"Quebra Tudo · storyboard do reel","es":"Quebra Tudo · storyboard del reel"},"col":1,"span":12},
      ]
    },
    // Logofolio stays the last project.
    {
      title: "Logofolio",
      tools: ["*AI"],
      track: { id: "6hHc7Pks7wtBIW8Z6A0iFq", name: "Blue Monday", by: "New Order" },
      scope: { en: "Logo design // Brand identity", pt: "Design de logotipo // Identidade de marca", es: "Diseño de logotipo // Identidad de marca" },
      summary: {
        en: "A wall of marks, from full identities to a single sign, in a new order on every visit. Open any of them to look closer.",
        pt: "Um mural de marcas, de identidades completas a um símbolo só, numa ordem diferente a cada visita. Abre qualquer uma pra ver de perto.", es: "Un mural de marcas, de identidades completas a un solo símbolo, en un orden distinto en cada visita. Abre cualquiera para verla de cerca.",
      },
      hue: [230, 90, 55],
      // The wall: one tile per logo, black on white; hover and the close-up flood in the site blue with the mark in white.
      // Each logo: { name (screen readers only), year, tag: { en, pt }, src: one-colour SVG or PNG on transparent (the site colours it),
      //   scale: optical size correction (1 = automatic; >1 for thin or detailed marks, <1 for heavy ones),
      //   color: optional full-colour file for the close-up, bg / ink: optional, to override the site blue and white, note: { en, pt } — the short description shown in the close-up }.
      // Sector filters appear when two or more tags are used.
      layout: "logos",
      logos: [
        { name: "REUD Co.", src: "images/logos/reud-co.png" },
        { name: "HOU", src: "images/logos/hou.png", scale: .82 },
        { name: "mokoko.", src: "images/logos/mokoko.png" },
        { name: "mr.", src: "images/logos/mr.png" },
        { name: "Descubra o Brasil", src: "images/logos/descubra-o-brasil.png" },
        { name: "ink", src: "images/logos/ink.png" },
        { name: "Join", src: "images/logos/join.png" },
        { name: "life's good", src: "images/logos/lifes-good.png" },
        { name: "Las Movidas de Puta Madre", src: "images/logos/las-movidas.png" },
        { name: "Space Lab", src: "images/logos/space-lab.png" },
        { name: "SavageBrit", src: "images/logos/savage-brit.png" },
        { name: "Thura", src: "images/logos/thura.png" },
        { name: "Soma", src: "images/logos/soma.png" },
        { name: "Supawvisor of the Month", src: "images/logos/supawvisor.png", on: "images/logos/supawvisor-on.png" },
        { name: "Garage Ira", src: "images/logos/garage-ira.png" },
        { name: "Logo", src: "images/logos/logo-p10.png" },
        { name: "Semana", src: "images/logos/semana.png" },
        { name: "Agro, a indústria-riqueza do Brasil", src: "images/logos/agro.png" },
        { name: "Globoplay", src: "images/logos/globoplay.png" },
        { name: "Meu Ibira", src: "images/logos/meu-ibira.png" },
        { name: "Tá na vida, tá na Globo", src: "images/logos/ta-na-vida.png" },
        { name: "menos 30", src: "images/logos/menos-30.png" },
        { name: "Hora Um da Notícia", src: "images/logos/hora-um.png" },
        { name: "Heritage Premium Olive Oil", src: "images/logos/heritage.png" },
        { name: "Bora Malhar", src: "images/logos/bora-malhar.png" },
        { name: "Domingo Maior", src: "images/logos/domingo-maior.png" },
        { name: "Wings", src: "images/logos/wings.png" },
        { name: "D", src: "images/logos/d-mark.png" },
        { name: "Veeludo", src: "images/logos/veeludo.png" },
        { name: "coore.hi", src: "images/logos/coore-hi.png" },
        { name: "JBS Sem Fronteiras", src: "images/logos/jbs-sem-fronteiras.png" },
        { name: "Autoesporte", src: "images/logos/autoesporte.png" },
        { name: "Educação", src: "images/logos/educacao.png" },
        { name: "NoCarbon", src: "images/logos/nocarbon.png" },
        { name: "Palavra Animada", src: "images/logos/palavra-animada.png" },
        { name: "Digital Marketing Academy by JBS", src: "images/logos/dma-new.svg" },
        { name: "hyclean from JBS", src: "images/logos/hyclean.png" },
        { name: "Camarote Lew’Lara", src: "images/logos/camarote-lewlara.png" },
        { name: "House Party Orloff, 3D", src: "images/logos/houseparty-3d.png" },
        { name: "Top Fifty Unforgettable", src: "images/logos/top-fifty.png" },
        { name: "Boogie Safari", src: "images/logos/boogie-safari.png", scale: .8 },
        { name: "Dirty Projectors", src: "images/logos/dirty-projectors.png", scale: .88 },
        { name: "Calatos Films", src: "images/logos/calatos-films.png" },
        { name: "Atelier Gkeimich", src: "images/logos/gk-atelier.png" },
        { name: "Boiler Filmes", src: "images/logos/boiler-filmes.png" },
        { name: "Supernova", src: "images/logos/supernova.png", scale: 1.1 },
        { name: "GinTeam", src: "images/logos/ginteam.png" },
        { name: "DISORD/AIR", src: "images/logos/disordair.png" },
        { name: "Cinema Especial", src: "images/logos/cinema-especial.png" },
        { name: "Heineken Two Door Cinema Club", src: "images/logos/heineken-two-door-cinema-club.svg" },
        { name: "Símbolo circular", src: "images/logos/symbol-circle-bar.svg" },
        { name: "Símbolo hexagonal com raio", src: "images/logos/lightning-hexagon.svg", scale: .9 },
        { name: "GBR", src: "images/logos/gbr.svg" },
        { name: "Gatorade crest", src: "images/logos/gatorade-crest.png" },
        { name: "Hackathon", src: "images/logos/hackathon.svg" },
        { name: "Swift Good 4 You", src: "images/logos/swift-good-4you.svg" },
        { name: "O Mundo dos Esquecidos", src: "images/logos/mundo-dos-esquecidos.png" },
        { name: "Today by Philips", src: "images/logos/today-philips.png" },
        { name: "Everything", src: "images/logos/everything-script.png" },
        { name: "Everything to run and grow your business", src: "images/logos/everything-stamp.png" },
      // Leo Mafra and the flat House Party Orloff removed, and the empty "Logo 38–50" placeholders dropped (Felipe, Oct 27 2026)
      ],
    },
  ],
};

// Hero flash frames (Felipe, Nov 16 2026): one to three per public project, 960 px, shuffled so neighbours differ
window.SITE.flash = ["images/flash/f01.jpg", "images/flash/f02.jpg", "images/flash/f03.jpg", "images/flash/f04.jpg", "images/flash/f05.jpg", "images/flash/f06.jpg", "images/flash/f07.jpg", "images/flash/f08.jpg", "images/flash/f09.jpg", "images/flash/f10.jpg", "images/flash/f11.jpg", "images/flash/f12.jpg", "images/flash/f13.jpg", "images/flash/f14.jpg", "images/flash/f15.jpg", "images/flash/f16.jpg", "images/flash/f17.jpg", "images/flash/f18.jpg", "images/flash/f19.jpg", "images/flash/f20.jpg", "images/flash/f21.jpg", "images/flash/f22.jpg", "images/flash/f23.jpg", "images/flash/f24.jpg", "images/flash/f25.jpg", "images/flash/f26.jpg", "images/flash/f27.jpg", "images/flash/f28.jpg", "images/flash/f29.jpg", "images/flash/f30.jpg", "images/flash/f31.jpg", "images/flash/f32.jpg", "images/flash/f33.jpg", "images/flash/f34.jpg", "images/flash/f35.jpg", "images/flash/f36.jpg", "images/flash/f37.jpg", "images/flash/f38.jpg", "images/flash/f39.jpg", "images/flash/f40.jpg"];

window.SITE.disorder = {
  "copy": {
    "symbol": {
      "en": "original symbol",
      "pt": "símbolo original",
      "es": "símbolo original"
    },
    "feed": {
      "en": "The feed",
      "pt": "O feed",
      "es": "El feed"
    },
    "headline": {
      "en": "Music.\nWith a point of view.",
      "pt": "Música.\nCom opinião.",
      "es": "Música.\nCon opinión."
    },
    "intro": {
      "en": "A place to share music, discover little oddities and tell the stories I find along the way.",
      "pt": "Um espaço para dividir músicas, descobrir doideirinhas e contar as histórias que encontro pelo caminho.",
      "es": "Un espacio para compartir música, descubrir rarezas y contar las historias que encuentro en el camino."
    },
    "explore": {
      "en": "Explore the archive",
      "pt": "Explora o arquivo",
      "es": "Explora el archivo"
    },
    "mockup": {
      "en": "Hand holding an iPhone with the interactive DISORD/AIR feed",
      "pt": "Mão segurando um iPhone com o feed interativo do DISORD/AIR",
      "es": "Mano sosteniendo un iPhone con el feed interactivo de DISORD/AIR"
    },
    "bio": {
      "en": "Music, culture & discoveries.",
      "pt": "Música, cultura e descobertas.",
      "es": "Música, cultura y descubrimientos."
    },
    "tap": {
      "en": "TAP A POST TO EXPLORE",
      "pt": "TOQUE NUM POST PARA EXPLORAR",
      "es": "TOCA UN POST PARA EXPLORAR"
    },
    "open": {
      "en": "Open post",
      "pt": "Abrir post",
      "es": "Abrir publicación"
    },
    "story": {
      "en": "The Daft Punk story",
      "pt": "A história do Daft Punk",
      "es": "La historia de Daft Punk"
    },
    "archive": {
      "en": "Music of the day",
      "pt": "Música do dia",
      "es": "Música del día"
    },
    "curated": {
      "en": "SELECTED POSTS / ORIGINAL ARTWORK",
      "pt": "POSTS SELECIONADOS / ARTES ORIGINAIS",
      "es": "POSTS SELECCIONADOS / ARTES ORIGINALES"
    },
    "filter": {
      "en": "Filter the archive",
      "pt": "Filtrar o arquivo",
      "es": "Filtrar el archivo"
    },
    "all": {
      "en": "All",
      "pt": "Todos",
      "es": "Todos"
    },
    "discoveries": {
      "en": "Discoveries",
      "pt": "Descobertas",
      "es": "Descubrimientos"
    },
    "voice": {
      "en": "A voice of its own",
      "pt": "Uma voz própria",
      "es": "Una voz propia"
    },
    "quote": {
      "en": "“It’s not only what we say, report or convey, but how we do it.”",
      "pt": "“Não é apenas o que dizemos, noticiamos ou veiculamos, e sim, como fazemos isso.”",
      "es": "“No es solo lo que decimos, contamos o comunicamos, sino cómo lo hacemos.”"
    },
    "source": {
      "en": "From the original project presentation",
      "pt": "Da apresentação original do projeto",
      "es": "De la presentación original del proyecto"
    },
    "viewer": {
      "en": "Post viewer",
      "pt": "Leitor de posts",
      "es": "Visor de publicaciones"
    },
    "close": {
      "en": "Close",
      "pt": "Fechar",
      "es": "Cerrar"
    },
    "prev": {
      "en": "Previous",
      "pt": "Anterior",
      "es": "Anterior"
    },
    "next": {
      "en": "Next",
      "pt": "Próximo",
      "es": "Siguiente"
    },
    "listen": {
      "en": "Find on Spotify",
      "pt": "Buscar no Spotify",
      "es": "Buscar en Spotify"
    },
    "pauseLoop": {
      "en": "Pause loop",
      "pt": "Pausar loop",
      "es": "Pausar loop"
    },
    "playLoop": {
      "en": "Play loop",
      "pt": "Reproduzir loop",
      "es": "Reproducir loop"
    },
    "sideB": {
      "en": "02 / SIDE B",
      "pt": "02 / LADO B",
      "es": "02 / LADO B"
    },
    "readStory": {
      "en": "Behind the helmets.",
      "pt": "Por trás dos capacetes.",
      "es": "Detrás de los cascos."
    },
    "deckIntro": {
      "en": "A bad review. A new name. Nine original pages and the review clipping that connects them. Move through the story, one sleeve at a time.",
      "pt": "Uma crítica ruim. Um novo nome. Nove páginas originais e o recorte da crítica que liga essa história. Passe por ela como quem escolhe o próximo disco.",
      "es": "Una mala crítica. Un nuevo nombre. Nueve páginas originales y el recorte de la reseña que conecta la historia. Recorre las piezas como quien elige el siguiente disco."
    },
    "mix": {
      "en": "Mix transitions",
      "pt": "Misturar transições",
      "es": "Mezclar transiciones"
    },
    "readText": {
      "en": "Read the text",
      "pt": "Ler o texto",
      "es": "Leer el texto"
    },
    "swipe": {
      "en": "ARROWS / SWIPE / CHOOSE A PAGE",
      "pt": "SETAS / ARRASTE / ESCOLHA UMA PÁGINA",
      "es": "FLECHAS / DESLIZA / ELIGE UNA PÁGINA"
    },
    "page": {
      "en": "Page",
      "pt": "Página",
      "es": "Página"
    },
    "fullArt": {
      "en": "Open artwork",
      "pt": "Abrir arte",
      "es": "Abrir arte"
    },
    "storyCta": {
      "en": "OPEN THE FULL STORY",
      "pt": "ABRIR A HISTÓRIA COMPLETA",
      "es": "ABRIR LA HISTORIA COMPLETA"
    },
    "storyInvite": {
      "en": "Take the story out of the phone.",
      "pt": "Tire a história de dentro do celular.",
      "es": "Saca la historia del teléfono."
    },
    "storyHelp": {
      "en": "Tap the Daft Punk cover on the phone, or open it here.",
      "pt": "Clica na capa do Daft Punk no celular ou abre por aqui.",
      "es": "Toca la portada de Daft Punk en el teléfono o ábrela aquí."
    },
    "returnNote": {
      "en": "On pause. Back soon, in a different format.",
      "pt": "Em pausa. Deve voltar em breve, em outro formato.",
      "es": "En pausa. Debería volver pronto, en otro formato."
    }
  },
  "posts": [
    {
      "src": "images/disorder/lola.jpg",
      "title": "Big Brown Eyes",
      "by": "Lola Young",
      "kind": "discovery"
    },
    {
      "src": "images/disorder/dexys.jpg",
      "title": "Come On Eileen",
      "by": "Dexys Midnight Runners",
      "kind": "discovery"
    },
    {
      "src": "images/disorder/dandy.jpg",
      "title": "The Last High",
      "by": "The Dandy Warhols",
      "kind": "discovery"
    },
    {
      "src": "images/disorder/edi-rock.jpg",
      "title": "Upperhand (Inferno Astral)",
      "by": "Edi Rock, Ian Thomassen",
      "kind": "brasil"
    },
    {
      "src": "images/disorder/soulwax.jpg",
      "title": "Let It Happen [Soulwax Remix]",
      "by": "Tame Impala & Soulwax",
      "kind": "discovery"
    },
    {
      "src": "images/disorder/vanusa.jpg",
      "title": "What To Do",
      "by": "Vanusa",
      "kind": "brasil"
    }
  ],
  "story": [
    {
      "src": "images/disorder/daft-punk/01.jpg",
      "title": "Uma crítica de merd*.",
      "label": "DAFT PUNK / 01",
      "text": "UMA CRÍTICA\u0003DE MERD*."
    },
    {
      "src": "images/disorder/daft-punk/02.jpg",
      "title": "Antes do Daft Punk",
      "label": "DAFT PUNK / 02",
      "text": "@disordair"
    },
    {
      "src": "images/disorder/daft-punk/03.jpg",
      "title": "Duophonic",
      "label": "DAFT PUNK / 03",
      "text": "@disordair"
    },
    {
      "src": "images/disorder/daft-punk/04.jpg",
      "title": "Shimmies in Super 8",
      "label": "DAFT PUNK / 04",
      "text": "@disordair"
    },
    {
      "src": "images/disorder/daft-punk/05.jpg",
      "title": "Uma crítica muda tudo",
      "label": "DAFT PUNK / 05",
      "text": "@disordair"
    },
    {
      "src": "images/disorder/daft-punk/original-review.png",
      "title": "O recorte original",
      "label": "DAFT PUNK / RECORTE ORIGINAL",
      "text": "The two Darlin’ tracks are a daft punky thrash called “Cindy So Loud” (that’s the title and the sole lyric), and a bizarre fuzz-guitar reading of The Beach Boys’",
      "clipping": true,
      "source": {
        "en": "Original review clipping · “a daft punky thrash”",
        "pt": "Recorte da crítica original · “a daft punky thrash”",
        "es": "Recorte de la crítica original · “a daft punky thrash”"
      }
    },
    {
      "src": "images/disorder/daft-punk/06.jpg",
      "title": "Nasce o duo",
      "label": "DAFT PUNK / 06",
      "text": "@disordair"
    },
    {
      "src": "images/disorder/daft-punk/07.jpg",
      "title": "The New Wave / Da Funk",
      "label": "DAFT PUNK / 07",
      "text": "@disordair"
    },
    {
      "src": "images/disorder/daft-punk/08.jpg",
      "title": "Daft Punk",
      "label": "DAFT PUNK / 08",
      "text": "Daft Punk se torna então \u0003um dos artistas de maior \u0003influência e sucesso da \u0003história da música eletrônica.\n\n@disordair"
    },
    {
      "src": "images/disorder/daft-punk/09.jpg",
      "title": "Créditos",
      "label": "DAFT PUNK / 09",
      "text": ""
    }
  ]
};

window.SITE.ramon = {
  "photos": [
    {
      "category": "PORTRAITS",
      "title": "RV Portraits retratos",
      "width": 1709,
      "height": 2560,
      "src": "images/ramon/photo-01.jpg",
      "alt": {
        "en": "Photograph by Ramón Vasconcelos",
        "pt": "Fotografia de Ramón Vasconcelos",
        "es": "Fotografía de Ramón Vasconcelos"
      }
    },
    {
      "category": "PORTRAITS",
      "title": "",
      "width": 1709,
      "height": 2560,
      "src": "images/ramon/photo-04.jpg",
      "alt": {
        "en": "Photograph by Ramón Vasconcelos",
        "pt": "Fotografia de Ramón Vasconcelos",
        "es": "Fotografía de Ramón Vasconcelos"
      }
    },
    {
      "category": "PORTRAITS",
      "title": "",
      "width": 1709,
      "height": 2560,
      "src": "images/ramon/photo-05.jpg",
      "alt": {
        "en": "Photograph by Ramón Vasconcelos",
        "pt": "Fotografia de Ramón Vasconcelos",
        "es": "Fotografía de Ramón Vasconcelos"
      }
    },
    {
      "category": "PORTRAITS",
      "title": "",
      "width": 1704,
      "height": 2560,
      "src": "images/ramon/photo-07.jpg",
      "alt": {
        "en": "Photograph by Ramón Vasconcelos",
        "pt": "Fotografia de Ramón Vasconcelos",
        "es": "Fotografía de Ramón Vasconcelos"
      }
    },
    {
      "category": "PORTRAITS",
      "title": "",
      "width": 1709,
      "height": 2560,
      "src": "images/ramon/photo-08.jpg",
      "alt": {
        "en": "Photograph by Ramón Vasconcelos",
        "pt": "Fotografia de Ramón Vasconcelos",
        "es": "Fotografía de Ramón Vasconcelos"
      }
    },
    {
      "category": "PORTRAITS",
      "title": "",
      "width": 1704,
      "height": 2560,
      "src": "images/ramon/photo-15.jpg",
      "alt": {
        "en": "Photograph by Ramón Vasconcelos",
        "pt": "Fotografia de Ramón Vasconcelos",
        "es": "Fotografía de Ramón Vasconcelos"
      }
    },
    {
      "category": "FOOD PHOTOGRAPHY",
      "title": "RV Food",
      "width": 1709,
      "height": 2560,
      "src": "images/ramon/photo-02.jpg",
      "alt": {
        "en": "Photograph by Ramón Vasconcelos",
        "pt": "Fotografia de Ramón Vasconcelos",
        "es": "Fotografía de Ramón Vasconcelos"
      }
    },
    {
      "category": "ARCHITECTURE/INTERIOR DESIGN",
      "title": "Architecture",
      "width": 717,
      "height": 1080,
      "src": "images/ramon/photo-03.jpg",
      "alt": {
        "en": "Photograph by Ramón Vasconcelos",
        "pt": "Fotografia de Ramón Vasconcelos",
        "es": "Fotografía de Ramón Vasconcelos"
      }
    },
    {
      "category": "PORTRAITS",
      "title": "",
      "width": 1709,
      "height": 2560,
      "src": "images/ramon/photo-09.jpg",
      "alt": {
        "en": "Photograph by Ramón Vasconcelos",
        "pt": "Fotografia de Ramón Vasconcelos",
        "es": "Fotografía de Ramón Vasconcelos"
      }
    }
  ],
  "boards": [
    {
      "src": "images/ramon/identity-01_black.jpg",
      "caption": "01 · black"
    },
    {
      "src": "images/ramon/identity-02_white.jpg",
      "caption": "02 · white"
    },
    {
      "src": "images/ramon/identity-03_black.jpg",
      "caption": "03 · black"
    },
    {
      "src": "images/ramon/identity-04_black.jpg",
      "caption": "04 · black"
    },
    {
      "src": "images/ramon/identity-04_white.jpg",
      "caption": "04 · white"
    },
    {
      "src": "images/ramon/identity-05.jpg",
      "caption": "05"
    },
    {
      "src": "images/ramon/identity-06.jpg",
      "caption": "06"
    },
    {
      "src": "images/ramon/identity-07.jpg",
      "caption": "07"
    },
    {
      "src": "images/ramon/identity-08.jpg",
      "caption": "08"
    },
    {
      "src": "images/ramon/identity-09.jpg",
      "caption": "09"
    },
    {
      "src": "images/ramon/identity-10.jpg",
      "caption": "10"
    }
  ],
  "assets": {
    "symbol": "images/ramon/symbol.png",
    "wordmark": "images/ramon/wordmark.png",
    "signature": "images/ramon/signature.png",
    "mockups": [
      "images/ramon/mockup-1.jpg",
      "images/ramon/mockup-2.jpg",
      "images/ramon/mockup-3.jpg"
    ],
    "gif": "images/ramon/photography-loop.gif"
  },
  "copy": {
    "boardsLabel": { "en": "Boards", "pt": "Pranchas", "es": "Láminas" },
    "boardsHint": { "en": "boards on view · select any image to enlarge", "pt": "pranchas abertas · clique em qualquer imagem para ampliar", "es": "láminas a la vista · selecciona una imagen para ampliarla" },
    "viewBoard": { "en": "Enlarge", "pt": "Ampliar", "es": "Ampliar" },
    "openHint": { "en": "Select a photo to enlarge", "pt": "Clica na foto pra ampliar", "es": "Selecciona una foto para ampliarla" },
    "photoInvite": { "en": "Select any photograph to see it up close, browse the sequence or visit Ramón’s portfolio.", "pt": "Clica em qualquer fotografia pra ver de perto, navegar pela sequência ou visitar o portfólio do Ramón.", "es": "Selecciona una fotografía para verla de cerca, recorrer la secuencia o visitar el portafolio de Ramón." },
    "visitShort": { "en": "Ramón’s website", "pt": "Site do Ramón", "es": "Sitio de Ramón" },
    "nav": {
      "en": "Explore the case",
      "pt": "Explora o case",
      "es": "Explora el proyecto"
    },
    "idea": {
      "en": "The idea",
      "pt": "A ideia",
      "es": "La idea"
    },
    "system": {
      "en": "The identity",
      "pt": "A identidade",
      "es": "La identidad"
    },
    "photography": {
      "en": "Photography",
      "pt": "Fotografia",
      "es": "Fotografía"
    },
    "applications": {
      "en": "Applications",
      "pt": "Aplicações",
      "es": "Aplicaciones"
    },
    "ideaHead": {
      "en": "The name becomes a camera.",
      "pt": "O nome vira câmera.",
      "es": "El nombre se convierte en cámara."
    },
    "ideaText": {
      "en": "Ramón’s accent becomes the element over the camera. Below it, the O becomes the lens. Name, shutter and photograph meet in one sign.",
      "pt": "O acento de Ramón vira o elemento sobre a câmera. Abaixo dele, o O se transforma em lente. Nome, clique e fotografia se encontram num só sinal.",
      "es": "El acento de Ramón se convierte en el elemento sobre la cámara. Debajo, la O se transforma en lente. Nombre, clic y fotografía se encuentran en un solo signo."
    },
    "accent": {
      "en": "Accent",
      "pt": "Acento",
      "es": "Acento"
    },
    "click": {
      "en": "Click",
      "pt": "Clica",
      "es": "Clic"
    },
    "lens": {
      "en": "Lens",
      "pt": "Lente",
      "es": "Lente"
    },
    "invert": {
      "en": "Switch black / white",
      "pt": "Alternar preto / branco",
      "es": "Alternar blanco / negro"
    },
    "systemHead": {
      "en": "Black. White. Ramón.",
      "pt": "Preto. Branco. Ramón.",
      "es": "Blanco. Negro. Ramón."
    },
    "systemText": {
      "en": "The circle and the accent work alone or with the name. Black and white give the identity a consistent presence, without competing with the photographs.",
      "pt": "O círculo e o acento funcionam sozinhos ou com o nome. O preto e o branco mantêm a identidade presente, sem disputar espaço com as fotografias.",
      "es": "El círculo y el acento funcionan solos o con el nombre. El blanco y negro mantienen la identidad presente, sin competir con las fotografías."
    },
    "wordmark": {
      "en": "Wordmark",
      "pt": "Logotipo",
      "es": "Logotipo"
    },
    "symbol": {
      "en": "Camera symbol",
      "pt": "Símbolo da câmera",
      "es": "Símbolo de la cámara"
    },
    "signature": {
      "en": "Full signature",
      "pt": "Assinatura completa",
      "es": "Firma completa"
    },
    "photoHead": {
      "en": "The photographs bring the colour.",
      "pt": "A cor vem das fotografias.",
      "es": "El color viene de las fotografías."
    },
    "photoText": {
      "en": "His portraits, food and architecture photographs bring the colour. A quick sequence puts the quiet signature beside the range of his work.",
      "pt": "Retratos, gastronomia e arquitetura trazem a cor. Uma sequência rápida coloca a assinatura discreta ao lado da variedade do trabalho dele.",
      "es": "Retratos, gastronomía y arquitectura aportan el color. Una secuencia rápida pone la firma discreta junto a la variedad de su trabajo."
    },
    "phone": {
      "en": "Mobile portfolio · layout study",
      "pt": "Portfólio mobile · estudo de layout",
      "es": "Portafolio móvil · estudio de layout"
    },
    "photoCredit": {
      "en": "Photographs: Ramón Vasconcelos · from his portfolio",
      "pt": "Fotografias: Ramón Vasconcelos · do seu portfólio",
      "es": "Fotografías: Ramón Vasconcelos · de su portafolio"
    },
    "sequence": {
      "en": "Colour in motion",
      "pt": "Cor em movimento",
      "es": "Color en movimiento"
    },
    "viewPhoto": {
      "en": "View photograph",
      "pt": "Ver fotografia",
      "es": "Ver fotografía"
    },
    "pause": {
      "en": "Pause sequence",
      "pt": "Pausar sequência",
      "es": "Pausar secuencia"
    },
    "play": {
      "en": "Play sequence",
      "pt": "Reproduzir sequência",
      "es": "Reproducir secuencia"
    },
    "gif": {
      "en": "Download the GIF",
      "pt": "Baixar o GIF",
      "es": "Descargar el GIF"
    },
    "visit": {
      "en": "Explore Ramón’s photography",
      "pt": "Explora a fotografia do Ramón",
      "es": "Explora la fotografía de Ramón"
    },
    "appHead": {
      "en": "The identity on paper.",
      "pt": "A identidade no papel.",
      "es": "La identidad en papel."
    },
    "appText": {
      "en": "The identity moves onto paper: business cards, envelopes, letterhead and a print folio. Three new material studies explore the contrast of white ink, black stock and textured paper.",
      "pt": "A identidade vai para o papel: cartões, envelopes, papel timbrado e pasta para fotografias. Três novos estudos de aplicação exploram o contraste da tinta branca, do papel preto e das texturas.",
      "es": "La identidad pasa al papel: tarjetas, sobres, papel membretado y una carpeta para fotografías. Tres nuevos estudios de aplicación exploran el contraste de la tinta blanca, el papel negro y las texturas."
    },
    "mockupNote": {
      "en": "New application studies · made with FLORA",
      "pt": "Novos estudos de aplicação · feitos com FLORA",
      "es": "Nuevos estudios de aplicación · creados con FLORA"
    },
    "paper": {
      "en": "Stationery set",
      "pt": "Conjunto de papelaria",
      "es": "Conjunto de papelería"
    },
    "cards": {
      "en": "Cards & envelope",
      "pt": "Cartões & envelope",
      "es": "Tarjetas y sobre"
    },
    "folio": {
      "en": "Photographic print folio",
      "pt": "Pasta para fotografias",
      "es": "Carpeta para fotografías"
    },
    "originals": {
      "en": "Original identity boards",
      "pt": "Pranchas originais da identidade",
      "es": "Láminas originales de la identidad"
    },
    "originalNote": {
      "en": "2018 source artwork · 2× upscaled in FLORA",
      "pt": "Artes originais de 2018 · ampliadas 2× no FLORA",
      "es": "Artes originales de 2018 · ampliadas 2× en FLORA"
    },
    "close": {
      "en": "Close",
      "pt": "Fechar",
      "es": "Cerrar"
    },
    "next": {
      "en": "Next",
      "pt": "Próxima",
      "es": "Siguiente"
    },
    "prev": {
      "en": "Previous",
      "pt": "Anterior",
      "es": "Anterior"
    }
  }
};

window.SITE.carbono = {
  "boards": [
    {
      "src": "images/carbono/clean-03.jpg",
      "ar": "16/9",
      "caption": {
        "en": "Reoxigenar · typographic rhythm",
        "pt": "Reoxigenar · ritmo tipográfico",
        "es": "Reoxigenar · ritmo tipográfico"
      }
    },
    {
      "src": "images/carbono/clean-04.jpg",
      "ar": "16/9",
      "caption": {
        "en": "The concept: renewal and new energy",
        "pt": "O conceito: renovação e novo ânimo",
        "es": "El concepto: renovación y nueva energía"
      }
    },
    {
      "src": "images/carbono/clean-05.jpg",
      "ar": "16/9",
      "caption": {
        "en": "Shall we open the window?",
        "pt": "Vamos abrir a janela?",
        "es": "¿Abrimos la ventana?"
      }
    },
    {
      "src": "images/carbono/clean-02.jpg",
      "ar": "16/9",
      "caption": {
        "en": "Carbono Box · negative mark",
        "pt": "Carbono Box · marca negativa",
        "es": "Carbono Box · marca negativa"
      }
    },
    {
      "src": "images/carbono/clean-06.jpg",
      "ar": "16/9",
      "caption": {
        "en": "Vertical opening",
        "pt": "Abertura vertical",
        "es": "Apertura vertical"
      }
    },
    {
      "src": "images/carbono/clean-07.jpg",
      "ar": "16/9",
      "caption": {
        "en": "Motion study · the first window opens",
        "pt": "Estudo de movimento · a primeira janela se abre",
        "es": "Estudio de movimiento · se abre la primera ventana"
      }
    },
    {
      "src": "images/carbono/clean-08.jpg",
      "ar": "16/9",
      "caption": {
        "en": "Horizontal opening",
        "pt": "Abertura horizontal",
        "es": "Apertura horizontal"
      }
    },
    {
      "src": "images/carbono/clean-09.jpg",
      "ar": "16/9",
      "caption": {
        "en": "The frame meets typography",
        "pt": "A moldura encontra a tipografia",
        "es": "El marco encuentra la tipografía"
      }
    },
    {
      "src": "images/carbono/clean-10.jpg",
      "ar": "16/9",
      "caption": {
        "en": "Colour studies",
        "pt": "Estudos de cor",
        "es": "Estudios de color"
      }
    },
    {
      "src": "images/carbono/clean-11.jpg",
      "ar": "16/9",
      "caption": {
        "en": "Earthy colour palette",
        "pt": "Paleta de tons terrosos",
        "es": "Paleta de tonos terrosos"
      }
    },
    {
      "src": "images/carbono/clean-12.jpg",
      "ar": "16/9",
      "caption": {
        "en": "A palette drawn from the product",
        "pt": "Uma paleta que vem do produto",
        "es": "Una paleta que nace del producto"
      }
    },
    {
      "src": "images/carbono/clean-14.jpg",
      "ar": "16/9",
      "caption": {
        "en": "Instagram · communication direction",
        "pt": "Instagram · direção da comunicação",
        "es": "Instagram · dirección de comunicación"
      }
    },
    {
      "src": "images/carbono/clean-15.jpg",
      "ar": "16/9",
      "caption": {
        "en": "Feed 01 · before and after",
        "pt": "Feed 01 · antes e depois",
        "es": "Feed 01 · antes y después"
      }
    },
    {
      "src": "images/carbono/clean-16.jpg",
      "ar": "16/9",
      "caption": {
        "en": "Feed 01 · paired posts",
        "pt": "Feed 01 · posts casados",
        "es": "Feed 01 · publicaciones conectadas"
      }
    },
    {
      "src": "images/carbono/clean-21.jpg",
      "ar": "16/9",
      "caption": {
        "en": "Feed 02 · before and after",
        "pt": "Feed 02 · antes e depois",
        "es": "Feed 02 · antes y después"
      }
    },
    {
      "src": "images/carbono/clean-22.jpg",
      "ar": "16/9",
      "caption": {
        "en": "Feed 02 · grid and paired posts",
        "pt": "Feed 02 · grid e posts casados",
        "es": "Feed 02 · cuadrícula y publicaciones conectadas"
      }
    },
    {
      "src": "images/carbono/clean-23.jpg",
      "ar": "16/9",
      "caption": {
        "en": "Product and invitation across three posts",
        "pt": "Produto e convite em três posts",
        "es": "Producto e invitación en tres publicaciones"
      }
    },
    {
      "src": "images/carbono/clean-18.jpg",
      "ar": "16/9",
      "caption": {
        "en": "Plus sign · transition study",
        "pt": "Sinal de mais · estudo de transição",
        "es": "Signo de más · estudio de transición"
      }
    },
    {
      "src": "images/carbono/clean-19.jpg",
      "ar": "16/9",
      "caption": {
        "en": "Opening a new space",
        "pt": "Abrindo um novo espaço",
        "es": "Abriendo un nuevo espacio"
      }
    },
    {
      "src": "images/carbono/carousel-clean.jpg",
      "ar": "16/9",
      "caption": {
        "en": "Carousel · original artwork",
        "pt": "Carrossel · arte original",
        "es": "Carrusel · arte original"
      }
    },
    {
      "src": "images/carbono/clean-24.jpg",
      "ar": "16/9",
      "caption": {
        "en": "Quebra Tudo · campaign line",
        "pt": "Quebra Tudo · chamada da campanha",
        "es": "Quebra Tudo · frase de campaña"
      }
    },
    {
      "src": "images/carbono/clean-25.jpg",
      "ar": "16/9",
      "caption": {
        "en": "Promotional identity · main composition",
        "pt": "Identidade promocional · composição principal",
        "es": "Identidad promocional · composición principal"
      }
    },
    {
      "src": "images/carbono/clean-29.jpg",
      "ar": "16/9",
      "caption": {
        "en": "Logo variations and promotional tags",
        "pt": "Variações de marca e tags promocionais",
        "es": "Variaciones de marca y etiquetas promocionales"
      }
    },
    {
      "src": "images/carbono/clean-26.jpg",
      "ar": "16/9",
      "caption": {
        "en": "Type in motion · composition studies",
        "pt": "Tipografia em movimento · estudos de composição",
        "es": "Tipografía en movimiento · estudios de composición"
      }
    },
    {
      "src": "images/carbono/clean-27.jpg",
      "ar": "16/9",
      "caption": {
        "en": "Type and product · layout variations",
        "pt": "Tipografia e produto · variações de layout",
        "es": "Tipografía y producto · variaciones de layout"
      }
    },
    {
      "src": "images/carbono/clean-28.jpg",
      "ar": "16/9",
      "caption": {
        "en": "Type, colour and product",
        "pt": "Tipografia, cor e produto",
        "es": "Tipografía, color y producto"
      }
    },
    {
      "src": "images/carbono/clean-17.jpg",
      "ar": "16/9",
      "caption": {
        "en": "Quebra Tudo · paired posts",
        "pt": "Quebra Tudo · posts casados",
        "es": "Quebra Tudo · publicaciones conectadas"
      }
    },
    {
      "src": "images/carbono/clean-30.jpg",
      "ar": "16/9",
      "caption": {
        "en": "Post sequence · typographic states",
        "pt": "Sequência de posts · estados da tipografia",
        "es": "Secuencia de publicaciones · estados tipográficos"
      }
    },
    {
      "src": "images/carbono/clean-31.jpg",
      "ar": "16/9",
      "caption": {
        "en": "Quebra Tudo · reel storyboard",
        "pt": "Quebra Tudo · storyboard do reel",
        "es": "Quebra Tudo · storyboard del reel"
      }
    }
  ],
  "assets": {
    "wordmark": "images/carbono/wordmark.svg",
    "symbol": "images/carbono/symbol.svg",
    "sofa": "images/carbono/sofa.png",
    "promo": "images/carbono/quebra-tudo.svg",
    "feeds": [
      "images/carbono/feed-before.jpg",
      "images/carbono/feed-after.jpg",
      "images/carbono/feed-02n.jpg"
    ],
    "carousel": "images/carbono/carousel-clean.jpg",
    "reel": "images/carbono/qt-reel.mp4",
    "webm": "images/carbono/qt-reel.webm",
    "poster": "images/carbono/qt-reel-poster.jpg"
  },
  "palette": [
    "#39452d",
    "#9d582a",
    "#ca9d50",
    "#b39a6d",
    "#e9d9bd",
    "#59432c",
    "#7b7150",
    "#a59a70",
    "#aaa491",
    "#d1c9bb"
  ],
  "copy": {
    "eyebrow": {
      "en": "Social & promotion / 2025",
      "pt": "Social & promoção / 2025",
      "es": "Redes y promoción / 2025"
    },
    "hero": {
      "en": "Shall we\nopen the\nwindow?",
      "pt": "Vamos\nabrir a\njanela?",
      "es": "¿Abrimos\nla\nventana?"
    },
    "heroNote": {
      "en": "A new breath for Carbono.",
      "pt": "Um novo respiro para a Carbono.",
      "es": "Un nuevo aire para Carbono."
    },
    "idea": {
      "en": "Reoxigenar",
      "pt": "Reoxigenar",
      "es": "Reoxigenar"
    },
    "system": {
      "en": "The system",
      "pt": "O sistema",
      "es": "El sistema"
    },
    "social": {
      "en": "Social",
      "pt": "Social",
      "es": "Redes"
    },
    "promo": {
      "en": "Quebra Tudo",
      "pt": "Quebra Tudo",
      "es": "Quebra Tudo"
    },
    "nav": {
      "en": "Explore Carbono",
      "pt": "Explora a Carbono",
      "es": "Explora Carbono"
    },
    "ideaHead": {
      "en": "Rescue. Revitalise.\nGive new meaning.",
      "pt": "Resgatar. Revitalizar.\nRessignificar.",
      "es": "Rescatar. Revitalizar.\nResignificar."
    },
    "ideaText": {
      "en": "“Reoxigenar” is the starting point: bring Carbono’s own character back into its communication. The window opens. Typography echoes. There is room for what comes next.",
      "pt": "“Reoxigenar” é o ponto de partida: trazer a cara da Carbono de volta à comunicação. A janela se abre. A tipografia se repete. Tem espaço para o que vem a seguir.",
      "es": "“Reoxigenar” es el punto de partida: devolver el carácter de Carbono a su comunicación. La ventana se abre. La tipografía se repite. Hay espacio para lo que viene."
    },
    "systemHead": {
      "en": "One corner.\nA whole system.",
      "pt": "Um canto.\nUm sistema inteiro.",
      "es": "Una esquina.\nTodo un sistema."
    },
    "systemText": {
      "en": "The cut corner of the Carbono Box becomes a frame, a colour field and an invitation. Earthy colours connect the graphics to the furniture. Try the palette.",
      "pt": "O canto cortado do Carbono Box vira moldura, campo de cor e convite. Os tons terrosos aproximam o grafismo do mobiliário. Experimente a paleta.",
      "es": "La esquina recortada del Carbono Box se convierte en marco, campo de color e invitación. Los tonos terrosos acercan los gráficos al mobiliario. Prueba la paleta."
    },
    "palette": {
      "en": "Change the background colour",
      "pt": "Mudar a cor de fundo",
      "es": "Cambiar el color de fondo"
    },
    "paletteStudy": {
      "en": "Colour study · original product image",
      "pt": "Estudo de cor · imagem original do produto",
      "es": "Estudio de color · imagen original del producto"
    },
    "socialHead": {
      "en": "A grid with\nroom to breathe.",
      "pt": "Um grid com\nespaço para respirar.",
      "es": "Una cuadrícula con\nespacio para respirar."
    },
    "socialText": {
      "en": "Products, people and typography share the same language. Change the view to compare the original feed and the two visual directions.",
      "pt": "Produtos, pessoas e tipografia passam a falar a mesma língua. Alterne a visualização para comparar o feed original e os dois caminhos visuais.",
      "es": "Productos, personas y tipografía comparten un mismo lenguaje. Cambia la vista para comparar el feed original y las dos propuestas visuales."
    },
    "before": {
      "en": "Before",
      "pt": "Antes",
      "es": "Antes"
    },
    "after1": {
      "en": "After / 01",
      "pt": "Depois / 01",
      "es": "Después / 01"
    },
    "after2": {
      "en": "After / 02",
      "pt": "Depois / 02",
      "es": "Después / 02"
    },
    "connected": {
      "en": "One image.\nMore than one post.",
      "pt": "Uma imagem.\nMais de um post.",
      "es": "Una imagen.\nMás de una publicación."
    },
    "connectedText": {
      "en": "The furniture continues from one tile to the next. Graphic elements make the connection; the product keeps the leading role.",
      "pt": "O móvel continua de um quadro para o outro. Os elementos gráficos fazem a conexão; o produto segue como protagonista.",
      "es": "El mueble continúa de un cuadro a otro. Los elementos gráficos crean la conexión; el producto sigue siendo protagonista."
    },
    "carouselHead": {
      "en": "Beyond\nthe frame.",
      "pt": "Além da\nmoldura.",
      "es": "Más allá\ndel marco."
    },
    "carouselText": {
      "en": "The plus sign opens into corners. A new space appears. The carousel takes the product beyond the phone.",
      "pt": "O sinal de mais se abre em cantos. Um novo espaço aparece. O carrossel leva o produto para além do celular.",
      "es": "El signo de más se abre en esquinas. Aparece un nuevo espacio. El carrusel lleva el producto más allá del teléfono."
    },
    "carousel": {
      "en": "Carousel · original artwork",
      "pt": "Carrossel · arte original",
      "es": "Carrusel · arte original"
    },
    "promoHead": {
      "en": "Break the type.\nKeep the identity.",
      "pt": "Desmontar a tipografia.\nManter a identidade.",
      "es": "Desarmar la tipografía.\nMantener la identidad."
    },
    "promoText": {
      "en": "“Quebra Tudo” turns the promotional line into a graphic identity. Letters, rules and the asterisk break apart and come together in posts, tags and the original reel.",
      "pt": "“Quebra Tudo” transforma a chamada promocional em identidade gráfica. Letras, fios e asterisco se desmontam e se reorganizam em posts, tags e no reel original.",
      "es": "“Quebra Tudo” convierte la frase promocional en identidad gráfica. Letras, líneas y asterisco se desarman y se reorganizan en publicaciones, etiquetas y el reel original."
    },
    "reel": {
      "en": "Original promotional reel",
      "pt": "Reel promocional original",
      "es": "Reel promocional original"
    },
    "play": {
      "en": "Play",
      "pt": "Reproduzir",
      "es": "Reproducir"
    },
    "pause": {
      "en": "Pause",
      "pt": "Pausar",
      "es": "Pausar"
    },
    "sound": {
      "en": "Sound on",
      "pt": "Ativar som",
      "es": "Activar sonido"
    },
    "fullscreen": {
      "en": "Full screen",
      "pt": "Tela cheia",
      "es": "Pantalla completa"
    },
    "originals": {
      "en": "Explore the original boards",
      "pt": "Explora as pranchas originais",
      "es": "Explora las láminas originales"
    },
    "originalNote": {
      "en": "Concept, colour, feeds, transitions and promotion.",
      "pt": "Conceito, cor, feeds, transições e promoção.",
      "es": "Concepto, color, feeds, transiciones y promoción."
    },
    "view": {
      "en": "View artwork",
      "pt": "Ver peça",
      "es": "Ver pieza"
    },
    "close": {
      "en": "Close",
      "pt": "Fechar",
      "es": "Cerrar"
    },
    "prev": {
      "en": "Previous",
      "pt": "Anterior",
      "es": "Anterior"
    },
    "next": {
      "en": "Next",
      "pt": "Próxima",
      "es": "Siguiente"
    }
  }
};
