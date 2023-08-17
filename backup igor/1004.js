var input = require('fs').readFileSync('/dev/stdin', 'utf8')
input = input.split('\n')

var a = Number(input.shift())
var b = Number(input.shift())

var p = a*b

console.log(`PROD = ${p}`)
/*

var PROD = a * b;
console.log(`PROD = + PROD`);

*/