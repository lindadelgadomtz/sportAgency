import React, { useEffect, useState } from 'react';
import FontFaceObserver from 'fontfaceobserver';
import './HeroSection.css';

interface HeroSectionProps {
  bgImage: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ bgImage }) => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    const rubik = new FontFaceObserver('Rubik Dirt');
    rubik.load().then(() => setFontLoaded(true));
  }, []);

  return (
    <section
      aria-label="Hero section"
      className="hero-section"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="hero-overlay">
        <div className="hero-content">
          {/* Only render title after font loads */}
          {fontLoaded && (
            <>
              <h1 className="hero-title">
                TRANSFORMEZ VOTRE PERFORMANCE EN VISIBILITÉ
              </h1>
              <p className="hero-subtitle">
                Écrivons ensemble LA plus belle des histoires.
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
