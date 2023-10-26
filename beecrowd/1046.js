const { Console } = require('console');

var input = require('fs').readFileSync('stdin', 'utf8')
input = input.split(' ')

var P = Number(input[0]);
var R = Number(input[1]);

if(P === 0 ){
    console.log(`C`);
}
else if(R === 1){
    console.log(`A`);

} 
else{
    console.log(`B`);
}


