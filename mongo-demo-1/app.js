const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

let url = 'mongodb://localhost:27017/test'

MongoClient.connect(url, (err, db) => {
  if (err) throw err
  console.log('Succesfully coneected to DB! to:', db.s.databaseName)
  db.collection('restaurants')
    .find()
    .toArray((err, docs) => {
      if (err) throw err
      console.log(docs)
    })
  // db.close()
})
