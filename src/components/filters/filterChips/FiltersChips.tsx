'use client';

import { Stack, Grid } from '@mui/material';
import { CustomChip } from '@components/globals/chip';

export const FiltersChips = () => {
	return (
		<Stack
			position={'relative'}
			flex={1}
			justifyContent={'flex-start'}
			direction={'row'}
			spacing={3}
			sx={{ margin: '30px 0', minHeight: '40px' }}>
			<CustomChip
				label="All items"
				selected={true}
			/>
			<CustomChip label="Art" />
			<CustomChip label="Photography" />
		</Stack>
	);
};
