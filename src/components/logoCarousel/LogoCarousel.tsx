import React from 'react';
import './LogoCarousel.css';

interface LogoCarouselProps {
  logos: string[]; // array of image paths (e.g. "/images/logo1.png")
  height?: string;
  speed?: number; // animation duration in seconds
}

const LogoCarousel: React.FC<LogoCarouselProps> = ({ logos, height = '100px', speed = 20 }) => {
  const duplicatedLogos = [...logos, ...logos]; // for seamless infinite scroll

  return (
    <div className="logo-carousel" style={{ height }}>
      <div className="logo-track" style={{ animationDuration: `${speed}s` }}>
        {duplicatedLogos.map((logo, index) => (
          <div className="logo-slide" key={index}>
            <img src={logo} alt={`logo-${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoCarousel;
