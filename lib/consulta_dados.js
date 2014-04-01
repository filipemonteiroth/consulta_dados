var URLs = require("./urls_ws"),
	rest = require("restler"),
	xmlParser = require("xml2json");

var Consulta = function Consulta(login, senha) {

	this.login = login;
	this.senha = senha;

	this.pesquisaCPF = function(cpf, callback) {
		rest.get(this.formatUrl(URLs.CPF, cpf)).on("complete", function(result) {
            var retorno = JSON.parse(xmlParser.toJson(result));
            callback(retorno.RetornoSituacaoCadastralPF);
		});
	};

	this.pesquisaCNPJ = function(cnpj, callback) {
		rest.get(this.formatUrl(URLs.CNPJ, cnpj)).on("complete", function(result) {
            var retorno = JSON.parse(xmlParser.toJson(result));
            callback(retorno.RetornoSituacaoCadastralPJ);
		});
	};

	this.formatUrl = function(URL, value) {
		return URL.replace("{{login}}", this.login).replace("{{senha}}", this.senha).replace("{{value}}", value);
	};

};

module.exports = Consulta;