var q = require('q')

var deferred = q.defer()

deferred.promise
  .then(console.log, console.log)
  .fail(printError)

function printError (error) {
  console.log('there was an error:', error.message)
}

setTimeout(function () {
  deferred.resolve('I FIRED')
  deferred.reject('I DID NOT FIRE')
}, 300)
