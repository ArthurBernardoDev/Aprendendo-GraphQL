<h1 align="center">
    Aprendendo GraphQL
    
## Motivos para utilizar
Imagine um cenário onde existe uma ApiRest e um Front-end web onde o front-end precisa consumir uma listagem de usuários, para fazer isso ele faz um requisição Get em users e a api retorna
```json
[ 
    { "name": "Arthur Bernardo", "email": "contato.arthurbernardoas@gmail.com", "social": {"instagram": "@arthur_bernardoxd"}  },
    { "name": "Joao dias", "email": "joao dias@gmail.com", "social": {"instagram": "@joaodias"}  },
    { "name": "Lucas", "email": "lucas@gmail.com", "social": {"instagram": "@lucas"}  },
    { "name": "Pedro", "email": "Pedro@gmail.com", "social": {"instagram": "@pedro"}  },
]
 ```
 Se em uma funcionalidade do front-end a única informação usada for o name, todo resto da requisição não teria uso
 
 O GraphQL permite que você faça a requisição somente dos campos que você precisa utilizar, um exemplo de como o json ficaria abaixo: 
 ```json
 {"name": "Arthur Bernardo"},
 {"name": "Joao dias"},
 {"name": "Lucas"},
 {"name": "Pedro"}
 ```
 
 ## Vantagens de uso
 
 Se sua aplicação estiver rodando na AWS -> Pay per use: pago por uso, ou seja você vai pagar pela quantidade de dados (bytes) trafegados na rede. Se você fizer uma requisição onde todos os dados não são utilizados, você estaria aumentando o custo da aplicação, sem qualquer utilidade.
 
 O nome dado pra esse tipo de caso explicado acima é Overfetching, que é quando o cliente trafega mais dados do que ele precisa.

---
