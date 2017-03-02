const mongoose = require('mongoose')
const collection = 'clients'

const ClientSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, default: true },
  address: String,
  profession: String,
  age: Number
}, { collection })

module.exports = mongoose.model('Client', ClientSchema)
