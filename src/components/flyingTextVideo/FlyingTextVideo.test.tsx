import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FlyingTextVideo from './FlyingTextVideo';

describe('FlyingTextVideo component', () => {
    const baseProps = {
        title: 'Sample Video Title',
        description: 'This is the description of the video block.',
        imageUrl: '/fallback-image.jpg',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    };

    test('renders title and description', () => {
        render(<FlyingTextVideo {...baseProps} />);

        expect(screen.getByText('Sample Video Title')).toBeInTheDocument();
        expect(screen.getByText('This is the description of the video block.')).toBeInTheDocument();
    });

    test('renders the iframe with correct video URL', () => {
        render(<FlyingTextVideo {...baseProps} />);
        const iframe = screen.getByTitle('Sample Video Title') as HTMLIFrameElement;

        expect(iframe).toBeInTheDocument();
        expect(iframe.src).toContain('https://www.youtube.com/embed/dQw4w9WgXcQ');
        expect(iframe.src).toContain('autoplay=1');
    });

    test('does not render button by default', () => {
        render(<FlyingTextVideo {...baseProps} />);
        expect(screen.queryByRole('button')).not.toBeInTheDocument();
    });

    test('renders button when showButton is true', () => {
        render(<FlyingTextVideo {...baseProps} showButton />);
        expect(screen.getByRole('button')).toBeInTheDocument();
        expect(screen.getByText('En savoir plus')).toBeInTheDocument();
    });

    test('calls onButtonClick when button is clicked', () => {
        const mockClick = jest.fn();
        render(
            <FlyingTextVideo
                {...baseProps}
                showButton
                buttonText="Watch Now"
                onButtonClick={mockClick}
            />
        );

        fireEvent.click(screen.getByText('Watch Now'));
        expect(mockClick).toHaveBeenCalledTimes(1);
    });

    test('applies custom colors', () => {
        render(
            <FlyingTextVideo
                {...baseProps}
                backgroundColor="#111111"
                textColor="#eeeeee"
                titleColor="#ff0099"
            />
        );

        const title = screen.getByText('Sample Video Title');
        expect(title).toHaveStyle('color: #ff0099');
    });
});
