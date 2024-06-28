import React from 'react';
import { render, screen } from '@testing-library/react';
import StructureViewer, { StructureViewerProps } from './StructureViewer';

describe('StructureViewer', () => {
	const sampleXYZStructure = `
	3
  water molecule
  O 0.000000 0.000000 0.000000
  H 0.758602 0.504284 0.000000
  H 0.758602 -0.504284 0.000000
  `;

	it('renders without crashing', () => {
		const props: StructureViewerProps = { structure: sampleXYZStructure };
		render(<StructureViewer {...props} />);
		expect(screen.getByTestId('structure-viewer')).toBeInTheDocument();
	});

	it('displays the structure viewer container', () => {
		const props: StructureViewerProps = { structure: sampleXYZStructure };
		render(<StructureViewer {...props} />);
		expect(screen.getByTestId('structure-viewer')).toBeTruthy();
	});
});
