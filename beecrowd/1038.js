var input = require('fs').readFileSync('stdin', 'utf8')
input = input.split(' ')

var codigo = Number(input[0]);
var quantidade = Number(input[1]);
var preco = 0;
if(codigo === 1) {
    preco = 4;
} else if(codigo ===2){
    preco = 4.5
}else if(codigo ===3){
    preco = 5
} else if(codigo ===4){
    preco = 2
} else {
    preco = 1.5
}
var total = preco * quantidade;

console.log(`Total : R$ ${total.toFixed(2)}`);