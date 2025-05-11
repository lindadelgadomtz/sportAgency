import React, { useState, useEffect } from 'react';
import './Header.css';
import { FaInstagram, FaPinterestP, FaEnvelope } from 'react-icons/fa';

interface HeaderProps {
  transparent?: boolean;
}

const Header: React.FC<HeaderProps> = ({ transparent = false }) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [menuOpen]);

  return (
    <header className={`site-header ${transparent ? 'transparent' : 'solid'}`}>
      <div className="header-container">
        <div className="logo">
          <a href="/">L & V Travels</a>
        </div>

        <nav
          className={`nav-links ${menuOpen ? 'open' : ''}`}
          role="navigation"
          id="primary-navigation"
        >
          <a href="/about" onClick={closeMenu} aria-label="Navigate to About page">About</a>
          <a href="/destinations" onClick={closeMenu} aria-label="Navigate to Destinations page">Destinations</a>
          <a href="/services" onClick={closeMenu} aria-label="Navigate to Services page">Services</a>
          <a href="/journal" onClick={closeMenu} aria-label="Navigate to Journal page">Journal</a>
          <a href="/contact" onClick={closeMenu} aria-label="Navigate to Contact page">Contact</a>

          <div className="mobile-social">
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
              <FaPinterestP />
            </a>
            <a href="mailto:info@landvtravels.com" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </nav>

        <button
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
