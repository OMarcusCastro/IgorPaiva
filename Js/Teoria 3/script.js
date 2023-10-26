// variaveis e funcoes 
// Em objetos
// variavel  -> atributo
// funcoes  -> metodos


class Animal{

    constructor(nome,especie){
        this.nome = nome
        this.especie = especie
    }

    fazSom(){
        console.log(`O ${this.especie} chamado ${this.nome} esta fazendo som`)
    }
}

class Pessoa{

    constructor(genero,nome,idade){
        this.genero = genero
        this.nome = nome
        this.idade = idade
        this.ferramenta = undefined
    }

}

class Caneta{
    constructor(cor,marca){
        this.marca = marca
        this.cor = cor
    }

    escrever(mensagem){
        console.log(`${this.marca} esta escrevendo a mensagem: ${mensagem}`)
    }
}
// let a1 = new Animal('Marcus','Burro')
// let c = new Animal('Igor','jegue')
// console.log(c.nome)
// console.log(a1.nome)
// console.log(a1.especie) 
// console.log(c.especie)
// a1.fazSom()
// c.fazSom()

let p1 = new Pessoa('M','Marcus',21)
let c1 = new Caneta('Preta','Bic')

p1.ferramenta = c1

p1.ferramenta.escrever('Ola!')