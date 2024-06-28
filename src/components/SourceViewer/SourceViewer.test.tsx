import { render, screen } from '@testing-library/react';
import { SourceViewer } from './';

describe('SourceViewer', () => {
  it('renders without crashing', () => {
    render(<SourceViewer />);
    expect(screen.getByText(/Test/i, {})).toBeTruthy();
  });
});
