# Projeto de Api's

## Tecnologia 

- Fastify
  -  microframe work mais perfomatico que express
  -  Integracao direta com TS
  -  Comunidade mais solida
  -  Perfomatico com o async e await
- Ts
  - Linguagem altamente tipada 
  - Evita erros em desenvolvimento

## Manipulando o Ts
- `$ npm init -y`
- Baixar como uma dependencia de desenvolvimento. Js nao tem como padrao.
  - `$ npm i -D typescript`
- Configs do Ts
  - `$ npx tsc --init` 
  - Modificar o Target : `"target": "es2020",`

## Criando a aplicação

- Instalando fastify na raiz do projeto: `$npm i fastify`
- Testando o [server.ts](src/server.ts)
  - Converter para Js: `$ npx tsc src/server.ts`
    -  Obs: Isso não é performatico pois converter toda hora é ruim no desenvolvimento. Teremos solução para isso.
   - Se aparecer erros, baixe o pacote para o node
     - `$ npm install -D @types/node`
     - Apague o **js** gerado e faca novamente `$ npx tsc src/server.ts`
       - Note que o erro sumirá
  - Execute com `$ node src/server.js`
  - Abra no navegador em 127.0.0.1:3333/hello
  - Para nao ter que ficar convertendo manualmente e sujar a pasta nos podemos baixar a dependencia **tsx**
    - `$ npm install tsx -D`
  - Para executar direto do Ts sem conversão
    - `$ npx tsx src/server.ts`
  - OBS: Em produção é melhor converter para **JS** pois é muito mais rapido rodar dele do que rodar sempre convertendo o **TS**
  - Nos Scripts de Package.json: `"dev":"tsx watch src/server.ts"`

## Configurando Padroes: **ESlint**

- Ferramenta que padroniza a sintaxe de um porjeto em Js
- `$ npm i eslint @rocketseat/eslint-config -D`
- Para configurar:
  - criar na raiz : **.eslintrc.json**
- Em user settings json do Vscode:
  ```JSON
    "editor.codeActionsOnSave" : {
        "source.fixAll.eslint":true
    }
  ```
- No package.json
  ```JSON
    "lint":"eslint src -ext .ts --fix"
  ```
## Configurando o Knex

- Query builder que simplifica as requisões
- `$ npm install knex`
- `$ npm install sqlite3`
- criar pasta temp
- na raiz: criar knexfile.ts

### Criando Migrations

- Serve para controle de versao
- Uma fez feita nao deve ser desfeita
- Historico de mudancas no banco 
- `npx knex -h`
- `npx knex migrate:make create-documents`: Criando uma nova tabela do banco
- No package.json: `"knex":"node --loader tsx ./node_modules/.bin/knex"`
- Rodar npm run knex -- -h
