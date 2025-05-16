// FlyingText.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FlyingText from './FlyingText';

describe('FlyingText component', () => {
    const baseProps = {
        title: 'Test Title',
        description: 'Test description for the component.',
        imageUrl: '/test-image.jpg',
    };

    test('renders title and description correctly', () => {
        render(<FlyingText {...baseProps} />);

        expect(screen.getByText('Test Title')).toBeInTheDocument();
        expect(screen.getByText('Test description for the component.')).toBeInTheDocument();
    });

    test('renders image with correct alt text', () => {
        render(<FlyingText {...baseProps} />);

        const image = screen.getByAltText('Test Title');
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('src', '/test-image.jpg');
    });

    test('does not render button if showButton is false', () => {
        render(<FlyingText {...baseProps} />);

        expect(screen.queryByRole('button')).not.toBeInTheDocument();
    });

    test('renders button if showButton is true', () => {
        render(<FlyingText {...baseProps} showButton={true} />);

        expect(screen.getByRole('button')).toBeInTheDocument();
        expect(screen.getByText('En savoir plus')).toBeInTheDocument();
    });

    test('calls onButtonClick when button is clicked', () => {
        const mockClick = jest.fn();
        render(
            <FlyingText
                {...baseProps}
                showButton={true}
                buttonText="Click Me"
                onButtonClick={mockClick}
            />
        );

        fireEvent.click(screen.getByText('Click Me'));
        expect(mockClick).toHaveBeenCalledTimes(1);
    });

    test('applies custom colors correctly', () => {
        render(
            <FlyingText
                {...baseProps}
                backgroundColor="#123456"
                textColor="#abcdef"
                titleColor="#fedcba"
            />
        );

        const wrapper = screen.getByText('Test Title').closest('div');
        expect(wrapper).toHaveStyle('color: 000');
    });
});
