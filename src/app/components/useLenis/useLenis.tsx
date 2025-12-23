"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,   // scroll speed
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // ease-out
      smoothWheel: true,
    //   smoothTouch: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Sync with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    return () => {
      lenis.destroy();
    };
  }, []);
}
