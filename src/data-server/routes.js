var express = require('express')
var mongoose = require('mongoose')
mongoose.connect('localhost:27017/test')
var Schema = mongoose.Schema
var router = express.Router()
var pearl = require('./thePearl.json')
var clam = require('./theClam.json')

var boulderRoute = new Schema({
  name: String,
  rating: String,
  imageNames: [String],
  beta: [{
    chunk: String,
    activeHolds: [Number]
  }],
  holds: [{
    position: {
      bottom: String,
      left: String
    },
  desc: String,
  foothold: Boolean,
  pic: String,
  }]
})

var boulderModel = mongoose.model('boulderRoute', boulderRoute)

router.get('/get-data/:name', function(req, res, next) {
  var name= "The Pearl"
  boulderModel.find({name: req.params.name})
    .then(function(docs) {
        res.status(200).json(docs)
    })
    .catch(function(err) {
      res.send(err)
    })
})

router.get('/get-data/', function(req, res, next) {
  boulderModel.find()
    .then(function(docs) {
        res.send(docs)
    })
    .catch(function(err) {
      res.send(err)
    })
})

router.get('/clean', function(req, res, next) {
  mongoose.connection.db.dropCollection('boulderroutes', function(err, result) {
    res.redirect('/get-data')
  })

})

router.get('/seed-data', function(req, res, next) {
  boulderModel.create(pearl, function(err, instance) {

  })
  boulderModel.create(clam, function(err, instance) {

  })
  res.redirect('/get-data')
})

module.exports = router
