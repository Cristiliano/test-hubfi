# test-hubfi
A ideia é fazer o teste passado de forma eficiente e funcional 

## Tecnologias:
Foi utilizado as seguintes tecnologias: 
- NestJs
- TypeORM
- Docker 
- MySQL 5.7

## Como Testar:

Uma vez feito o clone do repositorio, primeiro instale as dependências do NPM, utilizando: 

```
npm install 
```

Logo após, utilize o docker para baixar a imagem do mysql desejada, utilizando:

```
docker pull mysql:5.7
```

Uma vez instalada a versão do nosso mysql, utilizaremos o backup do banco disponivel na pasta "database" para construir o nosso container, utilizando: 

```
docker run -p 3308:3306 --name new_mysql -e MYSQL_ALLOW_EMPTY_PASSWORD=true -v <dir-my-desktop>\test-hubfi\database:/var/lib/mysql mysql:5.7
```

Uma vez que temos tudo instalado e funcionando, precisamos apenas utilizar o comando abaixo em nosso arquivo para testar:

```
npm start
```

## Rotas Disponiveis para Teste:

Todas as Entidades estão com seus respectivos endpoints 100% funcionais. 
Para verificar cada uma das mesmas basta abrir importar o arquivo "Documentation.txt" no Postman.