/******************************************************************************************************************************************************
 ****    Variaveis Globais																							*******
 ******************************************************************************************************************************************************/

var nArestas = 0;	// numero de arestas que existem no applet
var matrizAdj;	//matriz adjacente criada a partir de um applet contendo um grafo no geogebra
var nomesPontosOrig = Array();
var nomesSegmentosOrig = Array();

/******************************************************************************************************************************************************
 ****    Flash																									*******
 ******************************************************************************************************************************************************/
// Retorna o elemento do video Flash com o nome movieName
function getFlashMovie(movieName) {
	var isIE = navigator.appName.indexOf("Microsoft") != -1;
	return (isIE) ? window[movieName] : document[movieName];
}

 function getResp(id)
 {
	return ( getFlashMovie('SalvaLocal').Pega(nomeSoft,id)=='undefined' ? '' : getFlashMovie('SalvaLocal').Pega(nomeSoft,id));
 }
 
function setResp(id,valor) {
	getFlashMovie('SalvaLocal').Salva(nomeSoft,id,valor);
}

function apagaTodasResp() {
	return (getFlashMovie('SalvaLocal').ApagaTudo(nomeSoft));
}

function init() {
	return (getFlashMovie('SalvaLocal').ApagaTudo(nomeSoft));
}

function mudaValorResposta(id, value) {
	mudaImagemCertoErrado("img"+id, 0);
	respId=id.replace("Resp_","");
	setResp(respId,value);
}
/******************************************************************************************************************************************************
 ****    																										*******
 ******************************************************************************************************************************************************/

 
 function validacaoRespostaNumericaSimples(id,casas) {

	valor = $(id).value;

	valor = valor.replace(',','.');

	if (valor.strip().empty()) valor=NaN;
	
	if (isNaN(valor) || (valor==null)) {
		$(id).value='';
		return false;
	} else {
		$(id).value=roundNumber(valor,casas);
	}

}

function setAtividade(nome,estado,forcar)
{
	if (forcar==undefined) forcar=false;
	
	if (!forcar) 
	{
		if ((getResp(nome)<estado) || getResp(nome)=='') setResp(nome,estado);
	} 
	else setResp(nome,estado);


}



function roundNumber(num, dec) {
	var result = Math.round( Math.round( num * Math.pow( 10, dec + 1 ) ) / Math.pow( 10, 1 ) ) / Math.pow(10,dec);
	return result;
}



 
/******************************************************************************************************************************************************
 ****    										FUNCOES GEOGEBRA													*******
 ******************************************************************************************************************************************************/

// Resgistra listeners no geogebra
function registerListeners() {
	var applet = document.ggbApplet;
	applet.registerAddListener("addListener");
	applet.registerRemoveListener("removeListener");
	//applet.registerRenameListener("renameListener");
	//applet.registerClearListener("clearListener");
	//applet.registerUpdateListener("updateListener");
}

// Add listener
function addListener(objName) {

	var applet = document.ggbApplet;
	strType = applet.getObjectType(objName);
	strCommand = applet.getCommandString(objName);
		

	if (strType == "point" ) {	
	
		if (nomesPontosOrig.indexOf(objName)<0) {		
			applet.deleteObject(objName);
		}
	}
		
	if (strType == "segment" ) {	
		var pontosSegmento = getPontosSegmento(strCommand);
		if ( (nomesPontosOrig.indexOf(pontosSegmento[0])==-1) || 
			 (nomesPontosOrig.indexOf(pontosSegmento[1])==-1) ) {
			applet.deleteObject(objName);
		}	
	}
	
	// Notifica que houve alteração no applet... cada parte faz o que achar necesário
	ggbUpdated();
	
}

// Remove Listener
function removeListener(objName) {
	var applet = document.ggbApplet;
	objType = applet.getObjectType(objName);	
	// Notifica que houve alteração no applet... cada parte faz o que achar necesário
	ggbUpdated();
	
}

function initNomesOriginais() {



	var applet = document.ggbApplet;

	var objNumber = applet.getObjectNumber();

	for (var i=0; i < objNumber; i++) {
		strName = applet.getObjectName(i);
		strType = applet.getObjectType(strName);
		strCommand = applet.getCommandString(strName);
		
		if (strType == "point" ) {
			nomesPontosOrig.push(strName);			
		}
			
		if (strType == "segment" ) {
			nomesSegmentosOrig.push(strName);
		}		
	}
}
 
 
 
/******************************************************************************************************************************************************
 ****    																										*******
 ******************************************************************************************************************************************************/




