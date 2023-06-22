const data = new Date(2023,6,21,1,0)
var dia = data.getDay()


// if( v===0){
//   t= 'sexta feira';
// } else if ( v===1){
//     t='sabado'
// } else if(v===2){
//   t='domingo'
// }else if(v===3){
//   t='segunda feira'
// }else if(v===4){
//   t='terca feira'
// }else if(v===5){
//   t='quarta feira'
// }else{
//   t='quinta feira'
// }
// console.log(t)
console.log(dia)
let texto;
switch(dia){
    case 0:
        texto = 'Sexta'
        break;
    case 1:
        texto='sabado'
        break;
    case 2:
        texto='dom'
        break;
    case 3:
        texto='seg'
        break;
    case 4:
        texto='ter'
        break;   
    case 5:
        texto='quarta'
        break;
    case 6:
        texto='quinta'
        console.log('entrei')
        break;
    default: 
        dia = 'dia invalido'
        break;
    }

console.log(dia,texto)
