import React, { useState } from 'react';
import Snack from './Snack';

// props is the parameters that we get from the parent component
// we usually immediately destructure props to access each key/value pair
// function Main(props) {
function Main({ snacks, numberOfClicks, setFavorite }) {
  // cart is an array
  const [cart, setCart] = useState([]);
  // helper function that will just add something to the cart array
  // writing this function here makes the code inside of the Snack component really easy
  function addToCart(snackToAdd) {
    setCart([...cart, snackToAdd])
  }
  // deletes from the cart whatever snack is passed in as a param
  function deleteFromCart(snackToDelete) {
    let filteredCart =
      cart.filter(snack => snack !== snackToDelete)
    setCart(filteredCart);
  }
  return <main>
    <h2>Today's Menu {numberOfClicks}</h2>
    {
      cart.length > 0 ?
        <div>Here's what's in your cart: {cart.join(', ')}</div> :
        ''
    }
    {/* the key is used by React, not actually by the Snack component, as a part of rendering an array */}
    {/* the key has to be unique per element */}
    {snacks.map(s =>
      <Snack snack={s} key={s.name} addToCart={addToCart} deleteFromCart={deleteFromCart} setFavorite={setFavorite} />
    )}
  </main>
}

export default Main;
