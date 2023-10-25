import React, { useState } from 'react';
import './Snack.css';

function Snack({ snack = { name: 'default snack', price: 0, description: '' } }) {
  const [addedToCart, setAddedToCart] = useState(false);
  return <div className="card">
    <h3>
      <button className="add-to-cart" onClick={() => setAddedToCart(!addedToCart)}>
        {addedToCart ? '-' : '+'}
      </button>
      {addedToCart && 'Added to cart!'} {snack.name} ${snack.price}
    </h3>
    {/* conditional rendering */}
    {/* What ? True : False */}

    <p>{snack.price < 4 ? 'this is a value item' : 'this is expensive'}! {snack.description}</p>
    {/* using JS && behavior to show the paragraph only if the first part is true */}
    {snack.name === 'Popcorn' && <p>as long as the popcorn machine is working today</p>}
  </div>
}

export default Snack;