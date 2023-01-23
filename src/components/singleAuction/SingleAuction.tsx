'use client';
import { useState } from 'react';
import style from './singleAuction.module.css';

import { randomPaisano } from '@src/utils/randomPaisano';

import { ImageWithAuthor } from '../imageWithAuthor/ImageWithAuthor';
import { IETH_USD, INFPaisano } from '@interfaces/nfpaisano';
import { MiniCard } from '../miniCard/MiniCard';

export interface SingleAuctionProps {
	paisanos: INFPaisano[];
	ethPrice: IETH_USD;
}

export const SingleAuction = ({ paisanos, ethPrice }: SingleAuctionProps) => {
	const [random, setRandom] = useState<number>(Number(randomPaisano(0, paisanos.length - 1)));

	const exploreRandom = () => {
		setRandom(Number(randomPaisano(0, paisanos.length - 1)));
	};

	if (paisanos.length <= 0) return null;

	return (
		<section className={style.singleAuction}>
			<button
				onClick={exploreRandom}
				className={style.btnExplore}>
				Explore
			</button>
			<ImageWithAuthor
				paisano={paisanos[random]}
				ethPrice={ethPrice}
			/>
		</section>
	);
};
