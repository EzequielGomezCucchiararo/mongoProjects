const express = require('express')
const router = express.Router()

const getAll = require('./handlers/getAll')
const addClient = require('./handlers/add')

router.get('/', getAll)
router.post('/', addClient)

module.exports = router
