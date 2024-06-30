import React from 'react';
import {render, screen} from '@testing-library/react';
import IdePage from './IdePage';

jest.mock('../../components/StructureViewer/StructureViewer', () => (props: any) => (
	<div data-testid="structure-viewer">{props.structure}</div>
));

describe('IdePage Component', () => {
	test('renders Navbar component', () => {
		render(<IdePage />);
		expect(screen.getByRole('banner')).toBeInTheDocument();
	});

	test('renders SourceViewer with default structure', () => {
		render(<IdePage />);
		expect(screen.getByText(/water molecule/i)).toBeInTheDocument();
	});
});
