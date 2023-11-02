const express = require('express');
const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors());
const morgan = require('morgan');
app.use(morgan('dev'));

app.get('/', (req, res, next) => res.send('root route'));

const creatures = [{
  id: 1,
  name: "Bulbasaur",
  type: ["grass", "poison"],
  abilities: ["Overgrow", "Chlorophyll"],
  imageUrl: "https://archives.bulbagarden.net/media/upload/thumb/f/fb/0001Bulbasaur.png/250px-0001Bulbasaur.png"
},
{
  id: 2,
  name: 'Manbearpig',
  type: 'Disaster',
  abilities: ['Confusion', 'Global Warming', 'Paranoia'],
  imageUrl: 'https://cdn.vox-cdn.com/thumbor/4mj2duNHzbqo874L-G-MQfFDRFI=/0x0:4800x2700/1200x0/filters:focal(0x0:4800x2700):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/13439561/SouthParkPress.jpg'
},
{
  id: 3,
  name: 'Ursa',
  type: 'Bear',
  abilities: 'Yogi your lunch',
  imageUrl: 'https://static.wikia.nocookie.net/yogibear/images/8/88/Yogi_Bear_-_Character_Profile_Image.png/revision/latest?cb=20220627024042'
},
{
  id: 4,
  name: 'timmy',
  type: 'air',
  abilities: ["cuteness overload", "up up and away"],
  imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Eopsaltria_australis_-_Mogo_Campground.jpg'
}];

app.get('/creatures', (req, res, next) => {
  res.send(creatures);
})

let nextId = 5;
app.post('/creatures', (req, res, next) => {
  let newCreature = {
    ...req.body,
    id: nextId++
  };
  creatures.push(newCreature);
  res.status(201).send(newCreature);
})

app.delete('/creatures/:id', (req, res, next) => {
  let idx = creatures.findIndex(c => c.id === Number(req.params.id))
  creatures.splice(idx, 1);
  res.status(204).send();
})
module.exports = app;