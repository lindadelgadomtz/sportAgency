import React from 'react';
import { render, screen } from '@testing-library/react';
import HeroSection from './HeroSection';
import '@testing-library/jest-dom';

describe('HeroSection Component', () => {
  const testImage = '/images/heroSection.jpg';

  beforeEach(() => {
    render(<HeroSection bgImage={testImage} />);
  });

  it('renders the main title', () => {
    const titleElement = screen.getByText(/TRANSFORMEZ VOTRE PERFORMANCE EN VISIBILITÉ/i);
    expect(titleElement).toBeInTheDocument();
  });

  it('renders the subtitle text', () => {
    const subtitleElement = screen.getByText(/Écrivons ensemble LA plus belle des histoires./i);
    expect(subtitleElement).toBeInTheDocument();
  });

  // it('renders the explore button with correct link', () => {
  //   const buttonElement = screen.getByRole('link', { name: /Explore Destinations/i });
  //   expect(buttonElement).toBeInTheDocument();
  //   expect(buttonElement).toHaveAttribute('href', '/destinations');
  // });

  it('renders the background image from the bgImage prop', () => {
    const sectionElement = document.querySelector('.hero-section');
    expect(sectionElement).toHaveStyle(`background-image: url(${testImage})`);
  });
});
