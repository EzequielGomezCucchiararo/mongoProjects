const ObjectID = require('mongodb').ObjectID
module.exports = (db, req, res) => {
  const { id } = req.params
  const { limit, skipResults, attrsToShow, attrsToHide } = req
  const proj = Object.assign(attrsToShow, attrsToHide)

  db.collection('restaurants')
        .find({_id: new ObjectID(id)}, proj)
        .limit(limit)
        .skip(skipResults)
        .toArray((err, aRestaurants) => {
          if (err) throw err
          res.json(aRestaurants)
        })
}

