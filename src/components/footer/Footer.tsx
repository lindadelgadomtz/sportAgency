import React from 'react';
import styles from './Footer.module.css';
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter,
} from 'react-icons/fa6';

export interface FooterLink {
  label: string;
  href: string;
}

interface FooterProps {
  companyName: string;
  links: FooterLink[];
  social?: {
    instagram?: string;
    facebook?: string;
    linkedin?: string;
    twitter?: string;
  };
}

const Footer: React.FC<FooterProps> = ({
  companyName,
  links,
  social = {},
}) => {
  return (
    <footer className={styles.footer}>
      {/* Subtle divider line */}
      <div className={styles.divider} aria-hidden="true" />

      {/* Top Section */}
      <div className={styles.top}>
        <h2 className={styles.company}>{companyName}</h2>
        <nav className={styles.nav} aria-label="Footer navigation">
          {links.map((link, idx) => (
            <a key={idx} href={link.href} className={styles.link}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Social Icons */}
      <div className={styles.social} aria-label="Social media links">
        {social.instagram && (
          <a href={social.instagram} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        )}
        {social.facebook && (
          <a href={social.facebook} aria-label="Facebook" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
        )}
        {social.linkedin && (
          <a href={social.linkedin} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>
        )}
        {social.twitter && (
          <a href={social.twitter} aria-label="X (Twitter)" target="_blank" rel="noopener noreferrer">
            <FaXTwitter />
          </a>
        )}
      </div>

      {/* Bottom Legal */}
      <div className={styles.bottom}>
        <div>
          © {new Date().getFullYear()} Hestia Innovation — All rights reserved.
        </div>
        <div className={styles.crafted}>
          Crafted with care by Hestia Innovation
        </div>
      </div>
    </footer>
  );
};

export default Footer;
