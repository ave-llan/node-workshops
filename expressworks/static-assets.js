var express = require('express')

var port = process.argv[2],
    staticDir = process.argv[3]

var app = express()
app.use(express.static(staticDir))

app.listen(port)
