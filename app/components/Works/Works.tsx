"use client";

import { useRouter } from "next/navigation";
import styles from "./Works.module.scss";
import TiltedCard from "../TiltedCard/TiltedCard";
import { portfolioData } from "./portfolioData";

export default function Works() {
  const router = useRouter();

  return (
    <div id="portfolio">
      <section className={styles.mainPortfolioWrapper}>
        <div className={styles.portfolioParentBox}>
          <div className="mainContainer">
            <h4 className="cmnTagHeading">Portfolio</h4>
            <div className={styles.portfolioheader}>
              <h2 className="cmnMainHeading">Crafted With Vision</h2>
              <h3>delivered with precision</h3>
            </div>
            <div className={styles.portfolioFlex1}>
              {portfolioData.map((item) => (
                <div
                  key={item.id}
                  className={styles.innerBox}
                  onClick={() => router.push(`/Works/${item.id}/`)}
                  style={{ cursor: "pointer" }}
                >
                  <TiltedCard
                    src={item.popupImage ?? ""}
                    tagName={item.tagName}
                    videoSrc={
                      item.mediaType === "video" ? item.videoSrc : undefined
                    }
                    imageSrc={
                      item.mediaType === "image" ? item.imageSrc : undefined
                    }
                    mediaType={item.mediaType}
                    mainHeading={item.mainHeading}
                    subHeading={item.subHeading}
                    altText={item.altText}
                    captionText={item.captionText}
                    rotateAmplitude={12}
                    scaleOnHover={1.05}
                    showMobileWarning={false}
                    showTooltip
                    displayOverlayContent
                    overlayContent={
                      <div className="tagBox">
                        <h4>{item.tagName}</h4>
                      </div>
                    }
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
