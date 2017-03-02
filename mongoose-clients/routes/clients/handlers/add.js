const Client = require('../../../models/Client')

module.exports = (req, res) => {
  const {firstName, lastName, address, profession, age} = req.body
  const client = new Client({firstName, lastName, address, profession, age})

  client.save()
    .then(client => {
      console.log('client has been created succesfully')
      res.status(200).json(client)
    })
    .catch(err => res.status(500).json(err))
}
