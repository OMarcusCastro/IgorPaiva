var input = require('fs').readFileSync('stdin', 'utf8')

input = input.split('\n')
//console.log(input)
var igor = parseInt(input[0]);
var marcus = parseInt(input[1]);
console.log(`SOMA = ${igor + marcus}`)
