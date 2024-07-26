
# Gerador de requisições REST com NodeJS

Este simples programa efetua múltiplas requisições em apis REST, com base em um arquivo CSV.




## Estrutura do CSV

O arquivo CSV de exemplo já possui a estrutura para a requisição, sendo necessário seguir o padrão das colunas **metodo;url;header;body**

Caso a coluna header ou budy não sejam necessárias para a requisição, basta mante-las vazias, incluindo apenas o separador **;**

## Threads

O programa permite que seja definida uma quantidade de threads, o limite está dentro do próprio código, no parâmetro **maxThreads**

## Instalação

```bash
  npm install
```
    

## Execução

```bash
  npm start
```
        
