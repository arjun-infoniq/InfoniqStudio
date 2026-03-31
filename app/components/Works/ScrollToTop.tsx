"use client";

import { useLayoutEffect } from "react";

export default function ScrollToTop({ targetId }: { targetId: string }) {
  useLayoutEffect(() => {
    const scrollTop = () => {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
      // Also set legacy scrollTop values to guard against some scroll managers.
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;

      const lenis = (window as any).__lenis as
        | { scrollTo: (target: number | string | HTMLElement, opts?: unknown) => void }
        | undefined;

      if (lenis?.scrollTo) {
        // Lenis-aware scroll-to-top (more reliable than window.scrollTo).
        lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      }
    };

    // Attempt on the next paint…
    requestAnimationFrame(scrollTop);
    // …and again shortly after, to beat any scroll restoration.
    setTimeout(scrollTop, 0);
    setTimeout(scrollTop, 100);
  }, [targetId]);

  return null;
}

