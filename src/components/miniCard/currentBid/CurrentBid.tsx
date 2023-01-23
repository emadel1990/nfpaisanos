'use client';

import { useState, useEffect } from 'react';
import style from './currentBid.module.css';
import { INFPaisano, IETH_USD } from '@/src/interfaces/nfpaisano';
import { Poppins, DM_Sans } from '@next/font/google';

const poppins = Poppins({
	weight: '400',
	style: 'normal',
	subsets: ['latin']
});

const dm_sans = DM_Sans({
	weight: '700',
	style: 'normal',
	subsets: ['latin']
});

export interface CurrentBidProps {
	paisano: INFPaisano;
	ethPrice: IETH_USD;
}

export const CurrentBid = ({ paisano, ethPrice }: CurrentBidProps) => {
	const [usdPrice, setUsdPrice] = useState<number>(1);
	const [time, setTime] = useState<Date>(new Date(paisano.endsAt));

	useEffect(() => {
		const usd = Number(ethPrice.usd.replace(/[^0-9.-]+/g, ''));
		const eth = Number(ethPrice.eth.replace(/[^0-9.-]+/g, ''));
		const paisa = parseFloat(paisano.highestBid.split(' ')[0]);
		setUsdPrice((prev) => (prev = (usd * paisa) / eth));
		setTime((prev) => (prev = new Date(paisano.endsAt)));
	}, [paisano, ethPrice]);

	return (
		<div className={`${style.currentBid} - ${poppins.className}`}>
			<div className={style.sectionOne}>
				<p className={style.currentBidP}>Current Bid</p>
				<h1 className={`${style.priceETH} ${dm_sans.className}`}>{`${paisano.highestBid}`}</h1>
				<p className={style.priceUSD}>
					{usdPrice.toLocaleString('es-AR', { style: 'currency', currency: 'ARS', minimumFractionDigits: 2 })}
				</p>
			</div>
			<div className={style.sectionTwo}>
				<p className={style.auctionEnds}>Auction ending in</p>
				<div className={style.time}>
					<span>
						<p className={style.number}>{time.getHours()}</p>
						<p className={style.numberD}>Hrs</p>
					</span>
					<span>
						<p className={style.number}>{time.getMinutes()}</p>
						<p className={style.numberD}>mins</p>
					</span>
					<span>
						<p className={style.number}>{time.getSeconds()}</p>
						<p className={style.numberD}>secs</p>
					</span>
				</div>
			</div>
		</div>
	);
};
