/**
 * Funcao que carrega os valores preenchidas pelo aluno. É chamada no onLoad de cada parte de uma atividade.
 */
function initAtividade(atv,id) {
	if(getResp(atv)==1) setResp(atv,2);
	
	var respostasId = new Array();
	respostasId = pegaNomesResp(id);
	
	for (var i = 0; i < respostasId.length; i++) {
		carregaValorResposta(atv,respostasId[i]);
	}
}

/**
 * Carrega a Resposta quando o aluno dá refresh na página.
 * @param {Object} id 	id da resposta
 */
function carregaValorResposta(atv,id) {
	var elem = $(id);
	var Resp;
	
	Resp = getResp(atv+'_'+id);
	if (Resp=="undefined") Resp=null
	if (elem.type=='radio')
	{
		if(Resp=='true') elem.checked=true;
		else elem.checked=false;
	};
	if (elem.type=='text')
	{		
		elem.value=((Resp!=null) ? Resp : '');
	}
	if(id.startsWith('parte2_q2_a'))
	{
		if (atv=='atividade_1' && id.endsWith('4'))
		{
			if(Resp!=null) $(id).update(Resp);
		}
		if (atv=='atividade_2' && id.endsWith('6'))
		{
			if(Resp!=null) $(id).update(Resp);
		}
	}
}


function initAtividade2Parte1(ang)
{
	$('anguloEscolhido').update('Você escolheu '+ang+'como ângulo.');
	removeEsperando({Parte: 0, Questao:'parte1_q1', Item: 0}, '');
	$('valor_inicial').addClassName('desabilitada');
	$('link_valor_inicial').update('Alterar valor inicial');
	$('link_valor_inicial').writeAttribute({onclick: 'return false;'});

	var Perg =  
		{
			conteudo: 'Alterar o valor fará com que você precise refazer as questões que tinham como base este valor. Você deseja alterar o valor?',
			layout: ['seta_baixo','direita'],
			largura: 10,
			callback: unset_inicial,
			// se o usuário clicar em 'Sim', o popup chamará a funcao funcao_pede na qual this.resultado será 'sim'
			// Veja que essa função deve estar definida, ou ser definida nesse exato momento (como no exemplo "pede2")
			respostas: [{sim: 'Sim'}, {nao: 'Não'}]
		};
		
	var tmp = new PopupCallback($('link_valor_inicial'), Perg.conteudo,Perg.layout, Perg.largura, Perg.callback, Perg.respostas);
}

function setMultiplaEscolha(id,i,qtd)
{
	for(var k=1;k<=qtd;k++)
	{
		if(k!=i) setResp(id+k,false);
		else setResp(id+i,true);
	}
}	

/**
 * Funcao que insere a expressao da equacao obtida na Questao 5d da Atividade 2.
 */
function insereExpressao() {
	var expressao = getResp("atividade_2_parte4_q4_d");
	var texto = "A(x) = " + expressao + "";
	var elem = $('expressao');
	elem.innerHTML = texto;
}

/**
 * Funcao que insere uma funcao na Atividade2 Parte5.
 */
 
function insereFuncaoA2_P5() {
	var cosseno = parseFloat(getResp('atividade_2_cosseno'));
	var tangente = parseFloat(getResp('atividade_2_tangente'));
	var expr1=(cosseno + 1);
	expr1=expr1.toFixed(2);
	var expr2 = (2 * cosseno);
	expr2=expr2.toFixed(2);
	var expr3 = (tangente / 4);
	expr3=expr3.toFixed(2);
	
	var texto = 'A(x) = -x² * (' + expr1 + ' / ' + expr2 + ' - ' + expr3 + ') + 200 * x';
	var elem = document.getElementById('funcao');
	elem.innerHTML = texto;
}

/**
 * Funcao que compara duas funcoes para corrigir a expressao pedida nas questoes.
 * @param {Object} func1	funcao a ser corrigida
 * @param {Object} func2	funcao correta
 */
function compararFuncao(func1,func2) {
	var applet = document.ggbApplet;

	primeirafuncao = 'func_1(x)=' + func1;
	segundafuncao = 'func_2(x)=' + func2;
	applet.evalCommand(primeirafuncao);
	applet.setVisible('func_1',false);
	applet.evalCommand(segundafuncao);
	applet.setVisible('func_2',false);
	applet.evalCommand('func_3(x)=abs(func_1(x)-func_2(x))');
	applet.setVisible('func_3',false);
	applet.evalCommand('RespComparador = Integral[func_3(x),-1,1]');
	applet.setVisible('RespComparador',false);
	saida = applet.getValue('RespComparador');
		
	if (saida<0.01) 
		return true;
	else
		return false;
}

