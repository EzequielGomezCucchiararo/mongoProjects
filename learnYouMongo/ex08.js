const mongo = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/learnyoumongo'

mongo.connect(url, (err, db) => {
  if (err) throw err
  db.collection('parrots')
      .find(
    {
      age: {$gt: age}
    },
    {
      name: 1, age: 1, _id: 0
    }
      )
      .toArray((err, documents) => {
        if (err) throw err
        console.log(documents)
      })
  db.close()
})
