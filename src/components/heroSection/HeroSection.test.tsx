// test/HeroSection.test.tsx

jest.mock('fontfaceobserver', () => {
  return jest.fn().mockImplementation(() => ({
    load: () => Promise.resolve(),
  }));
});

import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import HeroSection from './HeroSection';

const testImage = 'https://via.placeholder.com/150';

describe.skip('HeroSection Component (skipped for later)', () => {
  beforeEach(() => {
    render(<HeroSection bgImage={testImage} />);
  });

  it('renders the main title after font loads', async () => {
    const title = await screen.findByText(/TRANSFORMEZ VOTRE PERFORMANCE/i);
    expect(title).toBeInTheDocument();
  });

  it('renders the subtitle after font loads', async () => {
    const subtitle = await screen.findByText(/Écrivons ensemble LA plus belle/i);
    expect(subtitle).toBeInTheDocument();
  });

  it('applies the background image correctly', async () => {
    const section = screen.getByLabelText('Hero section');
    await waitFor(() =>
      expect(section).toHaveStyle(`background-image: url(${testImage})`)
    );
  });
});
