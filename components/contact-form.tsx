"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState(
    "Форма подготовит письмо в вашем почтовом клиенте."
  );

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const contact = String(form.get("contact") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();

    const subject = encodeURIComponent(
      `Сообщение с портфолио от ${name || "посетителя"}`
    );
    const body = encodeURIComponent(
      `Имя: ${name || "Не указано"}\nКонтакт: ${contact || "Не указан"}\n\nСообщение:\n${message || "Без текста"}`
    );

    window.location.href = `mailto:lolkekudacha71@gmail.com?subject=${subject}&body=${body}`;
    setStatus("Почтовый клиент открыт. Проверьте письмо перед отправкой.");
  }

  return (
    <article className="contact-form">
      <h3>Форма связи</h3>
      <p>
        Для статического деплоя на GitHub Pages форма работает без сервера:
        она собирает письмо и открывает ваш почтовый клиент.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="name">Имя</label>
          <input id="name" name="name" placeholder="Как к вам обращаться" />
        </div>

        <div className="field">
          <label htmlFor="contact">Контакт</label>
          <input
            id="contact"
            name="contact"
            placeholder="Email, Telegram или другой способ связи"
          />
        </div>

        <div className="field">
          <label htmlFor="message">Сообщение</label>
          <textarea
            id="message"
            name="message"
            placeholder="Кратко расскажите о задаче или предложении"
            rows={6}
          />
        </div>

        <div className="form-actions">
          <button className="button button-primary" type="submit">
            Подготовить письмо
          </button>
          <span className="status" aria-live="polite">
            {status}
          </span>
        </div>
      </form>
    </article>
  );
}
