import { render, screen } from '@testing-library/react';
import Snack from './Snack';

test('gummy bears render correctly', () => {
  // step 1: set up my input data
  let inputSnack = {
    name: 'gummy bears',
    price: 7,
    description: 'squishy'
  }
  // step 2: give that data to my code/run my code
  render(<Snack snack={inputSnack} />)

  // step 3: make sure the code worked
  // name of the snack ('gummy bears') appears on the page
  // if we want to match the PARTIAL text of an element, we have to use a /regular expression/ instead of a 'string'
  const gummyBearsElement = screen.getByText(/gummy bears/);
  expect(gummyBearsElement).toBeInTheDocument();
  // '$7' is on the page
  const priceElement = screen.getByText(/\$7/);
  expect(priceElement).toBeInTheDocument();
  // popcorn <p> is not on the page
  const popcornDescriptionElement = screen.queryByText(/as long as the popcorn machine is working today/)
  expect(popcornDescriptionElement).toBeNull();
})

// I would add at least two more tests
// low price and a high price
// Popcorn to test that conditional logic
