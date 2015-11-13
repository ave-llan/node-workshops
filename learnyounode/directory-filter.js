var fs = require('fs'),
  path = require('path')

var directory = process.argv[2],
    extension = '.' + process.argv[3]

fs.readdir(directory,
  function (err, list) {
    if (err) {
      console.log(err)
    } else {
      list.forEach(function (filename) {
        if (path.extname(filename) === extension)
          console.log(filename)
      })
    }
  }
)
