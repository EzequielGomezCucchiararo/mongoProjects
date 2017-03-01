module.exports = (db, req, res) => {
  const { borough } = req.params
  const { limit, skipResults, attrsToShow, attrsToHide } = req
  const proj = Object.assign(attrsToShow, attrsToHide)

  db.collection('restaurants')
        .find({ borough }, proj)
        .limit(limit)
        .skip(skipResults)
        .toArray((err, aRestaurants) => {
          if (err) throw err
          res.json(aRestaurants)
        })
}
