<h3 align="center">
  Challenge Very Useful Tools to Remember
</h3>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/daniel-leal/vuttr?color=%23FF9000">

  <a href="https://www.linkedin.com/in/daniel-borges-leal-58198087/" target="_blank" rel="noopener noreferrer">
    <img alt="Made by" src="https://img.shields.io/badge/made%20by-daniel%20leal-%23FF9000">
  </a>

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/daniel-leal/vuttr?color=%23FF9000">

  <a href="https://github.com/daniel-leal/vuttr/commits/main">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/daniel-leal/vuttr?color=%23FF9000">
  </a>

  <a href="https://github.com/daniel-leal/vuttr/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/daniel-leal/vuttr?color=%23FF9000">
  </a>

  <img alt="GitHub" src="https://img.shields.io/github/license/daniel-leal/vuttr?color=%23FF9000">
</p>

<p align="center">
  <a href="#%EF%B8%8F-about-the-project">About the project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-requirements">Requirements</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-getting-started">Getting started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

<p id="insomniaButton" align="center">
<a href="https://insomnia.rest/run/?label=Vuttr%20API&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fdaniel-leal%2Fvuttr%2Fmain%2FInsomnia.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p>

## 💇🏻‍♂️ Challenge Description

Sua tarefa é construir uma API e banco de dados para a aplicação VUTTR (Very Useful Tools to Remember). A aplicação é um simples repositório para gerenciar ferramentas com seus respectivos nomes, links, descrições e tags. Utilize um repositório Git (público, de preferência) para versionamento e disponibilização do código.

## 🚀 Technologies

Technologies that I used to develop this api

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [TypeORM](https://typeorm.io/#/)
- [JWT-token](https://jwt.io/)
- [uuid v4](https://github.com/thenativeweb/uuidv4/)
- [PostgreSQL](https://www.postgresql.org/)
- [Date-fns](https://date-fns.org/)
- [Jest](https://jestjs.io/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [EditorConfig](https://editorconfig.org/)

## 📃 Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/)
- One instance of [PostgreSQL](https://www.postgresql.org/)

## 1. A API deve responder na porta 3000

## 2. Deve haver uma rota para listar todas as ferramentas cadastradas

```javascript
[
  {
    id: 1, // ou qualquer outro identificador
    title: 'Notion',
    link: 'https://notion.so',
    description:
      'All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized. ',
    tags: ['organization', 'planning', 'collaboration', 'writing', 'calendar'],
  },
  {
    id: 2,
    title: 'json-server',
    link: 'https://github.com/typicode/json-server',
    description:
      'Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding challenges.',
    tags: ['api', 'json', 'schema', 'node', 'github', 'rest'],
  },
  {
    id: 3,
    title: 'fastify',
    link: 'https://www.fastify.io/',
    description:
      'Extremely fast and simple, low-overhead web framework for NodeJS. Supports HTTP2.',
    tags: ['web', 'framework', 'node', 'http2', 'https', 'localhost'],
  },
];
```

## 3. Deve ser possível filtrar ferramentas utilizando uma busca por tag

```
GET /tools?tag=node (node é a tag sendo buscada neste exemplo)
```

```javascript
[
  {
    id: 2, // ou qualquer outro identificador
    title: 'json-server',
    link: 'https://github.com/typicode/json-server',
    description:
      'Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding challenges.',
    tags: ['api', 'json', 'schema', 'node', 'github', 'rest'],
  },
  {
    id: 3,
    title: 'fastify',
    link: 'https://www.fastify.io/',
    description:
      'Extremely fast and simple, low-overhead web framework for NodeJS. Supports HTTP2.',
    tags: ['web', 'framework', 'node', 'http2', 'https', 'localhost'],
  },
];
```

## 4. Deve haver uma rota para cadastrar uma nova ferramenta

O corpo da requisição deve conter as informações da ferramenta a ser cadastrada, sem o ID (gerado automaticamente pelo servidor). A resposta, em caso de sucesso, deve ser o mesmo objeto, com seu novo ID gerado.

```
POST /tools Content-Type: application/json
```

```javascript
 {
     "title": "hotel",
     "link": "https://github.com/typicode/hotel",
     "description": "Local app manager. Start apps within your browser, developer tool with local .localhost domain and https out of the box.",
     "tags":["node", "organizing", "webapps", "domain", "developer", "https", "proxy"]
 }
```

```
Resposta:

Status: 201 Created

Content-Type: application/json
```

## 5. O usuário deve poder remover uma ferramenta por ID

```
DELETE /tools/:id

Resposta:

Status: 204 No Content
```

## 🤓 Acceptance Criteria

- A API deve ser real e escrita por você. Ferramentas que criam APIs
  automaticamente (Loopback, json-server, etc) não são aceitas;
- Todos os requisitos acima devem ser cumpridos, seguindo o padrão de rotas
  estabelecido;
- Deve haver um documento de API Blueprint ou OpenAPI (antigo Swagger)
  descrevendo sua API;
- Se você julgar necessário, adequado ou quiser deixar a aplicação mais completa (bônus!) você pode adicionar outras rotas, métodos, meios de autenticação com usuários, etc

## 💻 Getting started

Import the `Insomnia.json` on Insomnia App or click on [Run in Insomnia](#insomniaButton) button

**Clone the project and access the folder**

```bash
$ git clone https://github.com/daniel-leal/vuttr.git && cd vuttr
```

**Follow the steps below**

```bash
# Install the dependencies
$ yarn

# Make a copy of '.env.example' to '.env'
# and set with YOUR environment variables.
# The aws variables do not need to be filled for dev environment
$ cp .env.example .env

# Create the instance of postgreSQL using docker
$ docker run --name vuttr-postgres -e POSTGRES_DB=vuttr \
              -e POSTGRES_PASSWORD=docker \
              -p 5432:5432 -d postgres:9.6

# Once the services are running, run the migrations
$ yarn typeorm migration:run

# To run tests
$ yarn test

# To finish, run the api service
$ yarn dev:server

# To build
yarn build

# To run via docker
$ docker-compose up -d

# Well done, project is started!
```
