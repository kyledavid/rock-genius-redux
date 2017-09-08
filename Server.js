var express = require('express')
var app = express()
var port = process.env.PORT || 8000
var path = require('path')

app.use(express.static(__dirname + '/build'))

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
