
var input = require('fs').readFileSync('/dev/stdin', 'utf8')
input = input.split('\n')



var nome = input.shift();
var fixo = Number(input.shift());
var vendas = Number(input.shift());

var mensal = fixo+vendas*0.15

console.log(`TOTAL = R$ ${mensal.toFixed(2)}`)




