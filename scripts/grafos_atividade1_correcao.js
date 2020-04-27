var SalvaLocalLoaded = true;
var GGBLoaded = false;
var HTMLLoaded = false;
Event.observe(window, 'load', function(){

	BlocoNotas = new Blocao();

	HTMLLoaded = true;
	checkInits();
});



/*
	As funções a abixo são usadas para corrigir as questões. Em geral elas devem
	devolver um array com o resultado de cada input do item da questão. Cada tipo
	de questão, porém, possui certas peculiaridades. O padrão de resposta para
	cada campo é:
		- true, se está correto;
		- false, se está certo;
		- null, se não deve ser aplicada nenhuma correção

	Estudem esse código pra ver cada caso.
	A variável valor é sempre um Array com os valores dos inputs. Não é obrigatório
	o seu uso, visto que cada input possui um ID. Mas pode ser usado por conveniencia.
*/

// variaveis globais
var respostaNumeroArestas = null;
var xmlQ5a,xmlQ5b,xmlQ5c = null;
var xmlQ5init = null;
var q5Resp = [false,false,false];
var idPergunta = '';
// Inicializa ggb


function ggbOnInit() {
	GGBLoaded = true;
	checkInits();
}

function checkInits()
{

	// Para partes sem Geogebra
	if  (PosicaoAtual.Parte==2) GGBLoaded = true;


	// Checagem se tanto SalvaLocal e Geogebra foram carregados.
	if  (SalvaLocalLoaded && GGBLoaded && HTMLLoaded) InitOnLoad();
}


