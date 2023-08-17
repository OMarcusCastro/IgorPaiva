var input = require('fs').readFileSync('stdin', 'utf8')
input = input.split('\n')
console.log(input)
var n = Number(input[0])
var l = input[1].split(' ')
console.log(l)

var qtd = 0
for(let i =0;i<=n-4;i++){
    if(l[i]==='1' && l[i+1]==='0' && l[i+2]=='0'){
        qtd++
    }
}

console.log(qtd)