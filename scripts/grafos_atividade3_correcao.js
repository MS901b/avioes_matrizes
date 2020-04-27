var SalvaLocalLoaded = true;
var GGBLoaded = false;
var HTMLLoaded = false;

var matrizSelecionada = -1;


Event.observe(window, 'load', function(){

	Event.observe('parte1_q1_b', 'change', function(evento){
	});

	BlocoNotas = new Blocao();

	HTMLLoaded= true;
	checkInits();



});

Event.observe(document, 'flash:SalvaLocal', function(ev)
{
	SalvaLocalLoaded = true;
	checkInits();
});

function ggbOnInit() {
	GGBLoaded = true;
	checkInits();
}




function checkInits()
{
	// Checagem se tanto SalvaLocal e Geogebra foram carregados.
	if  (SalvaLocalLoaded && GGBLoaded && HTMLLoaded) InitOnLoad();
}


function InitOnLoad()
{


	var applet = document.ggbApplet;

	initNomesOriginais();
	registerListeners();

	if ( (getResp('a3_problema')!='') && (getResp('a3_problema')!=null) )  {
		applet.setXML(getResp('a3_problema'));
	}


	Event.observe('zerarButton', 'click', function(evento){
		resetApplet();


	});


	switch (PosicaoAtual.Parte)
	{
		case 0:
			setAtividade('atividade_3',2,false);
		break;
	}

	var ids = [ 'mostrarMatriz0','mostrarMatriz1','mostrarMatriz3' ];
	ids.each(function(s)
	{
		Event.observe(s, 'click', function(evento){
		atualizaMatriz(Number(this.value));
		matrizSelecionada = Number(this.value);
		});
	});


	$('ggbToolbar1_0').click();
	$('mostrarMatriz0').click();
	matrizSelecionada = 0;
	atualizaMatriz(matrizSelecionada);

}

// Questão 1
function corrige_q_1_a(valor)
{
	var pontos = new Array();
	var segmentos = new Array();
	var nSeguimentos = 0;

	var applet = document.ggbApplet;
	var objNumber = applet.getObjectNumber();

	for (var i = 0; i < objNumber; i++) {
		objName = applet.getObjectName(i);
		objType = applet.getObjectType(objName);
		objCommand = applet.getCommandString(objName);

		if (objType == "point" ) {
			pontos.push([objName, applet.getXcoord(objName), applet.getYcoord(objName)]);
		}

		if (objType == "segment" ) {
			nSeguimentos++;
			pontosSegmento = getPontosSegmento(objCommand);
			segmentos.push([objName,pontosSegmento[0],pontosSegmento[1]]);
		}
	}

	// Se existirem 7 seguimentos, procura-se um vertice ligado pelos 7
	if (nSeguimentos == 7) {
		var vertice1 = segmentos[0][1];
		var vertice2 = segmentos[0][2];
		var nVertice1 = 1;
		var nVertice2 = 1;

		// verifica se o vertice1 ou o vertice2 possui 7 seguimentos
		for (var i = 1; i < 7; i++) {
			if (segmentos[i][1] == vertice1 || segmentos[i][2] == vertice1) {
				nVertice1++;
			}

			if (segmentos[i][1] == vertice2 || segmentos[i][2] == vertice2) {
				nVertice2++;
			}
		}
	}

	if (nVertice1 == 7 || nVertice2 == 7) {
		return [true];
	}

	return [false]
}

function corrige_q_1_b(valor)
{

	return [valor[0] == 8];
}



function resetApplet() {
	var applet = document.ggbApplet;
	applet.reset();
	setResp('a3_problema',applet.getXML());
	$('ggbToolbar1_0').click();
	applet.setMode('15');
}

function ggbUpdated(){
	var applet = document.ggbApplet;
	setResp('a3_problema',applet.getXML());
	if (matrizSelecionada>=0) atualizaMatriz(matrizSelecionada);

}

function tudoCerto() {

	switch (PosicaoAtual.Parte) {
		case 0:
		setAtividade('atividade_3',3,true);
		break;
	}
}
