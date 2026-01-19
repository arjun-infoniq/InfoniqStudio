// src/components/Loader.tsx
"use client";
import { useEffect, useState } from "react";
import styles from "./Loader.module.scss"; // SCSS module import

import Image from "next/image";

export default function Loader() {
  const [loading, setLoading] = useState(() => {
    if (typeof window === "undefined") return false;
    return !localStorage.getItem("hasVisited");
  });

  useEffect(() => {
    if (!loading) return;

    localStorage.setItem("hasVisited", "true");

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [loading]);

  if (!loading) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.loader}>
        {/* <span></span>
        <span></span>
        <span></span> */}
        <div className={styles.logoWrapper}>
            <Image src="/images/loader.svg" alt="Portfolio" fill />
          </div>
      </div>
    </div>
  );
}
