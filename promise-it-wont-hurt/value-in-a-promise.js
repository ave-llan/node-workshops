var q = require('q')

function attachTitle (name) {
  return 'DR. ' + name
}

var deferred = q.defer()
deferred.promise
  .then(attachTitle)
  .then(console.log)

deferred.resolve('MANHATTAN')
