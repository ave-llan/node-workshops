var fs = require('fs')

// read a file with utf8 encoding

/*
fs.readFileSync(process.argv[2], 'utf8')
*/

// or...
var buffer = fs.readFileSync(process.argv[2])      // readfile and return Buffer object
var filecontents = buffer.toString()               // convert buffer to string
var numLines = filecontents.split('\n').length - 1
console.log(numLines)
