import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BigTitleTwoColumns from './BigTitleTwoColumns';

// Mock useInView to always return true for animation class
jest.mock('../../utils/UseInView', () => {
    return {
      __esModule: true,
      default: () => {
        const ref = { current: null };
        return [ref, true];
      },
    };
  });
  

describe('BigTitleTwoColumns', () => {
  const defaultProps = {
    eyebrow: 'NOS VALEURS',
    title: 'Le sport amateur au cœur de notre mission',
    leftText: 'Nous croyons que chaque sportif mérite du soutien.',
    rightText: 'C’est pourquoi nous connectons talents et sponsors.',
    buttonText: 'Rejoignez-nous',
    onButtonClick: jest.fn(),
    theme: 'dark' as 'dark',
  };

  it('renders all content correctly', () => {
    render(<BigTitleTwoColumns {...defaultProps} />);

    expect(screen.getByText(defaultProps.eyebrow)).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(defaultProps.title);
    expect(screen.getByText(defaultProps.leftText)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.rightText)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: defaultProps.buttonText })).toBeInTheDocument();
  });

  it('calls onButtonClick when the button is clicked', () => {
    render(<BigTitleTwoColumns {...defaultProps} />);
    const button = screen.getByRole('button', { name: defaultProps.buttonText });
    fireEvent.click(button);
    expect(defaultProps.onButtonClick).toHaveBeenCalled();
  });

  it('does not render the button when showButton is false', () => {
    render(<BigTitleTwoColumns {...defaultProps} showButton={false} />);
    expect(screen.queryByRole('button', { name: defaultProps.buttonText })).not.toBeInTheDocument();
  });
});
