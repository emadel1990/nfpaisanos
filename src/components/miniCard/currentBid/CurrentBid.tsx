'use client';

import { useState, useEffect, useCallback } from 'react';
import style from './currentBid.module.css';
import { INFPaisano, IETH_USD } from '@/src/interfaces/nfpaisano';
import { Poppins, DM_Sans } from '@next/font/google';
import { intervalCounter, getTime, getPrice } from '@/src/utils/currentBid';

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

export interface IEndTime {
	hours: string;
	minutes: string;
	seconds: string;
}

export interface ICurrentBidProps {
	paisano: INFPaisano;
	ethPrice: IETH_USD;
}

export const CurrentBid = ({ paisano, ethPrice }: ICurrentBidProps) => {
	const [usdPrice, setUsdPrice] = useState<number>(1);
	const [time, setTime] = useState<IEndTime>({ hours: '00', minutes: '00', seconds: '00' } as IEndTime);

	const getPriceCallback = useCallback(() => setUsdPrice(getPrice(ethPrice, paisano)), [paisano, ethPrice]);
	const getTimeCallback = useCallback(() => setTime(getTime(paisano)), [paisano, ethPrice]);

	useEffect(() => {
		getTimeCallback();
	}, [getTimeCallback]);

	useEffect(() => {
		getPriceCallback();
	}, [getPriceCallback]);

	useEffect(() => {
		const interval = setInterval(() => setTime(intervalCounter(time)), 1000);
		return () => clearInterval(interval);
	}, [time, paisano]);

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
						<p className={style.number}>{`${Number(time.hours) > 100}` ? '100+' : time.hours}</p>
						<p className={style.numberD}>Hrs</p>
					</span>
					<span>
						<p className={style.number}>{time.minutes}</p>
						<p className={style.numberD}>mins</p>
					</span>
					<span>
						<p className={style.number}>{time.seconds}</p>
						<p className={style.numberD}>secs</p>
					</span>
				</div>
			</div>
		</div>
	);
};
