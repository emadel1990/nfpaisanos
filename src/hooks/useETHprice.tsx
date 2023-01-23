'use client';
import { useState, useEffect } from 'react';
import { getService } from '../services/appService';
import { AppEndpoints } from '../enums/appEnums';
import { IETH_USD } from '@/src/interfaces/nfpaisano';

export function useETHprice() {
	const [ethPrice, setEthPrice] = useState<IETH_USD>({} as IETH_USD);
	const [error, setError] = useState<boolean>(false);

	/* useEffect(() => {
		try {
			getPrice();
		} catch (error) {
			setError(true);
		}
	}, []); */

	const getPrice = async () => {
		const getEthPrice = await getService(AppEndpoints.ETH_USD);
		setEthPrice(getEthPrice as IETH_USD);
		console.log(getEthPrice);
	};

	return { ethPrice, error };
}
