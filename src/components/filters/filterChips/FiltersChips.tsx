'use client';

import { Stack } from '@mui/system';
import { CustomChip } from '@components/globals/chip';

export const FiltersChips = () => {
	return (
		<Stack
			flex={1}
			justifyContent={'flex-start'}
			direction={'row'}
			spacing={3}
			sx={{ margin: '30px 0' }}>
			<CustomChip
				label="All items"
				selected={true}
			/>
			<CustomChip label="Art" />
			<CustomChip label="Photography" />
		</Stack>
	);
};
