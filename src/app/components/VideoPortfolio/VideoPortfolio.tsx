"use client";

// import Image from "next/image";
import styles from "./VideoPortfolio.module.scss";

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
      // Ensure initial visual state (in case CSS didn't apply immediately)
      gsap.set(videoBoxRef.current, { scale: 0.6, borderRadius: "10px" });

      gsap.to(videoBoxRef.current, {
        scale: 1, // expand to full viewport
        borderRadius: "0px", // remove rounded corners when full
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top", // tweak to taste
          end: "bottom center", // tweak to taste
          scrub: true,
          pin: true,
          anticipatePin: 1,
          // markers: true,      // <-- enable this to debug start/end/pin
        },
      });
    }, triggerRef);

    // refresh on resize
    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      ctx.revert(); // cleanup GSAP/ScrollTrigger created in this context
    };
  }, []);

  return (
    <>
      <section className={styles.videoSection}>
        <div className={styles.trigger} ref={triggerRef}>
          <div className={styles.pinWrap}>
            <div className={styles.videoBox} ref={videoBoxRef}>
              <video
                className={styles.video}
                src="/videos/portfolio.mp4" /* put your file in /public/videos/sample.mp4 */
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
