const express = require('express');
const controller = require('./stellarobjects.controller');

const router = express.Router();

router.route('/')
  .get(controller.list)
  .post(controller.create)
  .all(controller.methodNotAllowed);

router.route('/:id')
  .get(controller.read)
  .delete(controller.destroy)
  .all(controller.methodNotAllowed);
module.exports = router;
