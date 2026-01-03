"use client";

import Image from "next/image";
import styles from "./page.module.scss";

// import LiquidEther from "./components/LiquidEther/LiquidEther";
// import VideoPortfolio from "./components/VideoPortfolio/VideoPortfolio";
import { useLenis } from "./components/useLenis/useLenis";
import ScrollStack from "./components/ScrollStack/ScrollStack";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// import Image from "next/image";
import RotateText1 from "../../public/images/rotate-text.svg";
import RotateText2 from "../../public/icons/rotate-text-dark.svg";
import RotateArrow from "../../public/icons/arrow-red.svg";
import Blender from "../../public/icons/blender.svg";

import serviceImage1 from "../../public/images/service-img-1.png";
import serviceImage2 from "../../public/images/service-img-2.png";
import serviceImage3 from "../../public/images/service-img-3.png";
import serviceImage4 from "../../public/images/service-img-4.png";
import serviceImage5 from "../../public/images/service-img-5.png";
import serviceImage6 from "../../public/images/service-img-6.png";

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
          <h4 className="cmnTagHeading">SERVICES</h4>
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
                Future <Image src={textImage} alt="Portfolio" fill />
              </h3>
              <h3>of Digital</h3>
              <h3>Experiences</h3>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.stackBoxWrapper}>
        <div className="mainContainer">
          <h4 className="cmnTagHeading">ABOUT US</h4>
          <h5 className="cmnMainHeading">What We Create</h5>
          <ScrollStack>
            <div className={styles.stackBox}>
              <div className={styles.tagBox1}>
                <h4>3d websites</h4>
              </div>
              <div className={styles.contentFlexWrapper}>
                <div className={styles.imgSet}>
                  <Image src={serviceImage1} alt="Service Image" fill />
                </div>
                <div className={styles.contentSet}>
                  <h2>3D Interactive Websites</h2>
                  <h3>
                    Immersive, high-performance websites built with advanced 3D
                    visuals, smooth animations, and modern UI.
                  </h3>
                  <div className="rotatingText">
                    <Image
                      src={RotateText2}
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
                </div>
                <div className={styles.imgSet}>
                  <Image src={serviceImage2} alt="Service Image" fill />
                </div>
              </div>
            </div>
            <div className={styles.stackBox}>
              <div className={styles.tagBox3}>
                <h4>app development</h4>
              </div>
              <div className={styles.contentFlexWrapper}>
                <div className={styles.imgSet}>
                  <Image src={serviceImage3} alt="Service Image" fill />
                </div>
                <div className={styles.contentSet}>
                  <h2 className={styles.light}>Mobile App Development</h2>
                  <h3 className={styles.light}>
                    Intuitive Android and iOS apps designed for seamless user
                    experiences and strong performance.
                  </h3>
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
                  <div className="rotatingText">
                    <Image
                      src={RotateText2}
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
                </div>
                <div className={styles.imgSet}>
                  <Image src={serviceImage4} alt="Service Image" fill />
                </div>
              </div>
            </div>
            <div className={styles.stackBox}>
              <div className={styles.tagBox2}>
                <h4>ui/ux design</h4>
              </div>
              <div className={styles.contentFlexWrapper}>
                <div className={styles.imgSet}>
                  <Image src={serviceImage5} alt="Service Image" fill />
                </div>
                <div className={styles.contentSet}>
                  <h2 className={styles.light}>UI/UX Design</h2>
                  <h3 className={styles.light}>
                    User-focused design solutions blending aesthetics, clarity,
                    and smooth interaction flows.
                  </h3>
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
                </div>
                <div className={styles.imgSet}>
                  <Image src={serviceImage6} alt="Service Image" fill />
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
              <div className={styles.bigBox}>
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
              <div className={styles.smallBox}>
                <a href="#">
                  <Image src={serviceImage2} alt="Service Image" fill />
                </a>
              </div>
            </div>
            <div className={styles.portfolioFlex1}>
              <div className={styles.smallBox}>
                <a href="#">
                  <Image src={serviceImage2} alt="Service Image" fill />
                </a>
              </div>
              <div className={styles.bigBox}>
                <a href="#">
                  <video
                    src="/videos/portfolio-video-2.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                  ></video>
                </a>
              </div>
            </div>
            <div className={styles.portfolioFlex1}>
              <div className={styles.bigBox}>
                <a href="#">
                  <Image src={serviceImage3} alt="Service Image" fill />
                </a>
              </div>
              <div className={styles.smallBox}>
                <a href="#">
                  <Image src={serviceImage2} alt="Service Image" fill />
                </a>
              </div>
            </div>
            <div className={styles.portfolioFlex1}>
              <div className={styles.smallBox}>
                <a href="#">
                  <Image src={serviceImage2} alt="Service Image" fill />
                </a>
              </div>
              <div className={styles.bigBox}>
                <a href="#">
                  <Image src={serviceImage3} alt="Service Image" fill />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.whatMattersWrapper}>
        <div className="mainContainer">
          <div className={styles.videoHeader}>
            <h4 className="cmnTagHeading">Expertise</h4>
            <div>
              <h2>
                <span>Specialized in </span>What
              </h2>
              <h2>Matters</h2>
            </div>
          </div>
          <div className={styles.videoWrapper}>
            <video
              src="/videos/3d-video.mp4"
              autoPlay
              loop
              muted
              playsInline
            ></video>
            <div className={styles.blenderTag}>
              <Image src={Blender} className="rText" alt="Blender" fill />
            </div>
            <h3>3D Interactive Web Experiences</h3>
            <h5>
              We design and develop immersive 3D-powered websites that combine
              storytelling, motion, and performance. Every experience is crafted
              to engage users, communicate value, and leave a lasting
              impression.
            </h5>
          </div>
        </div>
      </section>
    </>
  );
}
