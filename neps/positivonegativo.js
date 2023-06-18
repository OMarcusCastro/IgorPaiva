var input = require('fs').readFileSync('stdin', 'utf8')
input = Number(input)

if(input>0){
     console.log(`positivo`)
}else if(input<0){
     console.log(`negativo`)
}else{
     console.log(`nulo`)
}