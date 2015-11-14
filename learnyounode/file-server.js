var http = require('http'),
      fs = require('fs')

var port = Number(process.argv[2]),
    file = process.argv[3]

var server = http.createServer(function (request, response) {
  response.writeHead(200, { 'content-type': 'text/plain' })
  fs.createReadStream(file).pipe(response)
})

server.listen(port)
