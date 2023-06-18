var input = require('fs').readFileSync('stdin', 'utf8')
input = input.split('\n')

var b =Number(input.shift())
var c =Number(input.shift())

if(b+c%2===0){
     console.log(`Bino`)
} else{
     console.log(`Cino`)
}