import React from 'react';

function Show({ show, setCurrentShow }) {
  return <div>
    <h2 onClick={() => setCurrentShow(show)}>{show.name}</h2>
  </div>
}

export default Show;