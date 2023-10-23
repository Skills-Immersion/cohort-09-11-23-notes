import React from 'react';
import Snack from './Snack';

// props is the parameters that we get from the parent component
// we usually immediately destructure props to access each key/value pair
// function Main(props) {
function Main({ snacks }) {
  return <main>
    <h2>Today's Menu</h2>
    <Snack snack={snacks[0]} />
    <Snack snack={snacks[1]} />
    <Snack></Snack>
  </main>
}

export default Main;
