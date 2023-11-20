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
app.get('/hello', helloHandler)

// route at /books/:id that sends back which book ID you requested
app.get('/books/:potato', (req, res, next) => {
  // req.params is for accessing route params
  let id = req.params.potato;
  if (Number.isNaN(Number(id))) {
    // if it's not a number, go into error handling
    next('the id sent in the URL is not a number')
  } else {
    // it is a number! just send the nice response
    res.send(`You requested book number ${id}. Is that equal to 2? ${Number(id) === 2}`)
  }
})
// error handling?? (eventually)
app.use((err, req, res, next) => {
  console.log(err);
  res.send('Sorry, something went wrong');
})

// export
// this is basically the same as
// export default app;
module.exports = app;
