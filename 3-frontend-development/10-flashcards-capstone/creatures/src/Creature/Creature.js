import React, { useState } from 'react';
import './Creature.css';
import EditACreature from './EditACreature';

function Creature({ creature, deleteCreature, editCreature }) {
  const [showEditForm, setShowEditForm] = useState(false);
  return <div>
    <h3>{creature.name}</h3>
    <img src={creature.imageUrl} />
    <ul>
      <li>abilities:
        {/* this is a cautionary tale about standardizing your data types */}
        {Array.isArray(creature.abilities) ? creature.abilities.join(', ') : creature.abilities}</li>
      <li>type: {creature.type}</li>
      <li>
        <button onClick={() => setShowEditForm(!showEditForm)} className="btn btn-warning">Edit</button>
        <button onClick={() => deleteCreature(creature)} className="btn btn-danger">Delete</button>
      </li>
      {showEditForm && <li>
        <EditACreature creature={creature} editCreature={editCreature} setShowEditForm={setShowEditForm} />
      </li>}
    </ul>
  </div>
}

export default Creature;