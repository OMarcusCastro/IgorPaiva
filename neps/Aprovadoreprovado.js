var input = require('fs').readFileSync('stdin', 'utf8')
input = input.split('\n')
var notas = input[0].split(` `)
var n = Number(input[1])

n1 = Number(notas.shift())
n2 = Number(notas.shift())
n3 = Number(notas.shift())
n4 = Number(notas.shift())


var media = n1*2+n2*3+n3*4+n4*1
media = media/10
console.log(`Media: ${media.toFixed(1)}`)
if(media>=7){
    console.log(`Aluno aprovado.`)
}else if(media<5){
    console.log(`Aluno reprovado.`)
}else if(media>=5 && media<=6.9){
    console.log(`Aluno em exame.`)
    console.log(`Nota do exame: ${n.toFixed(1)}`)
    media = (media+n)/2
    if (media>=5){
        console.log(`Aluno aprovado.`)
    }else{
        console.log(`Aluno reprovado.`)
    }

    console.log(`Media final: ${media.toFixed(1)}`)
} 