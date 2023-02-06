import React from 'react';
import { render, screen, cleanup, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

import { INFPaisano, IETH_USD } from '@/src/interfaces/nfpaisano';
import { SingleAuction } from './SingleAuction';

const paisanos: INFPaisano[] = [] as INFPaisano[];
const ethPrice: IETH_USD = {} as IETH_USD;

beforeEach(() => {
	render(
		<SingleAuction
			ethPrice={ethPrice}
			paisanos={paisanos}
		/>
	);
});

describe('SingleAuction', () => {
	it('Should render the SingleAuction component', () => {
		render(
			<SingleAuction
				ethPrice={ethPrice}
				paisanos={paisanos}
			/>
		);
	});
});

describe('SingleAuction section', () => {
	it('Should render 2 sub childrens in SingleAuction component', () => {
		const singleAuctionSection = render(
			<SingleAuction
				ethPrice={ethPrice}
				paisanos={paisanos}
			/>
		);
		expect(singleAuctionSection.baseElement.innerHTML).toBe('<div></div><div></div>');
	});
});
