import { render, screen } from '@testing-library/react';
import { IdePage } from './';

describe('IdePage', () => {
  it('renders without crashing', () => {
    render(<IdePage/>);
    expect(screen.getByText(/MAT3/i, {})).toBeTruthy();
  });
});
