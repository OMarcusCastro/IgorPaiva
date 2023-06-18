var input = require('fs').readFileSync('stdin', 'utf8')
input = Number(input)
//console.log(typeof(input))
var aumento =0
if (input>=0 && input<=400){
  aumento = 0.15
}else if(input>400 && input<=800){
  aumento = 0.12
}else if(input>800 && input<=1200){
    aumento = 0.10
}else if(input>1200 && input<=2000){
    aumento =0.07
}else if(input>2000){
    aumento = 0.04
}
var ganho = input*aumento
var novo = ganho+input

aumento = parseInt(aumento*100)
console.log(`Novo salario: ${novo.toFixed(2)}`)
console.log(`Reajuste ganho: ${ganho.toFixed(2)}`)
console.log(`Em percentual: ${aumento} %`)
