/*
    Developed by João Zanetti
    https://github.com/joao-zanetti
*/
function createpaciente(pacienteTr){

	var tdNome = pacienteTr.getElementsByClassName("info-nome")[0];
	var tdPeso = pacienteTr.getElementsByClassName("info-peso")[0];
	var tdAltura = pacienteTr.getElementsByClassName("info-altura")[0];

	var pacienteAtual = {nome : tdNome.textContent, peso : tdPeso.textContent ,altura : tdAltura.textContent,   //cria objeto paciente atual
		pegaimc : function(){  
			if(this.altura!=0){
				var imc = this.peso/(this.altura*this.altura);	
				return imc;
			}
			else{
				console.log("altura é igual a zero");
			}
			}};

	return pacienteAtual;
}
