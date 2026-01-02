"use client";

import { useEffect, useRef } from "react";
import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import styles from "./ScrollStack.module.module.scss";

gsap.registerPlugin(ScrollTrigger);

interface ScrollStackProps {
  children: React.ReactNode;
  // scaleStep?: number;
}

export default function ScrollStack({
  children,
  // scaleStep = 0.03,
}: ScrollStackProps) {
  const stackRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!stackRef.current || !cardsRef.current.length) return;

    const cards = cardsRef.current;

    cards.forEach((card, index) => {
      gsap.to(card, {
        // scale: 1 - scaleStep * (cards.length - index - 1),
        marginBottom: -(card.offsetHeight - 40),
        scrollTrigger: {
          trigger: card,
          start: "top 20%",
          end:
            index === cards.length - 1
              ? () => `+=${window.innerHeight * 0.6}`
              : "bottom 20%",
          scrub: 0.5,
          pin: stackRef.current,
          pinSpacing: false,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const childrenArray = React.Children.toArray(children);

  return (
    <div className="scroll-stack" ref={stackRef}>
      {childrenArray.map((child, i) => (
        <div
          key={i}
          className="scroll-stack-card"
          ref={(el) => {
            if (el) cardsRef.current[i] = el;
          }}
        >
          {child}
        </div>
      ))}
      <div className="scroll-stack-end" />
    </div>
  );
}
