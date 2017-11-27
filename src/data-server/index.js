var express = require('express')
var app = express()
var port = 7000
var routes = require('./routes')
var bodyParser = require('body-parser')
var data = require('./boulderData.json')

var logger = function() {

}

app.listen(port, function() {
  console.log("App is running on port" + port)
})

app.use('/', routes)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/json', function(req, res) {
  res.send(data)
})
