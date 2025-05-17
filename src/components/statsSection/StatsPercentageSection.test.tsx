import React from 'react';
import { render, screen } from '@testing-library/react';
import StatsPercentageSection from './StatsPercentageSection';
import useInView from '../../utils/UseInView';

jest.mock('../../utils/UseInView', () => {
    const React = require('react'); // ✅ Safe inside mock scope
    return {
        __esModule: true,
        default: () => [React.createRef(), true],
    };
});

const mockStats = [
    {
        label: 'Football',
        count: 6100,
        percentage: 75,
        link: '/sports/football'
    },
    {
        label: 'eSports',
        count: 1500,
        percentage: 30
    }
];

describe('StatsPercentageSection', () => {
    it('renders title and all stat items', () => {
        render(<StatsPercentageSection title="Test Stats" stats={mockStats} theme="dark" disableAnimation />);

        expect(screen.getByText('Test Stats')).toBeInTheDocument();
        expect(screen.getByText('Football')).toBeInTheDocument();
        expect(screen.getByText('eSports')).toBeInTheDocument();
        expect(screen.getByText('75% de notre base')).toBeInTheDocument();
        expect(screen.getByText('30% de notre base')).toBeInTheDocument();
    });

    it('renders links when provided', () => {
        render(<StatsPercentageSection title="With Links" stats={mockStats} disableAnimation />);
        const footballLink = screen.getByRole('link', { name: /football/i });
        expect(footballLink).toHaveAttribute('href', '/sports/football');
    });


});
