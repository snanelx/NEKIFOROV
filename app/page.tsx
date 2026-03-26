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
    period: "2024 - настоящее время",
    title: "Frontend Developer",
    description:
      "Создаю интерфейсы, которые выглядят уверенно, быстро загружаются и не теряются на мобильных устройствах."
  },
  {
    period: "2023 - 2024",
    title: "Учебные и коммерческие pet-проекты",
    description:
      "Прорабатывал архитектуру клиентских приложений, подключал API, настраивал деплой и улучшал UX."
  }
];

const projects = [
  {
    title: "StudyFlow",
    stack: "Next.js, TypeScript, CSS Modules",
    description:
      "Платформа для планирования учебной нагрузки с адаптивным интерфейсом, фильтрами и персональными сценариями.",
    demo: "https://example.com/studyflow",
    code: "https://github.com/snanelx/studyflow"
  },
  {
    title: "Cinema Scope",
    stack: "React, REST API, Chart UI",
    description:
      "Сервис для визуализации рейтингов и подборок фильмов с упором на быстрый поиск и чистую информационную архитектуру.",
    demo: "https://example.com/cinema-scope",
    code: "https://github.com/snanelx/cinema-scope"
  },
  {
    title: "Sound Atlas",
    stack: "Next.js, Static Export, SEO",
    description:
      "Лендинг-портал для музыкального проекта с оптимизированной загрузкой, семантической разметкой и контентными блоками.",
    demo: "https://example.com/sound-atlas",
    code: "https://github.com/snanelx/sound-atlas"
  }
];

const contacts = [
  {
    label: "Email",
    value: "nekiforov.dev@example.com",
    href: "mailto:nekiforov.dev@example.com"
  },
  {
    label: "Telegram",
    value: "@nekiforov_dev",
    href: "https://t.me/nekiforov_dev"
  },
  {
    label: "GitHub",
    value: "github.com/snanelx",
    href: "https://github.com/snanelx"
  },
  {
    label: "VK",
    value: "vk.com/your-profile",
    href: "https://vk.com/your-profile"
  },
  {
    label: "MAX",
    value: "@nekiforov",
    href: "https://max.ru/"
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
            <h1>Создаю быстрые, выразительные и понятные веб-интерфейсы.</h1>
            <p className="hero-text">
              Это персональная визитная карточка с акцентом на продуманный
              дизайн, инженерную аккуратность и удобную коммуникацию.
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
            <p>Frontend / Next.js / UI Engineering</p>
            <dl className="summary-grid">
              <div>
                <dt>3+</dt>
                <dd>ключевых проекта в портфолио</dd>
              </div>
              <div>
                <dt>100%</dt>
                <dd>адаптивная вёрстка</dd>
              </div>
              <div>
                <dt>SEO</dt>
                <dd>метаданные и семантика</dd>
              </div>
              <div>
                <dt>GitHub</dt>
                <dd>готовность к публикации</dd>
              </div>
            </dl>
          </aside>
        </section>
      </header>

      <section className="section two-column" id="about">
        <div>
          <span className="section-label">Обо мне</span>
          <h2>
            Разрабатываю интерфейсы, которые приятно показывать работодателю и
            пользователю.
          </h2>
        </div>
        <div className="section-copy">
          <p>
            Специализируюсь на создании современных веб-приложений с понятной
            структурой, качественной типографикой и вниманием к
            производительности.
          </p>
          <p>
            В работе ценю чистую архитектуру компонентов, доступность,
            предсказуемый UX и лёгкость дальнейшего масштабирования проекта.
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
            <h2>
              Подборка работ, которые показывают стек, вкус к деталям и
              аккуратность реализации.
            </h2>
          </div>
          <p>
            Карточки легко расширяются: чтобы добавить новый проект, достаточно
            дописать объект в массив данных.
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
                  Демо
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
          <h2>
            Открыт к предложениям, сотрудничеству и обсуждению новых задач.
          </h2>
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
