'use client';

import style from './filterPrice.module.css';

import { Poppins } from '@next/font/google';
import { Typography, Stack, Box, Divider } from '@mui/material';
import { CustomSlider } from '@/src/components/globals/customSlider';

const poppins = Poppins({
	weight: '700',
	style: 'normal',
	subsets: ['latin']
});

export const FilterPrice = () => {
	return (
		<Box className={style.filterPriceContainer}>
			<Stack
				className={style.filterPriceStack}
				flex={1}
				rowGap={1}>
				<Typography className={`${poppins.className} ${style.priceRange}`}>PRICE RANGE</Typography>
				<CustomSlider />
				<Stack
					flex={1}
					flexDirection={'row'}
					justifyContent={'space-between'}>
					<Typography className={`${poppins.className} ${style.priceEth}`}>0.01 ETH</Typography>
					<Typography className={`${poppins.className} ${style.priceEth}`}>10 ETH</Typography>
				</Stack>
				<Divider className={style.customDivider} />
			</Stack>
		</Box>
	);
};
