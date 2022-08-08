import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders home link', () => {
  render(<App />);
  const homeLink = screen.getAllByText(/Home/i);
  expect(homeLink[0]).toBeInTheDocument();
});
