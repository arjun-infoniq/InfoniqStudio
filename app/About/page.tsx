"use client";

import { useRouter } from "next/navigation";
import styles from "./About.module.scss";

export default function AboutPage() {
  const router = useRouter();

  const handleNavClick = (sectionId: string) => {
    if (sectionId === "portfolio") {
      // navigate to contact page since section isn't on this page
      router.push("/Portfolio");
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={styles.aboutMainWrapper}>
      <div className="mainContainer">
        <h2 className="cmnMainHeading">We’re a Design-Driven Digital Studio</h2>
        <p>
          Infoniq is a modern software design and development studio crafting
          cutting-edge 3D interactive websites, mobile apps, and brand
          identities. We combine bold creativity with advanced engineering to
          deliver digital experiences that feel premium, fast, and future-ready.
          Our approach is simple create products that are visually stunning,
          easy to use, and built for real-world business results.
        </p>
        <button
          className="cmnButton"
          onClick={() => handleNavClick("portfolio")}
        >
          See Our Works
        </button>
      </div>
    </section>
  );
}
