const express = require('express')
const Router = express.Router()

const getByID = require('./handlers/getByID')
const getByProximity = require('./handlers/getByProximity')

function getRouter (db) {
  Router.get('/:id', getByID.bind(null, db))
  Router.get('/:id/around/:km', getByProximity.bind(null, db))

  return Router
}

module.exports = getRouter
