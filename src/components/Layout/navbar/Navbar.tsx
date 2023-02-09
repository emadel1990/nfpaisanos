'use client';

import style from './navbar.module.css';
import { DM_Sans } from '@next/font/google';
// Next
import Image from 'next/image';

// Material UI
import { Divider, Grid, Typography, Stack } from '@mui/material';

// Components
import { DrawerComponent } from '@components/Layout/drawer';

const dmSans = DM_Sans({
	weight: '700',
	style: 'normal',
	subsets: ['latin']
});

export const Navbar = () => {
	return (
		<header>
			<Grid
				container
				justifyContent="space-around"
				alignItems="center"
				height={81}>
				<Grid
					sx={{ display: 'flex', justifyContent: 'center', objectFit: 'cover', paddingLeft: '10px', alignItems: 'center' }}
					gap={4}
					item
					xs={8}
					sm={6}
					md={6}
					lg={6}
					xl={6}>
					<Image
						className={style.logo}
						src="/logo.svg"
						alt="logo"
						width={120}
						height={50}
						priority
					/>
					<Divider
						orientation="vertical"
						className={style.dividerVertical}
						light={true}
					/>
					<Stack
						flex={1}
						flexDirection="row"
						alignItems={'center'}
						gap={4}
						height={'40px'}>
						<Typography className={`${style.linkLogo} ${dmSans.className}`}>Discover</Typography>
						<Typography className={`${style.linkLogo} ${dmSans.className}`}>What we do</Typography>
					</Stack>
				</Grid>
				<Grid
					sx={{ display: 'flex', justifyContent: 'flex-end' }}
					item
					xs={2}
					sm={4}
					md={4}
					lg={3}
					xl={2}>
					<button className={`${style.btnConnect} ${dmSans.className}`}>Connect Wallet</button>
					<DrawerComponent />
				</Grid>
			</Grid>

			<Divider
				className={style.divider}
				light={true}
			/>
		</header>
	);
};
