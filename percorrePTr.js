/*
    Developed by João Zanetti
    https://github.com/joao-zanetti
*/
function percorreArrayPTr(trsPacientes, comportamento){  //recebe um array de  tr da classe paciente  e uma funcao comportamento

	for(posicaoAtual=0;posicaoAtual<=trsPacientes.length -1 ; posicaoAtual++){  //percorre todas posicoes do vetor de trs

		var pacienteTr = trsPacientes[posicaoAtual];  //pacienteTr  guarda o paciente TR na posicao atual

		comportamento(pacienteTr); //passa por parametro todos os pacientesTrs
	}
}
