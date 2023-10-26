# Teoria 2 Js

## Mais diferencas entre Var e Let

### Let

- Nao posso redeclarar o let
- `Let` tem escopo de bloco --> escopo--> nivel de linha |bloco -->{}

```js
let a = 2;

if (a >= 2) {
  console.log("A e maior que 2");
  let a = 4;
  console.log(a);
  if (a > 3) {
    if (a > 1) {
      console.log("ola");
      console.log(a); // Valor encontrado vai ser o do escopo externo mais proximo a utilizacao da variavel
    }
  }
}
```

### var

- Closer to fuction
- Dentro da Function nao consegue de acessado por fora(nao tem escopo de bloco)

```js
var a = 2;

function diz_oi() {
  var a = 4;
  console.log(a);
}

console.log(a);

diz_oi();
```

### Atribuição via desestruturação

```
let a = 'A';// B
let b = 'B';// C
let c = 'C';// A
//0 1  2
//[2,3,4]
//[x,y,z]

// Primeiro com primeiro com primeiro, segundo com segundo ..
[x,y,z]=[2,3,4]
console.log(a,b,c)
```

### For (Classico): Estrutura de repeticao

```js
// console.log('linha 0')
// console.log(`linha 1`)
// console.log(`linha 2`)
// console.log(`linha 3`)
// console.log(`linha 4`)
// console.log(`linha 5`)
//       0 1 2 3 4 5 6 7 8
var a = [9, 8, 7, 6, 5, 4, 3, 2, 1];
//a[0]->9
for (let i = 0; i <= 5; i++) {
  console.log(`a[${i}]=${a[i]}`);
}
```
