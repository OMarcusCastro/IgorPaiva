var input = require('fs').readFileSync('stdin', 'utf8')
input = input.split('\n')
console.log(input)

var n = input.shift()
console.log(input)

for(let i =0;i<n;i++){
    var  nbombas = 0
    if(input[i]==1){
        nbombas++
        //console.log('Entrei 1')
    }
    if(i!=0){

        if(input[i-1]==1 ){
            nbombas++
            //console.log('Entrei 2')
        }
    }
    if(i!=n-1){

        if(input[i+1]==1){
            nbombas++
            //console.log('Entrei 3')
        }
    }
    console.log(nbombas)
}