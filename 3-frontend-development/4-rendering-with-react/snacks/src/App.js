import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './Header';
import Main from './Main';

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
    }
  ];

  return (
    <div className="App">
      <Header />
      {/* passing in our props - setting the value of the snacks prop to be the value of the variable, tastySnacks */}
      <Main snacks={tastySnacks} />

    </div>
  );
}

export default App;
