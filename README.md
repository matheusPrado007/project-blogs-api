# Boas-vindas ao repositório do projeto API de Blogs!

## API de Blog usando Node.js e Sequelize

Este projeto consiste no desenvolvimento de uma API para um blog utilizando Node.js e o pacote Sequelize para as operações de banco de dados.

A API oferece as seguintes funcionalidades:

- Autenticação de usuários: permite o registro e login de novos usuários JWT (JSON Web Token).
- CRUD de posts: possibilita criar, ler, atualizar e excluir posts.
- Categorias para os posts: suporta a associação de categorias aos posts.
- Relação entre usuários e posts: garante que apenas usuários autenticados possam interagir com os posts.
- Relação entre posts e categorias: possibilita a associação de um post a uma ou mais categorias e a obtenção dos posts de uma determinada categoria.

A API segue os princípios do REST e disponibiliza endpoints para cada funcionalidade mencionada acima. Por meio desses endpoints, é possível realizar requisições HTTP para obter dados, criar novos posts, atualizar posts existentes ou excluí-los.


## Tecnologias utilizadas

- Node.js
- Sequelize (pacote de ORM para banco de dados)
- MySQL (banco de dados relacional)
- JWT (JSON Web Token)

## Funcionalidades

A API oferece as seguintes funcionalidades:

- Autenticação de usuário e login
- Operações de CRUD para posts (Create, Read, Update, Delete)
- Relação entre usuários e posts
- Utilização de categorias para os posts
- Relação entre posts e categorias

## Endpoints

A API segue os princípios do REST e disponibiliza os seguintes endpoints:

- `POST /user/login` - Fazer login de um usuário
- `GET /post` - Obter todos os posts
- `GET /post/:id` - Obter um post específico pelo ID
- `POST /post` - Criar um novo post
- `PUT /post/:id` - Atualizar um post existente
- `DELETE /post/:id` - Excluir um post existente
- `GET /categories` - Obter todas as categorias
- `GET /categories/:id/post` - Obter todos os posts de uma categoria específica

A seguir estão os detalhes sobre os métodos CRUD para posts:

- `GET /posts` - Retorna uma lista de todos os posts.
- `GET /posts/:id` - Retorna os detalhes de um post específico com base no ID fornecido.
- `POST /posts` - Cria um novo post com os dados fornecidos no corpo da requisição.
- `PUT /posts/:id` - Atualiza um post existente com base no ID fornecido e os dados fornecidos no corpo da requisição.
- `DELETE /posts/:id` - Exclui um post existente com base no ID fornecido.

Certifique-se de incluir os detalhes necessários, como os parâmetros e formatos de requisição/resposta, nos endpoints acima.


## Pré-requisitos

Certifique-se de ter os seguintes requisitos instalados em seu ambiente de desenvolvimento:

- Node.js (versão 12 ou superior)
- Banco de dados MySQL

## Configuração do Projeto

Siga as etapas abaixo para configurar e executar o projeto:

1. Clone este repositório em sua máquina local:
```git clone git@github.com:matheusPrado007/project-blogs-api.git```

2. Navegue até o diretório do projeto:
```cd projeto-api-blog```

3. Instale as dependências do projeto:
```npm install```


## Contribuição

Se você deseja contribuir para este projeto, sinta-se à vontade para abrir uma issue ou enviar um pull request. Sua contribuição será muito apreciada!


