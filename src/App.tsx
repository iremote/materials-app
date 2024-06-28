import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import SourceViewer from './components/SourceViewer/SourceViewer';
import StructureViewer from './components/StructureViewer/StructureViewer';
import Grid2 from '@mui/material/Unstable_Grid2';
import {styled} from '@mui/system';
import {Box} from '@mui/material';

function App() {
	const [structure, setStructure] = useState<string>();
	const handleSourceChange = (newSource: string) => {
		setStructure(newSource);
	};
	return (
		<>
			<Navbar/>
			<StyledGrid2 container>
				<Grid2 xs={12} sm={6}>
					<ResponsiveBox>
						<SourceViewer onChange={handleSourceChange}/>
					</ResponsiveBox>
				</Grid2>
				<Grid2 xs={12} sm={6}>
					<ResponsiveBox>
						<StructureViewer structure={structure}/>
					</ResponsiveBox>
				</Grid2>
			</StyledGrid2>
		</>
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
