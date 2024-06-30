import React from 'react';
import {render, screen} from '@testing-library/react';
import StructureViewer from './StructureViewer'; // Adjust the path as necessary

jest.mock('3dmol', () => {
	return {
		createViewer: jest.fn(() => ({
			clear: jest.fn(),
			addModel: jest.fn(),
			setStyle: jest.fn(),
			zoomTo: jest.fn(),
			render: jest.fn(),
		})),
	};
});

describe('StructureViewer Component', () => {
	test('renders the viewer container', () => {
		render(<StructureViewer/>);
		expect(screen.getByTestId('structure-viewer')).toBeInTheDocument();
	});
});
