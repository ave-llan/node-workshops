var express = require('express'),
       path = require('path')

var port = process.argv[2],
  indexfile = process.argv[3]

var app = express()

app.set('views', path.join(__dirname, 'templates'))
app.set('view engine', 'jade')

app.get('/home', function(req, res) {
  res.render('index', { date: new Date().toDateString() })
})

app.listen(port)
