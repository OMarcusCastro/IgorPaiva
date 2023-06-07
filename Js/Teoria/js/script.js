var input = require('fs').readFileSync('stdin', 'utf8')
//console.log(input)
input = Number(input)
if(input>0 && input<25){
    console.log(`Intervalo [0,25]`)
} else if(input>25 && input<50){
    console.log(`Intervalo (25,50]`)

} else if(input>50 && input<75){
    console.log(`Intervalo (50,75]`)
} else if(input>75 && input<100){
    console.log(`Intervalo (75,100]`)
}else if(input<0 || input>100){
    console.log(`Fora de intervalo`)
}
