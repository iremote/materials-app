import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import SourceViewer from './components/SourceViewer/SourceViewer';
import StructureViewer from './components/StructureViewer/StructureViewer';
import Grid2 from '@mui/material/Unstable_Grid2';
import styled from '@mui/system/styled';
import Box from '@mui/material/Box';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import {defaultTheme} from './theme/defaultTheme';

const defaultStructure = `
3
water molecule
O 0.000000 0.000000 0.000000
H 0.758602 0.504284 0.000000
H 0.758602 -0.504284 0.000000
`.trim();

function App() {
	const [structure, setStructure] = useState<string>(defaultStructure);
	const handleSourceChange = (newSource: string) => {
		setStructure(newSource);
	};
	return (
		<ThemeProvider theme={defaultTheme}>
			<Navbar/>
			<StyledGrid2 container>
				<Grid2 xs={12} sm={6}>
					<ResponsiveBox>
						<SourceViewer defaultValue={structure} onChange={handleSourceChange}/>
					</ResponsiveBox>
				</Grid2>
				<Grid2 xs={12} sm={6}>
					<ResponsiveBox>
						<StructureViewer structure={structure}/>
					</ResponsiveBox>
				</Grid2>
			</StyledGrid2>
		</ThemeProvider>
	);
}

export default App;

// Styles

const StyledGrid2 = styled(Grid2)(({theme}) => ({
	marginTop: '64px',
	[theme.breakpoints.down('sm')]: {
		marginTop: '56px'
	},
}));

const ResponsiveBox = styled(Box)(({theme}) => ({
	height: '100vh',
	width: '100%',
	[theme.breakpoints.down('sm')]: {
		height: '50vh'
	},
}));
