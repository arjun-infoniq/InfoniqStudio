"use client";

import styles from "./MainPortfolio.module.scss";
import Image from "next/image";
import Portfolio1 from "../../../../public/images/portfolio-1.png";

export default function MainPortfolio() {
  return (
    <section className={styles.portfolioWrapper}>
      <div className={styles.imgWrapper}>
        <Image src={Portfolio1} alt="Portfolio" fill/>
      </div>
    </section>
  );
}