function InitOnLoad() {

	setAtividade('atividade_1',2,false);

	switch (PosicaoAtual.Parte) {
	case 0:
		var applet = document.ggbApplet;
		initNomesOriginais();
		registerListeners();
		
		if ( !(getResp('xmlGrafo')=='') && !(getResp('xmlGrafo')==null)) {
			applet.setXML(getResp('xmlGrafo'));
		}
		$('ggbToolbar1_0').click();

	var ids = [ 'parte1_q2_a' ]
	ids.each(function(s)
	{
		$(s).value=getResp('atividade1_'+s);
		Event.observe(s, 'change', function(evento){
		validacaoRespostaNumericaSimples(this.id,0);
		setResp('atividade1_'+this.id,this.value);
		});
	});


	break;
	case 1:

		var applet = document.ggbApplet;
		initNomesOriginais();
		registerListeners();

		applet.setXML(getResp('xmlGrafo'));

		if (getResp('a1_primeiroUm_0')!='') {
			var nomesCidades = [ '1', '2', '3', '4', '5', '6'];
			var cidadeUm_0=nomesCidades[Number(getResp('a1_primeiroUm_0'))];
			var cidadeUm_1=nomesCidades[Number(getResp('a1_primeiroUm_1'))];
			var cidadeZero_0=nomesCidades[Number(getResp('a1_primeiroZero_0'))];
			var cidadeZero_1=nomesCidades[Number(getResp('a1_primeiroZero_1'))];
			$('primeiroUm_0').innerHTML=cidadeUm_0;
			$('primeiroUm_1').innerHTML=cidadeUm_1;
			$('primeiroZero_0').innerHTML=cidadeZero_0;
			$('primeiroZero_1').innerHTML=cidadeZero_1;
			$('primeiroUmNome_0').innerHTML=cidadeUm_0;
			$('primeiroUmNome_1').innerHTML=cidadeUm_1;
		}

	var ids = [ 'parte2_q3_a_23', 'parte2_q3_a_24', 'parte2_q3_a_25', 'parte2_q3_a_26', 'parte2_q3_a_27',
	'parte2_q3_a_32', 'parte2_q3_a_34', 'parte2_q3_a_35', 'parte2_q3_a_36', 'parte2_q3_a_37',
	'parte2_q3_a_42', 'parte2_q3_a_43', 'parte2_q3_a_45', 'parte2_q3_a_46', 'parte2_q3_a_47',
	'parte2_q3_a_52', 'parte2_q3_a_53', 'parte2_q3_a_54', 'parte2_q3_a_56', 'parte2_q3_a_57',
	'parte2_q3_a_62', 'parte2_q3_a_63', 'parte2_q3_a_64', 'parte2_q3_a_65', 'parte2_q3_a_67',
	'parte2_q3_a_72', 'parte2_q3_a_73', 'parte2_q3_a_74', 'parte2_q3_a_75', 'parte2_q3_a_76' ]
	ids.each(function(s)
	{
		$(s).value=getResp('atividade1_'+s);
		Event.observe(s, 'change', function(evento){
		validacaoRespostaNumericaSimples(this.id,0);
		setResp('atividade1_'+this.id,this.value);
		});
	});

	break;
	case 2:
	var ids = [ 'parte3_q4_a_12', 'parte3_q4_a_13', 'parte3_q4_a_14', 'parte3_q4_a_21', 'parte3_q4_a_23', 'parte3_q4_a_24',
	'parte3_q4_a_31', 'parte3_q4_a_32', 'parte3_q4_a_34', 'parte3_q4_a_41', 'parte3_q4_a_42', 'parte3_q4_a_43',
	'parte3_q4_b_12', 'parte3_q4_b_13', 'parte3_q4_b_14', 'parte3_q4_b_21', 'parte3_q4_b_23', 'parte3_q4_b_24',
	'parte3_q4_b_31', 'parte3_q4_b_32', 'parte3_q4_b_34', 'parte3_q4_b_41', 'parte3_q4_b_42', 'parte3_q4_b_43',
	'parte3_q4_c_12', 'parte3_q4_c_13', 'parte3_q4_c_14', 'parte3_q4_c_21', 'parte3_q4_c_23', 'parte3_q4_c_24',
	'parte3_q4_c_31', 'parte3_q4_c_32', 'parte3_q4_c_34', 'parte3_q4_c_41', 'parte3_q4_c_42', 'parte3_q4_c_43',
	'parte3_q4_d_12', 'parte3_q4_d_13', 'parte3_q4_d_14', 'parte3_q4_d_15', 'parte3_q4_d_16', 'parte3_q4_d_21',
	'parte3_q4_d_23', 'parte3_q4_d_24', 'parte3_q4_d_25', 'parte3_q4_d_26', 'parte3_q4_a_31', 'parte3_q4_d_32',
	'parte3_q4_d_34', 'parte3_q4_d_35', 'parte3_q4_d_36', 'parte3_q4_d_41', 'parte3_q4_d_42', 'parte3_q4_d_43',
	'parte3_q4_d_45', 'parte3_q4_d_46', 'parte3_q4_d_51', 'parte3_q4_d_52', 'parte3_q4_d_53', 'parte3_q4_d_54',
	'parte3_q4_d_56', 'parte3_q4_d_61', 'parte3_q4_d_62', 'parte3_q4_d_63', 'parte3_q4_d_64', 'parte3_q4_d_65' ]

	ids.each(function(s)
	{
		$(s).value=getResp('atividade1_'+s);
		Event.observe(s, 'change', function(evento){
		validacaoRespostaNumericaSimples(this.id,0);
		setResp('atividade1_'+this.id,this.value);
		});
	});

	break;
	case 3:

		var applet = document.ggbApplet;
		initNomesOriginais();
		registerListeners();

		xmlQ5init = applet.getXML();
		$('ggbToolbar1_0').click();
		var posicao = {Parte: 3, Questao: 'parte4_q5', Item:0};
		PegaQuestao(posicao).seleciona();


		Event.observe('resetAppletButton', 'click', function(evento){
			var applet = document.ggbApplet;
			applet.setXML(xmlQ5init);
		});
		var matriz_q5a= new Matriz([
				[{value: '0', tipo: 'texto'},	{value: '1', tipo: 'texto'},	{value: '0', tipo: 'texto'},	{value: '0', tipo: 'texto'},	{value: '0', tipo: 'texto'}],
				[{value: '1', tipo: 'texto'},	{value: '0', tipo: 'texto'},	{value: '0', tipo: 'texto'},	{value: '0', tipo: 'texto'},	{value: '0', tipo: 'texto'}],
				[{value: '0', tipo: 'texto'},	{value: '0', tipo: 'texto'},	{value: '0', tipo: 'texto'},	{value: '1', tipo: 'texto'},	{value: '1', tipo: 'texto'}],
				[{value: '0', tipo: 'texto'},	{value: '0', tipo: 'texto'},	{value: '1', tipo: 'texto'},	{value: '0', tipo: 'texto'},	{value: '1', tipo: 'texto'}],
				[{value: '0', tipo: 'texto'},	{value: '0', tipo: 'texto'},	{value: '1', tipo: 'texto'},	{value: '1', tipo: 'texto'},	{value: '0', tipo: 'texto'}]
				]);
		var matriz_q5b= new Matriz([
				[{value: '0', tipo: 'texto'},	{value: '1', tipo: 'texto'},	{value: '0', tipo: 'texto'},	{value: '0', tipo: 'texto'},	{value: '0', tipo: 'texto'}],
				[{value: '1', tipo: 'texto'},	{value: '0', tipo: 'texto'},	{value: '1', tipo: 'texto'},	{value: '0', tipo: 'texto'},	{value: '0', tipo: 'texto'}],
				[{value: '0', tipo: 'texto'},	{value: '1', tipo: 'texto'},	{value: '0', tipo: 'texto'},	{value: '1', tipo: 'texto'},	{value: '0', tipo: 'texto'}],
				[{value: '0', tipo: 'texto'},	{value: '0', tipo: 'texto'},	{value: '1', tipo: 'texto'},	{value: '0', tipo: 'texto'},	{value: '1', tipo: 'texto'}],
				[{value: '0', tipo: 'texto'},	{value: '0', tipo: 'texto'},	{value: '0', tipo: 'texto'},	{value: '1', tipo: 'texto'},	{value: '0', tipo: 'texto'}]
				]);
		var matriz_q5c= new Matriz([
				[{value: '0', tipo: 'texto'},	{value: '1', tipo: 'texto'},	{value: '1', tipo: 'texto'},	{value: '1', tipo: 'texto'},	{value: '1', tipo: 'texto'}],
				[{value: '1', tipo: 'texto'},	{value: '0', tipo: 'texto'},	{value: '0', tipo: 'texto'},	{value: '0', tipo: 'texto'},	{value: '0', tipo: 'texto'}],
				[{value: '1', tipo: 'texto'},	{value: '0', tipo: 'texto'},	{value: '0', tipo: 'texto'},	{value: '0', tipo: 'texto'},	{value: '0', tipo: 'texto'}],
				[{value: '1', tipo: 'texto'},	{value: '0', tipo: 'texto'},	{value: '0', tipo: 'texto'},	{value: '0', tipo: 'texto'},	{value: '0', tipo: 'texto'}],
				[{value: '1', tipo: 'texto'},	{value: '0', tipo: 'texto'},	{value: '0', tipo: 'texto'},	{value: '0', tipo: 'texto'},	{value: '0', tipo: 'texto'}]
				]);

		$('matriz_q_5_a').insert(matriz_q5a.divCont);
		$('matriz_q_5_b').insert(matriz_q5b.divCont);
		$('matriz_q_5_c').insert(matriz_q5c.divCont);
	break;
	}







}

