// router file does the job of matching each route to the handler function that should run on that route

const express = require('express');
const decksController = require('./decks.controller');

const router = express.Router();

// attach some routes
router.get("/", decksController.list);
router.post("/", decksController.create);

router.get("/:deckId", decksController.read);
router.delete("/:deckId", decksController.destroy);

module.exports = router;
