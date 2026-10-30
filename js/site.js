/*
 * Portfólio — comportamento da página.
 *
 * Tudo aqui é melhoria: sem JS a página continua inteira em português, com
 * a prévia de cada sistema embaixo da linha dele e o formulário postando
 * direto para o e-mail.
 */

const EMAIL = 'lucasalessandropro@gmail.com';
const WHATSAPP = '5562993589897';
const STORAGE_KEY = 'portfolio-lang';

/* O português vem do próprio HTML (lido no início); aqui só o inglês. */
const en = {
  'meta-title': 'Lucas Alessandro · Back-End Software Engineer',
  'meta-desc': 'Portfolio of Lucas Alessandro, back-end software engineer based in Goiânia, Brazil: PHP, Laravel, Node.js and software architecture on systems in Brazil and the US.',

  'skip': 'Skip to content',
  'nav-label': 'Sections',
  'index-label': 'Index',
  'lang-label': 'Language',
  'menu': 'Menu',
  'nav-sobre': 'About',
  'nav-trabalho': 'Work',
  'nav-stack': 'Stack',
  'nav-trajetoria': 'Career',
  'nav-contato': 'Contact',

  'hero-sub': 'Back-end software engineer. I build and evolve systems in PHP, Laravel and Node.js, running in production in Brazil and the US.',
  'hero-cta': 'Get in touch',
  'hero-status': 'Open to new opportunities',
  'hero-place': 'Goiânia, Brazil · remote',

  'sobre-title': 'Software engineering with an architecture mindset.',
  'photo-alt': 'Portrait of Lucas Alessandro',
  'sobre-b1-t': 'What I do',
  'sobre-b1': '4+ years with PHP and Laravel on scalable systems for Brazilian and US companies. My specialty is maintaining and evolving complex systems: integrations, bug fixing and performance optimization.',
  'sobre-b2-t': 'Right now',
  'sobre-b2': 'Mid-Level Back-End Developer at Ileva and postgraduate student in Software Architecture at FIAP, focused on distributed systems, Clean Architecture and domain-driven solutions.',
  'stat-1': 'years of experience',
  'stat-2': 'companies',
  'stat-3': 'countries (BR / US)',
  'sobre-cta': 'See the work',

  'trabalho-title': 'Systems I’ve worked on',
  'trabalho-sub': 'A selection of systems and products I’ve built and evolved.',
  'newtab': '(opens in a new tab)',
  'w1-meta': 'USA · 2024 — 2025',
  'w1-kind': 'Apple device management and security',
  'w1-desc': 'Apple device management and security platform (MDM + Endpoint Security) for K-12 schools, businesses and MSPs, serving 47,000+ organizations. Back-end PHP work: new features, bug fixes and performance improvements in an international environment.',
  'w2-meta': 'Brazil · 2023–24 · 2025–now',
  'w2-kind': 'Management for vehicle protection associations',
  'w2-desc': 'Management platform for vehicle protection associations: commercial module (lead capture, proposals, inspections and digital signing), event management (claims, workshops) and member management. Worked on its evolution, integrations and new features.',
  'w3-meta': 'Brazil · 2022 — 2023',
  'w3-kind': 'SIG: integrated management and billing',
  'w3-desc': 'Net Supre’s Integrated Management System: a suite with billing modules for Sicoob cooperatives, real estate management, unions and associations, and communication. Worked on development, maintenance and integration across the modules.',
  'w4-name': 'Open source',
  'w4-meta': 'GitHub · ongoing',
  'w4-kind': 'Clean Architecture, DDD and automation',
  'w4-desc': 'Personal and study projects on GitHub exploring Clean Architecture, DDD, automation and new tech from the PHP/Node ecosystem.',

  'method-title': 'How I work',
  'method-text': 'Much of my work is taking systems that already exist (scattered rules, old integrations, heavy real-world use) and organizing them step by step, with everything still in production.',
  'm1-t': 'Understand',
  'm1': 'Read the code and the business rules as they are today: the legacy, the integrations and the bugs that hurt most.',
  'm2-t': 'Organize',
  'm2': 'Separate domain from infrastructure with Clean Architecture and DDD, in small steps.',
  'm3-t': 'Evolve',
  'm3': 'Ship features, integrations and performance gains on a foundation that can keep growing.',

  'stack-title': 'What I use',
  'stack-sub': 'The everyday tools I use to ship systems and keep them running.',
  't1-fact': 'The core of every company I’ve worked at since 2022.',
  't2-fact': 'Main framework in the SaaS systems I’ve maintained.',
  't3-fact': 'JavaScript on the back end, alongside PHP.',
  't4-fact': 'Modeling, queries and performance.',
  't5-fact': 'Angular 14 when the job calls for front-end work.',
  'toolbox-title': 'Also in the toolbox',
  'tb-rest': 'REST APIs',
  'tb-dist': 'Distributed systems',
  'tb-int': 'Integrations',

  'exp-title': 'Experience',
  'exp-count': '5 roles',
  'exp-1-role': 'Mid-Level Back-End Developer',
  'exp-1-date': 'Oct 2025 — now',
  'exp-1-desc': 'Evolving back-end systems with a focus on architectural organization, legacy maintenance and new features. Bug fixes, optimizations and integrations, taking part in technical decisions on scalability, quality and maintainability.',
  'exp-2-date': 'Feb 2024 — Nov 2025',
  'exp-2-org': 'Mosyle · Winter Park, Florida, USA',
  'exp-2-desc': 'Development and maintenance of back-end PHP applications for corporate systems in an international setting. New features, bug fixes and performance improvements, using technical English every day.',
  'exp-3-date': 'Aug 2023 — Mar 2024',
  'exp-3-desc': 'New features and maintenance of existing systems, with integrations, testing and continuous quality improvement, collaborating across teams.',
  'exp-4-date': 'Aug 2022 — Jul 2023',
  'exp-4-desc': 'Billing and management systems for Sicoob financial cooperatives, plus CRMs for real estate agencies, unions and associations. Built and maintained corporate websites.',
  'exp-5-role': 'Technical Support',
  'exp-5-date': 'Feb 2022 — Aug 2022',
  'exp-5-desc': 'User support and help operating internal systems: my first contact with the technical environment, before moving into development.',
  'edu-title': 'Education',
  'edu-count': '2 programs',
  'edu-1-title': 'Postgraduate · Software Architecture',
  'edu-1-date': '2026 · in progress',
  'edu-1-desc': 'Specialization focused on distributed systems, scalable architecture and domain-driven solutions.',
  'edu-2-title': 'Bachelor · Systems Analysis',
  'edu-2-date': '2021 — 2024',
  'edu-2-desc': 'Bachelor of Technology (BTech) in Computer Systems Analysis. Completed in June 2024.',
  'cert-title': 'Certifications',
  'cert-count': '5 courses',

  'faq-title': 'Quick answers',
  'q1': 'Do you work remotely?',
  'a1': 'Yes. I’m based in Goiânia, Brazil, and open to remote positions, in Brazil or abroad.',
  'q2': 'How is your English?',
  'a2': 'I use technical English every day. At Mosyle, a company based in Winter Park, Florida, I spent almost two years working in an international environment.',
  'q3': 'What’s your main stack?',
  'a3': 'PHP 8 and Laravel on the back end, with Node.js, MySQL and REST APIs. When the job calls for it, I also work on the front end with Angular and TypeScript.',
  'q4': 'What kind of systems have you maintained?',
  'a4': 'Production SaaS: Apple device management for 47,000+ organizations, management for vehicle protection associations, billing for Sicoob cooperatives and CRMs for real estate agencies, unions and associations.',
  'q5': 'What time zone are you in?',
  'a5': 'Brasília time (UTC−3), with a good overlap with US Eastern time.',
  'q6': 'Are you open to new opportunities?',
  'a6': 'Yes. I’m currently a Mid-Level Back-End Developer at Ileva and open to a conversation. Email or WhatsApp is the fastest way to reach me.',

  'card-tab': 'New message',
  'contact-title': 'Let’s talk.',
  'contact-text': 'Interested in discussing opportunities, partnerships or just exchanging ideas on software architecture? Reach out on any of the channels below.',
  'ch-email': 'Email',
  'form-name': 'Name',
  'form-email': 'Email',
  'form-msg': 'Message',
  'send-email': 'Send by email',
  'send-wa': 'or send via WhatsApp',
  'form-note': 'Sending opens your email app or WhatsApp with the message ready.',

  'f-sections': 'Sections',
  'f-profiles': 'Profiles',
  'f-contact': 'Contact',
  'f-where': 'Where',
  'f-where-1': 'Goiânia, Goiás, Brazil',
  'f-where-2': 'Open to remote work',
  'footer-copy': '© 2026 Lucas Alessandro · Built with a Laravel mindset.',
  'f-top': 'Top',
};

