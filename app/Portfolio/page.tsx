"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import styles from "./Portfolio.module.scss";
import Works from "../components/Works/Works";

export default function PortfolioPage() {
  useEffect(() => {
    document.title = "Our Portfolio | Infoniq Studio - Showcase of Digital Projects";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Explore our portfolio of cutting-edge 3D interactive websites, mobile applications, and brand identity designs. See our latest work and digital innovations.");
    }
  }, []);

   const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>

      <section className={styles.servicesMainWrapper}>
        <div className="mainContainer">
          <h2 className="cmnMainHeading">
            From we provide end-to-end design solutions.
          </h2>
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
            slidesPerView={3.5}
            breakpoints={{
              991: {
                slidesPerView: 3.5,
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
              <Image src="/images/portfolio-img-2.png" alt="Slide 1" fill />
            </SwiperSlide>

            <SwiperSlide>
              <Image src="/images/portfolio-img-3.png" alt="Slide 2" fill />
            </SwiperSlide>

            <SwiperSlide>
              <Image src="/images/portfolio-img-4.png" alt="Slide 3" fill />
            </SwiperSlide>

            <SwiperSlide>
              <Image src="/images/portfolio-img-5.png" alt="Slide 4" fill />
            </SwiperSlide>

            <SwiperSlide>
              <Image src="/images/portfolio-img-6.png" alt="Slide 5" fill />
            </SwiperSlide>

            <SwiperSlide>
              <Image src="/images/portfolio-img-7.png" alt="Slide 6" fill />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      <section className={styles.aboutServicesSection}>
        <div className="mainContainer">
          <div className={styles.aboutServices}>
            <h2 className="cmnMainHeading">About Our Services</h2>
            <p>
              We help brands and products grow through thoughtful design and
              modern digital solutions. Our services combine strategy, user
              experience, and technology to create meaningful, scalable, and
              high-performing digital experiences. From early-stage ideas to
              fully launched products, we work closely with clients to design
              solutions that are not only visually compelling but also
              functional, user-focused, and business-driven.
            </p>
          </div>
        </div>
      </section>

      <Works />
    </>
  );
}
