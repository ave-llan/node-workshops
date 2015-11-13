var fs = require('fs')

var filepath = process.argv[2]
fs.readFile(filepath, 'utf8',
  function (err, fileContents) {
    if (err) console.log(err)
    else {
      var newlines = fileContents.split('\n').length - 1
      console.log(newlines)
    }
  })
