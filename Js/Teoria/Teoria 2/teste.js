var input = require('fs').readFileSync('stdin', 'utf8')
input = input.split('\n')



var quantidades =[0,0,0,0]
for (var i = 0;i<5;i++){

    var n  = Number(input[i])
    if(n%2==0){
        
        quantidades[0]++
    }

    if (n%2!=0){
        
        quantidades[1]++
    }

    if( n>0){
        
        quantidades[2]++
    }

    if( n<0){
        
        quantidades[3]++
    }
    
    
}

console.log(`${quantidades[0]} valor(es) par(es)`)
console.log(`${quantidades[1]} valor(es) impar(es)`)
console.log(`${quantidades[2]} valor(es) positivo(s)`)
console.log(`${quantidades[3]} valor(es) negativo(s)`)
