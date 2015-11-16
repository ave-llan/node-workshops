var express = require('express'),
 bodyParser = require('body-parser')

var port = process.argv[2]

var app = express()
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/home', function(req, res) {
  res.end('Hello World!')
})

app.post('/form', function (req, res) {
  var reversed = req.body.str.split('').reverse().join('')
  res.end(reversed)
})

app.listen(port)
