var map = require('through2-map'),
   http = require('http'),
    url = require('url')

var port = Number(process.argv[2])

var server = http.createServer(function (request, response) {
  var urlRequest = url.parse(request.url, true)
  if (urlRequest.pathname === '/api/parsetime') {
    var time = new Date(urlRequest.query.iso)

    response.writeHead(200, { 'content-type': 'application/json' })
    response.end(JSON.stringify({
      hour: time.getHours(),
      minute: time.getMinutes(),
      second: time.getSeconds()
    }))
  } else if (urlRequest.pathname === '/api/unixtime') {
    var time = new Date(urlRequest.query.iso)

    response.writeHead(200, { 'content-type': 'application/json' })
    response.end(JSON.stringify({
      unixtime: time.getTime()
    }))
  }
})

server.listen(port)
