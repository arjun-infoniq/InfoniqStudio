"use client";

import CurvedLoop from "../components/CurvedLoop/CurvedLoop";
import styles from "./footer.module.scss";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footerMainWrapper}>
      <CurvedLoop
        marqueeText="Design. Build. Scale ✦"
        curveAmount={0}
        className={styles.curvedLoop}
      />
      <div className="mainContainer">
        <div className={styles.footerHead}>
          <div className={styles.sectOne}>
            <div>
              <h2>INFONIQ STUDIO</h2>
              <h3>
                Designing intelligent digital experiences for a connected
                future.
              </h3>
            </div>
          </div>
          <div className={styles.sectTwo}>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Services</li>
              <li>Portfolio</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div className={styles.sectThree}>
            <h4>Social Media</h4>
            <ul className={styles.socialWrapper}>
              <li>
                <a
                  href="https://www.instagram.com/infoniq.studio?igsh=MXE5Y2prMGp6Z3V1cw=="
                  target="_blank"
                >
                  <Image src="/icons/social-1.svg" alt="Hero Image" fill />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/infoniqstudio"
                  target="_blank"
                >
                  <Image src="/icons/social-2.svg" alt="Hero Image" fill />
                </a>
              </li>
              <li>
                <a href="https://www.behance.net/infoniqstudio" target="_blank">
                  <Image src="/icons/social-3.svg" alt="Hero Image" fill />
                </a>
              </li>
              <li>
                <a href="https://dribbble.com/infoniqstudio" target="_blank">
                  <Image src="/icons/social-4.svg" alt="Hero Image" fill />
                </a>
              </li>
            </ul>
            <h5>Careers</h5>
            <p>Apply on</p>
            <p>hello@infoniq.studio</p>
          </div>
          <div className={styles.sectFour}>
            <video
              src="/videos/logo-rotate.mp4"
              autoPlay
              loop
              muted
              playsInline
            ></video>
          </div>
        </div>
        <div className={styles.subFooter}>

        </div>
      </div>
    </footer>
  );
}
