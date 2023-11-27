const { createId } = require('@paralleldrive/cuid2');
const stellarObjects = require('../data');

function list(req, res, next) {
  res.send({ data: stellarObjects })
}

function validateBodyDataExists(req, res, next) {
  if (req.body.data) {
    next();
  } else {
    next({
      status: 400,
      message: 'request body must have a data key'
    })
  }
}
function validatorFor(prop) {
  return function (req, res, next) {
    if (req.body.data[prop]) {
      next();
    } else {
      next({
        status: 400,
        message: `missing property ${prop}`
      })
    }
  }
}
function validateNovelStellarObject(req, res, next) {
  if (stellarObjects.some(so =>
    so.name === req.body.data.name &&
    so.distanceFromEarth === req.body.data.distanceFromEarth &&
    so.type === req.body.data.type)) {
    next({
      status: 400,
      message: `we already have that stellar object`
    })
  } else {
    next();
  }
}

function create(req, res, next) {
  let newStellarObject = {
    id: createId(),
    name: req.body.data.name,
    distanceFromEarth: req.body.data.distanceFromEarth,
    type: req.body.data.type
  }
  stellarObjects.push(newStellarObject);
  res.status(201).send({ data: newStellarObject })
}

function validateSOExists(req, res, next) {
  let { id } = req.params;
  let index = stellarObjects.findIndex(so => so.id === id);
  if (index < 0) {
    // bad news
    next({
      status: 404,
      message: `could not find stellar object with id ${id}`
    })
  } else {
    // we found it! save its location for later
    res.locals.index = index;
    next();
  }
}

function read(req, res, next) {
  res.send({ data: stellarObjects[res.locals.index] });
}

function destroy(req, res, next) {
  let { index } = res.locals;
  stellarObjects.splice(index, 1);
  res.status(204).send();
}

function methodNotAllowed(req, res, next) {
  next({
    status: 405,
    message: `method ${req.method} is not allowed on path ${req.originalUrl}`
  })
}

module.exports = {
  list,
  create: [
    validateBodyDataExists,
    validatorFor('name'),
    validatorFor('type'),
    validatorFor('distanceFromEarth'),
    validateNovelStellarObject,
    create],
  read: [validateSOExists, read],
  destroy: [validateSOExists, destroy],
  methodNotAllowed
}