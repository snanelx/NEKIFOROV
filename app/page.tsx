import { ContactForm } from "@/components/contact-form";

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "JavaScript",
  "HTML5",
  "CSS3 / SCSS",
  "Responsive UI",
  "SEO",
  "Git / GitHub",
  "REST API"
];

const experience = [
  {
    period: "2024 - РЅР°СЃС‚РѕСЏС‰РµРµ РІСЂРµРјСЏ",
    title: "Frontend Developer",
    description:
      "РЎРѕР·РґР°СЋ РёРЅС‚РµСЂС„РµР№СЃС‹, РєРѕС‚РѕСЂС‹Рµ РІС‹РіР»СЏРґСЏС‚ СѓРІРµСЂРµРЅРЅРѕ, Р±С‹СЃС‚СЂРѕ Р·Р°РіСЂСѓР¶Р°СЋС‚СЃСЏ Рё РЅРµ С‚РµСЂСЏСЋС‚СЃСЏ РЅР° РјРѕР±РёР»СЊРЅС‹С… СѓСЃС‚СЂРѕР№СЃС‚РІР°С…."
  },
  {
    period: "2023 - 2024",
    title: "РЈС‡РµР±РЅС‹Рµ Рё РєРѕРјРјРµСЂС‡РµСЃРєРёРµ pet-РїСЂРѕРµРєС‚С‹",
    description:
      "РџСЂРѕСЂР°Р±Р°С‚С‹РІР°Р» Р°СЂС…РёС‚РµРєС‚СѓСЂСѓ РєР»РёРµРЅС‚СЃРєРёС… РїСЂРёР»РѕР¶РµРЅРёР№, РїРѕРґРєР»СЋС‡Р°Р» API, РЅР°СЃС‚СЂР°РёРІР°Р» РґРµРїР»РѕР№ Рё СѓР»СѓС‡С€Р°Р» UX."
  }
];

const projects = [
  {
    title: "StudyFlow",
    stack: "Next.js, TypeScript, CSS Modules",
    description:
      "РџР»Р°С‚С„РѕСЂРјР° РґР»СЏ РїР»Р°РЅРёСЂРѕРІР°РЅРёСЏ СѓС‡РµР±РЅРѕР№ РЅР°РіСЂСѓР·РєРё СЃ Р°РґР°РїС‚РёРІРЅС‹Рј РёРЅС‚РµСЂС„РµР№СЃРѕРј, С„РёР»СЊС‚СЂР°РјРё Рё РїРµСЂСЃРѕРЅР°Р»СЊРЅС‹РјРё СЃС†РµРЅР°СЂРёСЏРјРё.",
    demo: "https://example.com/studyflow",
    code: "https://github.com/snanelx/studyflow"
  },
  {
    title: "Cinema Scope",
    stack: "React, REST API, Chart UI",
    description:
      "РЎРµСЂРІРёСЃ РґР»СЏ РІРёР·СѓР°Р»РёР·Р°С†РёРё СЂРµР№С‚РёРЅРіРѕРІ Рё РїРѕРґР±РѕСЂРѕРє С„РёР»СЊРјРѕРІ СЃ СѓРїРѕСЂРѕРј РЅР° Р±С‹СЃС‚СЂС‹Р№ РїРѕРёСЃРє Рё С‡РёСЃС‚СѓСЋ РёРЅС„РѕСЂРјР°С†РёРѕРЅРЅСѓСЋ Р°СЂС…РёС‚РµРєС‚СѓСЂСѓ.",
    demo: "https://example.com/cinema-scope",
    code: "https://github.com/snanelx/cinema-scope"
  },
  {
    title: "Sound Atlas",
    stack: "Next.js, Static Export, SEO",
    description:
      "Р›РµРЅРґРёРЅРі-РїРѕСЂС‚Р°Р» РґР»СЏ РјСѓР·С‹РєР°Р»СЊРЅРѕРіРѕ РїСЂРѕРµРєС‚Р° СЃ РѕРїС‚РёРјРёР·РёСЂРѕРІР°РЅРЅРѕР№ Р·Р°РіСЂСѓР·РєРѕР№, СЃРµРјР°РЅС‚РёС‡РµСЃРєРѕР№ СЂР°Р·РјРµС‚РєРѕР№ Рё РєРѕРЅС‚РµРЅС‚РЅС‹РјРё Р±Р»РѕРєР°РјРё.",
    demo: "https://example.com/sound-atlas",
    code: "https://github.com/snanelx/sound-atlas"
  }
];

