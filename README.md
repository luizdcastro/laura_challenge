# Laura Challange

O banco de dados possui três coleções compostas por users, pacientes e prontuários. 
As rotas da API são protegidas por autenticação JWT que pode ser gerado através dos métodos de registro ou login.

## Instalação e Utilização

Para utilizar a aplicação localmente é necessário verificar se as portas 5000 (API) e 3000 (cliente) não estão sendo utilizadas. Na pasta da API deixei o arquivo CONFIG temporariamente, para que seja possivel conectar com o o banco de dados.

Utilize o gereniador de pacotes [npm](https://docs.npmjs.com/) para instalar os modulos antes de iniciar as aplicações:

Client: https://laura-lfc.herokuapp.com - (Precisa iniciar o servidor localmente)

```bash
npm install
npm start
```
## Métodos e Documentação

- Métodos USERS 
Criação de usuário
Login

Exemplo 01

```bash
POST: http://localhost:5000/api/user/register

Request:

{
    "name": "Itachi Uchia",
    "email": "itachi@domain.com",
    "password": "123456"
}

Response:

{
  "status": "success",
  "data": {
    "_id": "5ef2fe2e313eca41b09a2aa8",
    "name": "Itachi Uchia",
    "email": "itachio@gmail.com",
    "createdAt": "2020-06-24T07:18:06.359Z",
    "__v": 0
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZjJmZTJlMzEzZWNhNDFiMDlhMmFhOCIsImlhdCI6MTU
}
```

- Métodos PACIENTES
CRUD completo

Exemplo 02

```bash
GET http://localhost:5000/api/paciente/5ef11bba5b9bf7080c07ed72

Response:

{
  "status": "success",
  "data": {
    "prontuario": [
      "5ef11bc35b9bf7080c07ed73"
    ],
    "_id": "5ef11bba5b9bf7080c07ed72",
    "name": "Sakura Haruno",
    "user": "5eed71bb89cd8e2a400fbbb8",
    "createdAt": "2020-06-22T20:59:38.786Z",
    "__v": 0
  }
}
```

- Métodos PRONTUARIOS
CRUD completo 
Atualizar evolução do paciente

Exemplo 3

```bash
POST http://localhost:5000/api/prontuario/5ef301bf313eca41b09a2aa9

Request:

{
"sintomas": 
	{
	"dorDecabeca": 0,
	"coceiraNoBraco": 0,
	"coceiraNaPerna": 0,
	"tosse": 0,
	"fraquezaPernas": 1
	}			
}

Response:

{
  "status": "success",
  "data": {
    "etapa": 1,
    "evolucao": [],
    "alerta": "Azul",
    "atendimento": "Pendente",
    "_id": "5ef301ce313eca41b09a2aaa",
    "sintomas": {
      "dorDecabeca": 0,
      "coceiraNoBraco": 0,
      "coceiraNaPerna": 0,
      "tosse": 0,
      "fraquezaPernas": 1
    },
    "paciente": "5ef301bf313eca41b09a2aa9",
    "createdAt": "2020-06-24T07:33:34.342Z",
    "id": 22,
    "__v": 0
  }
}
```

Documentação com exemplos de requisições:

- [Coleção Postman](https://www.getpostman.com/collections/f8f42faaf8a21e6e2adf)

## Técnologias

- [React com Hooks](https://reactjs.org/docs/getting-started.html)
- [Redux](https://redux.js.org/)
- [Node](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com)



