var SalvaLocalLoaded = true;
var GGBLoaded = false;
var HTMLLoaded = false;


var matrizSelecionada = -1;


Event.observe(window, 'load', function(){
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
	Event.observe('zerarButton', 'click', function(evento){
		resetApplet();

	});

	var ids = [ 'mostrarMatriz0','mostrarMatriz1','mostrarMatriz2','mostrarMatriz3','mostrarMatriz4' ];
	ids.each(function(s)
	{
		Event.observe(s, 'click', function(evento){
		atualizaMatriz(Number(this.value));
		matrizSelecionada = Number(this.value);
		});
	});

	switch (PosicaoAtual.Parte)
	{
		case 0:
			setAtividade('atividade_5',2,false);
		break;

	}



	var applet = document.ggbApplet;
	initNomesOriginais();
	registerListeners();

	if (getResp('a5_problema')!='') {
		applet.setXML(getResp('a5_problema'));
	}

	$('ggbToolbar1_0').click();
	$('mostrarMatriz0').click();

	matrizSelecionada = 0;
	atualizaMatriz(matrizSelecionada);


}


// Questão 1
function corrige_q_1_a(valor)
{
	var matrizCorrecao;

	if (matrizAdj==undefined) atualizaMatriz(0);
	salvaMatrizAdjacente(1);
	if (matrizAdj[6][1] == 0 && matrizAdj[7][2] == 0 && matrizAdj[8][3] == 0) {
		var matrizM2 = multiplicaMatriz(matrizAdj, matrizAdj);
		var matrizM3 = multiplicaMatriz(matrizAdj, matrizM2);
		matrizCorrecao = somaMatriz(matrizAdj, matrizM2);
		matrizCorrecao = somaMatriz(matrizCorrecao, matrizM3);
		return [verificaZeroMatriz(matrizCorrecao)];
	}

	return [false];
}

function resetApplet() {
	var applet = document.ggbApplet;
	applet.reset();
	setResp('a5_problema',applet.getXML());
	$('ggbToolbar1_0').click();
	applet.setMode('15');

}

function ggbUpdated(){
	var applet = document.ggbApplet;
	setResp('a5_problema',applet.getXML());
	if (matrizSelecionada>=0) atualizaMatriz(matrizSelecionada);

}

function tudoCerto() {

	switch (PosicaoAtual.Parte) {
		case 0:
		setAtividade('atividade_5',3,true);
		break;


	}

}
