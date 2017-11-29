var express = require('express')
var app = express()
var cors = require('cors')
var port = process.env.PORT || 8000
var path = require('path')
var routes = require('./data-server/routes')

app.use(cors())
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
