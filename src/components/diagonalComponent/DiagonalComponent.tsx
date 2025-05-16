// DiagonalComponent.tsx
import React from "react";
import styles from "./DiagonalComponent.module.css";

interface DiagonalComponentProps {
  imageUrl: string;
  phrase: string;
  theme?: "dark" | "clear";
  height?: string; // e.g., "100vh", "60vh"
}

export const DiagonalComponent: React.FC<DiagonalComponentProps> = ({
  imageUrl,
  phrase,
  theme = "dark",
  height = "100vh",
}) => {
  return (
    <section
      className={
        theme === "dark" ? styles.wrapperDark : styles.wrapperClear
      }
      style={{ height }}
    >
      <svg className={styles.diagonalBackground} viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon points="0,30 100,10 100,90 0,70" fill="#999999" />
      </svg>
      <div className={styles.contentContainer}>
        <img src={imageUrl} alt="Hero Visual" className={styles.image} />
        <h1 className={styles.phrase}>{phrase}</h1>
      </div>
    </section>
  );
};

export default DiagonalComponent