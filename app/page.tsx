"use client";

import Image from "next/image";
import styles from "./page.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import HorizontalScroll from "./components/HorizontalScroll/HorizontalScroll";
import { Autoplay, Navigation } from "swiper/modules";
import VideoPortfolio from "./components/VideoPortfolio/VideoPortfolio";
import ScrollStack from "./components/ScrollStack/ScrollStack";

export default function Home() {
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
                <button className="cmnButton">Start Your project</button>
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
                    <Image src="/images/portfolio-1.png" alt="Slide 1" fill />
                  </SwiperSlide>

                  <SwiperSlide>
                    <Image src="/images/portfolio-2.png" alt="Slide 2" fill />
                  </SwiperSlide>

                  <SwiperSlide>
                    <Image src="/images/portfolio-3.png" alt="Slide 3" fill />
                  </SwiperSlide>

                  <SwiperSlide>
                    <Image src="/images/portfolio-4.png" alt="Slide 4" fill />
                  </SwiperSlide>

                  <SwiperSlide>
                    <Image src="/images/portfolio-5.png" alt="Slide 5" fill />
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

      <section className={styles.stackBoxWrapper}>
        <div className="mainContainer">
          <h4 className="cmnTagHeading">Services</h4>
          <h5 className="cmnMainHeading">What We Create</h5>
          <ScrollStack>
            <div className={styles.stackBox}>
              <div className={styles.tagBox1}>
                <h4>3d websites</h4>
              </div>
              <div className={styles.contentFlexWrapper}>
                <div className={styles.imgSet}>
                  <Image
                    src="/images/service-img-1.png"
                    alt="Service Image"
                    fill
                  />
                </div>
                <div className={styles.contentSet}>
                  <h2>3D Interactive Websites</h2>
                  <h3>
                    Immersive, high-performance websites built with advanced 3D
                    visuals, smooth animations, and modern UI.
                  </h3>
                  <div className="stackPage rotatingText">
                    <Image
                      src="/icons/rotate-text-dark.svg"
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
                </div>
              </div>
            </div>
            <div className={styles.stackBox}>
              <div className={styles.tagBox2}>
                <h4>Web development</h4>
              </div>
              <div className={styles.contentFlexWrapper}>
                <div className={styles.contentSet}>
                  <h2 className={styles.light}>Custom Web Development</h2>
                  <h3 className={styles.light}>
                    Fast, scalable, and secure web applications engineered for
                    real-world business needs.
                  </h3>
                  <div className="stackPage rotatingText">
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
                </div>
                <div className={styles.imgSet}>
                  <Image
                    src="/images/service-img-2.png"
                    alt="Service Image"
                    fill
                  />
                </div>
              </div>
            </div>
            <div className={styles.stackBox}>
              <div className={styles.tagBox3}>
                <h4>app development</h4>
              </div>
              <div className={styles.contentFlexWrapper}>
                <div className={styles.imgSet}>
                  <Image
                    src="/images/service-img-3.png"
                    alt="Service Image"
                    fill
                  />
                </div>
                <div className={styles.contentSet}>
                  <h2 className={styles.light}>Mobile App Development</h2>
                  <h3 className={styles.light}>
                    Intuitive Android and iOS apps designed for seamless user
                    experiences and strong performance.
                  </h3>
                  <div className="stackPage rotatingText">
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
                </div>
              </div>
            </div>
            <div className={styles.stackBox}>
              <div className={styles.tagBox1}>
                <h4>branding</h4>
              </div>
              <div className={styles.contentFlexWrapper}>
                <div className={styles.contentSet}>
                  <h2>Branding & Identity Design</h2>
                  <h3>
                    Modern brand identities that enhance recognition, build
                    trust, and differentiate your business.
                  </h3>
                  <div className="stackPage rotatingText">
                    <Image
                      src="/icons/rotate-text-dark.svg"
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
                </div>
                <div className={styles.imgSet}>
                  <Image
                    src="/images/service-img-4.png"
                    alt="Service Image"
                    fill
                  />
                </div>
              </div>
            </div>
            <div className={styles.stackBox}>
              <div className={styles.tagBox2}>
                <h4>ui/ux design</h4>
              </div>
              <div className={styles.contentFlexWrapper}>
                <div className={styles.imgSet}>
                  <Image
                    src="/images/service-img-5.png"
                    alt="Service Image"
                    fill
                  />
                </div>
                <div className={styles.contentSet}>
                  <h2 className={styles.light}>UI/UX Design</h2>
                  <h3 className={styles.light}>
                    User-focused design solutions blending aesthetics, clarity,
                    and smooth interaction flows.
                  </h3>
                  <div className="stackPage rotatingText">
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
                </div>
              </div>
            </div>
            <div className={styles.stackBox}>
              <div className={styles.tagBox3}>
                <h4>product landing</h4>
              </div>
              <div className={styles.contentFlexWrapper}>
                <div className={styles.contentSet}>
                  <h2 className={styles.light}>Product Landing Pages</h2>
                  <h3 className={styles.light}>
                    High-conversion, visually striking landing pages ideal for
                    launches, campaigns, and marketing.
                  </h3>
                  <div className="stackPage rotatingText">
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
                </div>
                <div className={styles.imgSet}>
                  <Image
                    src="/images/service-img-6.png"
                    alt="Service Image"
                    fill
                  />
                </div>
              </div>
            </div>
          </ScrollStack>
        </div>
      </section>

      

      <section className={styles.mainPortfolioWrapper}>
        <div className={styles.portfolioParentBox}>
          <div className="mainContainer">
            <div className={styles.portfolioheader}>
              <h2 className="cmnMainHeading">Crafted With Vision</h2>
              <h3>delivered with precision</h3>
            </div>
            <div className={styles.portfolioFlex1}>
              <div className={styles.innerBox}>
                <div className={styles.tagBox}>
                <h4>UI/UX DESIGN</h4>
              </div>
                <a href="#">
                  <video
                    src="/videos/portfolio-video-1.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                  ></video>
                </a>
              </div>
              <div className={styles.innerBox}>
                <a href="#">
                  <Image
                    src="/images/service-img-2.png"
                    alt="Service Image"
                    fill
                  />
                </a>
              </div>
              <div className={styles.innerBox}>
                <a href="#">
                  <video
                    src="/videos/portfolio-video-1.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                  ></video>
                </a>
              </div>
              <div className={styles.innerBox}>
                <a href="#">
                  <Image
                    src="/images/service-img-2.png"
                    alt="Service Image"
                    fill
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <VideoPortfolio />

      <HorizontalScroll />
    </>
  );
}
