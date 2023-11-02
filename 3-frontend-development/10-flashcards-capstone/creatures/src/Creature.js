import React from 'react';
import './Creature.css';

function Creature({ creature, deleteCreature }) {
  return <div>
    <h3>{creature.name}</h3>
    <img src={creature.imageUrl} />
    <ul>
      <li>abilities:
        {/* this is a cautionary tale about standardizing your data types */}
        {Array.isArray(creature.abilities) ? creature.abilities.join(', ') : creature.abilities}</li>
      <li>type: {creature.type}</li>
      <li><button onClick={() => deleteCreature(creature)} className="btn btn-danger">Delete</button></li>
    </ul>
  </div>
}

export default Creature;