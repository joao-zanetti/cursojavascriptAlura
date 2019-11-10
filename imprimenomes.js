
var trsPacientes = document.getElementsByClassName("paciente"); 

percorreArrayPA(trsPacientes,function (pacienteAtual){  //chama a funcao percorreArray Pacientes atuais  e  cria uma funcao anonima que é passada por parametro na funcao comportamento
	console.log(pacienteAtual.nome);
	}
);