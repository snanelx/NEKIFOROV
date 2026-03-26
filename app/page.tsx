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
    period: "2024 - present",
    title: "Frontend Developer",
    description:
      "I build interfaces that feel confident, load fast and stay readable on phones, tablets and desktop screens."
  },
  {
    period: "2023 - 2024",
    title: "Educational and commercial pet projects",
    description:
      "Worked on client-side architecture, API integrations, deployment pipelines and UX improvements."
  }
];

const projects = [
  {
    title: "StudyFlow",
    stack: "Next.js, TypeScript, CSS Modules",
    description:
      "A platform for study planning with responsive layouts, filtering and personalized flows.",
    demo: "https://example.com/studyflow",
    code: "https://github.com/snanelx/studyflow"
  },
  {
    title: "Cinema Scope",
    stack: "React, REST API, Chart UI",
    description:
      "A movie discovery app focused on fast search, visual ratings and clear information architecture.",
    demo: "https://example.com/cinema-scope",
    code: "https://github.com/snanelx/cinema-scope"
  },
  {
    title: "Sound Atlas",
    stack: "Next.js, Static Export, SEO",
    description:
      "A landing portal for a music-focused product with optimized loading, semantic markup and content sections.",
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
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contacts">Contacts</a>
          </div>
        </nav>

        <section className="hero-panel">
          <div className="hero-copy">
            <span className="eyebrow">Developer Portfolio</span>
            <h1>I build fast, expressive and easy-to-use web interfaces.</h1>
            <p className="hero-text">
              This personal portfolio is designed to present skills, projects and
              communication channels in a clear and memorable way.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                View projects
              </a>
              <a className="button button-secondary" href="#contacts">
                Contact me
              </a>
            </div>
          </div>

          <aside className="hero-card" aria-label="Quick summary">
            <p>Frontend / Next.js / UI Engineering</p>
            <dl className="summary-grid">
              <div>
                <dt>3+</dt>
                <dd>featured portfolio projects</dd>
              </div>
              <div>
                <dt>100%</dt>
                <dd>responsive layouts</dd>
              </div>
              <div>
                <dt>SEO</dt>
                <dd>metadata and semantic markup</dd>
              </div>
              <div>
                <dt>GitHub</dt>
                <dd>ready for publishing</dd>
              </div>
            </dl>
          </aside>
        </section>
      </header>

      <section className="section two-column" id="about">
        <div>
          <span className="section-label">About me</span>
          <h2>I create interfaces that are comfortable to show to both employers and users.</h2>
        </div>
        <div className="section-copy">
          <p>
            I focus on modern web applications with clear structure, strong typography
            and careful attention to performance.
          </p>
          <p>
            I value clean component architecture, accessibility, predictable UX and
            easy long-term scaling.
          </p>
        </div>
      </section>

      <section className="section card-grid">
        <article className="info-card">
          <h3>Skills</h3>
          <div className="tag-list">
            {skills.map((skill) => (
              <span className="tag" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </article>

        <article className="info-card">
          <h3>Experience</h3>
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
            <span className="section-label">Projects</span>
            <h2>Selected work that highlights my stack, attention to detail and implementation quality.</h2>
          </div>
          <p>
            The cards are easy to extend: add one more object to the data array and the new project will appear.
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
                  Demo
                </a>
                <a href={project.code} target="_blank" rel="noreferrer">
                  Code
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section contact-layout" id="contacts">
        <article className="info-card contact-card">
          <span className="section-label">Contacts</span>
          <h2>Open to new opportunities, collaboration and product discussions.</h2>
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
