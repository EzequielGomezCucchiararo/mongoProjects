const express = require('express')
const MongoClient = require('mongodb').MongoClient

const getRouterRestaurants = require('./app/routes/restaurants')
const getRouterRestaurant = require('./app/routes/restaurant')

const getFilterParams = require('./app/middlewares/getFilterParams.js')
const getAttrToShow = require('./app/middlewares/getAttrToShow.js')
const getAttrToHide = require('./app/middlewares/getAttrToHide.js')

const app = express()

const url = 'mongodb://localhost:27017/test'
const PORT = 3000

MongoClient.connect(url)
  .then(db => {
    app.use(getFilterParams)
    app.use(getAttrToShow)
    app.use(getAttrToHide)
    app.use('/restaurants', getRouterRestaurants(db))
    app.use('/restaurant', getRouterRestaurant(db))
    app.get('*', (req, res) => {
      res.send('Lo sentimos, esa página no existe, te la has inventado')
    })
  })

app.listen(PORT, () => console.log(`🚀 Magic happens at PORT ${PORT}...`))