const pt = {};
let current = 'pt';

const metaDesc = document.querySelector('meta[name="description"]');

/* Guarda o português que está no HTML, para poder voltar a ele. */
function harvest() {
  pt['meta-title'] = document.title;
  pt['meta-desc'] = metaDesc.content;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    pt[el.dataset.i18n] ??= el.textContent.trim();
  });
  document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
    pt[el.dataset.i18nAria] ??= el.getAttribute('aria-label');
  });
  document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
    pt[el.dataset.i18nAlt] ??= el.alt;
  });
}

function setLanguage(lang) {
  const dict = lang === 'en' ? en : pt;
  current = lang;
  const t = (key) => dict[key] ?? pt[key];

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const value = t(el.dataset.i18n);
    if (value != null) el.textContent = value;
  });
  document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
    el.setAttribute('aria-label', t(el.dataset.i18nAria));
  });
  document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
    el.alt = t(el.dataset.i18nAlt);
  });

  document.title = t('meta-title');
  metaDesc.content = t('meta-desc');
  document.documentElement.lang = lang === 'en' ? 'en' : 'pt-BR';

  document.querySelectorAll('[data-lang]').forEach((btn) => {
    btn.setAttribute('aria-pressed', String(btn.dataset.lang === lang));
  });

  try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
}

