'use client';
import { useStyles } from './style';

// Next
import { Poppins } from '@next/font/google';
import Image from 'next/image';

// Material UI
import { Divider, Grid } from '@mui/material';

// Components
import { DrawerComponent } from '../drawer/Drawer';

// Hooks
import useMediaQuery from '@hooks/useMediaQuery';

const poppins = Poppins({
	weight: '400',
	subsets: ['latin']
});

export const Navbar = () => {
	const classes = useStyles();
	const matches = useMediaQuery('(max-width: 375px)');

	return (
		<header>
			<Grid
				className={classes.navbar}
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
					{matches && <DrawerComponent />}
				</Grid>
			</Grid>

			{matches && (
				<Divider
					light={true}
					sx={{ background: 'white' }}
				/>
			)}
		</header>
	);
};