/**
 * Funcao que ira pegar o angulo selecionado e calcular o seno e cosseno.
 */
function selecionarAngulo() {
	var applet = document.ggbApplet;
	var angulo = applet.getValue("alpha");	//Ja vai vir em radianos.
	var anguloString = applet.getValueString("alpha");	//vai vir "alpha = 45°"
	anguloString = anguloString.substring(8,11);

	var seno = Math.sin(angulo);
	var cosseno = Math.cos(angulo);
	var tangente = Math.tan(angulo);

	/* Arredondamento dos valores para 2 casas decimais. */
	seno = Math.round(seno*100)/100;

	cosseno = Math.round(cosseno*100)/100;

	tangente = Math.round(tangente*100)/100;
	
	limpa_atv2();
	
	// Guarda os valores no flash.
	setResp('atividade_2_angulo', angulo);
	setResp('atividade_2_anguloString', anguloString);
	setResp('atividade_2_seno', seno);
	setResp('atividade_2_cosseno', cosseno);
	setResp('atividade_2_tangente',tangente);
	
	$('anguloEscolhido').update('Você escolheu '+anguloString+'como ângulo');
	
	//alert('Você escolheu '+anguloString+'como ângulo');
	
	removeEsperando({Parte: 0, Questao:'parte1_q1', Item: 0}, '');
	$('valor_inicial').addClassName('desabilitada');
	$('link_valor_inicial').update('Alterar valor inicial');
	$('link_valor_inicial').writeAttribute({onclick: 'return false;'});

	var Perg =  
		{
			conteudo: 'Você deseja alterar o valor? Isto fará com que você precise refazer as questões que tinham como base este valor.',
			layout: ['seta_baixo','direita'],
			largura: 10,
			callback: unset_inicial,
			// se o usuário clicar em 'Sim', o popup chamará a funcao funcao_pede na qual this.resultado será 'sim'
			// Veja que essa função deve estar definida, ou ser definida nesse exato momento (como no exemplo "pede2")
			respostas: [{sim: 'Sim'}, {nao: 'Não'}]
		};
		
	var tmp = new PopupCallback($('link_valor_inicial'), Perg.conteudo,Perg.layout, Perg.largura, Perg.callback, Perg.respostas);

	// Remove seletor alpha do applet	
	applet.setVisible('alpha',false);
}


/**
 * Funcao que plota os pontos gerados na tabela da atividade1 parte3 para o Geogebra da atividade1 parte5.
 */
function plotarPontos() {
	valoresBase = new Array();
	valoresAltura = new Array();
	valoresArea = new Array();
    var l; 
	for (l = 2; l <= 11; l++){
		valorBase = getResp("atividade_1_parte2_q2_a_"+l+"2");
		valorAltura = getResp("atividade_1_parte2_q2_a_"+l+"3");
		valoresBase.push(valorBase);
		valoresAltura.push(valorAltura);
		valoresArea.push(valorBase*valorAltura);
	}
	var applet = document.ggbApplet;
	for (l = 0; l < valoresArea.length; l++) {
		applet.deleteObject("PONTO_"+l);
	  	applet.evalCommand("PONTO_"+l+"=(" + valoresBase[l] + "," + valoresArea[l] +")");
	  	applet.setVisible("PONTO_"+l, false);
		applet.setFixed("PONTO_"+l, true);
		applet.setColor("PONTO_"+l, 255, 106, 106);
		applet.setPointSize("PONTO_"+l, 2);
	}
	for (l = 0; l < valoresArea.length; l++) {
	  	applet.setVisible("PONTO_"+l, true);
	}
}

/**
 * Funcao que "traca" mostra o grafico na Atividade1 Parte5.
 */
function tracarGrafico() {
	var applet = document.ggbApplet;
	applet.setFixed('C',false);
	applet.setVisible('f',true);
	applet.setVisible('P',true);
	applet.setVisible('b',true);
	applet.setVisible('g',true);
	
}

function registerListeners() {
	var applet = document.ggbApplet;
	applet.registerUpdateListener("updateListener");
}

// Add listener
function updateListener(objName) {

	var applet = document.ggbApplet;
	if (objName=='E') {
		var coordX=applet.getXcoord(objName);
		var coordY=applet.getYcoord(objName);
		applet.unregisterUpdateListener("updateListener");
		applet.setCoords(objName,Math.round(coordX),coordY);
		applet.registerUpdateListener("updateListener");
		}
		
	
}

var base= new Array();
var altura= new Array();
var area= new Array();			
var num_init_retries= 0

