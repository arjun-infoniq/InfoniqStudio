"use client";

import { useEffect, useState } from "react";
import styles from "./Loader.module.scss";
import Image from "next/image";

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let value = 0;

    const interval = setInterval(() => {
      value += Math.random() * 8;

      if (value >= 92) {
        value = 92;
        clearInterval(interval);
      }

      setProgress(Math.floor(value));
    }, 120);

    // final completion
    setTimeout(() => {
      setProgress(100);

      setTimeout(() => {
        setLoading(false);
      }, 500);
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`${styles.overlay} ${progress === 100 ? styles.fadeOut : ""}`}
    >
      <div className={styles.loaderContainer}>
        {/* Logo */}
        <div className={styles.logo}>
          Infoniq Studio
          {/* <Image src="/images/loader.svg" alt="Portfolio" fill priority /> */}
        </div>

        {/* Progress Circle */}
        <div className={styles.circle}>
          <svg>
            <circle cx="60" cy="60" r="54" />
            <circle
              cx="60"
              cy="60"
              r="54"
              style={{
                strokeDashoffset: 339 - (339 * progress) / 100,
              }}
            />
          </svg>

          <div className={styles.percentage}>{progress}%</div>
        </div>

        {/* Tagline */}
        <p className={styles.tagline}>Crafting Digital Experiences</p>
      </div>
    </div>
  );
}
