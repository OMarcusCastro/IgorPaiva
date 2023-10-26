var input = require('fs').readFileSync('/dev/stdin', 'utf8')
input = input.split('\n')
l1 = input.shift()
l2 = Number(input.shift())

l1 = l1.split(' ')

for (let i = 0; i < 5; i++) {
    l1[i] = Number(l1[i])
}

let media = (l1[0] * 2 + l1[1] * 3 + l1[2] * 4 + l1[3] * 1) / (2 + 3 + 4 + 1)

console.log(`Media: ${media.toFixed(1)}`)

if (media >= 7) {
    console.log('Aluno aprovado.')
}
else if (media < 5) {
    console.log('Aluno reprovado.')
} else {
    console.log('Aluno em exame.')
    console.log(`Nota do exame: ${l2.toFixed(1)}`)
    media = (media + l2) / 2
    if (media >= 5) {
        console.log('Aluno aprovado.')
    } else {
        console.log('Aluno reprovado.')
    }
    console.log(`Media final: ${media.toFixed(1)}`)
}