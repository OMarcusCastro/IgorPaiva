var input = require('fs').readFileSync('stdin', 'utf8')
input = input.split('\n')
var n = Number(input.shift())
var fita = input.shift().split(' ')

aux = []

for(var i =0;i<n;i++){
    if(fita[i]==0){
        aux.push(i)
    }
}
//console.log(`aux`,aux)

for(var i = 0;i<n;i++){
    var dmin = n
    console.log(aux.length)
    for(var j = 0;j<aux.length;j++){
        var d = i-aux[j]
        d = Math.abs(d)
        if(d<dmin){
            dmin = d
        }
        if(dmin>=9){
            dmin = 9
        }
    fita[i]=dmin
    }
}
console.log(fita)


