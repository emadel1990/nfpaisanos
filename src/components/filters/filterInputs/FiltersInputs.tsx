'use client';

import style from './filtersInputs.module.css';

import { Poppins } from '@next/font/google';
import { Box, Divider } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
import { theme } from './helpers';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { FilterInput } from '../filterInput/FilterInput';
import { useMediaQueries } from '@hooks/useMediaQueries';

const poppins = Poppins({
	weight: '400',
	style: 'normal',
	subsets: ['latin']
});

export const FiltersInputs = () => {
	const matches = useMediaQueries('(min-width: 750px)');
	return (
		<div className={style.filtersInputsContainer}>
			<CssVarsProvider
				theme={theme}
				defaultMode="dark">
				<Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', rowGap: '30px' }}>
					<FilterInput
						icon={
							<SearchIcon
								sx={{
									backgroundColor: `${matches ? '#3772FF' : ''}`,
									width: '35px',
									minHeight: '35px',
									borderRadius: '50%',
									padding: '4px',
									color: `${matches ? '#FCFCFD' : '#777E91'}`
								}}
							/>
						}
						placeholder={matches ? 'Type to find something nice...' : 'Type your keywords'}
						multiline={matches ? true : false}
						position={'end'}
						formControlStyle={style.filterSearchFC}
						outlinedInputStyle={style.filterSearchInput}
						inputPropsStyle={`${poppins.className} ${style.filterSearchInput2}`}
					/>
					{!matches ? (
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
							placeholder={'Recently added'}
							position={'end'}
							formControlStyle={style.filterSearchFC}
							outlinedInputStyle={style.filterSearchInput}
							inputPropsStyle={`${poppins.className} ${style.filterSearchInput2}`}
							disabled={true}
						/>
					) : null}
				</Box>
			</CssVarsProvider>
		</div>
	);
};
