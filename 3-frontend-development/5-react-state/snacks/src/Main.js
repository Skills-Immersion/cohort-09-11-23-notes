import React from 'react';
import Snack from './Snack';

// props is the parameters that we get from the parent component
// we usually immediately destructure props to access each key/value pair
// function Main(props) {
function Main({ snacks }) {
  function snackify(s) {
    return <Snack snack={s} />
  }
  return <main>
    <h2>Today's Menu</h2>
    {/* <Snack snack={snacks[0]} />
    <Snack snack={snacks[1]} /> */}
    {snacks.map(snack => `Snack named ${snack.name} costs ${snack.price}`)}
    {/* {snacks.map(snackify)} */}
    {/* the key is used by React, not actually by the Snack component, as a part of rendering an array */}
    {/* the key has to be unique per element */}
    {snacks.map(s => <Snack snack={s} key={s.name} />)}
  </main>
}

export default Main;
