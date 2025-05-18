import React from 'react';
import styles from './CenteredPicturePhraseText.module.css';
import useInView from '../../utils/UseInView';

interface CenteredPicturePhraseTextProps {
  imageUrl: string;
  imageHeight?: string;
  imageWidth?: string;
  phrase: string;
  details: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

const CenteredPicturePhraseText: React.FC<CenteredPicturePhraseTextProps> = ({
  imageUrl,
  imageHeight = '800px',
  imageWidth = '480px',
  phrase,
  details,
  buttonText = 'En savoir plus',
  onButtonClick,
}) => {
    const [ref, isInView] = useInView({
        threshold: 0.1,
        rootMargin: '0px 0px -35% 0px', // Trigger earlier only here
      });
  

  return (
    <section className={styles.wrapper} ref={ref}>
      <div className={styles.inner} style={{ height: imageHeight, width: imageWidth }}>
        <h2 className={`${styles.phrase} ${isInView ? styles.animatePhrase : ''}`}>
          {phrase}
        </h2>
        <img
          src={imageUrl}
          alt="Sportif en action"
          className={`${styles.image} ${isInView ? styles.animateImage : ''}`}
          loading="lazy"
        />
        <div className={`${styles.detailsBox} ${isInView ? styles.animateDetails : ''}`}>
          <p className={styles.detailsText}>{details}</p>
          {onButtonClick && (
            <button className={styles.button} onClick={onButtonClick}>
              {buttonText}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default CenteredPicturePhraseText;
