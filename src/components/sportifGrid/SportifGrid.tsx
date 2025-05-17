import React, { useEffect, useRef } from 'react';
import styles from './SportifGrid.module.css';

interface Sportif {
    name: string;
    sport: string;
    image: string;
    showButton?: boolean;
    onClick?: () => void;
}

interface SportifGridProps {
    sportifs: Sportif[];
    title: string;
    theme?: 'light' | 'dark';
}

const SportifGrid: React.FC<SportifGridProps> = ({ sportifs, title, theme = 'dark' }) => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles['sportifGrid-revealed']);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.3 }
        );

        sectionRef.current?.querySelectorAll(`.${styles['sportifGrid-card']}`).forEach(el => {
            observer.observe(el);
        });
    }, []);

    return (
        <section className={`${styles['sportifGrid-section']} ${theme === 'light' ? styles.light : styles.dark}`}>
            <h2 className={styles['sportifGrid-title']}>{title}</h2>
            <div ref={sectionRef} className={styles['sportifGrid-wrapper']}>
                {sportifs.map((sportif, index) => (
                    <article key={index} className={styles['sportifGrid-card']} aria-label={`Sportif ${sportif.name}`}>
                        <div
                            className={styles['sportifGrid-image']}
                            style={{ backgroundImage: `url(${sportif.image})` }}
                        >
                            <div className={styles['sportifGrid-overlay']}>
                                <h3 className={styles['sportifGrid-name']}>{sportif.name}</h3>
                                <p className={styles['sportifGrid-sport']}>{sportif.sport}</p>
                                {sportif.showButton && (
                                    <button className={styles['sportifGrid-button']} onClick={sportif.onClick}>
                                        En savoir plus
                                    </button>
                                )}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default SportifGrid;
