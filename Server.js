var express = require('express')
var app = express()
var cors = require('cors')
var port = process.env.PORT || 8000
var path = require('path')
var routes = require('./data-server/routes')

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }
}

app.use(allowCrossDomain)
app.use(express.static(__dirname + '/build'))
app.use('/', routes)



app.listen(port, function() {
  console.log("App is running on port " + port)
})

app.get('*',function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

//express history api fallback
// data flow
// scroll to load pattern
// appollo redux + graphql
// cd "C:\mongodb\bin"
// "C:\mongodb\bin\mongod"
