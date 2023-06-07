
var input = require('fs').readFileSync('stdin', 'utf8')
input = input.split('\n')

var r = Number(input.shift());

const pi  = 3.14159

var vol = (4/3)*pi*r**3

console.log(`VOLUME = ${vol.toFixed(3)}`)