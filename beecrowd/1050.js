var input = require('fs').readFileSync('stdin', 'utf8')

var cidade = Number(input);

if(cidade === 61){
    console.log('Brasilia')
}

else if(cidade === 71){
    console.log('Salvador')
}


else if(cidade === 11){
    console.log('Sao Paulo')
}


else if(cidade === 21){
    console.log('Rio de Janeiro')
}


else if(cidade === 32){
    console.log('Juiz de Fora')
}



else if(cidade === 19){
    console.log('Campinas')
}



else if(cidade === 27){
    console.log('Vitoria')
}

else if(cidade === 31){
    console.log('Belo Horizonte')
}

else{
    console.log('DDD nao cadastrado')
}

