class Pessoa{
    #nome;#idade// privando variavel
    constructor(nome,idade){
        this.#nome = nome//atributos
        this.#idade = idade
        this.role = undefined
        
    }
    exibirInfos(){//metodo-funcao de uma classe
        console.log(this.#nome,this.#idade)
    }
    mudaNome(novonome){//metodo
        if (novonome ===''){
            throw("NOME INVALIDO")//levantamento de erro
        }
        this.#nome = novonome
    }
    //getter so pega o valor 
    get nome(){
        return this.#nome
    }
    get idade(){
        return this.#idade
    }
    //setter
    set nome(novonome){
        if (novonome ===''){
            throw("NOME INVALIDO")
        }
        this.#nome=novonome
    }
}
let p1 = new Pessoa('marcus',40)//p1 e instancia(this)
let p2 = new Pessoa('igor',41)
//p1.mudaNome('ola')
//p1.nome=''
//p1.exibirInfos()

class Animal{
    #nome
    #raca
    constructor(nome,raca,idade){
        this.#nome = nome
        this.#raca = raca
        this.idade = idade
    }   
    exibeRaca(){
        console.log(this.#raca)
    
    }
    get nome(){
        return this.#nome
    }
}
let a1 = new Animal('cavalo','mangalarga',17)
a1.exibeRaca()
console.log(a1.nome)
