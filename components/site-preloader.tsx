"use client";

import { useEffect, useState } from "react";

export function SitePreloader() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Анимация прогресса до 100% за 2 секунды
    const startTime = Date.now();
    const duration = 2000; // 2 секунды

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      setProgress(Math.floor(newProgress));

      if (newProgress >= 100) {
        clearInterval(interval);
        // Скрываем прелоадер через 300мс после завершения
        setTimeout(() => {
          setIsVisible(false);
        }, 300);
      }
    }, 16); // ~60fps для плавности

    return () => {
      clearInterval(interval);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className={`preloader`} aria-hidden="true">
      <div className="preloader-card">
        <div className="preloader-spinner">
          <div className="preloader-ring preloader-ring-outer" />
          <div className="preloader-ring preloader-ring-inner" />
        </div>
        <p className="preloader-label">Загрузка портфолио</p>
        <div className="preloader-progress">
          <div className="preloader-progress-bar" style={{ width: `${progress}%` }} />
        </div>
        <div className="preloader-percent">{progress}%</div>
      </div>
    </div>
  );
}