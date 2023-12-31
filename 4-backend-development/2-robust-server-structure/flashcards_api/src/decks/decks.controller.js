const { cards, decks } = require('../dataStore');
const cuid = require('cuid');
const logger = require('../utils/logger');

const list = (req, res, _next) => {
  res
    .json({ data: decks });
}

const create = (req, res, next) => {
  const { data } = req.body;
  if (!data) {
    const message = `Body must have 'data' key`;
    return next({ status: 400, message });
  }

  const { name, description } = data;

  const requiredFields = ["name", "description"];
  for (const field of requiredFields) {
    if (!data[field]) {
      const message = `'${field}' is required`;
      return next({ status: 400, message });
    }
  }

  // get an id
  const id = cuid();

  const deck = {
    id,
    name,
    description,
  };

  decks.push(deck);

  logger.info(`Deck with id ${id} created`);

  res
    .status(201)
    .json({ data: deck });
}

function validateDeckExists(req, res, next) {
  const { deckId } = req.params;
  const deck = decks.find(d => d.id === deckId);
  if (deck) {
    res.locals.deck = deck;
    next();
  } else {
    next({
      status: 404,
      message: `Deck with id ${deckId} not found.`
    })
  }
}
const read = (req, res, next) => {
  const { deck } = res.locals;
  res.json({ data: deck });
};

// Utility function to delete items from any provided collection by id
function deleteItem(collection, id) {
  const itemIndex = collection.findIndex(i => i.id === id);
  if (itemIndex > -1) {
    collection.splice(itemIndex, 1);
  }
}

const destroy = (req, res, next) => {
  const { deckId } = req.params;

  const deckIndex = decks.findIndex(d => d.id === deckId);

  if (deckIndex === -1) {
    const message = `Deck with id ${deckId} not found.`;
    return next({ status: 404, message });
  }

  // Delete deck
  deleteItem(decks, deckId);
  // Delete all cards in deck
  cards
    .filter(c => c.deckId === deckId)
    .forEach(c => deleteItem(cards, c.id));

  logger.info(`Deck with id ${deckId} deleted.`);
  res
    .status(204)
    .end();
}

// option 1 for nested routes: a standalone controller function
function listCards(req, res, next) {
  const { deckId } = req.params;
  const cardsForDeck = cards.filter(c => c.deckId === deckId);
  res.json({ data: cardsForDeck });
}

module.exports = {
  list,
  create,
  read: [validateDeckExists, read],
  destroy,
  listCards: [validateDeckExists, listCards]
}