/*função para formatar as células da matriz da questão 3 (atividade 1)*/
function trataCelula(id1,id2,id3)
{ 	
	var valor = $(id1).value;
	var num2, i;
			
			valor=valor.replace(',','.');
			if (valor=='' || isNaN(valor))
			{
					setResp('atividade_1_'+id1,'undefined');
					setResp('atividade_1_'+id3,'undefined');
					$(id3).update('###');
			}
			else{
				valor=parseFloat(valor);
				$(id1).value=valor.toFixed(2);
				setResp('atividade_1_'+id1,valor);
				num2=getResp('atividade_1_'+id2);
				if(isNaN(num2))
				{
					setResp('atividade_1_'+id3,'undefined');
					$(id3).update('###');
				}
				else
				{
					var num=valor*parseFloat(num2);
					num=num.toFixed(2);
					$(id3).update(num);
					setResp('atividade_1_'+id3,num);
				}
			}
			
}


function trataCelula1(id1,id2,id3,id4)
{var Resp1 = $(id1).value;
 var Resp3 = getResp('atividade_2_'+id3);
 var Resp2 = getResp('atividade_2_'+id2);

			if (isNaN(Resp1) || Resp1=='')
			{ 
				setResp('atividade_2_'+id1,'undefined');
				setResp('atividade_2_'+id4,'undefined');
				$(id4).update('###');
			}
			else{ 
				setResp('atividade_2_'+id1,$(id1).value);
				if(Resp2!='undefined' && Resp3!='undefined')
				{
					var num=parseFloat(Resp2)+parseFloat(Resp3)/2;	
					num=Resp1*num;
					num=num.toFixed(2);
					$(id4).update(num); 
					setResp('atividade_2_'+id4,num);
				}
				else
				{
					setResp('atividade_2_'+id4,'undefined');
					$(id4).update('###');
				}				
			}
}

function trataCelula3(id1)
{var Resp1 = $(id1).value;
			
			if (isNaN(Resp1) || Resp1=='')
			{ 
				setResp('atividade_2_'+id1,'undefined');
			}
			else{ 
				setResp('atividade_2_'+id1,$(id1).value);
			}
}

function trataCelula2(id1,id2,id3,id4)
{var Resp1 = $(id1).value;
 var num, altura;
 var Resp3 = getResp('atividade_2_'+id3);
 var Resp2 = getResp('atividade_2_'+id2);
 
			if (isNaN(Resp1) || Resp1=='')
			{
				setResp('atividade_2_'+id1,'undefined');
				setResp('atividade_2_'+id4,'undefined');
				$(id4).update('###');
			}
			else 
			{
				setResp('atividade_2_'+id1,$(id1).value);
				if(Resp2!='undefined' && Resp3!='undefined') 
				{
					Resp3=parseFloat(Resp3);
					altura=parseFloat(Resp1)+Resp3/2;
					num=Resp2*altura;
					num=num.toFixed(2);
					$(id4).update(num);
					setResp('atividade_2_'+id4,num);
				}	
				else
				{
					setResp('atividade_2_'+id4,'undefined');
					$(id4).update('###');
				}
			}
}

function trataCelula4(id1,id2,id3,id4)
{var Resp1 = $(id1).value;
 var num, altura;
 var Resp3 = getResp('atividade_2_'+id3);
 var Resp2 = getResp('atividade_2_'+id2);
 
			if (isNaN(Resp1) || Resp1=='')
			{ 
				setResp('atividade_2_'+id1,'undefined');
				setResp('atividade_2_'+id4,'undefined');
				$(id4).update('###');
			}
			else
			{
				setResp('atividade_2_'+id1,$(id1).value);
				if(Resp2!='undefined' && Resp3!='undefined') 
				{
					Resp3=parseFloat(Resp3);
					altura=(parseFloat(Resp1)/2)+Resp3;
					num=parseFloat(Resp2)*altura;
					num=num.toFixed(2);
					$(id4).update(num);
					setResp('atividade_2_'+id4,num);	
				}
				else
				{
					setResp('atividade_2_'+id4,'undefined');
					$(id4).update('###');
				}
				
			}
}


function limpa_atv2()
{var i,j;
	
	apagaResp('atividade_2_parte1_q1_a_1');
	apagaResp('atividade_2_parte1_q1_a_2');
	for(i=0,j = 2; i < 20; i += 4, j++) {

		apagaResp('atividade_2_parte2_q2_a_' + j + '2');
		apagaResp('atividade_2_parte2_q2_a_' + j + '3');
		apagaResp('atividade_2_parte2_q2_a_' + j + '4');
		apagaResp('atividade_2_parte2_q2_a_' + j + '5');
		apagaResp('atividade_2_parte2_q2_a_' + j + '6');
	}
	apagaResp('atividade_2_parte3_q3_a_11');
	apagaResp('atividade_2_parte3_q3_a_12');
	apagaResp('atividade_2_parte3_q3_a_21');
	apagaResp('atividade_2_parte3_q3_a_22');
	apagaResp('atividade_2_parte3_q3_b');
	apagaResp('atividade_2_parte4_q4_a');
	apagaResp('atividade_2_parte4_q4_b');
	apagaResp('atividade_2_parte4_q4_c');
	apagaResp('atividade_2_parte4_q4_d');
	apagaResp('atividade_2_parte5_q5_a');
	apagaResp('atividade_2_parte5_q5_b');
	apagaResp('atividade_2_parte6_q6_a_11');
	apagaResp('atividade_2_parte6_q6_a_12');
	apagaResp('atividade_2_parte6_q7_a');
	apagaResp('atividade_2_parte6_q7_b');
	apagaResp('atividade_2_parte6_q7_c');
	
}


