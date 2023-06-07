var input = require('fs').readFileSync('/dev/stdin', 'utf8')
input = input.split('\n')

var num1 = Number(input.shift())
var num2 = Number(input.shift())

var s = num1+num2

console.log(`SOMA = ${s}`)

