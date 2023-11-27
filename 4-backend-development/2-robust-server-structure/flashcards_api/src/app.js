const express = require("express");
const morgan = require("morgan");
const winston = require("winston");
const cuid = require("cuid");

const cardsRouter = require('./cards/cards.router');
const decksRouter = require('./decks/decks.router')

const app = express();

const logger = require('./utils/logger');
// -- PIPELINE STARTS HERE ---

// Middleware
app.use(morgan("common"));
app.use(express.json());

// Routes

app.use('/cards', cardsRouter);

app.use('/decks', decksRouter);

// Error Handler

app.use((req, res, next) => {
  next({
    status: 404,
    message: `could not find path ${req.originalUrl}`
  })
})
app.use(function errorHandler(error, req, res, _next) {
  console.error(error);
  const status = error.status || 500;
  const message = error.message || "Internal Server Error";
  logger.error(message);

  res
    .status(status)
    .json({ error: message });
});

module.exports = app;