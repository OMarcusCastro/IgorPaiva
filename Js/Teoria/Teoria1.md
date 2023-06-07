# Inciando com Js

## Comandos Basicos

- Forma mais simples de **OUTPUT**

```js
/*console --> objeto
objetos armazem um consjunto de caracteristicas e (funcionalidades)--> metodos-->funcoes
Quando chamamos o console.log() estamos chamando o metodo '.log()' ,ou seja, a funcao*/
// que esta dentro do objeto console

//Suponha uma funcao f(x,y,z)--> x,y e z sao chamandos de argumentos da funcao
// A funcao log(var) --> O argumento var pode ser string ou number
console.log("testando codigo");
console.log("testando 'codigo'");
console.log(`"testando" 'codigo'`);
console.log("testando codigo");
console.log(12123123, 123131.1231243);
```

- Para add codigo js no HTML `<script scr='path'></script>`

## Variaveis do Js (Primitivas)

- Declaracao de variaveis

  - `let` --> Nao permite a criacao de uma variavel mais de uma vez
  - `var` -> permite que a variavel seja declarada mais de uma vez
  - `const` --> constante--> nao pode ser modificado dps da sua criacao

- Uso de `${variavel}`para strings e **mto util**

```js
//string tamplete
const nome3 = " Marcus";
console.log(`Ola,nome3`);
console.log(`Ola,${nome3}`);
//teste na sua maquina
```

- Dos tipos temos:

```js
//strings -- >textos
const nome1 = "Igor";
const nome2 = `Igor`;
const nome3 = "Igor";
//Number
const num1 = 10; // int
const num2 = 10.5; // float(numero de ponto flutuante), double

let nome4; //->Undefined --> Aponta para nenhum da memoria
let nome5 = null; //--> Aponta para nenhum da memoria -->Mudanca de estado de algo existente
const boolean = false; //bool--> true or false --> valor logico
```

## Operadores Aritmeticos

- '+' serve para adicao e concatenacao
- '\*' multiplica
- '/' divide
- '\*\*' potenciacao
- '%' resto da divisao
- cont++ funciona
- +=,\*= tbm funciona(operadores de atribuicao)
- string to number Number(num) ou parseInt(num)->int

## Entrada

- `variavel = prompt()`

### Casas de precisao

```js
num.tofixed(precisao);
```

## Fazendo input com o prompt

Entendimento do objeto window no navegador

- Alert esta dentro do objeto window
- Alert e um shortcut de window.alert

- Tbm ha o window.confirm --> Retorna um boolean

### Codigo

```js
alert("string de teste "); // pop up de alerta
const num1 = prompt("valor: ");
console.log(num1);
```

## Array

- Pode ser entendido como um armario com varias gavetas numeradas de 0 ate n-1. Onde n e o tamanho do array

## Mais sobre string -Caso Particular de Array(array de caracteres)

- Comportamento de vetor index
- return element of index `charAt[val]`
- return index da `indexOf(ele)`
- return index da `indexOf(ele,begin)`
- return substring `.slice(begin,end)`
- return size `.lenght`
- return array of substrings `.split(separator,times)`
- `toUpperCase` `toLowerCase`

## Numbers

- `toString` --> nao muda a tipagem. So da um retorno especifico
- `.toFixed(precision)` --> Set precision of float
- `isInteger(num)` --> Return boolean

**OBS:** NaN--> NotaNumber--> operacao invalida

Padrao: IEEE 754-2008
