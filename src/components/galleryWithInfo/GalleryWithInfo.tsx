import React from "react";
import styles from "./GalleryWithInfo.module.css";
import useInView from "../../utils/UseInView";

export interface GalleryItem {
  imageUrl?: string;
  eyebrow: string;
  title: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
}

interface GalleryWithInfoProps {
  gallery: string[];
  items: GalleryItem[];
  imageGap?: string;
  cardBackgroundColor?: string;
  buttonColor?: string;
  hoverEffect?: boolean;
  showButton?: boolean;
}

const AnimatedCard: React.FC<{
  item: GalleryItem;
  idx: number;
  buttonColor: string;
  showButton: boolean;
}> = ({ item, idx, buttonColor, showButton }) => {
  const [ref, isInView] = useInView();

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`${styles.card} ${isInView ? styles.inView : ""}`}
      style={{ animationDelay: `${0.2 * idx}s` }}
    >
      <div className={styles.eyebrow}>{item.eyebrow}</div>
      <h4>{item.title}</h4>
      <p>{item.description}</p>
      {showButton && item.buttonText && item.buttonLink && (
        <a
          href={item.buttonLink}
          className={styles.button}
          style={{ backgroundColor: buttonColor }}
        >
          {item.buttonText}
        </a>
      )}
      {idx < 2 && <div className={styles.divider} />}
    </div>
  );
};

export const GalleryWithInfo: React.FC<GalleryWithInfoProps> = ({
  gallery,
  items,
  imageGap = "2rem",
  cardBackgroundColor = "#000000",
  buttonColor = "#111",
  hoverEffect = true,
  showButton = true,
}) => {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        <div className={styles.imageColumn} style={{ gap: imageGap }}>
          {gallery.map((url, idx) => (
            <div
              key={idx}
              className={`${styles.imageWrapper} ${!hoverEffect ? styles.noHover : ""}`}
            >
              <img src={url} alt={`gallery-${idx}`} className={styles.image} />
            </div>
          ))}
        </div>
        <div className={styles.cards} style={{ backgroundColor: cardBackgroundColor }}>
          {items.map((item, idx) => (
            <AnimatedCard
              key={idx}
              item={item}
              idx={idx}
              buttonColor={buttonColor}
              showButton={showButton}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
