import { render, screen } from '@testing-library/react';
import Header from './Header';

test('render header logo text', () => {
  render(<Header />);
  const logoText = screen.getByText(/Logo/i);
  expect(logoText).toBeInTheDocument();
});

test('renders header with Home and About navigation links', () => {
  render(<Header />);
  const homeNavLink = screen.getByText('Home');
  const aboutNavLink = screen.getByText('About');

  expect(homeNavLink).toBeInTheDocument();
  expect(aboutNavLink).toBeInTheDocument();
});

test('navigation links have the correct href attribute', () => {
  render(<Header />);
  const homeNavLink = screen.getByText('Home');
  const aboutNavLink = screen.getByText('About');

  expect(homeNavLink.closest('a')).toHaveAttribute('href', '/#');
  expect(aboutNavLink.closest('a')).toHaveAttribute('href', '/#');
});
