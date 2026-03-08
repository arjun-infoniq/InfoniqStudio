"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./Works.module.scss";
import TiltedCard from "../TiltedCard/TiltedCard";

interface PortfolioItem {
  tagName: string;
  mainHeading: string;
  subHeading: string;
  imageSrc?: string;
  videoSrc?: string;
  popupImage?: string;
  mediaType: "image" | "video";
  altText: string;
  captionText: string;
}

const portfolioData: PortfolioItem[] = [
  {
    tagName: "UI/UX DESIGN",
    videoSrc: "/videos/portfolio-video-2.mp4",
    mediaType: "video",
    mainHeading: "3D Interactive Websites",
    subHeading:
      "Immersive, high-performance websites built with advanced 3D visuals, smooth animations, and modern UI.",
    altText: "3D Interactive Websites",
    captionText: "3D Interactive Websites",
    popupImage: "/images/portfolio-popup-1.jpg",
  },
  {
    tagName: "UI/UX DESIGN",
    videoSrc: "/videos/portfolio-video-1.mp4",
    mediaType: "video",
    mainHeading: "Creative Storytelling & Production",
    subHeading:
      "Impact-driven films and digital content crafted to connect, engage, and perform across modern media platforms.",
    altText: "Creative Storytelling & Production",
    captionText: "Creative Storytelling & Production",
    popupImage: "/images/portfolio-popup-2.jpg",
  },
  {
    tagName: "UI/UX DESIGN",
    imageSrc: "/images/portfolio-12.png",
    mediaType: "image",
    mainHeading: "Nova - Next Gen Electric Scooters",
    subHeading:
      "Smart electric scooter development with efficient motors, battery management, safety, connectivity, and sustainability.",
    altText: "Nova - Next Gen Electric Scooters",
    captionText: "Nova - Next Gen Electric Scooters",
    popupImage: "/images/portfolio-popup-3.jpg",
  },

  {
    tagName: "UI/UX DESIGN",
    imageSrc: "/images/portfolio-11.png",
    mediaType: "image",
    mainHeading: "Buildco Architects Website Experience",
    subHeading:
      "A cinematic website translating bold storytelling into a clear, high-performance digital experience.",
    altText: "Buildco Architects Website Experience",
    captionText: "Buildco Architects Website Experience",
    popupImage: "/images/portfolio-popup-4.jpg",
  },
  //   {
  //   tagName: "UI/UX DESIGN",
  //   imageSrc: "/images/portfolio-img-13.png",
  //   mediaType: "image",
  //   mainHeading: "Custom Web Development",
  //   subHeading:
  //     "Fast, scalable, and secure web applications engineered for real-world business needs.",
  //   altText: "Custom Web Development",
  //   captionText: "Custom Web Development",
  //   popupImage: "/images/portfolio-popup-3.png",
  // },

  {
    tagName: "UI/UX DESIGN",
    imageSrc: "/images/portfolio-14.png",
    mediaType: "image",
    mainHeading: "Skin Care Brand Identity & E-commerce",
    subHeading:
      "A cohesive brand identity and e-commerce experience for a modern skincare line, blending aesthetics with seamless shopping.",
    altText: "Skin Care Brand Identity & E-commerce",
    captionText: "Skin Care Brand Identity & E-commerce",
    popupImage: "/images/portfolio-popup-5.jpg",
  },

  {
    tagName: "UI/UX DESIGN",
    imageSrc: "/images/portfolio-15.png",
    mediaType: "image",
    mainHeading: "Perfume Brand Identity Website",
    subHeading:
      "A cohesive brand identity experience for a modern perfume line, blending aesthetics with seamless shopping.",
    altText: "Perfume Brand Identity Website",
    captionText: "Perfume Brand Identity Website",
    popupImage: "/images/portfolio-popup-6.jpg",
  },

  // {
  //   tagName: "UI/UX DESIGN",
  //   imageSrc: "/images/portfolio-img-5.png",
  //   mediaType: "image",
  //   mainHeading: "Crayons Bridge",
  //   subHeading:
  //     "Scalable OTT platform development for secure streaming, subscriptions, analytics, and multi-device user experiences.",
  //   altText: "Crayons Bridge",
  //   captionText: "Crayons Bridge",
  //   popupImage: "/images/portfolio-popup-8.png",
  // },
];

export default function Works() {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleBoxClick = (item: PortfolioItem) => {
    setSelectedItem(item);
    setImageLoaded(false);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  // prevent body scroll when modal open
  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedItem]);

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
              {portfolioData.map((item, index) => (
                <div
                  key={index}
                  className={styles.innerBox}
                  onClick={() => handleBoxClick(item)}
                  style={{ cursor: "pointer" }}
                >
                  <TiltedCard
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
                    src={""}
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

      {/* Modal Popup */}
      {selectedItem && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          {/* close button moved outside modalContent to avoid animation flicker */}
          <button className={styles.closeButton} onClick={closeModal}>
            ✕
          </button>

          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.modalBody}>
              <div className={styles.mediaContainer}>
                {selectedItem.popupImage ? (
                  <Image
                    src={selectedItem.popupImage}
                    alt={selectedItem.altText}
                    width={800}
                    height={2000}
                    onLoad={() => setImageLoaded(true)}
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "auto",
                      opacity: imageLoaded ? 1 : 0.5,
                      transition: "opacity 0.3s ease",
                    }}
                    priority
                  />
                ) : selectedItem.mediaType === "image" &&
                  selectedItem.imageSrc ? (
                  <Image
                    src={selectedItem.imageSrc}
                    alt={selectedItem.altText}
                    width={600}
                    height={400}
                    onLoad={() => setImageLoaded(true)}
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "auto",
                      opacity: imageLoaded ? 1 : 0.5,
                      transition: "opacity 0.3s ease",
                    }}
                    priority
                  />
                ) : selectedItem.mediaType === "video" &&
                  selectedItem.videoSrc ? (
                  <video
                    src={selectedItem.videoSrc}
                    controls
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "8px",
                    }}
                  />
                ) : null}
              </div>

              {/* <div className={styles.modalInfo}>
                <h3>{selectedItem.mainHeading}</h3>
                <p>{selectedItem.subHeading}</p>
              </div> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
