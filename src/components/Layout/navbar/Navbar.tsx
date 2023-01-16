'use client';

// Next
import Image from 'next/image';

// Material UI
import { useStyles } from './style';
import { Divider, Grid } from '@mui/material';

// Components
import { DrawerComponent } from '@components/Layout/drawer';

export const Navbar = () => {
	const classes = useStyles();

	return (
		<header>
			<Grid
				container
				justifyContent="space-between"
				alignItems="flex-end"
				height={70}>
				<Grid
					sx={{ display: 'flex', justifyContent: 'center', objectFit: 'cover', paddingLeft: '10px' }}
					item
					xs={6}
					sm={4}
					md={4}
					lg={3}
					xl={2}>
					<Image
						src="/logo.svg"
						alt="logo"
						width={120}
						height={50}
						priority
					/>
				</Grid>
				<Grid
					sx={{ display: 'flex', justifyContent: 'flex-end' }}
					item
					xs={6}
					sm={4}
					md={4}
					lg={3}
					xl={2}>
					<DrawerComponent />
				</Grid>
			</Grid>

			<Divider
				className={classes.divider}
				light={true}
			/>
		</header>
	);
};
