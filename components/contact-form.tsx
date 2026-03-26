"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState(
    "The form will prepare an email in your local mail client."
  );

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const contact = String(form.get("contact") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();

    const subject = encodeURIComponent(
      `Portfolio message from ${name || "visitor"}`
    );
    const body = encodeURIComponent(
      `Name: ${name || "Not provided"}\nContact: ${contact || "Not provided"}\n\nMessage:\n${message || "No message"}`
    );

    window.location.href = `mailto:nekiforov.dev@example.com?subject=${subject}&body=${body}`;
    setStatus("Mail client opened. Please review the message before sending.");
  }

  return (
    <article className="contact-form">
      <h3>Contact form</h3>
      <p>
        For static deployment on GitHub Pages this form works without a server:
        it builds a message and opens your local mail client.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" placeholder="How should I address you" />
        </div>

        <div className="field">
          <label htmlFor="contact">Contact</label>
          <input
            id="contact"
            name="contact"
            placeholder="Email, Telegram or another preferred contact"
          />
        </div>

        <div className="field">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Briefly describe the task or your proposal"
            rows={6}
          />
        </div>

        <div className="form-actions">
          <button className="button button-primary" type="submit">
            Prepare email
          </button>
          <span className="status" aria-live="polite">
            {status}
          </span>
        </div>
      </form>
    </article>
  );
}
