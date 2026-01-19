"use client";

// import Image from "next/image";
import styles from "./VideoPortfolio.module.scss";
import Image from "next/image";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function VideoPortfolio() {
  const triggerRef = useRef<HTMLDivElement | null>(null);
  const videoBoxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!triggerRef.current || !videoBoxRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        videoBoxRef.current,
        {
          width: "80vw",
          height: "40vh",
          // borderRadius: "3px",
        },
        {
          width: "100vw",
          height: "100vh",
          // borderRadius: "0px",
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: "+=100%", // scroll distance
            scrub: true,
            pin: true,
            anticipatePin: 1,
            // markers: true,
          },
        },
      );
    }, triggerRef);

    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      ctx.revert();
    };
  }, []);

  return (
    <>
      <section className={styles.videoSection}>
        <div className="mainContainer"></div>
        <div className={styles.trigger} ref={triggerRef}>
          <div className={styles.pinWrap}>
            <div className={styles.videoBox} ref={videoBoxRef}>
              <div className={styles.videoHeader}>
                <h4 className="cmnTagHeading">Expertise</h4>
                <div>
                  <h2>
                    <span>Specialized in </span>What
                  </h2>
                  <h2>Matters</h2>
                </div>
              </div>
              <video
                className={styles.video}
                src="/videos/3d-video.mp4" /* put your file in /public/videos/sample.mp4 */
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
              />
              <div className={styles.blenderTag}>
                <Image
                  src="/icons/blender.svg"
                  className="rText"
                  alt="Blender"
                  fill
                />
              </div>
              <h3>3D Interactive Web Experiences</h3>
              <h5>
                We design and develop immersive 3D-powered websites that combine
                storytelling, motion, and performance. Every experience is
                crafted to engage users, communicate value, and leave a lasting
                impression.
              </h5>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
