import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
	drawerComponent: {
		height: '50px',
		display: 'flex',
		alignItems: 'center',
		'@media (min-width: 750px)': {
			display: 'none'
		}
	},
	drawer: {
		width: 200,
		flexShrink: 0,
		'& .MuiDrawer-paper': {
			width: 200,
			backgroundColor: 'black',
			color: 'white',
			opacity: '1'
		},
		'& .MuiSvgIcon-root': {
			backgroundColor: 'white',
			color: 'black',
			borderRadius: '4px'
		}
	},
	hamburger: {
		color: '#777E91',
		width: '32px',
		height: '32px'
	}
});
