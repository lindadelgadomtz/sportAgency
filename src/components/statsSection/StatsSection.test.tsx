import React from 'react';
import { render, screen } from '@testing-library/react';
import StatsSection from './StatsSection';
import useInView from '../../utils/UseInView';

jest.mock('../../utils/UseInView', () => {
    const React = require('react');
    return {
        __esModule: true,
        default: () => [React.createRef(), true],
    };
});

const mockStats = [
    {
        label: 'Athletes',
        count: 1000,
        icon: '/icons/athletes.png',
        link: '/athletes',
    },
    {
        label: 'Clubs',
        count: 2000,
    },
    {
        label: 'Football',
        count: 6100,
        percentage: 75,
    },
];

function getClassName(el: Element): string {
    const cn = el.className;
    if (typeof cn === 'string') return cn;
    if (typeof cn === 'object' && 'baseVal' in cn) return (cn as SVGAnimatedString).baseVal;
    return '';
}

describe('StatsSection', () => {
    it('renders title and all stat items', () => {
        render(<StatsSection title="Stats Title" stats={mockStats} />);
        expect(screen.getByText('Stats Title')).toBeInTheDocument();
        expect(screen.getByText('Athletes')).toBeInTheDocument();
        expect(screen.getByText('Clubs')).toBeInTheDocument();
        expect(screen.getByText('Football')).toBeInTheDocument();
    });

    it('renders links when provided', () => {
        render(<StatsSection title="With Link" stats={mockStats} />);
        const athleteLink = screen.getByRole('link', { name: /athletes/i });
        expect(athleteLink).toHaveAttribute('href', '/athletes');
    });

    it.skip('renders animated counts instantly when animation is disabled', () => {
        render(<StatsSection title="Counts" stats={mockStats} disableAnimation />);

        expect(
            screen.getAllByText((_, node) =>
                !!node?.textContent?.replace(/\u202F/g, '').includes('1000')
            ).length
        ).toBeGreaterThan(0);

        expect(
            screen.getAllByText((_, node) =>
                !!node?.textContent?.replace(/\u202F/g, '').includes('2000')
            ).length
        ).toBeGreaterThan(0);

        expect(
            screen.getAllByText((_, node) =>
                !!node?.textContent?.replace(/\u202F/g, '').includes('6100')
            ).length
        ).toBeGreaterThan(0);
    });

    it('renders percentage circle if percentage is provided', () => {
        render(<StatsSection title="With Percentage" stats={mockStats} disableAnimation />);
        const allSVGs = screen.getAllByRole('img', { hidden: true });

        const circle = allSVGs.find((el) => getClassName(el).includes('circle'));

        expect(circle).toBeDefined();
    });
});
