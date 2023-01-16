import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
	divider: {
		background: 'white',
		opacity: 0.2,
		'@media (max-width: 567px)': {
			display: 'none'
		}
	}
});
