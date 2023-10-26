export default class Pessoa{// classes sao objetos

    constructor(genero,nome,idade){// funcao construtora que serve para instanciar um novo objeto
        this.genero = genero // this.variavel --> atributo/propriedade --> sao variaveis do obj
        this.nome = nome // This --> faz referencia a instancia que esta usando
        this.idade = idade
        this.ferramenta = undefined
    }

}

export default class Trabalho {
    
    constructor(salario,funcionarios=[]){
        this.salario = salario
        this.funcionarios = funcionarios
    }

    addFuncionario(pessoa){// metodo pois e uma funcao do objeto pois esta dentro do mesmo
        this.funcionarios.push(pessoa)
    }
}
// let p1 = new Pessoa(`masculino`,`marcus`,25)
// let t1 = new Trabalho(700)
// let t2 = new Trabalho(800)
// let p2 = new Pessoa(`masculino`,`igor`,40)
// t1.addFuncionario(p2)
// t1.addFuncionario(p1)
// t2.addFuncionario(p1)
// console.log(t1.funcionarios)
// console.log(t2.funcionarios)