"use client";

import styles from "./header.module.scss";
import Image from "next/image";


import Arrow from "../../../public/icons/arrow.svg";

import Logo from "../../../public/images/logo.svg";
import LogoIcon from "../../../public/images/logo-icon.svg";
import arrowTheme from "../../../public/icons/arrow-theme.svg";

import { useEffect, useState } from "react";

export default function Header() {

  const [isActive, setIsActive] = useState(false);

    useEffect(() => {
    const handleScroll = () => {
      // You can adjust this value (e.g., 50) to control when to toggle
      if (window.scrollY > 100) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  
  return (
    <nav className={`${styles.mainHeader} ${isActive ? styles.active : ""}`}>
      <div className="mainContainer">
        <div className={styles.navFlex}>
          <div className={styles.logoWrapper}>
            <Image src={Logo} alt="Logo" fill />
          </div>
          <div className={styles.menuWrapper}>
            <ul>
              <li className={styles.menuLogo}><Image src={LogoIcon} alt="Logo" fill /></li>
              <li className={styles.navItem}>Home</li>
              <li className={styles.navItem}>About</li>
              <li className={styles.navItem}>Services</li>
              <li className={styles.navItem}>Portfolio</li>
              <li className={styles.navItem}>Staging</li>
              <li className={styles.menuCta}><Image src={arrowTheme} alt="Arrow" fill /></li>
            </ul>
          </div>
          <div className={styles.ctaWrapper}>
            <button>Start a project</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
