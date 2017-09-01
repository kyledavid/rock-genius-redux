import express from 'express'
const app = express()

app.use(express.static(__dirname + '/build'))

app.listen(process.env.PORT || 8080)
