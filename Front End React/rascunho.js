let dados = [1,2,3,4,5]

let lista = [

    {
    author:'marcus',
    idade : 21
    },
    {
        author:'igor',
        idade:40
    }
]
function dobra(x){
    return x*2 
}

function maiorquedois(x){
    return x>2
}


console.log(dados.filter(maiorquedois))

console.log(dados.map(dobra))
function saudacao(x){
    console.log(`ola ${x.author}`)
    console.log(`Voce tem ${x.idade} anos`)
}

lista.map(saudacao)