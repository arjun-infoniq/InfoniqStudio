"use client";

// import Image from "next/image";
import styles from "./page.module.scss";
import LiquidEther from "./components/LiquidEther/LiquidEther";
import VideoPortfolio from "./components/VideoPortfolio/VideoPortfolio";
import { useLenis } from "./components/useLenis/useLenis";

import Image from "next/image";
import Portfolio1 from "../../public/images/portfolio-1.png";
import Portfolio2 from "../../public/images/portfolio-2.png";
import Portfolio3 from "../../public/images/portfolio-3.png";
import Portfolio4 from "../../public/images/portfolio-4.png";
import Portfolio5 from "../../public/images/portfolio-5.png";

export default function Home() {
  useLenis();

  const images = [
    "/images/logo-1.svg",
    "/images/logo-1.svg",
    "/images/logo-1.svg",
    "/images/logo-1.svg",
    "/images/logo-1.svg",
    "/images/logo-1.svg",
  ];

  return (
    <>
      {/* <div className={styles.liquidEtherWrapper}>
        <LiquidEther
          colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div> */}

      <main className={styles.bannerContent}>
        <div className="mainContainer">
          {/* <h2>Infoniq Studio</h2> */}
          <h3>
            Crafting Modern <br /> Web Experiences
          </h3>
          <h4>
            Specialized in aesthetic, 3D-driven websites that elevate your
            brand.
          </h4>
          <div className={styles.btnWrapper}>
            <button>View Our Works</button>
          </div>
        </div>
      </main>

      <section className={styles.welcomeScreen}>
        <div className="mainContainer">
          <div className={styles.welcomeSplit}>
            <div>
              <h2>
                We are a design-first digital studio, blending creativity and
                technology to craft **modern, aesthetic, and interactive
                websites**. Our passion? Turning ideas into stunning, functional
                experiences that captivate users. We are a design-first digital
                studio, blending creativity and
              </h2>
              <h2>
                technology to craft **modern, aesthetic, and interactive
                websites**. Our passion? Turning ideas into stunning, functional
                experiences that captivate users.
              </h2>
            </div>
            <div>
              <h3>
                technology to craft **modern, aesthetic, and interactive
                websites**. Our passion? Turning ideas into stunning, functional
                experiences that captivate users.
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* <section className={styles.videoPortfolio}>
        <video width="100%" playsInline preload="auto" muted>
          <source src="/videos/portfolio.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section> */}

      <VideoPortfolio />

      {/* <section className={styles.OurServices}>
        <div className="mainContainer">
          <div>
            {images.map((src, index) => (
              <Image
                key={index}
                src={src}
                alt={`Image ${index + 1}`}
                width={100}
                height={100}
              />
            ))}
          </div>
        </div>
      </section> */}

      <section className={styles.portfolioMainWrapper}>
        <div className="mainContainer">
          <div className={styles.portfolioHead}>
            <h3>Turning Vision Into Voltage</h3>
            <button>See all works</button>
          </div>
          <div className={styles.portfolioFlex}>
            <div className={styles.portfolioBox}>
              <div className={styles.imgWrapper}>
                <Image src={Portfolio1} alt="Portfolio" fill />
              </div>
              <ul>
                <li>UI/UX Design</li>
                <li>Development</li>
              </ul>
              <h2>Break A Leg</h2>
              <p>
                Building a vibrant website that connects audiences with live
                theatre shows—making culture more accessible and engaging.
              </p>
            </div>
            <div className={styles.portfolioBox}>
              <div className={styles.imgWrapper}>
                <Image src={Portfolio2} alt="Portfolio" fill />
              </div>
              <ul>
                <li>UI/UX Design</li>
                <li>Development</li>
              </ul>
              <h2>Break A Leg</h2>
              <p>
                Building a vibrant website that connects audiences with live
                theatre shows—making culture more accessible and engaging.
              </p>
            </div>
            <div className={styles.portfolioBox}>
              <div className={styles.imgWrapper}>
                <Image src={Portfolio3} alt="Portfolio" fill />
              </div>
              <ul>
                <li>UI/UX Design</li>
                <li>Development</li>
              </ul>
              <h2>Break A Leg</h2>
              <p>
                Building a vibrant website that connects audiences with live
                theatre shows—making culture more accessible and engaging.
              </p>
            </div>
            <div className={styles.portfolioBox}>
              <div className={styles.imgWrapper}>
                <Image src={Portfolio4} alt="Portfolio" fill />
              </div>
              <ul>
                <li>UI/UX Design</li>
                <li>Development</li>
              </ul>
              <h2>Break A Leg</h2>
              <p>
                Building a vibrant website that connects audiences with live
                theatre shows—making culture more accessible and engaging.
              </p>
            </div>
            <div className={styles.portfolioBox}>
              <div className={styles.imgWrapper}>
                <Image src={Portfolio5} alt="Portfolio" fill />
              </div>
              <ul>
                <li>UI/UX Design</li>
                <li>Development</li>
              </ul>
              <h2>Break A Leg</h2>
              <p>
                Building a vibrant website that connects audiences with live
                theatre shows—making culture more accessible and engaging.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
