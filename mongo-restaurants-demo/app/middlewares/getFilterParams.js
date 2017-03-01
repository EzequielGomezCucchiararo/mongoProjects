module.exports = (req, res, next) => {
  const { limit = 10, page = 1 } = req.query
  const skipResults = (+page - 1) * limit

  req.limit = +limit
  req.skipResults = skipResults

  next()
}
