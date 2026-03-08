"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import './HorizontalScroll.scss';



gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScroll() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;

    if (!section || !track) return;

    const scrollWidth = track.scrollWidth;
    const viewportWidth = window.innerWidth;

    const ctx = gsap.context(() => {
      gsap.to(track, {
        x: -(scrollWidth - viewportWidth),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",          // 🔥 starts when section appears
          end: () => `+=${scrollWidth}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden bg-black"
    >
      <div
        ref={trackRef}
        className="flex h-full"
      >
        <div className="panel">
          <video autoPlay muted loop playsInline preload="auto">
                <source src="/videos/preview-1.mp4" type="video/mp4" />
              </video>
        </div>
        <div className="panel">Panel 2</div>
        <div className="panel">Panel 3</div>
        <div className="panel">Panel 4</div>
      </div>
    </section>
  );
}
