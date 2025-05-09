import React from "react";
import styles from "./GalleryWithInfo.module.css";

export interface GalleryItem {
    imageUrl: string;
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

export const GalleryWithInfo: React.FC<GalleryWithInfoProps> = ({
    gallery,
    items,
    imageGap = "2rem",
    cardBackgroundColor = "#000000",
    buttonColor = "#111",
    hoverEffect = true,
    showButton = true, // default to true,
}) => {
    return (
        <section className={styles.section}>
            <div className={styles.grid}>
                <div
                    className={styles.imageColumn}
                    style={{ gap: imageGap }}
                >
                    {gallery.map((url, idx) => (
                        <div
                            key={idx}
                            className={`${styles.imageWrapper} ${!hoverEffect ? styles.noHover : ""}`}
                        >
                            <img src={url} alt={`gallery-${idx}`} className={styles.image} />
                        </div>
                    ))}
                </div>
                <div
                    className={styles.cards}
                    style={{ backgroundColor: cardBackgroundColor }}
                >
                    {items.map((item, idx) => (
                        <div key={idx} className={styles.card}>
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
                            )},
                            {idx < items.length - 1 && <div className={styles.divider} />}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
