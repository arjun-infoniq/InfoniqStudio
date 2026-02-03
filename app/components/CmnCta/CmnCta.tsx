"use client";

import Image from "next/image";
import styles from "./CmnCta.module.scss";

export default function CmnCta() {
  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className={styles.cmnCtaBox}>
      <div className={styles.innerBox}>
        <h4 className="cmnTagHeading">About Us</h4>
        <h2>Ready to turn your idea into reality?</h2>
      </div>
      <div className={styles.innerBox}>
        <h3>
          We build thoughtful digital experiences that elevate brands and drive
          results.
        </h3>
        <button className="cmnButton" onClick={() => handleNavClick("contact")}>
          Start Your project
        </button>
      </div>
    </section>
  );
}
