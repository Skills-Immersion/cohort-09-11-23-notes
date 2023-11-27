// router file does the job of matching each route to the handler function that should run on that route

const express = require('express');
const cardsController = require('./cards.controller');
const methodNotAllowed = require('../errors/methodNotAllowed');

// because of option 2, we have to explicitly request access to the deckRouter params with mergeParams
const router = express.Router({ mergeParams: true });

// attach some routes

router.route("/")
  .get(cardsController.list)
  .post(cardsController.create)
  .all(methodNotAllowed);
// router.get("/", cardsController.list);
// router.post("/", cardsController.create);

router.route("/:cardId")
  .get(cardsController.read)
  .delete(cardsController.destroy)
  .all(methodNotAllowed);

module.exports = router;
