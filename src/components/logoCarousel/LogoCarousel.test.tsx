import React from 'react';
import { render, screen } from '@testing-library/react';
import LogoCarousel from './LogoCarousel';
import '@testing-library/jest-dom';

describe('LogoCarousel component', () => {
  const logos = [
    '/logos/logo1.png',
    '/logos/logo2.png',
    '/logos/logo3.png',
  ];

  it('renders without crashing', () => {
    render(<LogoCarousel logos={logos} />);
    const carousel = screen.getByRole('img', { name: /logo-0/i });
    expect(carousel).toBeInTheDocument();
  });

  it('renders all logos duplicated', () => {
    render(<LogoCarousel logos={logos} />);
    const images = screen.getAllByRole('img');
    expect(images.length).toBe(logos.length * 2);
  });

  it('sets the height style correctly', () => {
    const { container } = render(<LogoCarousel logos={logos} height="150px" />);
    const wrapper = container.querySelector('.logo-carousel');
    expect(wrapper).toHaveStyle({ height: '150px' });
  });

  it('sets the animation duration correctly', () => {
    const { container } = render(<LogoCarousel logos={logos} speed={40} />);
    const track = container.querySelector('.logo-track');
    expect(track).toHaveStyle({ animationDuration: '40s' });
  });

  it('sets proper alt tags', () => {
    render(<LogoCarousel logos={logos} />);
    logos.forEach((_, index) => {
      expect(screen.getByAltText(`logo-${index}`)).toBeInTheDocument();
    });
  });
});
