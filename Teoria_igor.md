# Teoria

\

## console.log

- console: e um objeto
- log e um metodo do console

### o que sao metodos?

- metodo sao funcoes de um objeto
- todo metodo precisa de ()

## operadores aritimeticos

- add +
- subtracao -
- mutiplicacao \*
- divisao /
- resto %

## propriedades

- todo objeto possui propriedades relacionadas a ele.E elas acessadas pelo operador (.)
- exemplo: `objeto.propriedade`

## metodos

- sao funcoes de OBJETOS e acessadas por pontos
- exemplo:`objeto.nomedafuncao()`

## variaveis

- para declarar a variavel devemos usa o (CAMEL CASE),
  que seria a primeira paralavra minuscula,e a proxima em seguida deve sempre comecar com letra maiuscula.

- myname se torna com o camel case myName

### let vs const

- a principal diferenca entre LET e CONST e que o valor do CONST nao pode ser modificado.

## Concatenando textos

- operador(+)e responsavel por juntar txteto e variaveis
- entrada:
  ```js
  var favoriteAnimal = "dog";
  console.log("My favorite animal:" + favoriteAnimal);
  ```
- saida
  ```txt
  My favorite animal:dog
  ```

## string com (``,"",'').

- os 3 modos servem para criar strings.entretanto somente com crase e possivel inserir variaveis no meio da string.
- entrada:
  ```js
  var myName = "igor";
  var myCity = "London";
  console.log(`My name is ${myName}. My favorite city is ${myCity}.`);
  ```
- saida
  ```txt
  My name is igor. My favorite city is London.
  ```

## condicionais

### if

- escrita : `if (condicao){}`

## comparadores

- === sao iguais !== sao diferentes.

## operadores comparativos

### and &&

- faz com que o if so seja realizado se todas as condicoes forem verdadeiras.

### or ||

- o if sera realizado caso pelo uma das condicoes sejam verdadeiras.

### falsy values (desigh patern)

- sao valores que dao resultados de false na comparacao com if logo esse if nao e verdadeiro

- os falsy valeus sao :

  - 0
  - string vazia ('' "")
  - null, underfined,NaN

### short-circuit

- `let var2 = var1 || 'outro valor'`
- explicando: se var1 nao for um valor _falsy_ var2 recebera var1.se var1 for _truthy_ var2 sera igual a 'outro valor'.

## Math object

-`Math.random()` : metodo que retorna o numero _aleatorio_ entre 0 e 0.999... -`Math.floor()` : metodo que arredonda numero fracionario para baixo. -`Math.ceil()` : metodo que arredonda numero fracionario para cima.#

# part 2

## Funcao

### Declarando as funcoes

- usar o seguinte formato`function nomedafuncao(){}`

## array

### criando arrays

- usar o seguinte formato `let variavel = [elemento 1, elemneto 2, ...]`

### capiturando a tomanho da array

- usar o seguinte formato ` array.length`

### como add na lista arrasy

- usar o seguinte formato `array.push`

### como remover o ultimo item do array ` array.pop()`

- `array.pop()`
- esse comando retorna o item removido

## For

- sintaxe : `for(inicializacao; condicao de parada; upadater){}`

- exemplo : `for(let i = 0; i < 10 ; i+=2)`.

```
var cod = Number(input[0]);
var qtd = Number(input[1]);
var preco = 0;

if(cod === 1){
    preco = 4;
}
else if(cod === 2){
    preco = 4.5;
}
else if(cod === 3){
    preco = 5;
}
else if(cod === 4){
    preco = 2;
}
else if(cod === 5){
    preco = 1.5;
}
var total = qtd * preco;
console.log(`Total : R$ ${total.toFixed(2)}`);



```
