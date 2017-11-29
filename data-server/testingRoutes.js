var express = require('express')
var mongoose = require('mongoose')
mongoose.connect('localhost:27017/test')
var Schema = mongoose.Schema
var router = express.Router()

var testSchema = new Schema({
  title: String,
  content: String,
  author: String
})

var testData = mongoose.model('TestData', testSchema)

router.get('/get-data', function(req, res, next) {
  testData.find()
    .then(function(docs) {
        res.send(docs)
    })
    .catch(function(err) {
      res.send(err)
    })
})

router.get('/create', function(req, res, next) {
  var item = {
    title: 'derp',
    content: 'herp',
    author: 'derpus'
  }

  var newItem = new testData(item)
  newItem.save()
  res.redirect('/get-data')
})

router.get('/clean', function(req, res, next) {
  mongoose.connection.db.dropCollection('testdatas', function(err, result) {
    res.redirect('/get-data')
  })

})

module.exports = router
