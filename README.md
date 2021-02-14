<h2 align="center"> 
<img alt="Totvs logo" title="#Totvs" src="src/assets/img/totvs-logo.png" width="250px" />
<h3 align="center">Teste front-end Totvs</h3>
</h2>

<p align="center">
  <a href="#bulb-Projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#construction-Requerimentos-para-plataforma">Requerimentos para plataforma</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-Tecnologias-usadas">Tecnologias usadas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#arrow_forward-Rodando-a-aplicação">Rodando a aplicação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

## :bulb: Projeto

O projeto é dividido em duas partes, podendo ser acessado pelo Menu lateral, sendo eles o CRUD e Comunicação com API.

O CRUD é acessado pelo menu "Cadastro", nele é possível fazer o cadastro, edição, leitura e exclusão de um usuário.
A base de dados dos usuários se encontra na localStorage.

A Comunicação com API é acessado pelo menu "Trends", nele é possível visualizar a lista de 20 filmes ou séries de TV que estão en alta.
A lista possui filtros de categoria e período. Em categoria pode ser escolhido séries ou filme e em período, pode ser escolhido dia ou semana.


## :construction: Requerimentos para plataforma 
 
- [Git](https://git-scm.com/)
- [NodeJS](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/)

## :rocket: Tecnologias usadas

-  [Typescript](https://www.typescriptlang.org/)
-  [Angular](https://angular.io/)
-  [PO-UI](https://po-ui.io/)

## :arrow_forward: Rodando a aplicação

Esse projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli) na versão 9.1.7.

### No terminal 

```sh
# Clone o projeto
git clone https://github.com/JuAintablian/teste-totvs.git

# Vá para a pasta do projeto
cd teste-totvs

# Instale as dependências
npm install

```

## Servidor de desenvolvimento

Digite `ng serve` no terminal para executar a aplicação em modo de desenvolvimento. Abra em seu navegador: `http://localhost:4200/`. A aplicação irá automaticamente recarregar se houver alguma alteração em qualquer arquivo do projeto.

## Gerar códigos

Digite `ng generate component component-name` no terminal para gerar um novo componente. Você também pode utilizar `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Digite `ng build` no terminal para compilar o projeto. Os arquivos compilados serão armazenados no diretório `dist/`. Use a flag `--prod` para a compilação de produção.

## Executando testes unitários

Digite `ng test` no terminal para executar os testes unitários via [Karma](https://karma-runner.github.io).

## Executando testes end-to-end

Digite `ng e2e` no terminal para executar os testes end-to-end via [Protractor](http://www.protractortest.org/).

## Mais ajuda

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

