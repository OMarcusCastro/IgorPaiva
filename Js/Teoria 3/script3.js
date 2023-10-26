import Pessoa from "./script2.js"
import Trabalho from "./script2.js"
class Curso extends Trabalho {
    constructor(nome,periodo,nivel,salario,funcionarios=[]){
        super(salario,funcionarios)
        this.nome = nome
        this.periodo = periodo
        this.nivel = nivel
        this.alunos = []}
    matriculaAluno(aluno){
        this.alunos.push(aluno)
    }
}
class Aluno extends Pessoa {
    constructor(genero,nome,idade,matricula){
        super(genero,nome,idade)
        super.ferramenta = 'PC'
        this.matricula = matricula
    }
}
let a1 = new Pessoa('M','joao',20,1)
a1.ferramenta = 'notebook'
let a3 = new Aluno('f','ana',20,1)
let a2 = new Curso('ti',3,'dificil',700)

a2.matriculaAluno(a3)
//console.log(a1)
console.log(a2)

