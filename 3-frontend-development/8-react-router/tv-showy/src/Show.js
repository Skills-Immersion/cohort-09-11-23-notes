import React from 'react';

function Show({ show }) {
  return <div>
    <h2>{show.name}</h2>
    <img src={show.image?.medium} />
    <p>Average rating: {show.rating.average}</p>
  </div>
}

export default Show;