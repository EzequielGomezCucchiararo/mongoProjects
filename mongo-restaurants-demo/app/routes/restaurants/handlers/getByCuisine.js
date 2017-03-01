module.exports = (db, equalTo, req, res) => {
  const { cuisine } = req.params
  const { limit, skipResults, attrsToShow, attrsToHide } = req
  const proj = Object.assign(attrsToShow, attrsToHide)
  const query = equalTo ? { cuisine } : { 'cuisine': {$ne: cuisine} }

  db.collection('restaurants')
        .find(query, proj)
        .limit(limit)
        .skip(skipResults)
        .toArray((err, aRestaurants) => {
          if (err) throw err
          res.json(aRestaurants)
        })
}
