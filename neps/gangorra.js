
var input = require('fs').readFileSync('stdin', 'utf8')
input = input.split(' ')
console.log(input)

var p1 = Number(input().shift())
var c1 = Number(input().shift())
var p2 = Number(input().shift())
var c2 = Number(input().shift())

if(p1*c1 === p2*c2){
    console.log(0)
}

if(p1*c1 > p2*c2){
    console.log(-1)
}

if(p1*c1 > p2*c2){
    console.log(1)
} 