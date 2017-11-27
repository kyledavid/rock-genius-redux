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
    .then(function(dox) {
      res.render(doc)
    })
})

router.post('/create', function(req, res, next) {
  var item = {
    title: 'derp',
    content: 'herp',
    author: 'derpus'
  }

  var newItem = new testData(item)
  newItems.save()
  res.redirect('/get-data')
})
