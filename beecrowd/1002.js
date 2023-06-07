var input = require('fs').readFileSync('dev/stdin', 'utf8')
var raio = input
var pi = 3.14159

var a = pi*(raio**2) 

a = a.toFixed(4)

console.log(`A=${a}`)