"use client";

import Image from "next/image";
import styles from "./page.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
// import HorizontalScroll from "./components/HorizontalScroll/HorizontalScroll";
import { Autoplay, Navigation } from "swiper/modules";
import VideoPortfolio from "./components/VideoPortfolio/VideoPortfolio";

import TiltedCard from "./components/TiltedCard/TiltedCard";
import ServiceCards from "./components/ServiceCards/ServiceCards";
import CmnCta from "./components/CmnCta/CmnCta";
import HorizontalScroll from "./components/HorizontalScroll/HorizontalScroll";
import Silk from "./components/Silk/Silk";

export default function Home() {
  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      
        <section id="home" className={styles.heroMainWrapper}>
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
                    Specialized in aesthetic, 3D driven websites that elevate
                    your brand.
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
                        <button
                          className={styles.customPrev}
                          id="Prev"
                        ></button>
                        <button
                          className={styles.customNext}
                          id="Next"
                        ></button>
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

      <div id="portfolio">
        <section className={styles.mainPortfolioWrapper}>
          <div className={styles.portfolioParentBox}>
            <div className="mainContainer">
              <div className={styles.portfolioheader}>
                <h2 className="cmnMainHeading">Crafted With Vision</h2>
                <h3>delivered with precision</h3>
              </div>
              <div className={styles.portfolioFlex1}>
                <div className={styles.innerBox}>
                  <TiltedCard
                    tagName="UI/UX DESIGN"
                    videoSrc="/videos/portfolio-video-2.mp4"
                    mediaType="video"
                    mainHeading="3D Interactive Websites"
                    subHeading="Immersive, high-performance websites built with advanced 3D visuals, smooth animations, and modern UI."
                    altText="3D Interactive Websites"
                    captionText="3D Interactive Websites"
                    rotateAmplitude={12}
                    scaleOnHover={1.05}
                    showMobileWarning={false}
                    showTooltip
                    displayOverlayContent
                    src={""}
                    imageSrc={undefined}
                  />
                </div>
                <div className={styles.innerBox}>
                  <TiltedCard
                    tagName="UI/UX DESIGN"
                    imageSrc="/images/portfolio-img-2.png"
                    mediaType="image"
                    mainHeading="Custom Web Development"
                    subHeading="Fast, scalable, and secure web applications engineered for real-world business needs."
                    altText="Custom Web Development"
                    captionText="Custom Web Development"
                    rotateAmplitude={12}
                    scaleOnHover={1.05}
                    showMobileWarning={false}
                    showTooltip
                    displayOverlayContent
                    overlayContent={
                      <div className="tagBox">
                        <h4>UI/UX DESIGN</h4>
                      </div>
                    }
                    src={""}
                    videoSrc={undefined}
                  />
                </div>
                <div className={styles.innerBox}>
                  <TiltedCard
                    tagName="UI/UX DESIGN"
                    imageSrc="/images/portfolio-img-3.png"
                    mediaType="image"
                    mainHeading="Mobile App Development"
                    subHeading="Intuitive Android and iOS apps designed for seamless user experiences and strong performance."
                    altText="Mobile App Development"
                    captionText="Mobile App Development"
                    rotateAmplitude={12}
                    scaleOnHover={1.05}
                    showMobileWarning={false}
                    showTooltip
                    displayOverlayContent
                    overlayContent={
                      <div className="tagBox">
                        <h4>UI/UX DESIGN</h4>
                      </div>
                    }
                    src={""}
                    videoSrc={undefined}
                  />
                </div>
                <div className={styles.innerBox}>
                  <TiltedCard
                    tagName="UI/UX DESIGN"
                    videoSrc="/videos/portfolio-video-1.mp4"
                    mediaType="video"
                    mainHeading="Creative Storytelling & Production"
                    subHeading="Impact-driven films and digital content crafted to connect, engage, and perform across modern media platforms."
                    altText="Creative Storytelling & Production"
                    captionText="Creative Storytelling & Production"
                    rotateAmplitude={12}
                    scaleOnHover={1.05}
                    showMobileWarning={false}
                    showTooltip
                    displayOverlayContent
                    src={""}
                    imageSrc={undefined}
                  />
                </div>
                <div className={styles.innerBox}>
                  <TiltedCard
                    tagName="UI/UX DESIGN"
                    imageSrc="/images/portfolio-img-4.png"
                    mediaType="image"
                    mainHeading="Nature Inspired Digital Experiences"
                    subHeading="Thoughtfully designed websites that blend aesthetics, usability, and performance to create calm, immersive user journeys."
                    altText="Nature Inspired Digital Experiences"
                    captionText="Nature Inspired Digital Experiences"
                    rotateAmplitude={12}
                    scaleOnHover={1.05}
                    showMobileWarning={false}
                    showTooltip
                    displayOverlayContent
                    overlayContent={
                      <div className="tagBox">
                        <h4>UI/UX DESIGN</h4>
                      </div>
                    }
                    src={""}
                    videoSrc={undefined}
                  />
                </div>
                <div className={styles.innerBox}>
                  <TiltedCard
                    tagName="UI/UX DESIGN"
                    imageSrc="/images/portfolio-11.png"
                    mediaType="image"
                    mainHeading="Buildco Architects Website Experience"
                    subHeading="A cinematic website translating bold storytelling into a clear, high-performance digital experience."
                    altText="Buildco Architects Website Experience"
                    captionText="Buildco Architects Website Experience"
                    rotateAmplitude={12}
                    scaleOnHover={1.05}
                    showMobileWarning={false}
                    showTooltip
                    displayOverlayContent
                    overlayContent={
                      <div className="tagBox">
                        <h4>UI/UX DESIGN</h4>
                      </div>
                    }
                    src={""}
                    videoSrc={undefined}
                  />
                </div>
                <div className={styles.innerBox}>
                  <TiltedCard
                    tagName="UI/UX DESIGN"
                    imageSrc="/images/portfolio-12.png"
                    mediaType="image"
                    mainHeading="Nova - Next Gen Electric Scooters"
                    subHeading="Smart electric scooter development with efficient motors, battery management, safety, connectivity, and sustainability."
                    altText="Nova - Next Gen Electric Scooters"
                    captionText="Nova - Next Gen Electric Scooters"
                    rotateAmplitude={12}
                    scaleOnHover={1.05}
                    showMobileWarning={false}
                    showTooltip
                    displayOverlayContent
                    overlayContent={
                      <div className="tagBox">
                        <h4>UI/UX DESIGN</h4>
                      </div>
                    }
                    src={""}
                    videoSrc={undefined}
                  />
                </div>
                <div className={styles.innerBox}>
                  <TiltedCard
                    tagName="UI/UX DESIGN"
                    imageSrc="/images/portfolio-img-5.png"
                    mediaType="image"
                    mainHeading="Crayons Bridge"
                    subHeading="Scalable OTT platform development for secure streaming, subscriptions, analytics, and multi-device user experiences."
                    altText="Crayons Bridge"
                    captionText="Crayons Bridge"
                    rotateAmplitude={12}
                    scaleOnHover={1.05}
                    showMobileWarning={false}
                    showTooltip
                    displayOverlayContent
                    overlayContent={
                      <div className="tagBox">
                        <h4>UI/UX DESIGN</h4>
                      </div>
                    }
                    src={""}
                    videoSrc={undefined}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <TiltedCard
        imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
        altText="Kendrick Lamar - GNX Album Cover"
        captionText="Kendrick Lamar - GNX"
        containerHeight="300px"
        containerWidth="300px"
        imageHeight="300px"
        imageWidth="300px"
        rotateAmplitude={12}
        scaleOnHover={1.05}
        showMobileWarning={false}
        showTooltip
        displayOverlayContent
        overlayContent={
          <p className="tilted-card-demo-text">Kendrick Lamar - GNX</p>
        }
      /> */}

        <VideoPortfolio />

        <HorizontalScroll />
      </div>

      <section className={styles.cmnCtaWrapper}>
        <div className="mainContainer">
          <CmnCta />
        </div>
      </section>
    </>
  );
}
