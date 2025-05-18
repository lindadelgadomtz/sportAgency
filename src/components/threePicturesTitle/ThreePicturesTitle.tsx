import React from 'react';
import styles from './ThreePicturesTitle.module.css';

interface ThreePicturesTitleProps {
  mainImage: string;
  topTitle: string;
  bottomTitle: string;
  sideImageOne: string;
  sideImageTwo: string;
  imageOnLeft?: boolean;
  titleAboveImages?: boolean;
  theme?: 'dark' | 'light';
}

const ThreePicturesTitle: React.FC<ThreePicturesTitleProps> = ({
  mainImage,
  topTitle,
  bottomTitle,
  sideImageOne,
  sideImageTwo,
  imageOnLeft = true,
  titleAboveImages = true,
  theme = 'dark',
}) => {
  const isDark = theme === 'dark';

  return (
    <section className={`${styles.wrapper} ${isDark ? styles.dark : styles.light}`}>
      <div className={`${styles.inner} ${imageOnLeft ? '' : styles.reverse}`}>
        <div
          className={`${styles.mainImageWrapper} ${
            imageOnLeft ? styles.tightRight : styles.tightLeft
          }`}
        >
          <img src={mainImage} alt="Main" className={styles.mainImage} loading="lazy" />
        </div>
        <div className={styles.rightContent}>
          {titleAboveImages && (
            <div className={styles.titleBlock}>
              <h2 className={styles.topTitle}>{topTitle}</h2>
              <h2 className={styles.bottomTitle}>{bottomTitle}</h2>
            </div>
          )}
          <div className={styles.sideImages}>
            <img
              src={sideImageOne}
              alt="Side one"
              className={styles.sideImage}
              loading="lazy"
            />
            <img
              src={sideImageTwo}
              alt="Side two"
              className={styles.sideImage}
              loading="lazy"
            />
          </div>
          {!titleAboveImages && (
            <div className={styles.titleBlock}>
              <h2 className={styles.topTitle}>{topTitle}</h2>
              <h2 className={styles.bottomTitle}>{bottomTitle}</h2>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ThreePicturesTitle;
