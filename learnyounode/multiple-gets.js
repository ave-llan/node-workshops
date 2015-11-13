var http = require('http'),
  concat = require('concat-stream')

var urls = process.argv.slice(2)

function collectResponse (url, index, callback) {
  http.get(url, function (response) {
    response.pipe(concat(function (data) {
      data = data.toString()
      callback(index, data)
    }))
  })
}

function collectResponses (urls) {
  var remaining = urls.length
  var responses = []

  function addToResponses (index, response) {
    responses[index] = response
    remaining -= 1
    if (!remaining) responses.forEach(function (data) {
      console.log(data)
    })
  }

  urls.forEach(function (url, index) {
    collectResponse(url, index, addToResponses)
  })
}

collectResponses(urls)
