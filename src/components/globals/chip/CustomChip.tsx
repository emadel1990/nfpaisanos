'use client';
import { useState } from 'react';
import { DM_Sans } from '@next/font/google';
import { Chip } from '@mui/material';

const dm_sans = DM_Sans({
	weight: '700',
	style: 'normal',
	subsets: ['latin']
});

export interface IChip {
	label: string;
	selected?: boolean;
}

export const CustomChip = ({ label, selected }: IChip) => {
	const [isSelected, setIsSelected] = useState(selected ? selected : false);

	return (
		<Chip
			className={dm_sans.className}
			sx={{
				color: '#777E91',
				maxWidth: '160px',
				fontSize: '15px',
				lineHeight: '32px',
				height: '100%',
				maxHeight: '32px',
				backgroundColor: isSelected ? '#E6E8EC' : '',
				transition: 'all 0.3s ease-in-out'
			}}
			color={'default'}
			clickable={true}
			label={label ? label : 'Chip'}
			variant={!isSelected ? 'filled' : 'outlined'}
			onClick={() => setIsSelected((prev) => !prev)}
		/>
	);
};
