import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('render footer with title', () => {
  render(<Footer />);
  const footerText = screen.getByText(/Vinicius/i);
  expect(footerText).toBeInTheDocument();
});
