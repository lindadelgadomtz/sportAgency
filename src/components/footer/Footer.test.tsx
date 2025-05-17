import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer, { FooterLink } from './Footer';

const mockLinks: FooterLink[] = [
  { label: 'Mentions légales', href: '/legal' },
  { label: 'Politique de confidentialité', href: '/privacy' },
  { label: 'Cookies', href: '/cookies' },
];

const mockSocial = {
  instagram: 'https://instagram.com/hestia',
  facebook: 'https://facebook.com/hestia',
  linkedin: 'https://linkedin.com/company/hestia',
  twitter: 'https://twitter.com/hestia',
};

describe('Footer component', () => {
  it('renders the company name', () => {
    render(<Footer companyName="Hestia Innovation" links={mockLinks} />);
    expect(screen.getByText('Hestia Innovation')).toBeInTheDocument();
  });

  it('renders all footer navigation links', () => {
    render(<Footer companyName="Hestia Innovation" links={mockLinks} />);
    mockLinks.forEach((link) => {
      expect(screen.getByText(link.label)).toBeInTheDocument();
      expect(screen.getByText(link.label)).toHaveAttribute('href', link.href);
    });
  });

  it('renders social icons if provided', () => {
    render(<Footer companyName="Hestia Innovation" links={mockLinks} social={mockSocial} />);
    expect(screen.getByLabelText('Instagram')).toHaveAttribute('href', mockSocial.instagram);
    expect(screen.getByLabelText('Facebook')).toHaveAttribute('href', mockSocial.facebook);
    expect(screen.getByLabelText('LinkedIn')).toHaveAttribute('href', mockSocial.linkedin);
    expect(screen.getByLabelText('X (Twitter)')).toHaveAttribute('href', mockSocial.twitter);
  });

  it('shows the current year in copyright', () => {
    render(<Footer companyName="Hestia Innovation" links={mockLinks} />);
    const currentYear = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(`© ${currentYear}`))).toBeInTheDocument();
  });

  it('renders the crafted by line', () => {
    render(<Footer companyName="Hestia Innovation" links={mockLinks} />);
    expect(screen.getByText(/crafted with care by hestia innovation/i)).toBeInTheDocument();
  });
});
