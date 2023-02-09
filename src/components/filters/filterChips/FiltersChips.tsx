'use client';

import style from './filterChips.module.css';
import { Poppins } from '@next/font/google';
import { FilterInput } from '../filterInput/FilterInput';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Stack, Grid, Box } from '@mui/material';
import { CustomChip } from '@components/globals/chip';
import { useMediaQueries } from '@/src/hooks/useMediaQueries';

const poppins = Poppins({
	weight: '400',
	style: 'normal',
	subsets: ['latin']
});

export const FiltersChips = () => {
	const matches = useMediaQueries('(min-width: 750px)');
	return (
		<Stack
			className={style.filtersChipsContainer}
			position={'relative'}
			flex={1}
			justifyContent={'space-between'}
			direction={'row'}
			spacing={3}
			sx={{ margin: '30px 0', minHeight: '30px' }}>
			{matches ? (
				<Box>
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
						placeholder={'Newest'}
						position={'end'}
						formControlStyle={style.filterSearchFC}
						outlinedInputStyle={style.filterSearchInput}
						inputPropsStyle={`${poppins.className} ${style.filterSearchInput2}`}
						disabled={true}
					/>
				</Box>
			) : null}
			<Box className={style.containerChips}>
				<CustomChip
					label="All items"
					selected={true}
				/>
				<CustomChip label="Art" />
				<CustomChip label="Photography" />
			</Box>
		</Stack>
	);
};
