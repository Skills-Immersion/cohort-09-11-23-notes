import { useEffect, useState } from 'react';
import './App.css';
import Creature from './Creature';
import AddACreature from './AddACreature';

function App() {
  const [creatures, setCreatures] = useState([
    {
      name: "komodo dragon",
      type: "lizard",
      abilities: "eating deer whole",
      imageUrl: "https://wallsdesk.com/wp-content/uploads/2017/01/Komodo-Dragon-for-desktop.jpg"
    }
  ]);
  function fetchAllCreatures() {
    fetch('http://localhost:5000/creatures')
      .then(response => response.json())
      .then(data => setCreatures(data));
  }
  useEffect(fetchAllCreatures, []);
  function addCreature(newCreatureToAdd) {
    // setCreatures([newCreatureToAdd, ...creatures])
    // now that we have a backend, adding a creature means making a request to that backend
    // and then, after the request is done, re-fetching all of the creature data
    fetch('http://localhost:5000/creatures', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCreatureToAdd)
    })
      .then(fetchAllCreatures)

  }
  function deleteCreature(creatureToDelete) {
    // setCreatures(creatures.filter(c => c !== creatureToDelete))
    fetch(`http://localhost:5000/creatures/${creatureToDelete.id}`, { method: 'DELETE' })
      .then(fetchAllCreatures);
  }
  return (
    <div className="container">
      <h1>Creatures</h1>
      <AddACreature addCreature={addCreature} />
      {creatures.map(c => <Creature creature={c} key={c.name} deleteCreature={deleteCreature} />)}
    </div>
  );
}

export default App;
