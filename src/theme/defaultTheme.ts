import {responsiveFontSizes, ThemeOptions} from '@mui/material/styles';
import {createTheme, Theme} from '@mui/material/styles';

const themeOptions: ThemeOptions = {
	palette: {
		mode: 'light',
		primary: {
			main: '#434550',
		},
		secondary: {
			main: '#fef6f8',
		},
	},
};

export const defaultTheme: Theme = responsiveFontSizes(
	createTheme(themeOptions)
);
