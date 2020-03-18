var SalvaLocalLoaded = true;
var HTMLLoaded = false;


Event.observe(window, 'load', function(){
	BlocoNotas = new Blocao();
	setAtividade('atividade_2',2,false);

	HTMLLoaded = true;
	checkInits();


});

Event.observe(document, 'flash:SalvaLocal', function(ev)
{
	SalvaLocalLoaded = true;
	checkInits();
});

function checkInits()
{


	// Checagem se tanto SalvaLocal e Geogebra foram carregados.
	if  (SalvaLocalLoaded && HTMLLoaded) InitOnLoad();
}

function InitOnLoad() {

	switch (PosicaoAtual.Parte) {
		case 0:

		var ids = [ 'parte1_q1_a_23', 'parte1_q1_a_24', 'parte1_q1_a_25', 'parte1_q1_a_26', 'parte1_q1_a_27',
			'parte1_q1_a_32', 'parte1_q1_a_34', 'parte1_q1_a_35', 'parte1_q1_a_36', 'parte1_q1_a_37',
			'parte1_q1_a_42', 'parte1_q1_a_43', 'parte1_q1_a_45', 'parte1_q1_a_46', 'parte1_q1_a_47',
			'parte1_q1_a_52', 'parte1_q1_a_53', 'parte1_q1_a_54', 'parte1_q1_a_56', 'parte1_q1_a_57',
			'parte1_q1_a_62', 'parte1_q1_a_63', 'parte1_q1_a_64', 'parte1_q1_a_65', 'parte1_q1_a_67',
			'parte1_q1_a_72', 'parte1_q1_a_73', 'parte1_q1_a_74', 'parte1_q1_a_75', 'parte1_q1_a_76',

			'parte1_q2_a_11', 'parte1_q2_a_12', 'parte1_q2_a_13', 'parte1_q2_a_14', 'parte1_q2_a_15', 'parte1_q2_a_16',
			'parte1_q2_a_21', 'parte1_q2_a_22', 'parte1_q2_a_23', 'parte1_q2_a_24', 'parte1_q2_a_25', 'parte1_q2_a_26',
			'parte1_q2_a_31', 'parte1_q2_a_32', 'parte1_q2_a_33', 'parte1_q2_a_34', 'parte1_q2_a_35', 'parte1_q2_a_36',
			'parte1_q2_a_41', 'parte1_q2_a_42', 'parte1_q2_a_43', 'parte1_q2_a_44', 'parte1_q2_a_45', 'parte1_q2_a_46',
			'parte1_q2_a_51', 'parte1_q2_a_52', 'parte1_q2_a_53', 'parte1_q2_a_54', 'parte1_q2_a_55', 'parte1_q2_a_56',
			'parte1_q2_a_61', 'parte1_q2_a_62', 'parte1_q2_a_63', 'parte1_q2_a_64', 'parte1_q2_a_65', 'parte1_q2_a_66']

		ids.each(function(item)
			{
				Event.observe(item, 'change', function(evento)
					{
						validacaoRespostaNumericaSimples(item,0)
						setResp('atividade2_'+item,$(item).value);
					});

				$(item).value = getResp('atividade2_'+item);
			}
		);

		var ids_multi_escolha = [ 'parte1_q3_a_1', 'parte1_q3_a_2', 'parte1_q3_a_3', 'parte1_q3_a_4' ];


		ids_multi_escolha.each(function(item)
			{
				Event.observe(item, 'change', function(evento)
				{
					setResp('atividade2_parte1_q3_a',$(item).value);
				});

			}
		);

		switch (getResp('atividade2_parte1_q3_a'))
		{
			case 'a':
				$('parte1_q3_a_1').setChecked(true);
			break
			case 'b':
				$('parte1_q3_a_2').setChecked(true);
			break;
			case 'c':
				$('parte1_q3_a_3').setChecked(true);
			break;
			case 'd':
				$('parte1_q3_a_4').setChecked(true);
			break

		}
		break
		case 1:
			var ids = [ 'parte2_q4_a' ] ;
			ids.each(function(item)
				{
					Event.observe(item, 'change', function(evento)
						{
							validacaoRespostaNumericaSimples(item,0)
							setResp('atividade2_'+item,$(item).value);
						});

					$(item).value = getResp('atividade2_'+item);
				}
			);

		break;
		case 2:
			var ids = [ 'parte3_q5_a_12', 'parte3_q5_a_13', 'parte3_q5_a_14',
						'parte3_q5_a_21', 'parte3_q5_a_23', 'parte3_q5_a_24',
						'parte3_q5_a_31', 'parte3_q5_a_32', 'parte3_q5_a_34',
						'parte3_q5_a_41', 'parte3_q5_a_42', 'parte3_q5_a_43',

						'parte3_q5_b_11', 'parte3_q5_b_12', 'parte3_q5_b_13', 'parte3_q5_b_14',
						'parte3_q5_b_21', 'parte3_q5_b_22', 'parte3_q5_b_23', 'parte3_q5_b_24',
						'parte3_q5_b_31', 'parte3_q5_b_32', 'parte3_q5_b_33', 'parte3_q5_b_34',
						'parte3_q5_b_41', 'parte3_q5_b_42', 'parte3_q5_b_43', 'parte3_q5_b_44',

						'parte3_q6_a_11', 'parte3_q6_a_12', 'parte3_q6_a_13', 'parte3_q6_a_14',
						'parte3_q6_a_21', 'parte3_q6_a_22', 'parte3_q6_a_23', 'parte3_q6_a_24',
						'parte3_q6_a_31', 'parte3_q6_a_32', 'parte3_q6_a_33', 'parte3_q6_a_34',
						'parte3_q6_a_41', 'parte3_q6_a_42', 'parte3_q6_a_43', 'parte3_q6_a_44'
						]

			ids.each(function(item)
				{
					Event.observe(item, 'change', function(evento)
						{
							validacaoRespostaNumericaSimples(item,0)
							setResp('atividade2_'+item,$(item).value);
						});

					$(item).value = getResp('atividade2_'+item);
				}
			);

		var ids_multi_escolha = [ 'parte3_q7_a_1', 'parte3_q7_a_2', 'parte3_q7_a_3', 'parte3_q7_a_4', 'parte3_q7_a_5' ];


		ids_multi_escolha.each(function(item)
			{
				Event.observe(item, 'input:change', function(evento)
				{
					setResp('atividade2_parte3_q7_a',$(item).value);
				});

			}
		);

		switch (getResp('atividade2_parte3_q7_a'))
		{
			case 'a':
				$('parte3_q7_a_1').setChecked(true);
			break
			case 'b':
				$('parte3_q7_a_2').setChecked(true);
			break;
			case 'c':
				$('parte3_q7_a_3').setChecked(true);
			break;
			case 'd':
				$('parte3_q7_a_4').setChecked(true);
			break
			case 'e':
				$('parte3_q7_a_5').setChecked(true);
			break

		}

		break;
	}

};

