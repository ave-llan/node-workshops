var filterDirectory = require('./directory-filter-module.js')

var directory = process.argv[2],
    extension = process.argv[3]

filterDirectory(directory, extension,
  function (err, list) {
    if (err) {
      console.error(err)
    } else {
      list.forEach(function (filename) {
        console.log(filename)
      })
    }
  }
)
