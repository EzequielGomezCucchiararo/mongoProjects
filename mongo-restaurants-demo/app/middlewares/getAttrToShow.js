module.exports = (req, res, next) => {
  const { show = '' } = req.query

  let attrsToShow = show.split(',').reduce((proj, field) => {
    if (field) proj[field] = 1
    return proj
  }, {})

  req.attrsToShow = attrsToShow

  next()
}
