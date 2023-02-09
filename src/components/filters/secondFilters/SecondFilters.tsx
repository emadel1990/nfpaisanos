'use client';
import style from './secondFilters.module.css';
import { Poppins } from '@next/font/google';
import { Typography, Stack, Box, Divider } from '@mui/material';
import { FilterInput } from '../filterInput/FilterInput';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { SelectColors } from '../selectColors/SelectColors';

const poppins = Poppins({
	weight: ['400', '700'],
	style: 'normal',
	subsets: ['latin']
});

export const SecondFilters = () => {
	return (
		<Stack
			flex={1}
			rowGap={4}>
			<Box>
				<Typography
					fontWeight={700}
					className={`${poppins.className} ${style.likes}`}>
					LIKES
				</Typography>
				<FilterInput
					icon={
						<KeyboardArrowDownIcon
							sx={{
								color: '#777e91',
								border: '1px solid #777e91b9',
								borderRadius: '50%',
								width: '35px',
								height: '35px',
								padding: '4px'
							}}
						/>
					}
					placeholder={'Most liked'}
					position={'end'}
					formControlStyle={style.filterSearchFC}
					outlinedInputStyle={style.filterSearchInput}
					inputPropsStyle={`${poppins.className} ${style.filterSearchInput2}`}
				/>
			</Box>
			<Box>
				<Typography
					fontWeight={700}
					className={`${poppins.className} ${style.likes}`}>
					OPEN
				</Typography>
				<SelectColors />
			</Box>
		</Stack>
	);
};
