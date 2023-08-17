var input = require('fs').readFileSync('stdin', 'utf8')
input = input.split('\n')
var n = Number(input.shift())
var fita = input.shift().split(' ')
console.log(fita)

var aux = []

for (var i =0 ; i<n;i++){
    aux.push(0)
}

//console.log(aux)
for (var i=0;i<n;i++){
    var da=0
    var df = 0
    for(var j = i;j>0;j--){

        
        if (fita[j]==0){
            break;
        }
        da++
    }
    console.log('saiu')
    for(var j = i;j<n;j++){
        if (fita[j]==0){
            break;
        }
        df++
    }
    console.log(da,df)

    if (da<=df && i>0){
        aux[i]=da
    }else{
        aux[i]= df
    }

} 
console.log(aux)