"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./SpreadComponents.module.scss";

interface BoxData {
  id: number;
  image?: string;
  content?: string;
  heading?: string;
  paragraph?: string;
}

export default function SpreadComponents() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const boxRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [isMobile, setIsMobile] = useState(false);
  const [modalContent, setModalContent] = useState<string | null>(null);

  /* ---------------- MOBILE CHECK ---------------- */

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  /* ---------------- DESKTOP HOVER PUSH ---------------- */

useEffect(() => {
  if (isMobile) return;

  const boxes = boxRefs.current;

  const resetBoxes = () => {
    boxes.forEach((other) => {
      if (!other) return;
      other.style.transform = "translate(0,0)";
    });
  };

  const handlers: {
    box: HTMLElement;
    enter: () => void;
    leave: () => void;
  }[] = [];

  boxes.forEach((box) => {
    if (!box) return;

    const enter = () => {
      const hoveredRect = box.getBoundingClientRect();
      const hoveredCenterX = hoveredRect.left + hoveredRect.width / 2;
      const hoveredCenterY = hoveredRect.top + hoveredRect.height / 2;

      boxes.forEach((other) => {
        if (!other || other === box) return;

        const rect = other.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const moveX = centerX < hoveredCenterX ? -60 : 60;
        const moveY = centerY < hoveredCenterY ? -60 : 60;

        other.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };

    const leave = () => {
      resetBoxes();
    };

    box.addEventListener("mouseenter", enter);
    box.addEventListener("mouseleave", leave);

    handlers.push({ box, enter, leave });
  });

  /* -------- RETURN TO CENTER WHEN MOUSE LEAVES WINDOW -------- */

  const handleWindowLeave = (e: MouseEvent) => {
    if (!e.relatedTarget && !(e as MouseEvent & { toElement?: Element }).toElement) {
      resetBoxes();
    }
  };

  document.addEventListener("mouseleave", handleWindowLeave);

  return () => {
    handlers.forEach(({ box, enter, leave }) => {
      box.removeEventListener("mouseenter", enter);
      box.removeEventListener("mouseleave", leave);
    });

    document.removeEventListener("mouseleave", handleWindowLeave);

    resetBoxes();
  };
}, [isMobile]);

  /* ---------------- BUTTER SMOOTH PAN ---------------- */

  useEffect(() => {
    const viewport = viewportRef.current;
    const canvas = canvasRef.current;
    if (!viewport || !canvas) return;

    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;
    let isDragging = false;
    let startX = 0;
    let startY = 0;

    const ease = 0.08;

    const animate = () => {
      currentX += (targetX - currentX) * ease;
      currentY += (targetY - currentY) * ease;

      canvas.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      requestAnimationFrame(animate);
    };

    animate();

    if (!isMobile) {
      const maxMoveX = 400;
      const maxMoveY = 300;

      const mouseMove = (e: MouseEvent) => {
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        const percentX = (e.clientX - centerX) / centerX;
        const percentY = (e.clientY - centerY) / centerY;

        targetX = -maxMoveX * percentX;
        targetY = -maxMoveY * percentY;
      };

      viewport.addEventListener("mousemove", mouseMove);

      return () => {
        viewport.removeEventListener("mousemove", mouseMove);
      };
    } else {
      const pointerDown = (e: PointerEvent) => {
        isDragging = true;
        startX = e.clientX - targetX;
        startY = e.clientY - targetY;
      };

      const pointerMove = (e: PointerEvent) => {
        if (!isDragging) return;
        targetX = e.clientX - startX;
        targetY = e.clientY - startY;
      };

      const pointerUp = () => {
        isDragging = false;
      };

      viewport.addEventListener("pointerdown", pointerDown);
      window.addEventListener("pointermove", pointerMove);
      window.addEventListener("pointerup", pointerUp);

      return () => {
        viewport.removeEventListener("pointerdown", pointerDown);
        window.removeEventListener("pointermove", pointerMove);
        window.removeEventListener("pointerup", pointerUp);
      };
    }
  }, [isMobile]);

  /* ---------------- DATA ---------------- */

  const boxes: BoxData[] = [
    {
      id: 1,
      image: "/images/portfolio-img-2.png",
      content: "01 Brand development begins...",
    },
    {
      id: 2,
      image: "/images/portfolio-img-3.png",
      content: "02 We translate strategic positioning...",
    },
    {
      id: 3,
      image: "/images/portfolio-img-4.png",
      content: "03 We guide partners in evaluating fragrance...",
    },
    {
      id: 4,
      image: "/images/portfolio-img-5.png",
      content: "04 Fragrances are developed...",
    },
    {
      id: 5,
      heading: " Our Services",
      paragraph:
        "We help brands and products grow through thoughtful design and modern digital solutions. Our services combine strategy, user experience, and technology to create meaningful, scalable, and high-performing digital experiences.",
    },
    {
      id: 6,
      image: "/images/portfolio-img-6.png",
      content: "05 Raw materials are selected...",
    },
    {
      id: 7,
      image: "/images/portfolio-img-7.png",
      content: "06 Packaging concepts are developed...",
    },
    {
      id: 8,
      image: "/images/portfolio-img-2.png",
      content: "07 Production capabilities...",
    },
    {
      id: 9,
      image: "/images/portfolio-img-3.png",
      content: "08 Raw materials are selected...",
    },
    {
      id: 10,
      image: "/images/portfolio-img-4.png",
      content: "09 Packaging concepts are developed...",
    },
    {
      id: 11,
      image: "/images/portfolio-img-5.png",
      content: "10 Production capabilities...",
    },
    {
      id: 12,
      image: "/images/portfolio-img-6.png",
      content: "11 Production capabilities...",
    },
    {
      id: 13,
      image: "/images/portfolio-img-7.png",
      content: "12 Raw materials are selected...",
    },
    {
      id: 14,
      image: "/images/portfolio-img-2.png",
      content: "13 Packaging concepts are developed...",
    },
    {
      id: 15,
      image: "/images/portfolio-img-3.png",
      content: "14 Production capabilities...",
    },
  ];

  return (
    <main>
      <section ref={viewportRef} className={styles.viewport}>
        <div ref={canvasRef} className={styles.canvas}>
          {boxes.map((box, index) => (
            <div
              key={box.id}
              ref={(el) => {
                boxRefs.current[index] = el;
              }}
              className={styles.box}
              onClick={() =>
                isMobile && box.content && setModalContent(box.content)
              }
            >
              {/* If image exists → show image */}
              {box.image && (
                <>
                  <Image
                    src={box.image}
                    alt="Image"
                    width={500}
                    height={500}
                    className={styles.coverImg}
                  />

                  <div className={styles.viewBtn}>
                    <Image
                      src="/images/plus.svg"
                      alt="View"
                      width={20}
                      height={20}
                    />
                  </div>
                </>
              )}

              {/* If heading exists → show text block */}
              {box.heading && (
                <div className={styles.textBox}>
                  <h3 className="cmnMainHeading">{box.heading}</h3>
                  <p>{box.paragraph}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {modalContent && (
        <div className={styles.modal} onClick={() => setModalContent(null)}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <h2>{modalContent}</h2>
          </div>
        </div>
      )}
    </main>
  );
}
