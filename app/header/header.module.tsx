"use client";

import styles from "./header.module.scss";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navRoutes: Record<string, string> = {
  home: "/",
  about: "/About",
  services: "/Services",
  portfolio: "/Portfolio",
  contact: "/Contact",
};

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

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

  const getActiveSection = () => {
    if (pathname === "/") return "home";
    if (pathname === "/About/") return "about";
    if (pathname === "/Services/") return "services";
    if (pathname === "/Portfolio/") return "portfolio";
    if (pathname === "/Contact/") return "contact";
    return "";
  };

  const activeSection = getActiveSection();

  const handleNavClick = (sectionId: string) => {
    const route = navRoutes[sectionId];
    router.push(route);
    setMobileMenuOpen(false); // Close menu after navigation
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };


  return (
    <nav className={`${styles.mainHeader} ${isActive ? styles.active : ""}`}>
      <div className="mainContainer">
        <div className={styles.navFlex}>
          <div className={styles.logoWrapper} 
          >
            <Image src="/images/logo.svg" alt="Logo" fill onClick={() => handleNavClick("home")}/>
          </div>
          <div className={styles.menuWrapper}>
            <ul className={mobileMenuOpen ? styles.mobileMenuOpen : ""}>
              <li
                className={styles.menuLogo}
                onClick={() => handleNavClick("home")}
              >
                <Image src="/images/logo-icon.svg" alt="Logo" fill />
              </li>
              <li
                className={`${styles.navItem} ${
                  activeSection === "home" ? styles.navActive : ""
                }`}
                onClick={() => handleNavClick("home")}
              >
                Home
              </li>
              <li
                className={`${styles.navItem} ${
                  activeSection === "about" ? styles.navActive : ""
                }`}
                onClick={() => handleNavClick("about")}
              >
                About
              </li>
              <li
                className={`${styles.navItem} ${
                  activeSection === "services" ? styles.navActive : ""
                }`}
                onClick={() => handleNavClick("services")}
              >
                Services
              </li>
              <li
                className={`${styles.navItem} ${
                  activeSection === "portfolio" ? styles.navActive : ""
                }`}
                onClick={() => handleNavClick("portfolio")}
              >
                Portfolio
              </li>
              <li
                className={`${styles.navItem} ${
                  activeSection === "contact" ? styles.navActive : ""
                }`}
                onClick={() => handleNavClick("contact")}
              >
                Contact Us
              </li>
              <li
                className={styles.menuCta}
                onClick={() => handleNavClick("contact")}
              >
                <Image src="/icons/arrow-theme.svg" alt="Arrow" fill />
              </li>
            </ul>
          </div>
          <button
            className={`${styles.mobileMenuButton} ${
              mobileMenuOpen ? styles.active : ""
            }`}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            type="button"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div className={styles.ctaWrapper}>
            <button onClick={() => handleNavClick("contact")}>
              Let&apos;s Talk
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
