var input = require('fs').readFileSync('/dev/stdin', 'utf8')
input = input.split('\n')

var n1 = Number(input.shift())
var n2 = Number(input.shift())

var m = 3.5*n1 + 7.5*n2
m = m/11

console.log(`MEDIA = ${m.toFixed(5)}`)
//m = p1xn1 +p2xn2
//m = m/p1+p2

