import React from 'react';
import './HeaderWrapped.css';
import logo from '../../assets/logoWhite.webp'; // Update with your actual path

const HeaderWrapped: React.FC = () => {
  return (
    <header className="hero-header">
      <div className="hero-overlay">
        <div className="hero-logo">
          <img src={logo} alt="Papy Sponso logo" />
        </div>
        <div className="hero-text">
          <h1 className="hero-title">Des liens uniques et puissants</h1>
          <p className="hero-subtitle">
            Ensemble, écrivons la plus belle des histoires. Entre passion, engagement<br />
            et valeurs partagées, bâtissons un avenir inspirant.
          </p>
          <div className="hero-buttons">
            <a href="#discover" className="hero-btn">Découvrir</a>
            <a href="#contact" className="hero-btn secondary">Prendre contact</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderWrapped;
