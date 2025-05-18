import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CenteredPicturePhraseText from './CenteredPicturePhraseText';
import '@testing-library/jest-dom';

// ✅ Mock useInView to always return in-view
jest.mock('../../utils/UseInView', () => {
  const React = require('react');
  return () => [React.createRef(), true];
});

describe('CenteredPicturePhraseText', () => {
  const props = {
    imageUrl: '/images/test-sportif.webp',
    phrase: 'Inspirational Quote',
    details: 'Some information about the sportif.',
    buttonText: 'Contactez-nous',
    imageHeight: '700px',
    imageWidth: '500px',
    onButtonClick: jest.fn(),
  };

  it('renders the phrase, image and details text', () => {
    render(<CenteredPicturePhraseText {...props} />);

    expect(screen.getByText(props.phrase)).toBeInTheDocument();
    expect(screen.getByAltText('Sportif en action')).toBeInTheDocument();
    expect(screen.getByText(props.details)).toBeInTheDocument();
  });

  it('renders the button with correct label', () => {
    render(<CenteredPicturePhraseText {...props} />);
    const button = screen.getByRole('button', { name: props.buttonText });
    expect(button).toBeInTheDocument();
  });

  it('calls the onButtonClick handler when clicked', () => {
    render(<CenteredPicturePhraseText {...props} />);
    const button = screen.getByRole('button', { name: props.buttonText });
    fireEvent.click(button);
    expect(props.onButtonClick).toHaveBeenCalledTimes(1);
  });

  it('applies the given image height and width', () => {
    const { container } = render(<CenteredPicturePhraseText {...props} />);
    const innerDiv = container.querySelector(`div.${'inner'}`);
    expect(innerDiv).toHaveStyle(`height: ${props.imageHeight}`);
    expect(innerDiv).toHaveStyle(`width: ${props.imageWidth}`);
  });
});
