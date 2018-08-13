var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function (event){
	event.preventDefault();
	
	// Buscando o form
	var form = document.querySelector("#form-adiciona");

	// Buscando os valores inseridos no form
	var paciente = obtemDadosPaciente(form);

	var erros = validaPaciente(paciente);

	if (erros.length > 0) {
		exibeMensagensdeErro(erros);
		return;
	}

	adicionaPacienteNaTabela(paciente);

	// Limpa o form
	form.reset();
	var mensagensErro = document.querySelector("#mensagens-erro");
	mensagensErro.innerHTML = "";

});

function obtemDadosPaciente(form){

	// Criando um objeto e suas propriedades
	var paciente = {
		nome: form.nome.value,
		peso: form.peso.value,
		altura: form.altura.value,
		gordura: form.gordura.value,
		imc: calculaImc(form.peso.value, form.altura.value)
	}

	return paciente;
}

// Cria os elementos da tabela - tr e tds
function montaTr(paciente){

	// Criando a linha - tr - e adicionando a classe paciente na tr
	var pacienteTr = document.createElement("tr");
	pacienteTr.classList.add("paciente");

	// Chama a função que monta as colunas da tabela e associa os elementos td dentro do tr
	pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
	pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
	pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
	pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
	pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

	return pacienteTr;
}

// Cria os elementos tds da tabela
function montaTd(dado, classe){

	var td = document.createElement("td"); 	// Cria a td
	td.textContent = dado; 	// Adiciona o valor do dado na td
	td.classList.add(classe); // Adiciona a classe na td

	return td;
}

function validaPaciente(paciente){
	
	var erros = [];

	if (paciente.nome.length == 0) erros.push("O nome não pode ser em branco");
	if (!validaPeso(paciente.peso)) erros.push("Peso é inválido");
	if (!validaAltura(paciente.altura)) erros.push("Altura é inválida");
	if (paciente.gordura.length == 0) erros.push("A gordura não pode ser em branco");
	if (paciente.peso.length == 0) erros.push("O peso não pode ser em branco");
	if (paciente.altura.length == 0) erros.push("A altura não pode ser em branco");

	return erros;
}

function exibeMensagensdeErro(erros){
	var ul = document.querySelector("#mensagens-erro");
	ul.innerHTML = "";

	erros.forEach(function(erro){
		var li = document.createElement("li");
		li.textContent = erro;
		ul.appendChild(li);
	});
}

function adicionaPacienteNaTabela(paciente){
	// Montando o html
	var pacienteTr = montaTr(paciente);
	// Vinculando o tr ao form
	var tabela = document.querySelector("#tabela-pacientes");
	tabela.appendChild(pacienteTr);

}