// Questao 1
function corrige_q_1_a(valor)
{
	var matrixCorrecao;
	var applet = document.ggbApplet;

	salvaMatrizAdjacente(1);

	// Salva estado atual do applet para ser carregado na parte 2
	setResp('xmlGrafo', applet.getXML());

	if (nArestas <= 9) {
		matrixCorrecao = multiplicaMatriz(matrizAdj, matrizAdj);
		matrixCorrecao = somaMatriz(matrixCorrecao, matrizAdj);

		respostaNumeroArestas = nArestas;

		resposta = verificaZeroMatriz(matrixCorrecao);

		if (resposta) {
		// percore matriz para atualizar conteudo dinamico da parte 2

		var primeiroZero= [ -1,-1 ];
		var primeiroUm= [ -1,-1 ];
		for (var i=0;i<6;i++)
			for (var j=0;j<6;j++) {
				if ( (matrizAdj[i][j]==0) && (i!=j) && (primeiroZero[0]==-1) ) primeiroZero = [i, j]
				if ( (matrizAdj[i][j]==1) && (i!=j) && (primeiroUm[0]==-1) ) primeiroUm = [i, j] ;

			}
		//alert(matrizAdj);
		setResp('a1_primeiroZero_0',primeiroZero[0]);
		setResp('a1_primeiroZero_1',primeiroZero[1]);
		setResp('a1_primeiroUm_0',primeiroUm[0]);
		setResp('a1_primeiroUm_1',primeiroUm[1]);
		}
		return [resposta];
	}

	return [false];
}

