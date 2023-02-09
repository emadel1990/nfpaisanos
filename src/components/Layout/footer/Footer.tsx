'use client';

import style from './footer.module.css';

import { Poppins } from '@next/font/google';

// Next
import Image from 'next/image';

// Material UI
import { Divider, Grid, Typography, Box } from '@mui/material';

const poppins = Poppins({
	weight: '400',
	style: 'normal',
	subsets: ['latin'],
	display: 'swap'
});

export const Footer = () => {
	return (
		<Grid
			className={style.footer}
			container
			justifyContent="center">
			<Divider
				className={style.dividerFooterTop}
				light={true}
			/>
			<Grid
				className={style.footerItemTextContainer}
				item
				xs={10}
				sm={10}
				md={10}
				lg={10}
				xl={10}>
				<Image
					className={style.footerLogo}
					src="/logo.svg"
					alt="logo"
					width={120}
					height={50}
					priority
				/>
				<Box className={style.boxText}>
					<Typography className={`${style.footerTitle} ${poppins.className}`}>The New Creative</Typography>
					<Typography className={`${style.footerTitle} ${poppins.className}`}>Economy.</Typography>
				</Box>
			</Grid>
			<Divider
				className={style.dividerFooter}
				light={true}
			/>
			<Grid
				item
				className={style.footerCreatedBy}
				xs={10}
				sm={10}
				md={10}
				lg={10}
				xl={10}>
				<Typography className={`${style.doneBy} ${poppins.className}`}>
					Created with <span style={{ color: 'red' }}>♥</span> by Emanuel Delgado
				</Typography>
			</Grid>
		</Grid>
	);
};
