'use client';

import style from './filtersInputs.module.css';

import { Poppins } from '@next/font/google';
import { FormControl, InputAdornment, OutlinedInput, IconButton, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Experimental_CssVarsProvider as CssVarsProvider, experimental_extendTheme as extendTheme } from '@mui/material/styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

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
					<FormControl
						className={style.filterSearchFC}
						variant="outlined">
						<OutlinedInput
							className={style.filterSearchInput}
							placeholder="Type your keywords"
							inputProps={{
								className: `${poppins.className} ${style.filterSearchInput2}`
							}}
							endAdornment={
								<InputAdornment position="end">
									<IconButton>
										<SearchIcon sx={{ color: '#777E91', width: '35px', height: '35px' }} />
									</IconButton>
								</InputAdornment>
							}
						/>
					</FormControl>
					<FormControl
						className={style.filterSearchFC}
						variant="outlined">
						<OutlinedInput
							className={style.filterSearchInput}
							placeholder="Recently added"
							disabled
							inputProps={{
								className: `${poppins.className} ${style.filterSearchInput2}`
							}}
							endAdornment={
								<InputAdornment position="end">
									<IconButton>
										<KeyboardArrowDownIcon
											sx={{ color: '#777E91', border: '1px solid #777E91', borderRadius: '50%', width: '35px', height: '35px' }}
										/>
									</IconButton>
								</InputAdornment>
							}
						/>
					</FormControl>
				</Box>
			</CssVarsProvider>
		</div>
	);
};
