"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "site-theme";

type Theme = "light" | "dark";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem(STORAGE_KEY) as Theme | null;
    const currentTheme = document.documentElement.dataset.theme as Theme | undefined;
    const preferredTheme =
      currentTheme ||
      savedTheme ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

    document.documentElement.dataset.theme = preferredTheme;
    setTheme(preferredTheme);
    setMounted(true);
  }, []);

  function handleToggle() {
    const nextTheme = theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem(STORAGE_KEY, nextTheme);
    setTheme(nextTheme);
  }

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={handleToggle}
      aria-label={mounted && theme === "dark" ? "Переключить на светлую тему" : "Переключить на темную тему"}
      aria-pressed={mounted ? theme === "dark" : false}
      title={mounted && theme === "dark" ? "Светлая тема" : "Темная тема"}
    >
      <span className={`theme-toggle-track ${mounted ? `is-${theme}` : ""}`}>
        <span className="theme-toggle-icon theme-toggle-icon-sun" aria-hidden="true">
          ☀
        </span>
        <span className="theme-toggle-thumb" />
        <span className="theme-toggle-icon theme-toggle-icon-moon" aria-hidden="true">
          ☾
        </span>
      </span>
    </button>
  );
}
