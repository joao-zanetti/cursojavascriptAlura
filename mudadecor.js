var trs = document.getElementsByTagName("tr");

percorreArrayPTr(trs, function(pacienteTr){
	pacienteTr.addEventListener("dblclick", function(){

		this.setAttribute("bgcolor","grey");

	});
});