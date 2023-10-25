import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Header from './Header';
import Main from './Main';
import SnackLi from './SnackLi';

function App() {
  const [tastySnacks, setTastySnacks] = useState([
    {
      name: 'Popcorn',
      price: 4,
      description: 'butter optional',
      favorite: false
    },
    {
      name: 'Candy',
      price: 3,
      description: 'sour patch kids or snickers',
      favorite: false
    },
    {
      name: 'Cheese Stick',
      price: 2,
      description: 'stringy and delicious',
      favorite: false
    }
  ]);
  
  // sets the snack with that name to be a favorite
  function setFavorite(nameOfSnack) {
    // map over the array of tasty snacks
    setTastySnacks(tastySnacks.map(snack =>
      // if it's the snack we're trying to update
      snack.name === nameOfSnack ?
        // then we use the data about that snack, but update favorite to be true
        { ...snack, favorite: true } :
        // otherwise, we just use whatever snack data was already there, no updates required
        snack
    ))
  }

  // set up a state variable for numberOfClicks
  const [numberOfClicks, setNumberOfClicks] = useState(0);
  return (
    <div className="container">
      <Header numberOfClicks={numberOfClicks} setNumberOfClicks={setNumberOfClicks} />
      {/* passing in our props - setting the value of the snacks prop to be the value of the variable, tastySnacks */}
      <Main snacks={tastySnacks} numberOfClicks={numberOfClicks} setFavorite={setFavorite} />
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
