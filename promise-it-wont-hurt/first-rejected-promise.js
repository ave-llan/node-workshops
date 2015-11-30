var q = require('q')

var deferred = q.defer()

deferred.promise
  .then(console.log)
  .fail(printError)

setTimeout(function () {
  deferred.reject(new Error('REJECTED!'))
}, 300)

function printError (error) {
  console.log(error.message)
}
