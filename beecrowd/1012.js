var input = require('fs').readFileSync('stdin', 'utf8')
input = input.split(' ')

var a = Number(input.shift())
var b = Number(input.shift())
var c = Number(input.shift())

var area = a*c/2
// a*c/2
console.log(`TRIANGULO: ${area.toFixed(3)}`)

const pi = 3.14159
var area = pi*c**2
 
//pi*r^2

console.log(`CIRCULO: ${area.toFixed(3)}`)

//(a+b)*c/2
var area = (a+b)*c/2
 
//pi*r^2

console.log(`TRAPEZIO: ${area.toFixed(3)}`)


var area = b**2
 
//pi*r^2

console.log(`QUADRADO: ${area.toFixed(3)}`)

var area = a*b
 
//pi*r^2

console.log(`RETANGULO: ${area.toFixed(3)}`)