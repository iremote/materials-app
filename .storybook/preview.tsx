import React from 'react';
import type {Preview} from "@storybook/react";
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import {defaultTheme} from '../src/theme/defaultTheme';

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
};

export default preview;

export const decorators = [
	(Story: any) => <ThemeProvider theme={defaultTheme}><Story /></ThemeProvider>,
];