// Questao 1
function corrige_q_1_a(valor)
{

	var matriz = [ [1, 1, 1, 0, 1 , 0],
							[1, 1, 1, 0, 1 , 0],
							[1, 1, 1, 0, 1 , 0],
							[0, 0, 0, 4, 0 , 1],
							[1, 1, 1, 0, 2 , 0],
							[0, 0, 0, 1, 0 , 1] ];


	return [
	(valor[0]?valor[0]==matriz[0][1]?true:false:false),	// posicao 1x2
	(valor[1]?valor[1]==matriz[0][2]?true:false:false),	// posicao 1x3
	(valor[2]?valor[2]==matriz[0][3]?true:false:false),	// posicao 1x4
	(valor[3]?valor[3]==matriz[0][4]?true:false:false),	// posicao 1x5
	(valor[4]?valor[4]==matriz[0][5]?true:false:false),	// posicao 1x6

	(valor[5]?valor[5]==matriz[1][0]?true:false:false),
	(valor[6]?valor[6]==matriz[1][2]?true:false:false),
	(valor[7]?valor[7]==matriz[1][3]?true:false:false),
	(valor[8]?valor[8]==matriz[1][4]?true:false:false),
	(valor[9]?valor[9]==matriz[1][5]?true:false:false),

	(valor[10]?valor[10]==matriz[2][0]?true:false:false),
	(valor[11]?valor[11]==matriz[2][1]?true:false:false),
	(valor[12]?valor[12]==matriz[2][3]?true:false:false),
	(valor[13]?valor[13]==matriz[2][4]?true:false:false),
	(valor[14]?valor[14]==matriz[2][5]?true:false:false),

	(valor[15]?valor[15]==matriz[3][0]?true:false:false),
	(valor[16]?valor[16]==matriz[3][1]?true:false:false),
	(valor[17]?valor[17]==matriz[3][2]?true:false:false),
	(valor[18]?valor[18]==matriz[3][4]?true:false:false),
	(valor[19]?valor[19]==matriz[3][5]?true:false:false),

	(valor[20]?valor[20]==matriz[4][0]?true:false:false),
	(valor[21]?valor[21]==matriz[4][1]?true:false:false),
	(valor[22]?valor[22]==matriz[4][2]?true:false:false),
	(valor[23]?valor[23]==matriz[4][3]?true:false:false),
	(valor[24]?valor[24]==matriz[4][5]?true:false:false),

	(valor[25]?valor[25]==matriz[5][0]?true:false:false),
	(valor[26]?valor[26]==matriz[5][1]?true:false:false),
	(valor[27]?valor[27]==matriz[5][2]?true:false:false),
	(valor[28]?valor[28]==matriz[5][3]?true:false:false),
	(valor[29]?valor[29]==matriz[5][4]?true:false:false)	]

}

