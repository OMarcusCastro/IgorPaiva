var input = require('fs').readFileSync('/dev/stdin', 'utf8')
input = input.split('\n')

var A = Number(input.shift());
var B = Number(input.shift());
var C = Number(input.shift());
var D = Number(input.shift());

var DIFERENCA = (A * B - C * D);

console.log(`DIFERENCA = ${DIFERENCA}`);