function calculaTODOSimcs(){

		var trsPacientes = document.getElementsByClassName("paciente"); //array  de trs

		percorreArrayPTr(trsPacientes, function(pacienteTr){  //chama funcao percorreArray pacientes Trs  e na funcao comportamento  cria uma funcao anonima

		var pacienteAtual= createpaciente(pacienteTr);

		var tdimc = pacienteTr.getElementsByClassName("info-imc")[0];

		imc= pacienteAtual.pegaimc();
		tdimc.textContent = imc;	
	 	console.log(imc);
		}
	);

}

var botao = document.getElementById("calcula-imcs");
//botao.onclick = calculaTODOSimcs;

botao.addEventListener("click", calculaTODOSimcs);

//botao.addEventListener("click", function(){
//	console.log("calculado imcs de todos pacientes");
//});