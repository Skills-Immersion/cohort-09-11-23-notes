const express = require('express');
const morgan = require('morgan');
const games = require('./data/games');

const app = express();
app.use(morgan('dev'));
// the all-important body parser, which will make req.body available for POST/PUT requests
app.use(express.json());

app.get('/', (req, res, next) => {
  res.send('welcome to the games app. we like games.')
})

// list
app.get('/games', (req, res, next) => {
  res.send({ data: games })
})

// read
app.get('/games/:id', (req, res, next) => {
  let gameWeAreLookingFor = games.find(g => g.id === Number(req.params.id));
  if (gameWeAreLookingFor) {
    res.send({ data: gameWeAreLookingFor })
  } else {
    // we did not find a game
    // we should send a 404
    next({
      status: 404,
      message: `game with id ${req.params.id} not found`
    })
  }
})

// create
let nextId = 6;
app.post('/games', (req, res, next) => {
  // create the object that represents the new game
  let newGame = {
    id: nextId,
    name: req.body.data.name,
    medium: req.body.data.medium,
    minPlayerCount: req.body.data.minPlayerCount,
    maxPlayerCount: req.body.data.maxPlayerCount
  }
  nextId++;
  // save that object into our array
  games.push(newGame);
  // send back our response
  res.status(201).send({ data: newGame });
})

// error handling
// 404 handler
app.use((req, res, next) => {
  next({
    status: 404,
    message: `path not found: ${req.originalUrl}`
  })
})
app.use((err, req, res, next) => {
  let { status, message } = err;
  console.log(err);
  res.status(status).send({ error: message })
})
module.exports = app;