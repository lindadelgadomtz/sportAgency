import React, { useEffect, useState } from 'react';
import styles from './StatsSection.module.css';
import useInView from '../../utils/UseInView';

interface StatItem {
    label: string;
    count: number;
    link?: string;
    percentage?: number;
    icon?: string;
}

interface StatsSectionProps {
    title: string;
    stats: StatItem[];
    theme?: 'light' | 'dark';
    disableAnimation?: boolean;
}

const StatsSection: React.FC<StatsSectionProps> = ({ title, stats, theme = 'dark', disableAnimation = false }) => {
    const [ref, isInView] = useInView();
    const [displayCounts, setDisplayCounts] = useState<number[]>(
        stats.map(() => 0)
    );

    useEffect(() => {
        if (isInView || disableAnimation) {
            if (disableAnimation) {
                setDisplayCounts(stats.map(stat => stat.count));
                return;
            }

            const intervals = stats.map((stat, index) => {
                const increment = Math.ceil(stat.count / 60);
                return setInterval(() => {
                    setDisplayCounts(prev => {
                        const newCounts = [...prev];
                        newCounts[index] = Math.min(stat.count, newCounts[index] + increment);
                        return newCounts;
                    });
                }, 30);
            });
            return () => intervals.forEach(clearInterval);
        }
    }, [isInView, stats, disableAnimation]);

    return (
        <section
            className={`${styles.statsSection} ${theme === 'light' ? styles.light : styles.dark}`}
            ref={ref}
        >
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.statsGrid}>
                {stats.map((stat, i) => (
                    <div key={i} className={styles.statBlock}>
                        {stat.percentage !== undefined && (
                            <svg role="img" aria-label={`${stat.label} percentage circle`} className={styles.circle} viewBox="0 0 36 36">
                                <path
                                    className={styles.bg}
                                    d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                                />
                                <path
                                    className={styles.progress}
                                    strokeDasharray={`${stat.percentage}, 100`}
                                    d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                                />
                            </svg>
                        )}


                        <div className={styles.labelWrapper}>
                            <h4 className={styles.label}>
                                {stat.icon && (
                                    <img src={stat.icon} alt={`${stat.label} icon`} />
                                )}
                                {stat.link ? (
                                    <a href={stat.link}>{stat.label}</a>
                                ) : (
                                        stat.label
                                    )}
                            </h4>
                            <h3 className={styles.count}>
                                {displayCounts[i].toLocaleString()}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default StatsSection;