function initialLanguage() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'pt' || saved === 'en') return saved;
  } catch (e) {}
  const langs = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || 'pt'];
  const first = langs.find((l) => /^(pt|en)/i.test(l));
  return first && /^pt/i.test(first) ? 'pt' : 'en';
}

/* ── Índice com prévia ──────────────────────────────────────────────────── */

function setupIndex() {
  const work = document.querySelector('[data-index]');
  if (!work) return;

  const list = work.querySelector('[data-list]');
  const rows = [...work.querySelectorAll('[data-row]')];
  const frame = work.querySelector('[data-frame]');

  /* O quadro recebe uma cópia do conteúdo de cada linha, numa pasta de cor própria. */
  const panels = rows.map((row, i) => {
    const panel = document.createElement('div');
    panel.className = `frame__panel folder ${row.dataset.tone}`;
    panel.style.setProperty('--x-d', '0%');
    const tab = document.createElement('span');
    tab.className = 'folder__tab';
    tab.textContent = String(i + 1).padStart(2, '0');
    panel.append(tab, row.querySelector('[data-detail]').cloneNode(true));
    frame.append(panel);
    return panel;
  });

  const activate = (index) => {
    rows.forEach((row, i) => row.classList.toggle('is-active', i === index));
    panels.forEach((panel, i) => panel.classList.toggle('is-active', i === index));
  };

  const wide = window.matchMedia('(hover: hover) and (pointer: fine) and (min-width: 1024px)');
  const sync = () => work.classList.toggle('is-indexed', wide.matches);
  sync();
  wide.addEventListener('change', sync);

  rows.forEach((row, i) => {
    row.addEventListener('pointerenter', () => {
      activate(i);
      list.classList.add('is-pointing');
    });
    row.addEventListener('focusin', () => activate(i));
  });
  list.addEventListener('pointerleave', () => list.classList.remove('is-pointing'));

  activate(0);
}

/* ── Diagrama "muitos em um" ────────────────────────────────────────────────
   Pastinhas soltas à esquerda, espremidas numa fita no meio e arrumadas em
   linhas, no acento, à direita. Sorteio com semente fixa: o desenho é sempre
   o mesmo. */

function seeded(seed) {
  return () => {
    seed = (seed * 1664525 + 1013904223) % 4294967296;
    return seed / 4294967296;
  };
}

