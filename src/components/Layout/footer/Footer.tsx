'use client';

import style from './footer.module.css';

// Next
import Image from 'next/image';

// Material UI
import { Divider, Grid, Typography, Box } from '@mui/material';

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
					src="/logo.svg"
					alt="logo"
					width={120}
					height={50}
					priority
				/>
				<Box className={style.boxText}>
					<Typography className={style.footerTitle}>The New Creative</Typography>
					<Typography className={style.footerTitle}>Economy.</Typography>
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
				<Typography className={style.doneBy}>
					Created with <span style={{ color: 'red' }}>♥</span> by Emanuel Delgado
				</Typography>
			</Grid>
		</Grid>
	);
};
