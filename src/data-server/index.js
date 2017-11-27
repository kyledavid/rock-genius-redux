var express = require('express')
var app = express()
var port = 7000
var routes = require('./routes')
var data = require('./boulderData.json')

var logger = function() {

}

app.listen(port, function() {
  console.log("App is running on port" + port)
})

app.get('/json', function(req, res) {
  res.send(data)
})