// Questão 2
function corrige_q_2_a(valor)
{
	return [valor[0]?valor[0]==respostaNumeroArestas?true:false:null];
}

// Questão 3
function corrige_q_3_a(valor)
{
	salvaMatrizAdjacente(1);

	return [(valor[0]?valor[0]==matrizAdj[0][1]?true:false:false),		(valor[1]?valor[1]==matrizAdj[0][2]?true:false:false),		(valor[2]?valor[2]==matrizAdj[0][3]?true:false:false),		(valor[3]?valor[3]==matrizAdj[0][4]?true:false:false),		(valor[4]?valor[4]==matrizAdj[0][5]?true:false:false),
			(valor[5]?valor[5]==matrizAdj[1][0]?true:false:false),		(valor[6]?valor[6]==matrizAdj[1][2]?true:false:false),		(valor[7]?valor[7]==matrizAdj[1][3]?true:false:false),		(valor[8]?valor[8]==matrizAdj[1][4]?true:false:false),		(valor[9]?valor[9]==matrizAdj[1][5]?true:false:false),
			(valor[10]?valor[10]==matrizAdj[2][0]?true:false:false),		(valor[11]?valor[11]==matrizAdj[2][1]?true:false:false),		(valor[12]?valor[12]==matrizAdj[2][3]?true:false:false),		(valor[13]?valor[13]==matrizAdj[2][4]?true:false:false),		(valor[14]?valor[14]==matrizAdj[2][5]?true:false:false),
			(valor[15]?valor[15]==matrizAdj[3][0]?true:false:false),		(valor[16]?valor[16]==matrizAdj[3][1]?true:false:false),		(valor[17]?valor[17]==matrizAdj[3][2]?true:false:false),		(valor[18]?valor[18]==matrizAdj[3][4]?true:false:false),		(valor[19]?valor[19]==matrizAdj[3][5]?true:false:false),
			(valor[20]?valor[20]==matrizAdj[4][0]?true:false:false),		(valor[21]?valor[21]==matrizAdj[4][1]?true:false:false),		(valor[22]?valor[22]==matrizAdj[4][2]?true:false:false),		(valor[23]?valor[23]==matrizAdj[4][3]?true:false:false),		(valor[24]?valor[24]==matrizAdj[4][5]?true:false:false),
			(valor[25]?valor[25]==matrizAdj[5][0]?true:false:false),		(valor[26]?valor[26]==matrizAdj[5][1]?true:false:false),		(valor[27]?valor[27]==matrizAdj[5][2]?true:false:false),		(valor[28]?valor[28]==matrizAdj[5][3]?true:false:false),		(valor[29]?valor[29]==matrizAdj[5][4]?true:false:false)];
}

// Questao 4
function corrige_q_4_a(valor)
{


	valor.each(function(s, index) {
	if (s.strip().empty()) valor[index] = NaN;
	});

	if (   valor[0] == 1 && valor[1] == 0 && valor[2] == 1
		&& valor[3] == 1 && valor[4] == 1 && valor[5] == 0
		&& valor[6] == 0 && valor[7] == 1 && valor[8] == 1
		&& valor[9] == 1 && valor[10] == 0 && valor[11] == 1) {
		return [true];
	}

	return [false];
}

