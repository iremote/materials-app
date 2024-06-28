import React, { useEffect, useRef, useCallback } from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/system';
import * as ThreeDMol from '3dmol';

const ViewerContainer = styled(Box)(() => ({
	position: 'relative',
	height: '100%',
	width: '100%',
}));

export interface StructureViewerProps {
	structure?: string;
}

const StructureViewer: React.FC<StructureViewerProps> = ({ structure }) => {
	const trimmedStructure = structure?.trim();
	const viewerRef = useRef<HTMLDivElement>(null);
	const viewerInstance = useRef<ReturnType<typeof ThreeDMol.createViewer> | null>(null);

	const initializeViewer = useCallback(() => {
		if (viewerRef.current && trimmedStructure) {
			if (!viewerInstance.current) {
				viewerInstance.current = ThreeDMol.createViewer(viewerRef.current, { backgroundColor: 'white' });
			}
			const viewer = viewerInstance.current;
			viewer.clear();
			viewer.addModel(trimmedStructure, 'xyz');
			viewer.setStyle({}, { stick: {} });
			viewer.zoomTo();
			viewer.render();
		}
	}, [trimmedStructure]);

	useEffect(() => {
		initializeViewer();
	}, [initializeViewer]);

	useEffect(() => {
		const handleResize = () => {
			initializeViewer();
		};
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [initializeViewer]);

	return <ViewerContainer ref={viewerRef} data-testid="structure-viewer" />;
};

export default StructureViewer;
