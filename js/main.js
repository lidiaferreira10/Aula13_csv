$(document).ready(function(){
	carregaJson();	
});

function carregaJson(){
	var resultados = [];
	var ids = [];
	var conteudo = [];
	
	$.getJSON( "data/ids_pubmed.json", function(data){
		resultados = data.esearchresult;
		console.log(resultados);
		ids = resultados.idlist;
		console.log(ids);
	});
	
	$.getJSON( "data/info_pubmed.json", function(data){
		conteudo = data.result;
		console.log(conteudo);	
	});
	
};

