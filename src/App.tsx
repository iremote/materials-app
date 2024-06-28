import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import SourceViewer from './components/SourceViewer/SourceViewer';
import StructureViewer from './components/StructureViewer/StructureViewer';
import Grid2 from '@mui/material/Unstable_Grid2';
import {styled} from '@mui/system';

function App() {
	const [structure, setStructure] = useState<string>();
	const handleSourceChange = (newSource: string) => {
		setStructure(newSource);
	};
	return (
		<>
			<Navbar/>
			<StyledGrid2 container>
				<Grid2 xs={6}>
					<SourceViewer onChange={handleSourceChange}/>
				</Grid2>
				<Grid2 xs={6}>
					<StructureViewer structure={structure}/>
				</Grid2>
			</StyledGrid2>
		</>
	);
}

export default App;

// Styles

const StyledGrid2 = styled(Grid2)(() => ({
	marginTop: '64px',
	height: 'calc(100vh - 64px)',
}));