function corrige_q_4_b(valor)
{

	valor.each(function(s, index) {
	if (s.strip().empty()) valor[index] = NaN;
	});


	if (   valor[0] == 1 && valor[1] == 0 && valor[2] == 1
		&& valor[3] == 1 && valor[4] == 1 && valor[5] == 0
		&& valor[6] == 0 && valor[7] == 1 && valor[8] == 1
		&& valor[9] == 1 && valor[10] == 0 && valor[11] == 1) {
		return [true];
	}

	return [false];
}

function corrige_q_4_c(valor)
{

	valor.each(function(s, index) {
	if (s.strip().empty()) valor[index] = NaN;
	});

		if (   valor[0] == 1 && valor[1]  == 1 && valor[2]  == 1
			&& valor[3] == 1 && valor[4]  == 1 && valor[5]  == 0
			&& valor[6] == 1 && valor[7]  == 1 && valor[8]  == 1
			&& valor[9] == 1 && valor[10] == 0 && valor[11] == 1) {
		return [true];
	}


	return [false];
}

function corrige_q_4_d(valor)
{

	valor.each(function(s, index) {
	if (s.strip().empty()) valor[index] = NaN;
	});

		if (   valor[0]  == 0 && valor[1]  == 0 && valor[2]  == 1 && valor[3]  == 0  && valor[4]  == 0
			&& valor[5]  == 0 && valor[6]  == 0 && valor[7]  == 1 && valor[8]  == 0  && valor[9]  == 0
			&& valor[10] == 0 && valor[11] == 0 && valor[12] == 1 && valor[13] == 0  && valor[14] == 0
			&& valor[15] == 1 && valor[16] == 1 && valor[17] == 1 && valor[18] == 1  && valor[19] == 0
			&& valor[20] == 0 && valor[21] == 0 && valor[22] == 0 && valor[23] == 1  && valor[24] == 1
			&& valor[25] == 0 && valor[26] == 0 && valor[27] == 0 && valor[28] == 0  && valor[29] == 1 ) {
		return [true];
	}


	return [false];
}

// Questão 5
function corrige_q_5_a(valor)
{
	var posicao = {Parte: 3, Questao: 'parte4_q5', Item:0};
	if(PegaQuestao(posicao).selecionada) {
		salvaMatrizAdjacente(1);
		if (   matrizAdj[0][1] == 1 && matrizAdj[0][2] == 0 && matrizAdj[0][3] == 0 && matrizAdj[0][4] == 0
			&& matrizAdj[1][0] == 1 && matrizAdj[1][2] == 0 && matrizAdj[1][3] == 0 && matrizAdj[1][4] == 0
			&& matrizAdj[2][0] == 0 && matrizAdj[2][1] == 0 && matrizAdj[2][3] == 1 && matrizAdj[2][4] == 1
			&& matrizAdj[3][0] == 0 && matrizAdj[3][1] == 0 && matrizAdj[3][2] == 1 && matrizAdj[3][4] == 1
			&& matrizAdj[4][0] == 0 && matrizAdj[4][1] == 0 && matrizAdj[4][2] == 1 && matrizAdj[4][3] == 1) {
			q5Resp[0]=true;
			return [true];
		} else {
		q5Resp[0]=false;
		return [false];
		}
	return [false];
	} else return [q5Resp[0]];
}

function corrige_q_5_b(valor)
{
	var posicao = {Parte: 3, Questao: 'parte4_q5', Item:1};
	if(PegaQuestao(posicao).selecionada) {
		salvaMatrizAdjacente(1);
		if (   matrizAdj[0][1] == 1 && matrizAdj[0][2] == 0 && matrizAdj[0][3] == 0 && matrizAdj[0][4] == 0
			&& matrizAdj[1][0] == 1 && matrizAdj[1][2] == 1 && matrizAdj[1][3] == 0 && matrizAdj[1][4] == 0
			&& matrizAdj[2][0] == 0 && matrizAdj[2][1] == 1 && matrizAdj[2][3] == 1 && matrizAdj[2][4] == 0
			&& matrizAdj[3][0] == 0 && matrizAdj[3][1] == 0 && matrizAdj[3][2] == 1 && matrizAdj[3][4] == 1
			&& matrizAdj[4][0] == 0 && matrizAdj[4][1] == 0 && matrizAdj[4][2] == 0 && matrizAdj[4][3] == 1) {
			q5Resp[1]=true;
			return [true];
		} else {
		q5Resp[1]=false;
		return [false];
		}
	return [false];
	} else return [q5Resp[1]];
}

