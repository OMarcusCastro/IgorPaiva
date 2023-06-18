# Pontos importantes

## Metodo Split

- É chamado da seguinte forma `string.split(separator)`
- Serve para separar uma string em sub string atraves do criterio configurado pelo separator

ex:

```js
var frase = "Ola, igor. O maior flamenguista fora do brasil";

var a = frase.split(" "); // a= [Ola,,igor.,o,maior,flamenguista,fora,do,brasil
var b = frase.split("o"); //b= [Ola, ig,r. O mai,
```

## Inserindo variaveis dentro de strings

```js
var a = 20;

console.log(`O valor de exemplo e: ${a}`);
```

## Decidindo entre par ou impar

### Oq e ser par?

    - Significa ser divivel por 2
        - Logo o numero deixa resto 0 quando dividido por 2
        - `num%2===0`
