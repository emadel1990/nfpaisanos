'use client';

import { useState, Fragment } from 'react';

// Material
import { Box, List, Divider, ListItemButton, ListItemIcon, ListItemText, ListItem, Button, Drawer } from '@mui/material';
import { useStyles } from './style';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import DragHandleIcon from '@mui/icons-material/DragHandle';

export const DrawerComponent = () => {
	const classes = useStyles();
	const [toggle, setToggle] = useState(false);

	return (
		<Box sx={{ height: '50px', display: 'flex', alignItems: 'center' }}>
			<Button onClick={() => setToggle(true)}>
				<DragHandleIcon sx={{ color: 'white' }} />
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
							{['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
								<ListItem
									key={text}
									disablePadding>
									<ListItemButton>
										<ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
										<ListItemText primary={text} />
									</ListItemButton>
								</ListItem>
							))}
						</List>
						<Divider />
					</Box>
				}
			</Drawer>
		</Box>
	);
};
