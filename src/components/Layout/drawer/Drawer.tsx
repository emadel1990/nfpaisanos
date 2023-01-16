'use client';

import { useState } from 'react';

import Link from 'next/link';

import Line from '@assets/Line.svg';

// Material
import { Box, List, Divider, ListItemButton, ListItemIcon, ListItemText, ListItem, Button, Drawer } from '@mui/material';
import { useStyles } from './style';
import PublicIcon from '@mui/icons-material/Public';
import DataObjectIcon from '@mui/icons-material/DataObject';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import DragHandleIcon from '@mui/icons-material/DragHandle';

// Interfaces
import { IDrawerItems } from '@/src/interfaces/drawer/IDrawerItems';
import { Icon } from '@mui/material';
import Image from 'next/image';

const drawerItems: IDrawerItems[] = [
	{
		Discover: {
			icon: <PublicIcon />,
			text: 'Discover',
			path: '/'
		}
	},
	{
		'What we do': {
			icon: <DataObjectIcon />,
			text: 'What we do',
			path: '/'
		}
	},
	{
		Paisanos: {
			icon: <EmojiFlagsIcon sx={{ backgroundColor: '#e3fc7b !important' }} />,
			text: 'Paisanos',
			path: 'https://www.paisanos.io'
		}
	}
];

export const DrawerComponent = () => {
	const classes = useStyles();
	const [toggle, setToggle] = useState(false);

	return (
		<Box className={classes.drawerComponent}>
			<Button onClick={() => setToggle(true)}>
				<Image
					src={Line}
					alt="line"
					className={classes.hamburger}
				/>
			</Button>
			<Drawer
				className={classes.drawer}
				anchor="right"
				open={toggle}
				onClose={() => setToggle(false)}>
				{
					<Box
						onClick={() => setToggle(false)}
						onKeyDown={() => setToggle(false)}>
						<List>
							{drawerItems.map((item, index) => {
								const key = Object.keys(item)[0];
								const value = item[key];
								return (
									<Link
										key={key}
										href={value.path}
										target="_blank">
										<ListItem
											key={key}
											disablePadding>
											<ListItemButton>
												<ListItemIcon sx={{ mr: -2 }}>{value.icon}</ListItemIcon>
												<ListItemText
													primary={value.text}
													sx={{ color: 'white' }}
												/>
											</ListItemButton>
										</ListItem>
									</Link>
								);
							})}
						</List>
						<Divider />
					</Box>
				}
			</Drawer>
		</Box>
	);
};
