const ObjectID = require('mongodb').ObjectID
module.exports = (db, req, res) => {
  const { id, km } = req.params
  const { limit, skipResults, attrsToShow, attrsToHide } = req
  const proj = Object.assign(attrsToShow, attrsToHide)

  db.collection('restaurants')
        .find({_id: new ObjectID(id)})
        .toArray()
          .then(restaurant => {
            db.collection('restaurants')
              .find({'address.coord': {
                $near: {
                  $geometry: {
                    type: 'Point',
                    coordinates: [ restaurant[0].address.coord[0], restaurant[0].address.coord[1] ]
                  },
                  $maxDistance: km * 1000
                }
              }
              }, proj)
              .limit(limit)
              .skip(skipResults)
              .toArray((err, aRestaurants) => {
                if (err) throw err
                res.json(aRestaurants)
              })
          })
          .catch(err => {
            throw err
          })
}
