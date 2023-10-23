import logo from './logo.svg';
import './App.css';
import React from 'react';

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

  const element = (
    <React.Fragment>
      <h1>Hello World!</h1>
      <h2>Have a good day.</h2>
    </React.Fragment>
  );
  return (
    <div className="App">
      <header>
        <h1>Snacks!</h1>
        {element}
      </header>
      <main>
        <h2>Today's Menu</h2>
        <div className="card">
          <h3>{tastySnacks[0].name.toUpperCase()} $4</h3>
          <p>butter optional</p>
        </div>
        <div>
          <h3>Candy $3</h3>
          <p>candy is sweet</p>
        </div>
      </main>
    </div>
  );
}

export default App;