function getPontosSegmento(strCommand) {
	var pontosSegmento=strCommand.split(",");
	pontosSegmento[0] = pontosSegmento[0].charAt(pontosSegmento[0].length-1);
	pontosSegmento[1] = pontosSegmento[1].charAt(1);
	return pontosSegmento;
}

function findIndexPonto(pontoName, arrayPoints) {
	
	for (var i=0;i<arrayPoints.length;i++) 
	{
		if (arrayPoints[i][0]==pontoName) return i;
	}
	
	return -1;
}

function salvaMatrizAdjacente(diagonalPrincipal) {
	
	var pontos = new Array();
	var segmentos = new Array();

	var applet = document.ggbApplet;
	var objNumber = applet.getObjectNumber();
	
	//numero de segmentos na malha aerea
	nArestas = 0; 

	for (i=0; i < objNumber; i++) {
		strName = applet.getObjectName(i);
		strType = applet.getObjectType(strName);
		strCommand = applet.getCommandString(strName);
		
		if (strType == "point" )
			{
				pontos.push([strName,applet.getXcoord(strName),applet.getYcoord(strName)]);
			}
			
		if (strType == "segment" )
			{
				nArestas++;	// calcula o numero de segmentos na malha aerea
				pontosSegmento=getPontosSegmento(strCommand);
				segmentos.push([strName,pontosSegmento[0],pontosSegmento[1]]);
			}
			
	}

	// cria matriz adjacente, diagonal sempre sera 1
	var matrix = new Array(pontos.length);

	for (i=0; i < matrix.length; i++) {
		matrix[i] = new Array(pontos.length);
		for (k=0; k<matrix[i].length;k++) {
			if (i == k && diagonalPrincipal == 1) {
				matrix[i][k]=1;
			} else {
				matrix[i][k]=0;
			}
		}
		
	}

	for (i=0; i < segmentos.length; i++) {
		matrix[findIndexPonto(segmentos[i][1],pontos)][findIndexPonto(segmentos[i][2],pontos)]=1;
		matrix[findIndexPonto(segmentos[i][2],pontos)][findIndexPonto(segmentos[i][1],pontos)]=1;
	}

	// salva a matriz adjacente em uma variavel global
	matrizAdj = matrix;
}

// Funcao que imprime matriz
function imprimeMatriz(matriz) {

}

//
function corrigirMalha() {
	var matrixCorrecao;
	
	salvaMatrizAdjacente(1);

	if (nArestas <= 9) {
		matrixCorrecao = multiplicaMatriz(matrizAdj, matrizAdj);
		matrixCorrecao = somaMatriz(matrixCorrecao, matrizAdj);	

		return [verificaZeroMatriz(matrixCorrecao)];
	} 
	
	return [false];
}

// Verifica se ha algum zero na matriz
function verificaZeroMatriz(matriz) {
	var matrizOk = true;

	for (var i = 0; i < matriz.length; i++) {
		for (var j = 0; j < matriz[0].length; j++) {
			if (matriz[i][j] == 0) {				
				matrizOk = false;
			}
		}
	}
	
	return matrizOk;
}

// Multiplica duas matrizes e retorna o resultado
function multiplicaMatriz(matrizA, matrizB) {
	var nColunasA = 0;
	var nLinhasB = 0;
	
	// inicializa matriz que sera o resultado da multiplicacao
	var novaMatriz = new Array(matrizA.length);
	for (var i = 0; i < novaMatriz.length; i++) {
		novaMatriz[i] = new Array(matrizB[0].length);
	}
	
	// inicializa valores da nova matriz
	for(var i = 0; i < novaMatriz.length; i++) {
		for(var j = 0; j < novaMatriz[0].length; j++) {
			novaMatriz[i][j] = 0;
		}
	}
	
	// Verifica se e possivel multiplicar as matrizes, se sim multiplica
	nColunasA = matrizA[0].length;
	nLinhasB = matrizB.length;
	
	if (nColunasA == nLinhasB) {
		for(var i = 0; i < matrizA.length; i++) {
			for(var j = 0; j < matrizB[0].length; j++) {
				for(var k = 0; k < matrizA[0].length; k++) {
					novaMatriz[i][j] += matrizA[i][k]*matrizB[k][j];								
				}
			}
		}
	} else {
		alert('Nao e possivel multiplicar as matrizes');
	}
	
	return novaMatriz;
}

