const express = require('express')
const Router = express.Router()

const getAll = require('./handlers/getAll')
const getByBorough = require('./handlers/getByBorough.js')
const getByCuisine = require('./handlers/getByCuisine.js')

function getRouter (db) {
  Router.get('/', getAll.bind(null, db))
  Router.get('/borough/:borough', getByBorough.bind(null, db))
  Router.get('/cuisine/:cuisine', getByCuisine.bind(null, db, true))
  Router.get('/cuisine/not/:cuisine', getByCuisine.bind(null, db, false))

  return Router
}

module.exports = getRouter
