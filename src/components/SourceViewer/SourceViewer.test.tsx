import {render, screen} from '@testing-library/react';
import {SourceViewer, SourceViewerProps} from './';
import React from 'react';

const props: SourceViewerProps = {
	defaultValue: `
3
water molecule
O 0.000000 0.000000 0.000000
H 0.758602 0.504284 0.000000
H 0.758602 -0.504284 0.000000
`
};

describe('SourceViewer', () => {
	it('renders without crashing', () => {
		render(<SourceViewer {...props} />);
	});

	it('displays loading state', () => {
		render(<SourceViewer/>);
		expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
	});
});
