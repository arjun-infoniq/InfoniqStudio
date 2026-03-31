"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";

export function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      lerp: 0.1,
    });

    // Expose for route-level scroll control (e.g., scroll-to-top on navigation).
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).__lenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const animationFrameId = requestAnimationFrame(raf);

    // Integrate GSAP with Lenis
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    return () => {
      cancelAnimationFrame(animationFrameId);
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000);
      });
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
