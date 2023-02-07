'use client';

import style from './filtersInputs.module.css';

import { Poppins } from '@next/font/google';
import { Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Experimental_CssVarsProvider as CssVarsProvider, experimental_extendTheme as extendTheme } from '@mui/material/styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { FilterInput } from '../filterInput/FilterInput';

const poppins = Poppins({
	weight: '400',
	style: 'normal',
	subsets: ['latin']
});

const theme = extendTheme({
	colorSchemes: {
		light: {
			palette: {
				primary: {
					main: '#FCFCFD'
				}
			}
		},
		dark: {
			palette: {
				primary: {
					main: '#FCFCFD'
				}
			}
		}
	}
});

export const FiltersInputs = () => {
	return (
		<div className={style.filtersInputsContainer}>
			<CssVarsProvider
				theme={theme}
				defaultMode="dark">
				<Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', rowGap: '30px' }}>
					<FilterInput
						icon={<SearchIcon sx={{ color: '#777E91', width: '35px', height: '35px' }} />}
						placeholder={'Type your keywords'}
						position={'end'}
						formControlStyle={style.filterSearchFC}
						outlinedInputStyle={style.filterSearchInput}
						inputPropsStyle={`${poppins.className} ${style.filterSearchInput2}`}
					/>
					<FilterInput
						icon={
							<KeyboardArrowDownIcon
								sx={{ color: '#777e91', border: '1px solid #777e91b9', borderRadius: '50%', width: '35px', height: '35px', padding: '4px' }}
							/>
						}
						placeholder={'Recently added'}
						position={'end'}
						formControlStyle={style.filterSearchFC}
						outlinedInputStyle={style.filterSearchInput}
						inputPropsStyle={`${poppins.className} ${style.filterSearchInput2}`}
						disabled={true}
					/>
				</Box>
			</CssVarsProvider>
		</div>
	);
};
