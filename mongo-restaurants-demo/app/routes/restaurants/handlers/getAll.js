module.exports = (db, req, res) => {
  const { limit, skipResults, attrsToShow, attrsToHide } = req
  const proj = Object.assign(attrsToShow, attrsToHide)
  db.collection('restaurants')
    .find({}, proj)
    .limit(limit)
    .skip(skipResults)
    .toArray((err, aRestaurants) => {
      if (err) throw err
      res.json(aRestaurants)
    })
}
