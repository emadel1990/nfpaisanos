import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
	drawer: {
		width: 240,
		flexShrink: 0,
		'& .MuiDrawer-paper': {
			width: 240,
			backgroundColor: 'black',
			color: 'white',
			opacity: '0.8'
		}
	}
});
