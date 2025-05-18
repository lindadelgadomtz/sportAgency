import React from 'react';
import styles from './BigTitleTwoColumns.module.css';
import useInView from '../../utils/UseInView';

interface BigTitleTwoColumnsProps {
  eyebrow: string;
  title: string;
  leftText: string;
  rightText: string;
  buttonText?: string;
  onButtonClick?: () => void;
  theme?: 'dark' | 'light';
  showButton?: boolean;
}

const BigTitleTwoColumns: React.FC<BigTitleTwoColumnsProps> = ({
  eyebrow,
  title,
  leftText,
  rightText,
  buttonText = 'En savoir plus',
  onButtonClick,
  theme = 'dark',
  showButton = true,
}) => {
  const [ref, isInView] = useInView({ threshold: 0.1, rootMargin: '0px 0px -20% 0px' });

  const isDark = theme === 'dark';

  return (
    <section className={`${styles.wrapper} ${isDark ? styles.dark : styles.light}`} ref={ref}>
      <div className={`${styles.container} ${isInView ? styles.animate : ''}`}>
        <h3 className={styles.eyebrow}>{eyebrow}</h3>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.columns}>
          <p className={styles.columnText}>{leftText}</p>
          <p className={styles.columnText}>{rightText}</p>
        </div>
        {showButton && buttonText && onButtonClick && (
          <button className={styles.button} onClick={onButtonClick}>
            {buttonText}
          </button>
        )}
      </div>
    </section>
  );
};

export default BigTitleTwoColumns;