// Questao 2
function corrige_q_2_a(valor)
{


	valor.each(function(s, index) {
	if (s.strip().empty()) valor[index] = NaN;
	});


	var matriz = [ [1, 1, 1, 0, 1 , 0],
							[1, 1, 1, 0, 1 , 0],
							[1, 1, 1, 0, 1 , 0],
							[0, 0, 0, 4, 0 , 1],
							[1, 1, 1, 0, 2 , 0],
							[0, 0, 0, 1, 0 , 1] ];


	var resultado = true;

	for (var i=0;i<valor.length;i++) {
		resultado = (resultado && (valor[i]==matriz[Math.floor(i/6)][(i%6)]))
	}
	return [resultado];



}

// Questao 3
function corrige_q_3_a(valor)
{

	return [valor[0]?false:null, valor[1]?true:null, valor[2]?false:null, valor[3]?false:null];
}

// Questao 4
function corrige_q_4_a(valor)
{
	if(Number(valor[0]) == 4) {
		return [true];
	}

	return [false];
}

// Questao 5
function corrige_q_5_a(valor)
{

	valor.each(function(s, index) {
	if (s.strip().empty()) valor[index] = NaN;
	});



	if (   valor[0] == 1 && valor[1] == 1 && valor[2] == 0
		&& valor[3] == 1 && valor[4] == 1 && valor[5] == 0
		&& valor[6] == 1 && valor[7] == 1 && valor[8] == 1
		&& valor[9] == 0 && valor[10] == 0 && valor[11] == 1) {
		return [true];
	}

	return [false];
}

function corrige_q_5_b(valor)
{

	valor.each(function(s, index) {
	if (s.strip().empty()) valor[index] = NaN;
	});


	var matriz = [  [2, 1, 1, 1],
					[1, 2, 1, 1],
					[1, 1, 3, 0],
					[1, 1, 0, 1] ];


	var resultado = true;

	for (var i=0;i<valor.length;i++) {
		resultado = (resultado && (valor[i]==matriz[Math.floor(i/4)][(i%4)]))
	}
	return [resultado];

}

// Questao 6
function corrige_q_6_a(valor)
{

	valor.each(function(s, index) {
	if (s.strip().empty()) valor[index] = NaN;
	});


	var matriz = [  [2, 2, 2, 1],
					[2, 2, 2, 1],
					[2, 2, 3, 1],
					[1, 1, 1, 1] ];


	var resultado = true;

	for (var i=0;i<valor.length;i++) {
		resultado = (resultado && (valor[i]==matriz[Math.floor(i/4)][(i%4)]))
	}
	return [resultado];

}

// Questao 7
function corrige_q_7_a(valor)
{

	return [valor[0]?true:null, valor[1]?false:null, valor[2]?false:null, valor[3]?false:null, valor[4]?false:null];
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


function tudoCerto() {

	switch (PosicaoAtual.Parte) {
		case 2:
		setAtividade('atividade_2',3,true);
		setAtividade('transicao_1',1,false);
		break;

	}

}
