import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Header from './Header';
import Main from './Main';
import SnackLi from './SnackLi';

function App() {
  let tastySnacks = [
    {
      name: 'Popcorn',
      price: 4,
      description: 'butter optional'
    },
    {
      name: 'Candy',
      price: 3,
      description: 'sour patch kids or snickers'
    },
    {
      name: 'Cheese Stick',
      price: 2,
      description: 'stringy and delicious'
    }
  ];

  // set up a state variable for numberOfClicks
  const [numberOfClicks, setNumberOfClicks] = useState(0);
  return (
    <div className="container">
      <Header numberOfClicks={numberOfClicks} setNumberOfClicks={setNumberOfClicks} />
      {/* passing in our props - setting the value of the snacks prop to be the value of the variable, tastySnacks */}
      <Main snacks={tastySnacks} numberOfClicks={numberOfClicks} />
      {/* extra practice with map, specifically for lists and tables */}
      <ul>
        {tastySnacks.map(tastySnack => <SnackLi potato={tastySnack} key={tastySnack.name} />)}
      </ul>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {tastySnacks.map(ts => <tr key={ts.name}>
            <td>{ts.name}</td>
            <td>${ts.price}</td>
          </tr>)}
        </tbody>
      </table>

    </div>
  );
}

export default App;
