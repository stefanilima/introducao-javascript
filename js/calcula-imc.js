var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i ++) {

	var paciente = pacientes[i];

	var tdPeso = paciente.querySelector(".info-peso");
	var peso = tdPeso.textContent;

	var tdAltura = paciente.querySelector(".info-altura");
	var altura = tdAltura.textContent;

	var tdImc = paciente.querySelector(".info-imc");

	var ehValido = true;

	if (!validaPeso(peso)) {
		tdImc.textContent = "Peso inválido";
		ehValido = false;
		paciente.classList.add("paciente-invalido");
	}

	if (!validaAltura(altura)) {
		tdImc.textContent = "Altura inválida";
		ehValido = false;
		paciente.classList.add("paciente-invalido");
	}

	if (ehValido) {
		var imc = calculaImc(peso, altura);
		tdImc.textContent = imc;
	}	
}

function validaPeso(peso){
	if (peso >= 0 && peso < 1000) {
		return true;
	} else {
		return false;
	}
}

function validaAltura(altura){
	if (altura >= 0 && altura <= 3.00) {
		return true;
	} else {
		return false;
	}
}

// Eventos

titulo.addEventListener("click", function (){
	console.log("Olá eu fui clicado!");
});

function calculaImc(peso, altura){
	var imc = 0;
	imc = peso / (altura * altura);
	return imc.toFixed(2);
}






