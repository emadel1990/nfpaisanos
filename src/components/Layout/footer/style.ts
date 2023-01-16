import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
	footer: {
		position: 'fixed',
		bottom: 0,
		background: '#23262F',
		'@media (min-width: 467px)': { background: 'black' }
	},
	footerItemTextContainer: {
		'@media (min-width: 467px)': {
			display: 'flex',
			flexDirection: 'column',
			width: '100%',
			alignItems: 'center'
		}
	},
	footerCreatedBy: {
		display: 'flex',
		justifyContent: 'center'
	},
	doneBy: {
		color: '#777E91',
		fontSize: '12px',
		padding: '25px',
		textAlign: 'center'
	},
	dividerFooter: {
		marginTop: '10px',
		background: 'white',
		opacity: 0.2,
		width: '100%',
		'@media (min-width: 467px)': {
			width: '80%'
		}
	},
	dividerFooterTop: {
		background: 'white',
		opacity: 0.2,
		width: '100%',
		'@media (min-width: 467px)': {
			width: '100%'
		},
		'@media (max-width: 467px)': {
			display: 'none'
		}
	},
	footerTitle: {
		fontFamily: 'Poppins, sans-serif',
		fontWeight: 400,
		fontSize: '16px',
		color: '#FCFCFD'
	},
	boxText: {
		'@media (min-width: 467px)': {
			display: 'flex',
			gap: '4px'
		}
	}
});
