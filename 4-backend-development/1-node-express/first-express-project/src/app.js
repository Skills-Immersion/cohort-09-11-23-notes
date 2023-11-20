// app setup - create the app, and any high-level middleware
const express = require('express');
const app = express();

// app-level middleware: something that will run for every request
app.use((req, res, next) => {
  console.log(`new request: ${req.originalUrl}`)
  // because this is intermediate middleware, not a handler, we call next() to move on to the next function that needs to run
  next();
})
// routes - set up each route to listen on and what to send in the response

// route needs to know the HTTP method (GET, POST, etc)
// the path (/...)
// what to do (handler function)
app.get('/', (req, res, next) => {
  res.send('welcome to our first express application!!!!!!!!!');
})

// error handling?? (eventually)

// export
// this is basically the same as
// export default app;
module.exports = app;
