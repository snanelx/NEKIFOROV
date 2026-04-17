"use client";

import { useEffect, useState } from "react";

const LOADED_PROGRESS = 100;

export function SitePreloader() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let progressInterval: ReturnType<typeof setInterval> | null = null;
    let finishTimeout: ReturnType<typeof setTimeout> | null = null;

    const finishLoading = () => {
      setProgress(LOADED_PROGRESS);
      setIsComplete(true);

      finishTimeout = setTimeout(() => {
        setIsVisible(false);
      }, 420);
    };

    progressInterval = setInterval(() => {
      setProgress((currentProgress) => {
       

        const increment = currentProgress < 45 ? 7 : currentProgress < 70 ? 4 : 2;
        return Math.min(currentProgress + increment, 92);
      });
    }, 90);

    if (document.readyState === "complete") {
      finishLoading();
    } else {
      window.addEventListener("load", finishLoading, { once: true });
    }

    return () => {
      if (progressInterval) {
        clearInterval(progressInterval);
      }

      if (finishTimeout) {
        clearTimeout(finishTimeout);
      }

      window.removeEventListener("load", finishLoading);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className={`preloader ${isComplete ? "is-complete" : ""}`} aria-hidden="true">
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
