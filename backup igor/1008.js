var input = require('fs').readFileSync('/dev/stdin', 'utf8')
input = input.split('\n')

var number = Number(input[0]);
var hora = Number(input[1]);
var salario = Number(input[2]); 

salario = hora * salario;
console.log(`NUMBER = ${number}`);
console.log(`SALARY = U$ ${salario.toFixed(2)}`);