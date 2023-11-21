// app setup - create the app, and any high-level middleware
const express = require('express');
const app = express();

// app-level middleware: something that will run for every request
app.use((req, res, next) => {
  console.log(`new request: ${req.originalUrl}`)
  if (req.originalUrl.includes('potato')) {
    next('error: url contains potato')
  } else {
    // because this is intermediate middleware, not a handler, we call next() to move on to the next function that needs to run
    next();
  }
})
// routes - set up each route to listen on and what to send in the response

// this function is route-level middleware; we will include it on specific routes where we want it to run
function logAGoodRoute(req, res, next) {
  console.log('what a good request');
  next();
}

// route needs to know the HTTP method (GET, POST, etc)
// the path (/...)
// what to do (handler function)
app.get('/', (req, res, next) => {
  res.send('welcome to our first express application!!!!!!!!!');
})

// I want a route at the path "/hello" that sends back a response like "Hello, username"
const helloHandler = (req, res, next) => {
  // req.query allows us to access query string parameters
  // for query string parameters, we don't declare the name of that parameter in code, we just access it
  let { firstName = 'Timmy', lastName = 'the Bird' } = req.query;
  let name = firstName + ' ' + lastName;
  res.send(`Hello, ${name}`)
};
app.get('/hello', logAGoodRoute, helloHandler)

// route-level middleware to validate that the :id route param is a number
function validateIdIsNumber(req, res, next) {
  if (Number.isNaN(Number(req.params.id))) {
    // if it's not a number, go into error handling
    next('the id sent in the URL is not a number')
  } else {
    // it is a number! just continue
    next();
  }
}

// route at /books/:id that sends back which book ID you requested
app.get('/books/:id', validateIdIsNumber, (req, res, next) => {
  // req.params is for accessing route params
  let id = req.params.id;
  // it is a number! just send the nice response
  res.send(`You requested book number ${id}. Is that equal to 2? ${Number(id) === 2}`)
})

app.get('/authors/:id', validateIdIsNumber, (req, res, next) => {
  // req.params is for accessing route params
  let id = req.params.id;
  res.send(`You requested author number ${id}. Is that equal to 2? ${Number(id) === 2}`)
})
let states = { "AL": "Alabama", "AK": "Alaska", "AZ": "Arizona", "AR": "Arkansas", "CA": "California", "CO": "Colorado", "CT": "Connecticut", "DE": "Delaware", "FL": "Florida", "GA": "Georgia", "HI": "Hawaii", "ID": "Idaho", "IL": "Illinois", "IN": "Indiana", "IA": "Iowa", "KS": "Kansas", "KY": "Kentucky", "LA": "Louisiana", "ME": "Maine", "MD": "Maryland", "MA": "Massachusetts", "MI": "Michigan", "MN": "Minnesota", "MS": "Mississippi", "MO": "Missouri", "MT": "Montana", "NE": "Nebraska", "NV": "Nevada", "NH": "New Hampshire", "NJ": "New Jersey", "NM": "New Mexico", "NY": "New York", "NC": "North Carolina", "ND": "North Dakota", "OH": "Ohio", "OK": "Oklahoma", "OR": "Oregon", "PA": "Pennsylvania", "RI": "Rhode Island", "SC": "South Carolina", "SD": "South Dakota", "TN": "Tennessee", "TX": "Texas", "UT": "Utah", "VT": "Vermont", "VA": "Virginia", "WA": "Washington", "WV": "West Virginia", "WI": "Wisconsin", "WY": "Wyoming" }

function validateAbbrLengthIsTwo(req, res, next) {
  let { abbr } = req.params;
  if (abbr.length !== 2) {
    next('abbreviation length must be two');
  } else {
    next();
  }
}

function validateAbbrIsForARealState(req, res, next) {
  let { abbr } = req.params;
  // if (Object.keys(states).includes(abbr)) {
  if (states[abbr]) {
    next();
  } else {
    next('that is not a valid state abbreviation');
  }
}

app.get('/states/:abbr', validateAbbrLengthIsTwo, validateAbbrIsForARealState, (req, res, next) => {
  res.send(`you should visit ${states[req.params.abbr]}`)
})
// error handling?? (eventually)
app.use((err, req, res, next) => {
  console.log(err);
  res.send(err);
})


// export
// this is basically the same as
// export default app;
module.exports = app;
