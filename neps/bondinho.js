var input = require('fs').readFileSync('stdin', 'utf8')
input = input.split('\n')

var a =Number(input.shift())
var m =Number(input.shift())
if(a+m<=50){
     console.log(`S`)
} else{
     console.log(`N`)
}