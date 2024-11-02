<table>
  <tr>
    <td><img src="https://github.com/luiizsilverio/agendei/blob/main/agendei-mobile/src/assets/logo.png" /></td>
    <td><h1>AGENDEI</h1></td>
  </tr>
</table>


## Conteúdo
* [Sobre a aplicação](#sobre-a-aplicação)
* [Tecnologias](#hammer_and_wrench-tecnologias)
* [Iniciando a Aplicação](#car-Iniciando-a-aplicação)
* [Screenshots](#camera_flash-screenshots)
* [Licença](#balance_scale-licença)
* [Contato](#email-contato)

<br />

## Sobre a aplicação
Aplicação desenvolvida durante a 3.a edição do evento __Jornada JS__, promovido pela __Dev Point__.<br />
Durante o evento de 5 dias, foram desenvolvidas 2 aplicações: uma API em Nodee um App em React Native. <br />
A aplicação mobile permite selecionar o médico, uma data no calendário e fazer um agendamento.<br />
A aplicação Node utiliza banco de dados SQLite.<br />

## :hammer_and_wrench: Tecnologias
* Back-end
  * __Node.js__
  * Banco __SQLite__
  * Autenticação __JWT__
* Mobile
  * __React Native__ + __Expo__
  * __React Navigation__ para rotas
  * __Axios__ para acessar a API
<br />

## :car: Iniciando a aplicação
Baixe o repositório com git clone e acesse a pasta _agendei_.
```bash
$ git clone https://github.com/luiizsilverio/agendei
```
* Back-end
  * Acesse a pasta __agendei-api__
  * Renomeie o arquivo __.env.example__ para __.env__
```bash
$ cd agendei-api
$ npm install
$ npm start
```
* Mobile
  * Acesse a pasta agendei-mobile__
  * Altere o IP da baseURL no arquivo _src/lib/api.js_
```bash
$ cd ..
$ cd agendei-mobile
$ npm install
$ npm run android
```
<br />

## :camera_flash: Screenshots
![](https://github.com/luiizsilverio/agendei/blob/main/agendei-mobile/assets/agendei.gif)
<br />

## :balance_scale: Licença
Este projeto está licenciado sob a [licença MIT](LICENSE).
<br /><br />

## :email: Contato

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/luiz-s-de-oliveira-6b6067210)
[![E-mail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:luiiz.silverio@gmail.com)
