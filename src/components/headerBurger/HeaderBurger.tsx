import React, { useState, useEffect, useRef } from 'react';
import './HeaderBurger.css';
import {
  FaBars,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter,
} from 'react-icons/fa6';
import { FaTimes } from 'react-icons/fa';

export interface HeaderLink {
  label: string;
  href: string;
}

interface HeaderBurgerProps {
  links: HeaderLink[];
  languages: string[];
}

const HeaderBurger: React.FC<HeaderBurgerProps> = ({ links, languages }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <div className="header-burger-container">
      <button
        className="burger-icon"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <FaBars />
      </button>

      <div
        className={`burger-menu-overlay ${isOpen ? 'open' : ''}`}
        onClick={closeMenu}
      />

      <div
        className={`burger-menu ${isOpen ? 'open' : ''}`}
        ref={menuRef}
        aria-hidden={!isOpen}
      >
        <button className="close-btn" onClick={closeMenu} aria-label="Close menu">
          <FaTimes />
        </button>
        <nav>
          <ul className="burger-links">
            {links.map((link, idx) => (
              <li key={idx}>
                <a href={link.href} onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="burger-languages">
            {languages.map((lang) => (
              <button key={lang} onClick={closeMenu} aria-label={`Switch to ${lang}`}>
                {lang.toUpperCase()}
              </button>
            ))}
          </div>
          <div className="social-icons">
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="#" aria-label="X"><FaXTwitter /></a>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default HeaderBurger;
