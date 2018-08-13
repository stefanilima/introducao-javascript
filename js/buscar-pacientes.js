var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
	console.log("Buscando pacientes...");

	// Fazendo uma requisição
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
	xhr.addEventListener("load", function(){

		var erroAjax = document.querySelector("#erro-ajax");

		if (xhr.status == 200) {
			erroAjax.classList.add("invisivel");
			var resposta = xhr.responseText;
			var pacientes = JSON.parse(resposta); // Parsea e transforma de string para array

			// Adicionando os pacientes na tabela
			pacientes.forEach(function(paciente){
				adicionaPacienteNaTabela(paciente);
			});
		} else {
			erroAjax.classList.remove("invisivel");
		}
	});
	xhr.send();

});