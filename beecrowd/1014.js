var input = require('fs').readFileSync('/dev/stdin', 'utf8')
input = input.split('\n')

var x = Number(input.shift())
var y = Number(input.shift())


var d = x/y
console.log(`${d.toFixed(3)} km/l`) 