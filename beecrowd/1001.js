var input = require('fs').readFileSync('/dev/stdin', 'utf8')

var valores  =  input.split('\n')

var a  =Number(valores.shift())
var b  = Number(valores.shift())

console.log(`X = ${a+b}`)

//where id = num
//id = 3 or ID>0