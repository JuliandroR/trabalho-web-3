# Trabalho de Web III

## Tecnologias utilizadas
- HTML
- CSS
- Javascript
- NodeJs
- Express
- Babel
- Multer
- Docker
- Docker Compose
- Postgres
- Sequelize

## Como configurar
Antes de executar a aplicação, certifique-se de possui o Docker e o Docker Compose instalados em sua máquina.

- Crie os containers executando:
```
docker-compose up
```
 - Acesse o PgAdmin4 (127.0.0.1:3002), com as credenciais admin@mail.com, e admin e crie uma tabela denominada "web3"
 - No terminal, execute:
```
npm run migration:run
```
 - Por último execute:
```
npm run dev
```
Após isso basta acessar a 127.0.0.1:3001

## Desenvolvido por
[Bruno Casas](https://github.com/Bruno-Casas)

[Juliandro Rocha](https://github.com/JuliandroR/)

