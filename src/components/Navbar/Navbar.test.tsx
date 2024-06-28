import { render, screen } from '@testing-library/react';
import { Navbar } from './';

describe('Navbar', () => {
  it('renders without crashing', () => {
    render(<Navbar />);
    expect(screen.getByText(/Import/i, {})).toBeTruthy();
  });
});