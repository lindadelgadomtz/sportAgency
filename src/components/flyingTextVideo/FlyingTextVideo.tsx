import React from "react";
import styles from "./FlyingTextVideo.module.css";

interface FlyingTextVideoProps {
    title: string;
    description: string;
    imageUrl: string;
    videoUrl?: string;
    backgroundColor?: string;
    textColor?: string;
    titleColor?: string;
    buttonColor?:string;
    showButton?: boolean;
    buttonText?: string;
    onButtonClick?: () => void;
}

const FlyingTextVideo: React.FC<FlyingTextVideoProps> = ({
    title,
    description,
    imageUrl,
    videoUrl,
    backgroundColor = "#000000",
    textColor = "#ffffff",
    titleColor = "#FFCC00",
    buttonColor = "#FFD700",
    showButton = false,
    buttonText = "En savoir plus",
    onButtonClick,
}) => {
    return (
        <div className={styles.blockWrapper} style={{ backgroundColor }}>
            <h2 className={styles.title} style={{ color: titleColor }}>
                {title}
            </h2>
            <div className={styles.gridLayout}>
                <div className={styles.leftSide} style={{ color: textColor }}>
                    <div className={styles.textContent}>
                        <p className={styles.description}>{description}</p>
                        {showButton && (
                            <button
                                className={styles.button}
                                style={{
                                    backgroundColor: buttonColor,
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
                    <div className={styles.videoWrapper}>
                        <iframe
                            src={`${videoUrl}?autoplay=1&mute=1&rel=0&modestbranding=1&showinfo=0`}
                            title={title}
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                            className={styles.videoFrame}
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default FlyingTextVideo;
