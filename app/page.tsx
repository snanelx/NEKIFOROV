import { ContactForm } from "@/components/contact-form";

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Адаптивная верстка",
  "SEO",
  "Git / GitHub",
  "REST API",
  "Telegraf",
  "MySQL"
];

const experience = [
  {
    period: "2024 - настоящее время",
    title: "Frontend и web developer",
    description:
      "Разрабатываю сайты и интерфейсы с акцентом на чистую верстку, понятный UX и аккуратную структуру проекта."
  },
  {
    period: "Pet и учебные проекты",
    title: "Практика полного цикла",
    description:
      "Делаю лендинги, магазины, Telegram-ботов, подключаю API, работаю с логикой интерфейсов и публикацией проектов."
  }
];

const projects = [
  {
    title: "Random Shop",
    stack: "HTML, CSS, JavaScript",
    description:
      "Магазин обуви с каталогом, карточками товаров и акцентом на аккуратную витринную подачу интерфейса.",
    demo: "https://github.com/snanelx/shoes",
    code: "https://github.com/snanelx/shoes"
  },
  {
    title: "Sabirov",
    stack: "HTML, CSS, JavaScript",
    description:
      "Корпоративный сайт для компании Sabirov с презентацией услуг, визуальным стилем бренда и структурированными секциями.",
    demo: "https://github.com/snanelx/sabirov",
    code: "https://github.com/snanelx/sabirov"
  },
  {
    title: "RG Shop Bot",
    stack: "Telegraf, JavaScript, MySQL",
    description:
      "Telegram-бот маркетплейс для покупки и продажи игровых аккаунтов с модерацией, админ-панелью и серверной логикой.",
    demo: "https://github.com/snanelx/tg_game-shop",
    code: "https://github.com/snanelx/tg_game-shop"
  }
];

const contacts = [
  {
    label: "GitHub",
    value: "github.com/snanelx",
    href: "https://github.com/snanelx"
  },
  {
    label: "Email",
    value: "lolkekudacha71@gmail.com",
    href: "mailto:lolkekudacha71@gmail.com"
  },
  {
    label: "Telegram",
    value: "@snanelx",
    href: "https://t.me/snanelx"
  },
  {
    label: "VK",
    value: "vk.com/your-profile",
    href: "https://vk.com/your-profile"
  }
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
            <a href="#about">Обо мне</a>
            <a href="#projects">Проекты</a>
            <a href="#contacts">Контакты</a>
          </div>
        </nav>

        <section className="hero-panel">
          <div className="hero-copy">
            <span className="eyebrow">Портфолио разработчика</span>
            <h1>Создаю сайты, интерфейсы и цифровые продукты, которые удобно использовать и приятно показывать.</h1>
            <p className="hero-text">
              Здесь собраны мои проекты, навыки и контакты. Основной фокус: фронтенд,
              адаптивная верстка, логика интерфейсов и работа с реальными задачами.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Смотреть проекты
              </a>
              <a className="button button-secondary" href="#contacts">
                Связаться
              </a>
            </div>
          </div>

          <aside className="hero-card" aria-label="Краткая сводка">
            <p>Frontend / JavaScript / UI / Telegram bots</p>
            <dl className="summary-grid">
              <div>
                <dt>3</dt>
                <dd>реальных проекта в портфолио</dd>
              </div>
              <div>
                <dt>100%</dt>
                <dd>адаптивная подача</dd>
              </div>
              <div>
                <dt>UI</dt>
                <dd>внимание к структуре и дизайну</dd>
              </div>
              <div>
                <dt>GitHub</dt>
                <dd>открытые репозитории и код</dd>
              </div>
            </dl>
          </aside>
        </section>
      </header>

      <section className="section two-column" id="about">
        <div>
          <span className="section-label">Обо мне</span>
          <h2>Разрабатываю проекты от визуальной части до рабочей логики и публикации.</h2>
        </div>
        <div className="section-copy">
          <p>
            Мне интересно делать проекты, которые выглядят аккуратно, быстро работают
            и решают понятную задачу для пользователя.
          </p>
          <p>
            В моем портфолио есть интернет-магазин, корпоративный сайт и Telegram-бот,
            поэтому я умею работать и с интерфейсами, и с прикладной бизнес-логикой.
          </p>
        </div>
      </section>

      <section className="section card-grid">
        <article className="info-card">
          <h3>Навыки</h3>
          <div className="tag-list">
            {skills.map((skill) => (
              <span className="tag" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </article>

        <article className="info-card">
          <h3>Опыт</h3>
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
            <span className="section-label">Проекты</span>
            <h2>Подборка проектов, которые показывают мой стек, подход к верстке и умение собирать рабочий продукт.</h2>
          </div>
          <p>
            Ниже собраны проекты из GitHub: магазин, корпоративный сайт и Telegram-бот с более сложной логикой.
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
                  Репозиторий
                </a>
                <a href={project.code} target="_blank" rel="noreferrer">
                  Код
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section contact-layout" id="contacts">
        <article className="info-card contact-card">
          <span className="section-label">Контакты</span>
          <h2>Открыт к новым задачам, сотрудничеству и интересным проектам.</h2>
          <div className="contact-list">
            {contacts.map((contact) => (
              <a
                key={contact.label}
                className="contact-row"
                href={contact.href}
                target="_blank"
                rel="noreferrer"
              >
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
