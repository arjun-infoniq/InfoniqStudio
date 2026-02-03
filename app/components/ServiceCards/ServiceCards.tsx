"use client";

import ScrollStack from "../ScrollStack/ScrollStack";
import styles from "./ServiceCards.module.scss";
import Image from "next/image";

export default function ServiceCards() {
  return (
    <section id="services" className={styles.stackBoxWrapper}>
      <div className="mainContainer">
        <h4 className="cmnTagHeading">Services</h4>
        <h5 className="cmnMainHeading">What We Create</h5>
        <ScrollStack>
          <div className={styles.stackBox}>
            <div className={styles.tagBox1}>
              <h4>3d websites</h4>
            </div>
            <div className={styles.contentFlexWrapper}>
              <div className={styles.imgSet}>
                <video autoPlay muted loop playsInline preload="auto">
                  <source src="/videos/service-vid-1.mp4" type="video/mp4" />
                </video>
              </div>
              <div className={styles.contentSet}>
                <h2>3D Interactive Websites</h2>
                <h3>
                  Immersive, high-performance websites built with advanced 3D
                  visuals, smooth animations, and modern UI.
                </h3>
                <ul>
                  <li>3D Website Design</li>
                  <li>Product Visuals</li>
                  <li>Interactive components</li>
                  <li>Motion Graphics</li>
                </ul>
                {/* <div className="stackPage rotatingText">
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
                  </div> */}
              </div>
            </div>
          </div>
          <div className={styles.stackBox}>
            <div className={styles.tagBox2}>
              <h4>Web development</h4>
            </div>
            <div className={styles.contentFlexWrapper}>
              <div className={styles.contentSet}>
                <h2 className={styles.light}>Custom Web Development</h2>
                <h3 className={styles.light}>
                  Fast, scalable, and secure web applications engineered for
                  real-world business needs.
                </h3>
                <ul className={styles.light}>
                  <li>3D Website Design</li>
                  <li>Product Visuals</li>
                  <li>Interactive components</li>
                  <li>Motion Graphics</li>
                </ul>
                {/* <div className="stackPage rotatingText">
                    <Image
                      src="/images/rotate-text.svg"
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
                  </div> */}
              </div>
              <div className={styles.imgSet}>
                <Image
                  src="/images/service-img-2.png"
                  alt="Service Image"
                  fill
                />
              </div>
            </div>
          </div>
          <div className={styles.stackBox}>
            <div className={styles.tagBox3}>
              <h4>app development</h4>
            </div>
            <div className={styles.contentFlexWrapper}>
              <div className={styles.imgSet}>
                <video autoPlay muted loop playsInline preload="auto">
                  <source src="/videos/service-vid-1.mp4" type="video/mp4" />
                </video>
              </div>
              <div className={styles.contentSet}>
                <h2 className={styles.light}>Mobile App Development</h2>
                <h3 className={styles.light}>
                  Intuitive Android and iOS apps designed for seamless user
                  experiences and strong performance.
                </h3>
                <ul className={styles.light}>
                  <li>3D Website Design</li>
                  <li>Product Visuals</li>
                  <li>Interactive components</li>
                  <li>Motion Graphics</li>
                </ul>
                {/* <div className="stackPage rotatingText">
                    <Image
                      src="/images/rotate-text.svg"
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
                  </div> */}
              </div>
            </div>
          </div>
          <div className={styles.stackBox}>
            <div className={styles.tagBox1}>
              <h4>branding</h4>
            </div>
            <div className={styles.contentFlexWrapper}>
              <div className={styles.contentSet}>
                <h2>Branding & Identity Design</h2>
                <h3>
                  Modern brand identities that enhance recognition, build trust,
                  and differentiate your business.
                </h3>
                <ul>
                  <li>3D Website Design</li>
                  <li>Product Visuals</li>
                  <li>Interactive components</li>
                  <li>Motion Graphics</li>
                </ul>
                {/* <div className="stackPage rotatingText">
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
                  </div> */}
              </div>
              <div className={styles.imgSet}>
                <Image
                  src="/images/service-img-4.png"
                  alt="Service Image"
                  fill
                />
              </div>
            </div>
          </div>
          <div className={styles.stackBox}>
            <div className={styles.tagBox2}>
              <h4>ui/ux design</h4>
            </div>
            <div className={styles.contentFlexWrapper}>
              <div className={styles.imgSet}>
                <Image
                  src="/images/service-img-5.png"
                  alt="Service Image"
                  fill
                />
              </div>
              <div className={styles.contentSet}>
                <h2 className={styles.light}>UI/UX Design</h2>
                <h3 className={styles.light}>
                  User-focused design solutions blending aesthetics, clarity,
                  and smooth interaction flows.
                </h3>
                <ul className={styles.light}>
                  <li>3D Website Design</li>
                  <li>Product Visuals</li>
                  <li>Interactive components</li>
                  <li>Motion Graphics</li>
                </ul>
                {/* <div className="stackPage rotatingText">
                    <Image
                      src="/images/rotate-text.svg"
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
                  </div> */}
              </div>
            </div>
          </div>
          <div className={styles.stackBox}>
            <div className={styles.tagBox3}>
              <h4>product landing</h4>
            </div>
            <div className={styles.contentFlexWrapper}>
              <div className={styles.contentSet}>
                <h2 className={styles.light}>Product Landing Pages</h2>
                <h3 className={styles.light}>
                  High-conversion, visually striking landing pages ideal for
                  launches, campaigns, and marketing.
                </h3>
                <ul className={styles.light}>
                  <li>3D Website Design</li>
                  <li>Product Visuals</li>
                  <li>Interactive components</li>
                  <li>Motion Graphics</li>
                </ul>
                {/* <div className="stackPage rotatingText">
                    <Image
                      src="/images/rotate-text.svg"
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
                  </div> */}
              </div>
              <div className={styles.imgSet}>
                <Image
                  src="/images/service-img-6.png"
                  alt="Service Image"
                  fill
                />
              </div>
            </div>
          </div>
        </ScrollStack>
      </div>
    </section>
  );
}
