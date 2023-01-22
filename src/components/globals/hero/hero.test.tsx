import React from 'react';
import { render, screen, cleanup, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Hero } from './Hero';

beforeEach(async () => {
	await waitFor(() => {
		render(<Hero />);
	});
});

describe('Hero 1st title', () => {
	it('Should render the 1st title in Hero component', () => {
		const heroTitle = screen.getByText('CREATE, EXPLORE, & SELL DIGITAL ART NFTS.');
		expect(heroTitle).toBeInTheDocument();
	});
});

describe('Hero 2nd title', () => {
	it('Should render the 2nd title in Hero component', () => {
		const heroTitle = screen.getByText(/The new creative economy./i);
		expect(heroTitle).toBeInTheDocument();
	});
});

describe('Hero button explore', () => {
	it('Should render the button explore in Hero component', () => {
		const heroButton = screen.getByRole('button', { name: /Explore/i });
		expect(heroButton).toBeInTheDocument();
	});
});
