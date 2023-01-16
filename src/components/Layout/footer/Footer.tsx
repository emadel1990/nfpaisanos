'use client';

// Next
import Image from 'next/image';

// Material UI
import { useStyles } from './style';
import { Divider, Grid, Typography, Box } from '@mui/material';

export const Footer = () => {
	const classes = useStyles();
	return (
		<footer>
			<Grid
				className={classes.footer}
				container
				justifyContent="center"
				alignContent={'center'}>
				<Divider
					className={classes.dividerFooterTop}
					light={true}
				/>
				<Grid
					className={classes.footerItemTextContainer}
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
					<Box className={classes.boxText}>
						<Typography className={classes.footerTitle}>The New Creative</Typography>
						<Typography className={classes.footerTitle}>Economy.</Typography>
					</Box>
				</Grid>
				<Divider
					className={classes.dividerFooter}
					light={true}
				/>
				<Grid
					item
					className={classes.footerCreatedBy}
					xs={10}
					sm={10}
					md={10}
					lg={10}
					xl={10}>
					<Typography className={classes.doneBy}>
						Created with <span style={{ color: 'red' }}>♥</span> by Emanuel Delgado
					</Typography>
				</Grid>
			</Grid>
		</footer>
	);
};
