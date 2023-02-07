'use client';

import style from './filters.module.css';

import { FiltersChips } from './filterChips';
import { FiltersInputs } from './filterInputs';
import { FilterPrice } from './filterPrice';
import { Divider } from '@mui/material';
import { SecondFilters } from './secondFilters/SecondFilters';

export const Filters = () => {
	return (
		<div className={style.filtersContainer}>
			<FiltersInputs />
			<FiltersChips />
			<FilterPrice />
			<Divider sx={{ mt: 2, mb: 2, borderColor: '#353945' }} />
			<SecondFilters />
		</div>
	);
};
