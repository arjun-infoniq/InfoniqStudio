"use client";

import Image from "next/image";
import styles from "./page.module.scss";

// import LiquidEther from "./components/LiquidEther/LiquidEther";
// import VideoPortfolio from "./components/VideoPortfolio/VideoPortfolio";
import { useLenis } from "./components/useLenis/useLenis";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// import Image from "next/image";
import RotateText1 from "../../public/images/rotate-text.svg";
import RotateArrow from "../../public/icons/arrow-red.svg";

import textImage from "../../public/images/text-portfolio.png";

import Portfolio1 from "../../public/images/portfolio-1.png";
import Portfolio2 from "../../public/images/portfolio-2.png";
import Portfolio3 from "../../public/images/portfolio-3.png";
import Portfolio4 from "../../public/images/portfolio-4.png";
import Portfolio5 from "../../public/images/portfolio-5.png";

export default function Home() {
  useLenis();

  // const images = [
  //   "/images/logo-1.svg",
  //   "/images/logo-1.svg",
  //   "/images/logo-1.svg",
  //   "/images/logo-1.svg",
  //   "/images/logo-1.svg",
  //   "/images/logo-1.svg",
  // ];

  return (
    <>
      <section className={styles.heroMainWrapper}>
        <div className="mainContainer">
          <div className={styles.heroWrapper}>
            <div className={styles.leftSection}>
              <h2>Crafting Modern Web Experiences</h2>
              <div className={styles.flexWrapper}>
                <div className="rotatingText">
                  <Image
                    src={RotateText1}
                    className="rText"
                    alt="Rotate Text"
                    fill
                  />
                  <Image
                    src={RotateArrow}
                    className="rArrow"
                    alt="Rotate Text"
                    fill
                  />
                </div>
                <h3>
                  Specialized in aesthetic, 3D driven websites that elevate your
                  brand.
                </h3>
                <button className="cmnButton">Start Your project</button>
              </div>
              <div className={styles.swiperWrapper}>
                <Swiper
                  modules={[Autoplay, Navigation]}
                  slidesPerView={4}
                  spaceBetween={20}
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
                    <Image src={Portfolio1} alt="Slide 1" fill />
                  </SwiperSlide>

                  <SwiperSlide>
                    <Image src={Portfolio2} alt="Slide 2" fill />
                  </SwiperSlide>

                  <SwiperSlide>
                    <Image src={Portfolio3} alt="Slide 3" fill />
                  </SwiperSlide>

                  <SwiperSlide>
                    <Image src={Portfolio4} alt="Slide 4" fill />
                  </SwiperSlide>

                  <SwiperSlide>
                    <Image src={Portfolio5} alt="Slide 5" fill />
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
                    <button className={styles.exploreBtn}>Explore Now</button>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.rightSection}></div>
          </div>
        </div>
      </section>

      <section className={styles.mainAboutWrapper}>
        <div className="mainContainer">
          <h4>ABOUT US</h4>
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
              <h3>Future <Image src={textImage} alt="Portfolio" fill /></h3>
              <h3>of Digital</h3>
              <h3>Experiences</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
