"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Loader.module.scss";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.logoWrapper}>
        <Image
          src="/images/loader.svg"
          alt="Portfolio"
          fill
          priority
        />
      </div>
    </div>
  );
}
