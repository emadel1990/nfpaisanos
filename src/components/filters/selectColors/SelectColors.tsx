import { useState, useEffect, useRef } from 'react';
import style from './selectColors.module.css';

import { Poppins, DM_Sans } from '@next/font/google';
import { Box, MenuItem, FormControl, Select, SelectChangeEvent, OutlinedInput, Typography, Divider, Stack, Button } from '@mui/material';
import { Experimental_CssVarsProvider as CssVarsProvider, experimental_extendTheme as extendTheme } from '@mui/material/styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { MenuProps, CIRCLE_COLORS, myTheme } from './helpers';
import CancelIcon from '@mui/icons-material/Cancel';

const poppins = Poppins({
	weight: ['400', '700'],
	style: 'normal',
	subsets: ['latin']
});

const dmSans = DM_Sans({
	weight: '700',
	style: 'normal',
	subsets: ['latin']
});

export const SelectColors = () => {
	const [colors, setColors] = useState('');
	const [open, setOpen] = useState(false);

	useEffect(() => {
		const html = document.querySelector('html');
		const menu = document.getElementById('menu-dd');
		if (html && open) {
			/* html.style.setProperty('overflow-y', 'hidden'); */
		} else if (html && !open) {
			html.style.setProperty('overflow-y', 'auto');
		}
	}, [open]);

	const handleChange = (event: SelectChangeEvent) => {
		setColors(event.target.value as string);
	};

	const handleOpenClose = () => {
		setOpen(!open);
	};

	return (
		<CssVarsProvider
			theme={myTheme}
			defaultMode="dark">
			<Box>
				<FormControl fullWidth>
					<Select
						onClick={handleOpenClose}
						onClose={() => setOpen(false)}
						open={open}
						className={style.selectColors}
						sx={{ marginBottom: `${open ? '300px' : '10px'}` }}
						IconComponent={() => (
							<KeyboardArrowDownIcon
								onClick={handleOpenClose}
								sx={{
									color: '#777e91',
									border: '1px solid #777e91b9',
									borderRadius: '50%',
									width: '35px',
									height: '35px',
									padding: '4px',
									marginRight: '8px',
									cursor: 'pointer'
								}}
							/>
						)}
						displayEmpty
						input={<OutlinedInput />}
						MenuProps={{
							disableScrollLock: true,
							...MenuProps,
							PaperProps: { className: `${style.menuPaper} ${poppins.className}` },
							itemProp: `${style.menuItem}`
						}}
						inputProps={{ 'aria-label': 'Without label' }}
						renderValue={(selected) => {
							if (selected.length === 0) {
								return (
									<p
										className={`${poppins.className} ${style.menuItem}`}
										style={{ marginLeft: '10px' }}>
										Colors
									</p>
								);
							}
							const color = CIRCLE_COLORS[`${selected.toLocaleLowerCase() as keyof typeof CIRCLE_COLORS}`];
							return (
								<Box className={style.itemSelected}>
									<p
										className={style.colorCircle}
										style={{ background: `${color}`, border: `${color === '#000000' ? '1px #FCFCFD solid' : ''}` }}
									/>
									<Typography className={`${style.menuItem} ${poppins.className}`}>{selected}</Typography>
								</Box>
							);
						}}
						value={colors}
						onChange={handleChange}>
						<MenuItem value={''}>
							<p
								className={style.colorCircle}
								style={{ border: '1px #3772FF solid' }}
							/>
							<Typography
								className={`${style.menuItem} ${poppins.className}`}
								sx={{ color: '#3772FF' }}>
								All Colors
							</Typography>
						</MenuItem>
						<MenuItem value={'Black'}>
							<p
								className={style.colorCircle}
								style={{ background: '#000' }}
							/>
							<Typography className={`${style.menuItem} ${poppins.className}`}>Black</Typography>
						</MenuItem>
						<MenuItem value={'Green'}>
							<p
								className={style.colorCircle}
								style={{ background: '#45B26B' }}
							/>
							<Typography className={`${style.menuItem} ${poppins.className}`}>Green</Typography>
						</MenuItem>
						<MenuItem value={'Pink'}>
							<p
								className={style.colorCircle}
								style={{ background: '#EF466F' }}
							/>
							<Typography className={`${style.menuItem} ${poppins.className}`}>Pink</Typography>
						</MenuItem>
						<MenuItem value={'Purple'}>
							<p
								className={style.colorCircle}
								style={{ background: '#9757D7' }}
							/>
							<Typography className={`${style.menuItem} ${poppins.className}`}>Purple</Typography>
						</MenuItem>
					</Select>
				</FormControl>
				<Divider className={style.customDivider} />
				{colors.trim().length > 0 && (
					<Stack
						className={style.resetFilter}
						flex={1}
						columnGap={1}
						flexDirection={'row'}
						alignItems={'center'}>
						<Button
							onClick={() => setColors('')}
							className={style.resetFiltersBtn}>
							<CancelIcon />
						</Button>
						<Typography className={`${dmSans.className} ${style.resetFilterText}`}>Reset filter</Typography>
					</Stack>
				)}
			</Box>
		</CssVarsProvider>
	);
};
