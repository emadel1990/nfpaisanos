import { Experimental_CssVarsProvider as CssVarsProvider, experimental_extendTheme as extendTheme } from '@mui/material/styles';

export const ITEM_HEIGHT = 70;
export const ITEM_PADDING_TOP = 8;
export const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 250
		}
	}
};
export const CIRCLE_COLORS = {
	green: '#45B36B',
	black: '#000000',
	pink: '#EF466F',
	purple: '#9757D7'
};

export const myTheme = extendTheme({
	colorSchemes: {
		light: {
			palette: {
				primary: {
					main: '#FCFCFD'
				},
				secondary: {
					main: '#FCFCFD'
				}
			}
		},
		dark: {
			palette: {
				primary: {
					main: '#FCFCFD'
				},
				secondary: {
					main: '#FCFCFD'
				}
			}
		}
	}
});
