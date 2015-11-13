var fs = require('fs'),
  path = require('path')

var filterDirectory = function (directory, extension, callback) {
  fs.readdir(directory,
    function (err, list) {
      if (err) {
        return callback(err)
      } else {
        var list = list.filter(function (filename) {
          return path.extname(filename) === '.' + extension
        })
        callback(null, list)
      }
    }
  )
}

module.exports = filterDirectory
