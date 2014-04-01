consulta_dados
==============

Pacote node para pesquisa de CPF/CNPJ utilizando a validação do webservice fonte de dados (http://www.fontededados.com.br).

Para utilizar é necessário que você tenha uma conta criada com usuário e senha.

Instalando
==========

```javascript
npm install consulta_dados
```


Como utilizar
=============

```javascript
  var Consulta = require("consulta_dados");

  //Instancia classe de validação dos dados, passando usuário e senha
  var consulta = new Consulta("teste", "teste");
  
  consulta.pesquisaCPF("01234567890", function(result){
  	//os dados retornados são no formato JSON
  	console.log(result);
  });
  
```

A função irá retornar o seguinte objeto:

```javascript
{ 'xmlns:xsd': 'http://www.w3.org/2001/XMLSchema',
  'xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance',
  xmlns: 'http://ws.fontededados.com.br/',
  MensagemErro: {},
  ValorCobrado: 0.15,
  CodErro: 0,
  Nome: 'SEBASTIANA M DE CARVALHO',
  Cpf: 1234567890,
  SituacaoCadastral: 'PENDENTE DE REGULARIZAÇÃO' }
```

Códigos de erro
===============

0 OK  
1 Não autenticado  
2 Fonte indisponível  
3 Saldo insuficiente  
99 CPF/CNPJ Inválido  
100 Erro ao processar consulta  

Contribuindo
============

Faça um pull request ou crie uma issue. :)
