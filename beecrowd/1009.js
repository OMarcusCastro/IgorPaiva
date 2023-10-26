
var input = require('fs').readFileSync('/dev/stdin', 'utf8')
input = input.split('\n')

var nome = input[0];
var fixo = Number(input[1]);
var vendas = Number(input[2]);
var total = fixo + vendas * 0.15;

console.log(`TOTAL = R$ ${total.toFixed(2)}`);





