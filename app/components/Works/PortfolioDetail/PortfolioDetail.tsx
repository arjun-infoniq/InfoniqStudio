import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getPortfolioItemById } from "../portfolioData";
import styles from "./PortfolioDetail.module.scss";

export default function PortfolioDetail({ id }: { id: string }) {
  const item = getPortfolioItemById(id);
  if (!item) notFound();

  const mediaToRender = item.popupImage ?? item.imageSrc;

  return (
    <section className={styles.wrapper}>
      <div className="mainContainer">
        <div className={styles.topBar}>
          <Link href="/Portfolio/" className={styles.backLink}>
            ← Back to Portfolio
          </Link>
        </div>

        <div className={styles.content}>
          <h4 className="cmnTagHeading">{item.tagName}</h4>
          <h2 className="cmnMainHeading">{item.mainHeading}</h2>
          <p className={styles.subHeading}>{item.subHeading}</p>

          <div className={styles.media}>
            {mediaToRender ? (
              <Image
                src={mediaToRender}
                alt={item.altText}
                width={1200}
                height={800}
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                }}
                priority
              />
            ) : item.videoSrc ? (
              <video
                src={item.videoSrc}
                controls
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
              />
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

