// router file does the job of matching each route to the handler function that should run on that route

const express = require('express');
const decksController = require('./decks.controller');
const cardsRouter = require('../cards/cards.router');

const router = express.Router();

// attach some routes
router.get("/", decksController.list);
router.post("/", decksController.create);

router.get("/:deckId", decksController.read);
router.delete("/:deckId", decksController.destroy);

// option 1 for nested routes: write a separate controller function
// router.get('/:deckId/cards', decksController.listCards);

// option 2 for nested routes: attach the entire router as a subrouter
router.use('/:deckId/cards', cardsRouter);
module.exports = router;
