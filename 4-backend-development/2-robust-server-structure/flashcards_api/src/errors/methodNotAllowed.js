function methodNotAllowed(req, res, next) {
  next({
    status: 405,
    message: `the method ${req.method} is not allowed on the path ${req.originalUrl}`
  })
}

module.exports = methodNotAllowed;