function buildDiagram(svg) {
  const vertical = svg.dataset.diagram === 'v';
  const NS = 'http://www.w3.org/2000/svg';
  const rand = seeded(vertical ? 11 : 7);
  const pale = ['#4c4166', '#665a85'];
  const accent = '#b69cff';
  const size = vertical ? 16 : 13;
  const items = [];

  const scatter = (count, x0, x1, y0, y1, gap) => {
    const placed = [];
    for (let n = 0; n < count; n++) {
      let p;
      for (let tries = 0; tries < 40; tries++) {
        p = { x: x0 + rand() * (x1 - x0), y: y0 + rand() * (y1 - y0) };
        if (placed.every((q) => Math.hypot(q.x - p.x, q.y - p.y) > gap)) break;
      }
      placed.push(p);
      items.push({ ...p, fill: pale[Math.floor(rand() * 2)] });
    }
  };

  const grid = (cols, rows, x0, y0, dx, dy, tone) => {
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        items.push({ x: x0 + c * dx, y: y0 + r * dy, fill: tone(c, r, cols, rows) });
      }
    }
  };

  const blend = (c, r, cols, rows) => (rand() < (vertical ? r / rows : c / cols) ? accent : pale[(c + r) % 2]);

  if (vertical) {
    scatter(30, 8, 276, 8, 220, 34);
    grid(3, 12, 122, 282, 20, 16, blend);
    grid(5, 6, 30, 528, 56, 40, () => accent);
  } else {
    scatter(48, 4, 268, 6, 180, 22);
    grid(16, 3, 338, 82, 14.5, 13, blend);
    grid(8, 6, 630, 18, 35, 32, () => accent);
  }

  const frag = document.createDocumentFragment();
  for (const item of items) {
    const use = document.createElementNS(NS, 'use');
    use.setAttribute('href', '#mf');
    use.setAttribute('x', item.x.toFixed(1));
    use.setAttribute('y', item.y.toFixed(1));
    use.setAttribute('width', size);
    use.setAttribute('height', (size * 10) / 12);
    use.setAttribute('fill', item.fill);
    frag.append(use);
  }
  svg.append(frag);
}

/* ── Menu do celular ────────────────────────────────────────────────────── */

function setupMenu() {
  const toggle = document.querySelector('[data-menu-toggle]');
  const menu = document.getElementById('menu');
  if (!toggle || !menu) return;

  const set = (open) => {
    menu.hidden = !open;
    toggle.setAttribute('aria-expanded', String(open));
  };

  toggle.addEventListener('click', () => set(menu.hidden));
  menu.addEventListener('click', (e) => {
    if (e.target.closest('a')) set(false);
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !menu.hidden) {
      set(false);
      toggle.focus();
    }
  });
}

/* ── Formulário: monta a mensagem para o e-mail ou para o WhatsApp ──────── */

function setupContact() {
  const form = document.querySelector('[data-contact]');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const field = (name) => form.elements.namedItem(name).value.trim();
    const name = field('nome');
    const email = field('email');
    const message = field('mensagem');

    if (e.submitter && e.submitter.value === 'whatsapp') {
      const intro = current === 'en' ? '*Message from the portfolio*' : '*Contato pelo portfólio*';
      const text = `${intro}\n${name} <${email}>\n\n${message}`;
      window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
      return;
    }

    const subject = current === 'en' ? `[Portfolio] Message from ${name}` : `[Portfólio] Contato de ${name}`;
    const body = `${message}\n\n---\n${name} <${email}>`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}

/* ── Entradas por rolagem e barra do topo ───────────────────────────────── */

function setupReveal() {
  const targets = document.querySelectorAll('[data-reveal], [data-shutter]');
  if (!('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('is-in'));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-in');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
  targets.forEach((el) => observer.observe(el));
}

function setupTopbar() {
  const bar = document.querySelector('[data-topbar]');
  if (!bar) return;
  const update = () => bar.classList.toggle('is-scrolled', window.scrollY > 8);
  update();
  window.addEventListener('scroll', update, { passive: true });
}

/* ── Início ─────────────────────────────────────────────────────────────── */

setupIndex();
harvest();
setLanguage(initialLanguage());
document.querySelectorAll('[data-lang]').forEach((btn) => {
  btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
});
document.querySelectorAll('[data-diagram]').forEach(buildDiagram);
setupMenu();
setupContact();
setupReveal();
setupTopbar();
