// router file does the job of matching each route to the handler function that should run on that route

const express = require('express');
const cardsController = require('./cards.controller');

const router = express.Router();

// attach some routes
router.get("/", cardsController.list);
router.post("/", cardsController.create);

router.get("/:cardId", cardsController.read);
router.delete("/:cardId", cardsController.destroy);

module.exports = router;
