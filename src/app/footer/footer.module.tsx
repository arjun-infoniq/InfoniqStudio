"use client";

import styles from "./footer.module.scss";

import Image from "next/image";

import Social1 from "../../../public/icons/social-1.svg";
import Social2 from "../../../public/icons/social-2.svg";
import Social3 from "../../../public/icons/social-3.svg";
import Social4 from "../../../public/icons/social-4.svg";




export default function Footer() {
  return (
    <footer className={styles.footerWrapper}>
      <div className="mainContainer">
        <h2>Infoniq Studio</h2>
        <div className={styles.menuWrapper}>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className={styles.socialWrapper}>
          <ul>
            <li><Image src={Social1} alt="Instagram" fill /></li>
            <li><Image src={Social2} alt="Instagram" fill /></li>
            <li><Image src={Social3} alt="Instagram" fill /></li>
            <li><Image src={Social4} alt="Instagram" fill /></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
