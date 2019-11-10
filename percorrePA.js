
function percorreArrayPA(trsPacientes, comportamento){  //recebe um array de  tr da classe paciente  e uma funcao

	for(posicaoAtual=0;posicaoAtual<=trsPacientes.length -1 ; posicaoAtual++){  //percorre todas posicoes do vetor de trs

		var pacienteTr = trsPacientes[posicaoAtual];  //pacienteTr  guarda o paciente na posicao atual

		var pacienteAtual =createpaciente(pacienteTr);//funcao que monta paciente

		comportamento(pacienteAtual); //passa por parametro todos os pacientes atuais
	}
}
