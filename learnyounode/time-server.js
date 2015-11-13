var net = require('net')
var strftime = require('strftime')

var port = Number(process.argv[2])

var server = net.createServer(function (socket) {
  // date format: "YYYY-MM-DD hh:mm"
  socket.end(strftime('%Y-%m-%d %H:%M\n'))
})

server.listen(port)
