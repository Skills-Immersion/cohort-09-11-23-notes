import { useState } from 'react';
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
    },
    {
      id: 0,
      name: "Bulbasaur",
      type: ["grass", "poison"],
      abilities: ["Overgrow", "Chlorophyll"],
      imageUrl: "https://archives.bulbagarden.net/media/upload/thumb/f/fb/0001Bulbasaur.png/250px-0001Bulbasaur.png"
    },
    {
      name: 'Manbearpig',
      type: 'Disaster',
      abilities: ['Confusion', 'Global Warming', 'Paranoia'],
      imageUrl: 'https://cdn.vox-cdn.com/thumbor/4mj2duNHzbqo874L-G-MQfFDRFI=/0x0:4800x2700/1200x0/filters:focal(0x0:4800x2700):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/13439561/SouthParkPress.jpg'
    },
    {
      name: 'Ursa',
      type: 'Bear',
      abilities: 'Yogi your lunch',
      imageUrl: 'https://static.wikia.nocookie.net/yogibear/images/8/88/Yogi_Bear_-_Character_Profile_Image.png/revision/latest?cb=20220627024042'
    },
    {
      name: 'timmy',
      type: 'air',
      abilities: ["cuteness overload", "up up and away"],
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Eopsaltria_australis_-_Mogo_Campground.jpg'
    }
  ]);
  function addCreature(newCreatureToAdd) {
    setCreatures([newCreatureToAdd, ...creatures])
  }
  function deleteCreature(creatureToDelete) {
    setCreatures(creatures.filter(c => c !== creatureToDelete))
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
