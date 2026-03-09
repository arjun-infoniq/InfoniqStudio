"use client";

import Image from "next/image";
import styles from "./page.module.scss";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
// import HorizontalScroll from "./components/HorizontalScroll/HorizontalScroll";
import { Autoplay, Navigation } from "swiper/modules";
import VideoPortfolio from "./components/VideoPortfolio/VideoPortfolio";
import Lenis from "lenis";
import ServiceCards from "./components/ServiceCards/ServiceCards";
import CmnCta from "./components/CmnCta/CmnCta";
// import HorizontalScroll from "./components/HorizontalScroll/HorizontalScroll";
import Accordion from "./components/Accordion/Accordion";
import Works from "./components/Works/Works";

export default function Home() {
  const router = useRouter();

  const handleNavClick = (sectionId: string) => {
    if (sectionId === "contact") {
      // navigate to contact page since section isn't on this page
      router.push("/Contact/");
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      const lenis = new Lenis();
      lenis.scrollTo(element, {
        offset: 0,
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    }
  };

  return (
    <>
      <section id="home" className={styles.heroMainWrapper}>
        <div className="mainContainer">
          <div className={styles.heroWrapper}>
            <div className={styles.leftSection}>
              <h1>Crafting Modern Web Experiences</h1>
              <div className={styles.flexWrapper}>
                <div className="rotatingText">
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
                </div>
                <h3>
                  Specialized in aesthetic, 3D driven websites that elevate your
                  brand.
                </h3>
                <button
                  className="cmnButton"
                  onClick={() => handleNavClick("contact")}
                >
                  Start Your project
                </button>
              </div>
              <div className={styles.swiperWrapper}>
                <Swiper
                  modules={[Autoplay, Navigation]}
                  slidesPerView={2.5}
                  breakpoints={{
                    991: {
                      slidesPerView: 4,
                    },
                  }}
                  spaceBetween={10}
                  loop
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  navigation={{
                    prevEl: "#Prev",
                    nextEl: "#Next",
                  }}
                  className={styles.heroSlider}
                >
                  <SwiperSlide>
                    <Image src="/images/swiper-1.png" alt="Slide 1" fill />
                  </SwiperSlide>

                  <SwiperSlide>
                    <Image src="/images/swiper-2.png" alt="Slide 2" fill />
                  </SwiperSlide>

                  <SwiperSlide>
                    <Image src="/images/swiper-3.png" alt="Slide 3" fill />
                  </SwiperSlide>

                  <SwiperSlide>
                    <Image src="/images/swiper-4.png" alt="Slide 4" fill />
                  </SwiperSlide>

                  <SwiperSlide>
                    <Image src="/images/swiper-5.png" alt="Slide 5" fill />
                  </SwiperSlide>

                  <SwiperSlide>
                    <Image src="/images/swiper-6.png" alt="Slide 5" fill />
                  </SwiperSlide>

                  <SwiperSlide>
                    <Image src="/images/swiper-7.png" alt="Slide 5" fill />
                  </SwiperSlide>
                </Swiper>
                <div className={styles.swiperBottom}>
                  <div className={styles.leftSet}>
                    <h3>Featured projects</h3>
                    <div className={styles.customNav}>
                      <button className={styles.customPrev} id="Prev"></button>
                      <button className={styles.customNext} id="Next"></button>
                    </div>
                  </div>
                  <div>
                    <button
                      className={styles.exploreBtn}
                      onClick={() => handleNavClick("contact")}
                    >
                      Explore Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.rightSection}></div>
          </div>
        </div>
      </section>

      <section id="about" className={styles.mainAboutWrapper}>
        <div className="mainContainer">
          <h4 className="cmnTagHeading">About Us</h4>
          <div className={styles.aboutFlex}>
            <div className={styles.innerBox}>
              <h2>
                Infoniq is a modern software design and development studio
                crafting cutting-edge 3D interactive websites, mobile apps, and
                brand identities. We combine bold creativity with advanced
                engineering to deliver digital experiences that feel premium,
                fast, and future-ready.
              </h2>
              <h2>
                Our approach is simple create products that are visually
                stunning, easy to use, and built for real-world business
                results.
              </h2>
            </div>
            <div className={styles.innerBox}>
              <video autoPlay muted loop playsInline preload="auto">
                <source src="/videos/about-video.mp4" type="video/mp4" />
              </video>
            </div>
            <div className={styles.innerBox}>
              <h3>Designing the</h3>
              <h3>
                Future{" "}
                <Image src="/images/text-portfolio.png" alt="Portfolio" fill />
              </h3>
              <h3>of Digital</h3>
              <h3>Experiences</h3>
            </div>
          </div>
        </div>
      </section>

      <ServiceCards />

      <Works/>

      <VideoPortfolio />




      {/* <HorizontalScroll /> */}

      <section className={styles.cmnParentBottom}>
        <div className={styles.faqMainWrapper}>
          <h4 className="cmnTagHeading">Faq</h4>
          <Accordion
            items={[
              {
                title:
                  "What makes Infoniq Studio different from other agencies ?",
                content:
                  "Infoniq Studio focuses on building purpose-driven digital products, not just good-looking screens. We combine strategy, design, and engineering under one roof, ensuring every decision supports performance, scalability, and long-term business growth—not quick fixes or templates.",
              },
              {
                title: "Do you handle both design and development ?",
                content:
                  "Yes. We handle the entire lifecycle—UX research, UI design, branding, front-end, back-end, and deployment. This avoids handoff gaps, speeds up execution, and ensures what's designed is exactly what gets built.",
              },
              {
                title: "Can you redesign an existing website or app ?",
                content:
                  "Absolutely. We audit your current product for usability, performance, and technical limitations, then redesign or rebuild it with a modern, scalable approach—without breaking what already works.",
              },
              {
                title: "Are your solutions scalable and future-ready ?",
                content:
                  "Yes. Our solutions are built with modular architecture, clean code, and modern frameworks, making them easy to scale, update, and integrate with future tools, APIs, or platforms as your business grows.",
              },
              {
                title: "How do we start a project with Infoniq ?",
                content:
                  "It starts with a discovery call where we understand your goals, challenges, and scope. From there, we propose a clear roadmap with timelines, deliverables, and costs—no hidden steps, no confusion.",
              },
            ]}
          />
        </div>

        <section className={styles.cmnCtaWrapper}>
          <div className="mainContainer">
            <CmnCta />
          </div>
        </section>
      </section>
    </>
  );
}
