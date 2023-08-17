var input = require('fs').readFileSync('/dev/stdin', 'utf8')
input = input.split('\n')

var a = Number(input.shift());
var b = Number(input.shift());
var c = Number(input.shift());

var media = (a * 2 + b * 3 + c * 5) / 10;

console.log(`MEDIA = ${media.toFixed(1)}`); 