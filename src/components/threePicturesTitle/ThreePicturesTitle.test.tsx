import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ThreePicturesTitle from './ThreePicturesTitle';

describe('ThreePicturesTitle', () => {
  const defaultProps = {
    mainImage: '/main.jpg',
    topTitle: 'Top Title',
    bottomTitle: 'Bottom Title',
    sideImageOne: '/side1.jpg',
    sideImageTwo: '/side2.jpg',
  };

  it('renders with default props', () => {
    render(<ThreePicturesTitle {...defaultProps} />);

    expect(screen.getByAltText('Main')).toHaveAttribute('src', defaultProps.mainImage);
    expect(screen.getByAltText('Side one')).toHaveAttribute('src', defaultProps.sideImageOne);
    expect(screen.getByAltText('Side two')).toHaveAttribute('src', defaultProps.sideImageTwo);
    expect(screen.getByText('Top Title')).toBeInTheDocument();
    expect(screen.getByText('Bottom Title')).toBeInTheDocument();
  });

  it('respects the titleAboveImages = false prop', () => {
    render(<ThreePicturesTitle {...defaultProps} titleAboveImages={false} />);
    
    const titleBlocks = screen.getAllByRole('heading', { level: 2 });
    // Confirm both titles are still rendered
    expect(titleBlocks).toHaveLength(2);
    // Check order: side images before titles
    const html = screen.getByAltText('Side one').closest('section')?.innerHTML || '';
    expect(html.indexOf('Side one')).toBeLessThan(html.indexOf('Top Title'));
  });

  it('respects imageOnLeft = false by applying reverse class', () => {
    const { container } = render(<ThreePicturesTitle {...defaultProps} imageOnLeft={false} />);
    const rootElement = container.firstChild as HTMLElement;
    expect(rootElement.querySelector('div')?.className).toMatch(/reverse/);
  });

  it('applies the correct theme class (dark)', () => {
    const { container } = render(<ThreePicturesTitle {...defaultProps} theme="dark" />);
    expect(container.firstChild).toHaveClass('dark');
  });

  it('applies the correct theme class (light)', () => {
    const { container } = render(<ThreePicturesTitle {...defaultProps} theme="light" />);
    expect(container.firstChild).toHaveClass('light');
  });
});
