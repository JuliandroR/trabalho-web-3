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
- JWT

## Como configurar

### Usando Docker
Antes de executar a aplicação, certifique-se de possui o Docker e o Docker Compose instalados em sua máquina.

- Baixe todas as dependências do projeto:
```
npm install
```

- Inicie o docker compose, através do comando:
```
docker-compose up
```

- Acesse http://localhost:3002 e informe as credenciais: E-MAIL: admin@mail.com, SENHA: admin


- Crie um banco de dados com o nome "web3"

- Após criar o banco execute a migração, por meio do comando:
```
npm run migration:run
```

- Inicie o projeto em modo de desenvolvimento utilizando o comando:
```
npm run dev
```

- Após essa etapa o projeto já pode ser utilizado, para visualizar a parte web acesse a URL http://localhost:3001

## Usando banco de dados local
- Baixe todas as dependências do projeto:
```
npm install
```

- Modifique as informações do banco de dados contida em /config/config.json, em "development", para as do seu banco de dados local

- Após modificar as configurações do banco de dados execute a migração:
```
npm run migration:run
```

- Inicie o projeto em modo de desenvolvimento utilizando o comando:
```
npm run dev
```


## Desenvolvido por
[Bruno Casas](https://github.com/Bruno-Casas)

[Juliandro Rocha](https://github.com/JuliandroR/)

