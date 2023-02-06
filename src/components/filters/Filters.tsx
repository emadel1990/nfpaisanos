'use client';

import style from './filters.module.css';

import { FiltersChips } from './filterChips';
import { FiltersInputs } from './filterInputs';
import { FilterPrice } from './filterPrice';

export const Filters = () => {
	return (
		<div className={style.filtersContainer}>
			<FiltersInputs />
			<FiltersChips />
			<FilterPrice />
		</div>
	);
};
