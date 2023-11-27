const express = require('express');
const morgan = require('morgan');
const router = require('./stellarobjects/stellarobjects.router');

const app = express();
app.use(morgan('dev'));
// this is the body parser
// it makes sure req.body is not undefined
app.use(express.json());

// routes
app.use('/stellarobjects', router);

// error handling
app.use((req, res, next) => {
  next({
    status: 404,
    message: `cannot find path ${req.originalUrl}`
  })
})
app.use((error, req, res, next) => {
  let { status = 500, message = 'Internal Server Error' } = error;
  console.log(error);
  res.status(status).send({ error: message })
})
module.exports = app;
