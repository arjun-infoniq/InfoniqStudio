// src/components/Loader.tsx
"use client";
import { useEffect, useState } from "react";
import styles from "./Loader.module.scss"; // SCSS module import

import Logo from "../../../../public/images/loader.svg";
import Image from "next/image";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");

    if (!hasVisited) {
      localStorage.setItem("hasVisited", "true");
      const timer = setTimeout(() => setLoading(false), 2000); // 2s
      return () => clearTimeout(timer);
    } else {
      setLoading(false); // Skip loader if already visited
    }
  }, []);

  if (!loading) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.loader}>
        {/* <span></span>
        <span></span>
        <span></span> */}
        <div className={styles.logoWrapper}>
            <Image src={Logo} alt="Portfolio" fill />
          </div>
      </div>
    </div>
  );
}
