import React from "react";
import styles from "./FlyingText.module.css";

interface FlyingTextProps {
    title: string;
    description: string;
    imageUrl: string;
    backgroundColor?: string;
    textColor?: string;
    titleColor?: string;
    showButton?: boolean;
    buttonText?: string;
    onButtonClick?: () => void;
}

const FlyingText: React.FC<FlyingTextProps> = ({
    title,
    description,
    imageUrl,
    backgroundColor = "#000000",
    textColor = "#ffffff",
    titleColor = "#FFCC00",
    showButton = false,
    buttonText = "En savoir plus",
    onButtonClick,
}) => {
    return (
        <div className={styles.blockWrapper} style={{ backgroundColor }}>
            <div className={styles.gridLayout}>
                <div className={styles.leftSide} style={{ color: textColor }}>
                    <div className={styles.textContent}>
                        <p className={styles.description}>{description}</p>
                        {showButton && (
                            <button
                                className={styles.button}
                                style={{
                                    backgroundColor: titleColor,
                                    color: backgroundColor,
                                }}
                                onClick={onButtonClick}
                            >
                                {buttonText}
                            </button>
                        )}
                    </div>
                </div>
                <div className={styles.rightSide}>
                    <h2 className={styles.title} style={{ color: titleColor }}>
                        {title}
                    </h2>
                    <img src={imageUrl} alt={title} className={styles.image} loading="lazy" />
                </div>
            </div>
        </div>
    );
};

export default FlyingText;
