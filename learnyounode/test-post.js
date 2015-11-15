var request = require('request')

var port = process.argv[2]
var message = process.argv[3]

request.post(
  'http://localhost:' + port,
  { form: message },
  function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body)
    } else {
      console.error(error)
    }
  }
)