/**
 * Funcao que ira poder alterar o valor inicial.
 */
function unset_inicial() {
	if (this.resultado == 'sim') {
		var applet = document.ggbApplet;
		
		applet.setVisible('alpha',true);
		
		adicionaEsperando({Parte: 0, Questao:'parte1_q1', Item: 0});
		$('valor_inicial').removeClassName('desabilitada');
		$('link_valor_inicial').update('Definir valor inicial');
		Event.stopObserving($('link_valor_inicial'), 'click');
		$('link_valor_inicial').writeAttribute({onclick: 'javascript:selecionarAngulo();'});
		$('anguloEscolhido').update('');
	}
}

/**
 * Funcao que ira inserir os dados do angulo.
 * @param {Object} parte	parte da arividade. Se for 4 devera inserir o texto, senao apenas pega os dados do angulo.
 */
function insereDadosAngulo(parte) {

	var applet = document.ggbApplet;
	var angulo = getResp('atividade_2_angulo');
	applet.setValue('alpha', angulo);
	
	/* Ira colocar o angulo, seu seno e cosseno na parte 4 da atividade 2, APENAS.*/
	if(parte == 3) {
			var anguloString = getResp('atividade_2_anguloString');
			var seno = getResp('atividade_2_seno');
			var cosseno = getResp('atividade_2_cosseno');
			var tangente = getResp('atividade_2_tangente');
			var textoAngulo = anguloString + '. Portanto, nas atividades seguintes devem ser considerados os seguintes valores aproximados: sen(α) = ' + seno + ', cos(α) = ' +  cosseno + ' e tan(α) = ' + tangente;
			var elem = document.getElementById('valor_do_angulo');
			elem.innerHTML = textoAngulo;
	}
}


function mudaValorEnunciado() {
var cosseno = Math.cos(getResp('atividade_2_angulo'));
var tangente = Math.tan(getResp('atividade_2_angulo'));

	var x = ( (100 / ( (cosseno + 1) / (2 * cosseno) - tangente / 4 ) ) + (400 * cosseno) / (cosseno + 1) ) / 2;
	var enunciadoB = (x*(200-x*(cosseno+1)/(2*cosseno)) + Math.pow(x,2)*tangente/4);				
	enunciadoB = Math.round(enunciadoB);

	
	x = ( (200 / ( (cosseno + 1) / (2 * cosseno) - tangente / 4 ) ) - (400 * cosseno) / (cosseno + 1) ) / 2;
	var enunciadoC = (x*(200-x*(cosseno+1)/(2*cosseno)) + Math.pow(x,2)*tangente/4);				

	enunciadoC = Math.round(enunciadoC);

	$('questao_8b').update(enunciadoB+'cm²');
	$('questao_8c').update(enunciadoC+'cm²');
	
}

/***************************
 * CORRECAO DA ATIVIDADE 3 *
 ***************************/
/* Funcao que plota os pontos preenchidos na tabela da Atividade 3. */
function plotarPontosA3() {
	listaAngulo = new Array();
	listaArea = new Array();

	listaAngulo.push(0);
	listaArea.push(10000);
	for (i = 3; i <= 11; i++){
		var angulo = parseFloat(getResp("atividade_4_correto_q1_a_" + i + "2"));
		var area = parseFloat(getResp("atividade_4_correto_q1_a_" + i + "3"));
		if ( (!isNaN(angulo)) && (!isNaN(area)) && angulo!=-1) {
			listaAngulo.push(angulo);
			listaArea.push(area);
		}
	}	

	var applet = document.ggbApplet;
	for (i = 0; i < 12; i++) 
			applet.deleteObject("PONTO_" + i);

	for (i = 0; i < listaAngulo.length; i++) {
		  	applet.evalCommand("PONTO_" + i + "=(" + listaAngulo[i] + "," + listaArea[i] +")");
			applet.setFixed("PONTO_" + i, true);
			applet.setColor("PONTO_" + i, 255, 106, 106);
	}
}