const contacts = [
  { label: "Email", value: "nekiforov.dev@example.com", href: "mailto:nekiforov.dev@example.com" },
  { label: "Telegram", value: "@nekiforov_dev", href: "https://t.me/nekiforov_dev" },
  { label: "GitHub", value: "github.com/snanelx", href: "https://github.com/snanelx" },
  { label: "VK", value: "vk.com/your-profile", href: "https://vk.com/your-profile" },
  { label: "MAX", value: "@nekiforov", href: "https://max.ru/" }
];

export default function HomePage() {
  return (
    <main className="page-shell">
      <div className="background-orbit background-orbit-left" />
      <div className="background-orbit background-orbit-right" />

      <header className="hero" id="home">
        <nav className="nav">
          <a className="brand" href="#home">
            N.
          </a>
          <div className="nav-links">
            <a href="#about">РћР±Рѕ РјРЅРµ</a>
            <a href="#projects">РџСЂРѕРµРєС‚С‹</a>
            <a href="#contacts">РљРѕРЅС‚Р°РєС‚С‹</a>
          </div>
        </nav>

        <section className="hero-panel">
          <div className="hero-copy">
            <span className="eyebrow">РџРѕСЂС‚С„РѕР»РёРѕ СЂР°Р·СЂР°Р±РѕС‚С‡РёРєР°</span>
            <h1>РЎРѕР·РґР°СЋ Р±С‹СЃС‚СЂС‹Рµ, РІС‹СЂР°Р·РёС‚РµР»СЊРЅС‹Рµ Рё РїРѕРЅСЏС‚РЅС‹Рµ РІРµР±-РёРЅС‚РµСЂС„РµР№СЃС‹.</h1>
            <p className="hero-text">
              Р­С‚Рѕ РїРµСЂСЃРѕРЅР°Р»СЊРЅР°СЏ РІРёР·РёС‚РЅР°СЏ РєР°СЂС‚РѕС‡РєР° СЃ Р°РєС†РµРЅС‚РѕРј РЅР° РїСЂРѕРґСѓРјР°РЅРЅС‹Р№
              РґРёР·Р°Р№РЅ, РёРЅР¶РµРЅРµСЂРЅСѓСЋ Р°РєРєСѓСЂР°С‚РЅРѕСЃС‚СЊ Рё СѓРґРѕР±РЅСѓСЋ РєРѕРјРјСѓРЅРёРєР°С†РёСЋ.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                РЎРјРѕС‚СЂРµС‚СЊ РїСЂРѕРµРєС‚С‹
              </a>
              <a className="button button-secondary" href="#contacts">
                РЎРІСЏР·Р°С‚СЊСЃСЏ
              </a>
            </div>
          </div>

          <aside className="hero-card" aria-label="РљСЂР°С‚РєР°СЏ СЃРІРѕРґРєР°">
            <p>Frontend / Next.js / UI Engineering</p>
            <dl className="summary-grid">
              <div>
                <dt>3+</dt>
                <dd>РєР»СЋС‡РµРІС‹С… РїСЂРѕРµРєС‚Р° РІ РїРѕСЂС‚С„РѕР»РёРѕ</dd>
              </div>
              <div>
                <dt>100%</dt>
                <dd>Р°РґР°РїС‚РёРІРЅР°СЏ РІС‘СЂСЃС‚РєР°</dd>
              </div>
              <div>
                <dt>SEO</dt>
                <dd>РјРµС‚Р°РґР°РЅРЅС‹Рµ Рё СЃРµРјР°РЅС‚РёРєР°</dd>
              </div>
              <div>
                <dt>GitHub</dt>
                <dd>РіРѕС‚РѕРІРЅРѕСЃС‚СЊ Рє РїСѓР±Р»РёРєР°С†РёРё</dd>
              </div>
            </dl>
          </aside>
        </section>
      </header>

      <section className="section two-column" id="about">
        <div>
          <span className="section-label">РћР±Рѕ РјРЅРµ</span>
          <h2>Р Р°Р·СЂР°Р±Р°С‚С‹РІР°СЋ РёРЅС‚РµСЂС„РµР№СЃС‹, РєРѕС‚РѕСЂС‹Рµ РїСЂРёСЏС‚РЅРѕ РїРѕРєР°Р·С‹РІР°С‚СЊ СЂР°Р±РѕС‚РѕРґР°С‚РµР»СЋ Рё РїРѕР»СЊР·РѕРІР°С‚РµР»СЋ.</h2>
        </div>
        <div className="section-copy">
          <p>
            РЎРїРµС†РёР°Р»РёР·РёСЂСѓСЋСЃСЊ РЅР° СЃРѕР·РґР°РЅРёРё СЃРѕРІСЂРµРјРµРЅРЅС‹С… РІРµР±-РїСЂРёР»РѕР¶РµРЅРёР№ СЃ РїРѕРЅСЏС‚РЅРѕР№
            СЃС‚СЂСѓРєС‚СѓСЂРѕР№, РєР°С‡РµСЃС‚РІРµРЅРЅРѕР№ С‚РёРїРѕРіСЂР°С„РёРєРѕР№ Рё РІРЅРёРјР°РЅРёРµРј Рє РїСЂРѕРёР·РІРѕРґРёС‚РµР»СЊРЅРѕСЃС‚Рё.
          </p>
          <p>
            Р’ СЂР°Р±РѕС‚Рµ С†РµРЅСЋ С‡РёСЃС‚СѓСЋ Р°СЂС…РёС‚РµРєС‚СѓСЂСѓ РєРѕРјРїРѕРЅРµРЅС‚РѕРІ, РґРѕСЃС‚СѓРїРЅРѕСЃС‚СЊ, РїСЂРµРґСЃРєР°Р·СѓРµРјС‹Р№
            UX Рё Р»С‘РіРєРѕСЃС‚СЊ РґР°Р»СЊРЅРµР№С€РµРіРѕ РјР°СЃС€С‚Р°Р±РёСЂРѕРІР°РЅРёСЏ РїСЂРѕРµРєС‚Р°.
          </p>
        </div>
      </section>

      <section className="section card-grid">
        <article className="info-card">
          <h3>РќР°РІС‹РєРё</h3>
          <div className="tag-list">
            {skills.map((skill) => (
              <span className="tag" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </article>

        <article className="info-card">
          <h3>РћРїС‹С‚</h3>
          <div className="timeline">
            {experience.map((item) => (
              <div className="timeline-item" key={item.title}>
                <span>{item.period}</span>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="section" id="projects">
        <div className="section-heading">
          <div>
            <span className="section-label">РџСЂРѕРµРєС‚С‹</span>
            <h2>РџРѕРґР±РѕСЂРєР° СЂР°Р±РѕС‚, РєРѕС‚РѕСЂС‹Рµ РїРѕРєР°Р·С‹РІР°СЋС‚ СЃС‚РµРє, РІРєСѓСЃ Рє РґРµС‚Р°Р»СЏРј Рё Р°РєРєСѓСЂР°С‚РЅРѕСЃС‚СЊ СЂРµР°Р»РёР·Р°С†РёРё.</h2>
          </div>
          <p>
            РљР°СЂС‚РѕС‡РєРё Р»РµРіРєРѕ СЂР°СЃС€РёСЂСЏСЋС‚СЃСЏ: С‡С‚РѕР±С‹ РґРѕР±Р°РІРёС‚СЊ РЅРѕРІС‹Р№ РїСЂРѕРµРєС‚, РґРѕСЃС‚Р°С‚РѕС‡РЅРѕ
            РґРѕРїРёСЃР°С‚СЊ РѕР±СЉРµРєС‚ РІ РјР°СЃСЃРёРІ РґР°РЅРЅС‹С….
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-topline">
                <span>{project.stack}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                <a href={project.demo} target="_blank" rel="noreferrer">
                  Р”РµРјРѕ
                </a>
                <a href={project.code} target="_blank" rel="noreferrer">
                  РљРѕРґ
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section contact-layout" id="contacts">
        <article className="info-card contact-card">
          <span className="section-label">РљРѕРЅС‚Р°РєС‚С‹</span>
          <h2>РћС‚РєСЂС‹С‚ Рє РїСЂРµРґР»РѕР¶РµРЅРёСЏРј, СЃРѕС‚СЂСѓРґРЅРёС‡РµСЃС‚РІСѓ Рё РѕР±СЃСѓР¶РґРµРЅРёСЋ РЅРѕРІС‹С… Р·Р°РґР°С‡.</h2>
          <div className="contact-list">
            {contacts.map((contact) => (
              <a key={contact.label} className="contact-row" href={contact.href} target="_blank" rel="noreferrer">
                <span>{contact.label}</span>
                <strong>{contact.value}</strong>
              </a>
            ))}
          </div>
        </article>

        <ContactForm />
      </section>
    </main>
  );
}

