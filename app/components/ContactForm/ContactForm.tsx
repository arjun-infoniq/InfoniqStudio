"use client";

import Image from "next/image";
import styles from "./ContactForm.module.scss";

export default function ContactForm() {
  return (
    <section className={styles.mainContactForm}>
      <div className="mainContainer">
        <div className={styles.contactForm}>
          <div className={styles.stackBox}>
            <div className={styles.tagBox}>
              <h4>3d websites</h4>
            </div>
            <div className={styles.contentFlexWrapper}>
              <div className={styles.contentSet}>
                <h2>GET IN TOUCH</h2>
                <h3>
                  Let’s connect to transform ideas into meaningful digital
                  experiences through innovation, collaboration, and
                  future-ready design solutions together.
                </h3>
                <div className="stackPage rotatingText">
                  <Image
                    src="/icons/rotate-text-dark.svg"
                    className="rText"
                    alt="Rotate Text"
                    fill
                  />
                  <Image
                    src="/icons/arrow-red.svg"
                    className="rArrow"
                    alt="Rotate Text"
                    fill
                  />
                </div>
              </div>
              <div className={styles.formWrapper}>
                <form action="">
                  <div className={styles.formBox}>
                    <input type="text" placeholder="Full Name" required />
                  </div>
                  <div className={styles.formBox}>
                    <input type="text" placeholder="Email Address" required />
                  </div>
                  <div className={styles.formBox}>
                    <textarea
                      placeholder="Your Message"
                      required
                      rows={3}
                    ></textarea>
                  </div>
                  <button className="cmnButton">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
