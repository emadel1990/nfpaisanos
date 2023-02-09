'use client';

import style from './filters.module.css';

import { FiltersChips } from './filterChips';
import { FiltersInputs } from './filterInputs';
import { FilterPrice } from './filterPrice';
import { Divider } from '@mui/material';
import { SecondFilters } from './secondFilters/SecondFilters';
import { Box, Stack } from '@mui/material';

export const Filters = () => {
	return (
		<div className={style.filtersContainer}>
			<FiltersInputs />
			<FiltersChips />
			<Stack className={style.stackFilters}>
				<Box className={style.filtersBox}>
					<FilterPrice />
					<SecondFilters />
				</Box>
				<Box>ASD</Box>
			</Stack>
		</div>
	);
};
