import React from 'react';
import './App.css';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import {defaultTheme} from './theme/defaultTheme';
import IdePage from './pages/IdePage/IdePage';

function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<IdePage/>
		</ThemeProvider>
	);
}

export default App;
