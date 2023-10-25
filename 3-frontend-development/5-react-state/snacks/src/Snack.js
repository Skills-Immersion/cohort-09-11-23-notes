import React, { useState } from 'react';
import './Snack.css';

function Snack({ snack = { name: 'default snack', price: 0, description: '' }, addToCart, deleteFromCart, setFavorite }) {
  const [addedToCart, setAddedToCart] = useState(false);

  const cartButtonClicked = () => {
    // if we haven't added it to the cart yet, do the adding
    if (!addedToCart) {
      addToCart(snack.name)
    } else {
      deleteFromCart(snack.name)
    }
    setAddedToCart(!addedToCart)
  }

  return <div className="card">
    <h3>
      <button className="add-to-cart" onClick={cartButtonClicked}>
        {addedToCart ? '-' : '+'}
      </button>
      {addedToCart && 'Added to cart!'} {snack.favorite && '*~*~*~'}{snack.name}{snack.favorite && '*~*~*~'} ${snack.price}
    </h3>
    <button onClick={() => setFavorite(snack.name)}>Favorite</button>
    {/* conditional rendering */}
    {/* What ? True : False */}

    <p>{snack.price < 4 ? 'this is a value item' : 'this is expensive'}! {snack.description}</p>
    {/* using JS && behavior to show the paragraph only if the first part is true */}
    {snack.name === 'Popcorn' && <p>as long as the popcorn machine is working today</p>}
  </div>
}

export default Snack;