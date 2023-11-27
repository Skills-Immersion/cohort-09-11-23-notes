// controller file holds all of the handler functions
const cuid = require('cuid');
// Import data store
const { cards, decks } = require("../dataStore");
const logger = require('../utils/logger');

// option 2 for nested routes: this function now needs to handle the nested case and the not-nested case
const list = (req, res, _next) => {
  if (req.params.deckId) {
    // we're in the nested case
    // need to do some filtering
    let cardsForDeck = cards.filter(c => c.deckId === req.params.deckId);
    res.json({ data: cardsForDeck })
  } else {
    // not a nested route, just send back all of the cards
    res
      .json({ data: cards });
  }

};

function validateReqBodyData(req, res, next) {
  const { data } = req.body;
  if (!data) {
    const message = `Body must have 'data' key`;
    return next({ status: 400, message });
  } else {
    return next();
  }
}

function validatorFor(property) {
  return function (req, res, next) {
    if (req.body.data[property]) {
      next();
    } else {
      next({
        status: 400,
        message: `'${property}' is required`
      })
    }
  }
}

// function validateFrontExists(req, res, next) {
//   if (req.body.data.front) {
//     next();
//   } else {
//     next({
//       status: 400,
//       message: 'you forgot the front field'
//     })
//   }
// }
const create = (req, res, next) => {

  const { front, back, deckId } = req.body.data;
  // Validate deck exists
  const deck = decks.find(d => d.id === deckId);
  if (!deck) {
    const message = `Deck id ${deckId} does not exist.`;
    return next({ status: 400, message });
  }

  // Create an ID
  const id = cuid();

  const card = {
    id,
    front,
    back,
    deckId,
  };

  cards.push(card);
  logger.info(`Card with id ${id} created`);

  res
    .status(201)
    .json({ data: card });
}

function validateCardExists(req, res, next) {
  const { cardId } = req.params;
  const cardIndex = cards.findIndex(c => c.id === cardId);
  // make sure we found a card
  if (cardIndex < 0) {
    const message = `Card with id ${cardId} not found.`;
    return next({ status: 404, message });
  } else {
    // save the index so it can be used in the destroy function
    // and the card so it can be used in the read function
    res.locals.cardIndex = cardIndex;
    res.locals.card = cards[cardIndex];
    next();
  }
}

const read = (req, res, next) => {
  // const { cardId } = req.params;
  // const card = cards.find(c => c.id === cardId);
  const { card } = res.locals;
  res.json({ data: card });
};

const destroy = (req, res, next) => {
  // const { cardId } = req.params;
  // const cardIndex = cards.findIndex(c => c.id === cardId);
  const { cardIndex } = res.locals;
  cards.splice(cardIndex, 1);
  res
    .status(204)
    .send();
};

// ...['front', 'back', 'deckId'].map(validatorFor)
module.exports = {
  list,
  create: [
    validateReqBodyData,
    validatorFor('front'),
    validatorFor('back'),
    validatorFor('deckId'),
    create
  ],
  read: [validateCardExists, read],
  destroy: [validateCardExists, destroy]
}