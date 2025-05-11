import React from 'react';
import './HeroSection.css';

interface HeroSectionProps {
  bgImage: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ bgImage }) => {
  return (
<section
  className="hero-section"
  style={{ backgroundImage: `url(${bgImage})` }}
>
  <div className="hero-overlay">
    <div className="hero-content">
      <h1 className="hero-title"> TRANSFORMEZ VOTRE PERFORMANCE EN VISIBILITÉ</h1>
      <p className="hero-subtitle">
        Écrivons ensemble LA plus belle des histoires.
      </p>
      {/* <div className="hero-buttons">
        <a href="#discover" className="hero-button">Découvrir</a>
        <a href="#contact" className="hero-button">Prendre contact</a>
      </div> */}
    </div>
  </div> 
</section>
  );
};

export default HeroSection;
