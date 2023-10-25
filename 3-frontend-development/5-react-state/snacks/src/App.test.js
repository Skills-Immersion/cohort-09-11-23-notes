import { render, screen } from '@testing-library/react';
import App from './App';

// smoke test
test('app can render without crashing and burning', () => {
  render(<App />)
})

// can you puzzle out what this test is trying to accomplish?
// writing a test that is going to check if the app renders a learn react link
test('renders Snacks! header', () => {
  // renders the app component
  render(<App />);
  // grab the element that has the text "learn react"
  const snacksHeaderElement = screen.getByText(/Snacks!/i);
  // makes sure that element exists
  expect(snacksHeaderElement).toBeInTheDocument();
});