// Soma duas matrizes e retorna o resultado
function somaMatriz(matrizA, matrizB) {
	var nLinhasA = matrizA.length;
	var nColunasA = matrizA[0].length;
	var nLinhasB = matrizB.length;
	var nColunasB = matrizB[0].length;
	
	// inicializa nova matriz
	var matrizSoma = new Array(matrizA.length);
	for (var i = 0; i < matrizSoma.length; i++) {
		matrizSoma[i] = new Array(matrizA[0].length);
	}
	
	// inicializa valores da nova matriz
	for(var i = 0; i < matrizSoma.length; i++) {
		for(var j = 0; j < matrizSoma[0].length; j++) {
			matrizSoma[i][j] = 0;
		}
	}
	
	// Verifica se e possivel somar as matrizes
	if(nLinhasA == nLinhasB && nColunasA == nColunasB) {
		for(var i = 0; i < nLinhasA; i++) {
			for(var j = 0; j < nColunasA; j++) {
				matrizSoma[i][j] = matrizA[i][j] + matrizB[i][j];
			}
		}
	}

	return matrizSoma;
}








//*****************************************************************************************************************************************************
//											FUNCOES ATIVIDADE 3												          //
//*****************************************************************************************************************************************************


//*****************************************************************************************************************************************************
//												PARTE 1												       			//
//*****************************************************************************************************************************************************

// ARRUMAR TUDO
function verificaCruzMatriz(matriz) {
	var matrizOk = true;

	for (var i = 0; i < matriz.length; i++) {
		// Se estiver na primeira linha, e o segundo elemento for igual a 1, verifica se o restante tambem é 1
		if (i == 0) {
			if (matriz[i][1] == 1) {
				for (var j = 0; j < matriz[0].length; j++) {
					if (matriz[i][j] != 1) {
						matrizOk = false;
					}
				}
			}
		} else if (matriz[i][0] == 1) {
			for (var j = 0; j < matriz[0].length; j++) {
				if (matriz[i][j] != 1) {
					matrizOk = false;
				}
			}
		}
	}
	
	return matrizOk;
}

// Gera matriz M M2 ou MM2
//M = 0
//M2 = 1
//M3 = 2
//M+M2 = 3
//M+M2+M3 = 4
	function atualizaMatriz(tipoMatriz) {
	var id = null;
	
	salvaMatrizAdjacente(0);
	
	switch (tipoMatriz) {
	
	case 0:
		var matrizCorrecao = matrizAdj;
		break;
	case 1: 
		var matrizCorrecao = multiplicaMatriz(matrizAdj, matrizAdj);
		break;
	case 2: 
		var matrizCorrecao = multiplicaMatriz(matrizAdj, matrizAdj);
		matrizCorrecao = multiplicaMatriz(matrizCorrecao, matrizAdj);
	break;

	case 3:
		var matrizM2 = multiplicaMatriz(matrizAdj, matrizAdj);
		var matrizCorrecao = somaMatriz(matrizAdj, matrizM2);
	break;

	case 4:
		var matrizM2 = multiplicaMatriz(matrizAdj, matrizAdj);
		var matrizM3 = multiplicaMatriz(matrizM2, matrizAdj);
		var matrizCorrecao = somaMatriz(matrizAdj, matrizM2);
		matrizCorrecao = somaMatriz(matrizCorrecao, matrizM3);
		break;
	}
	
	for (var i = 0; i < matrizCorrecao.length; i++) {
		for (var j = 0; j < matrizCorrecao[0].length; j++) {						
			$('Ma'+(i+1)+(j+1)).update(matrizCorrecao[i][j]);
		}
	}

}

//*****************************************************************************************************************************************************
//												PARTE 2												       			//
//*****************************************************************************************************************************************************

function totalNumeroUm(numero) {
	var total = 0;
	var totalLinha = 0;
	var matrizOk = true;

	salvaMatrizAdjacente(0);
	
	for (var i = 0; i < matrizAdj.length; i++) {
		if (matrizOk) {
			for (var j = 0; j < matrizAdj[0].length; j++) {
				if (matrizAdj[i][j] == 1) {
					total++;
					totalLinha++;
				}
			}
			if (totalLinha > 4) {
				matrizOk = false;
			}
			totalLinha = 0;
		}
	}
	
	
	if (total > numero) {
		matrizOk = false;
	}

	return matrizOk;
}


//*****************************************************************************************************************************************************
//											FUNCOES ATIVIDADE 1												          //
//*****************************************************************************************************************************************************

//*****************************************************************************************************************************************************
//												PARTE 4												       			//
//*****************************************************************************************************************************************************

/*
function selecionou_q_5_a() {
	carregaAppletXML('Grafo_A1_P4_Q5_a');
}

function selecionou_q_5_b() {
	carregaAppletXML('Grafo_A1_P4_Q5_b');
}

function selecionou_q_5_c() {
	carregaAppletXML('Grafo_A1_P4_Q5_c');
}

function carregaAppletXML(stringXML) {
	var applet = document.ggbApplet;
	applet.setXML(getResp(stringXML));
}
*/