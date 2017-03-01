const express = require('express')
const MongoClient = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017/test'
const PORT = 3000
const app = express()

MongoClient.connect(url)
  .then(db => {
    console.log('Succesfully connected to DB...')

    app.use((req, res, next) => {
      const { limit = 10 } = req.query
      req.limit = +limit
      next()
    })

    app.use((req, res, next) => {
      const { fields = '' } = req.query
      const projection = fields.split(',').reduce((proj, field) => {
        if (field) proj[field] = 1
        return proj
      }, {})
      req.projection = projection
      next()
    })

    app.get('/restaurants', (req, res) => {
      const { limit, projection } = req

      db.collection('restaurants')
        .find(null, projection)
        .limit(limit)
        .toArray((err, restaurants) => {
          res.json(restaurants)
        })
    })

    // /restaurants/borough/Manhattan
    app.get('/restaurants/borough/:borough', (req, res) => {
      const { limit, projection } = req
      const { borough } = req.params

      db.collection('restaurants')
        .find({ borough }, projection)
        .limit(limit)
        .toArray((err, restaurants) => {
          res.json(restaurants)
        })
    })
  })
  .catch(err => {
    throw err
  })

app.listen(PORT, () => console.log(`🚀 Magic happens on PORT ${PORT}`))
