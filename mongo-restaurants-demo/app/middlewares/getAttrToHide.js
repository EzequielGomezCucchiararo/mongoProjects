module.exports = (req, res, next) => {
  const { hide = '' } = req.query

  let attrsToHide = hide.split(',').reduce((proj, field) => {
    if (field) proj[field] = 0
    return proj
  }, {})

  req.attrsToHide = attrsToHide

  next()
}
