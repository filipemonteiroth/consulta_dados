var URLs = {
	CNPJ: "http://ws.fontededados.com.br/consulta.asmx/SituacaoCadastralPJ?login={{login}}&senha={{senha}}&cnpj={{value}}",
	CPF: "http://ws.fontededados.com.br/consulta.asmx/SituacaoCadastralPF?login={{login}}&senha={{senha}}&cpf={{value}}"
};

module.exports = URLs;