'use client';

import style from './filterPrice.module.css';
import { Slider } from '@mui/material';

export const FilterPrice = () => {
	return (
		<div>
			<Slider
				sx={{
					'& .MuiSlider-rail': {
						backgroundColor: 'red !important',
						height: '20px !important',
						borderRadius: '10px 20px 20px 10px'
					}
				}}
			/>
		</div>
	);
};
