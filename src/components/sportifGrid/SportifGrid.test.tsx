import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SportifGrid from './SportifGrid';

const mockSportifs = [
    {
        name: 'Lionel Messi',
        sport: 'Football',
        image: '/images/messi.jpg',
        showButton: true,
        onClick: jest.fn(),
    },
    {
        name: 'Serena Williams',
        sport: 'Tennis',
        image: '/images/serena.jpg',
        showButton: false,
    },
];

describe('SportifGrid', () => {
    beforeEach(() => {
        // Mock IntersectionObserver
        class IntersectionObserverMock {
            observe = jest.fn();
            unobserve = jest.fn();
            disconnect = jest.fn();
        }
        // @ts-ignore
        global.IntersectionObserver = IntersectionObserverMock;
    });

    it('renders the title', () => {
        render(<SportifGrid title="Nos Sportifs" sportifs={mockSportifs} />);
        expect(screen.getByText('Nos Sportifs')).toBeInTheDocument();
    });

    it('renders each sportif name and sport', () => {
        render(<SportifGrid title="Nos Sportifs" sportifs={mockSportifs} />);
        expect(screen.getByText('Lionel Messi')).toBeInTheDocument();
        expect(screen.getByText('Football')).toBeInTheDocument();
        expect(screen.getByText('Serena Williams')).toBeInTheDocument();
        expect(screen.getByText('Tennis')).toBeInTheDocument();
    });

    it('renders the button only when showButton is true', () => {
        render(<SportifGrid title="Nos Sportifs" sportifs={mockSportifs} />);
        expect(screen.getByText('En savoir plus')).toBeInTheDocument();
        expect(screen.queryAllByText('En savoir plus')).toHaveLength(1);
    });

    it('calls onClick handler when button is clicked', () => {
        render(<SportifGrid title="Nos Sportifs" sportifs={mockSportifs} />);
        const button = screen.getByText('En savoir plus');
        fireEvent.click(button);
        expect(mockSportifs[0].onClick).toHaveBeenCalled();
    });
});