function corrige_q_5_c(valor)
{
	var posicao = {Parte: 3, Questao: 'parte4_q5', Item:2};
	if(PegaQuestao(posicao).selecionada) {

		salvaMatrizAdjacente(1);


		if (   matrizAdj[0][1] == 1 && matrizAdj[0][2] == 1 && matrizAdj[0][3] == 1 && matrizAdj[0][4] == 1
			&& matrizAdj[1][0] == 1 && matrizAdj[1][2] == 0 && matrizAdj[1][3] == 0 && matrizAdj[1][4] == 0
			&& matrizAdj[2][0] == 1 && matrizAdj[2][1] == 0 && matrizAdj[2][3] == 0 && matrizAdj[2][4] == 0
			&& matrizAdj[3][0] == 1 && matrizAdj[3][1] == 0 && matrizAdj[3][2] == 0 && matrizAdj[3][4] == 0
			&& matrizAdj[4][0] == 1 && matrizAdj[4][1] == 0 && matrizAdj[4][2] == 0 && matrizAdj[4][3] == 0) {
			q5Resp[2]=true;
			return [true];
		} else {
		q5Resp[2]=false;
		return [false];
		}
	return [false];
	} else return [q5Resp[2]];

}

/*
	Aqui está um exemplo de função que é chamada pelo popup com pergunta (callback)
*/

function funcao_pede()
{
	switch(this.resultado)
	{
		case 'sim':	alert('Vc clicou em sim!');	break;
		case 'nao':	alert('Nossa, mas pq não?');break;
		case 'sabe_que_num_sei':alert('Não interessa, também.'); break;
	}
}




function selecionou_q_5_a() {

	idPergunta = 'parte4_q5_0_xml';
	// var idPergunta = PosicaoAtual.Questao+'_'+PosicaoAtual.Item)+'_xml';
	var tmpXML = getResp(idPergunta);

	var applet = document.ggbApplet;
	if ( !(tmpXML=='') && !(tmpXML==null) ) {
		var applet = document.ggbApplet;
		applet.setXML(tmpXML);
	} else { applet.setXML(xmlQ5init);
	} ;

}


function selecionou_q_5_b() {
	idPergunta = 'parte4_q5_1_xml';
	// var idPergunta = PosicaoAtual.Questao+'_'+PosicaoAtual.Item)+'_xml';
	var tmpXML = getResp(idPergunta);
	var applet = document.ggbApplet;
	if ( !(tmpXML=='') && !(tmpXML==null) ) {
		applet.setXML(tmpXML);
	} else { applet.setXML(xmlQ5init);
	};


}

function selecionou_q_5_c() {
	idPergunta = 'parte4_q5_2_xml';
	// var idPergunta = PosicaoAtual.Questao+'_'+PosicaoAtual.Item)+'_xml';
	var tmpXML = getResp(idPergunta);
	var applet = document.ggbApplet;
	if ( !(tmpXML=='') && !(tmpXML==null) ) {
		applet.setXML(tmpXML);
	} else { applet.setXML(xmlQ5init);
	};


}

function ggbUpdated(){

	if (PosicaoAtual.Parte == 3) {
	var applet = document.ggbApplet;
	setResp(idPergunta,applet.getXML());
	};
}

function tudoCerto() {

	switch (PosicaoAtual.Parte) {
		case 3:
		setAtividade('atividade_1',3,true);
		setAtividade('atividade_2',1,false);
		break;

	}

}
