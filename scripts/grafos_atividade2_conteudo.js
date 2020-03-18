/*
	Padronização do ID: 
		- [['p/parte','q/questao','/item'],'_'] vai gerar um id do tipo p1_q2_1
		- [['p/parte','q/questao','/itemletra'],'_'] vai gerar um id do tipo p1_q2_a
	Palavras-chave: questao, parte, item, itemletra, subitem
	Devem ser precedidas de uma barra '/'.
	A palavra-chave subitem será usada somente em questões com mais de um campo
*/
 
var IdPadrao = [['parte/parte','q/questao','/itemletra','/subitem'],'_'];

/*
	Questoes
	
	Aqui ficam concentrados todos os conteudos das questões da atividade!
	Veja que está separado por Parte/Questão/Item
	
	ATENÇÃO: Cada tipo possui um formato de entrada característico.
*/

var Partes = ['1', '2', '3'];
var nomeSoft = 'grafos';

var Questoes = 
[
	{//Parte 1
		parte1_q1: //Questão 1
		{			
			itens: 
			[
				{//A
					tipo: 'tabela_adjacencia',					
					corrigir: corrige_q_1_a,					
					enunciado: 'Seguindo esse raciocínio, preencha cada célula da tabela abaixo com o número de voos com exatamente uma escala que podem ser utilizados para ir de uma cidade a outra.',
					dados:  [
							[{value: 'Vértices', largura: 3, tipo: 'destacado'},	{value: '1', largura: 2, tipo: 'semi_destacado'},		{value: '2', largura: 2, tipo: 'semi_destacado'},		{value: '3', largura: 2, tipo: 'semi_destacado'},		{value: '4', largura: 2, tipo: 'semi_destacado'},		{value: '5', largura: 2, tipo: 'semi_destacado'},		{value: '6', largura: 2, tipo: 'semi_destacado'}],	//header
							[{value: '1', tipo: 'semi_destacado'},					{value: '1', tipo: 'texto'},							{tipo: 'input'},										{tipo: 'input'},										{tipo: 'input'},										{tipo: 'input'},										{tipo: 'input'}],
							[{value: '2', tipo: 'semi_destacado'},					{tipo: 'input'},										{value: '1', tipo: 'texto'},							{tipo: 'input'},										{tipo: 'input'},										{tipo: 'input'},										{tipo: 'input'}],
							[{value: '3', tipo: 'semi_destacado'},					{tipo: 'input'},										{tipo: 'input'},										{value: '1', tipo: 'texto'},							{tipo: 'input'},										{tipo: 'input'},										{tipo: 'input'}],
							[{value: '4', tipo: 'semi_destacado'},					{tipo: 'input'},										{tipo: 'input'},										{tipo: 'input'},										{value: '4', tipo: 'texto'},							{tipo: 'input'},										{tipo: 'input'}],
							[{value: '5', tipo: 'semi_destacado'},					{tipo: 'input'},										{tipo: 'input'},										{tipo: 'input'},										{tipo: 'input'},										{value: '2', tipo: 'texto'},							{tipo: 'input'}],
							[{value: '6', tipo: 'semi_destacado'},					{tipo: 'input'},										{tipo: 'input'},										{tipo: 'input'},										{tipo: 'input'},										{tipo: 'input'},										{value: '1', tipo: 'texto'}]
							],					
					msgErro: 'Se for preciso, desenhe esta malha em uma folha de papel para poder percorrer os caminhos com um lápis.'			
				}				
			]
		},
		parte1_q2: //Questão 2
		{			
			itens: 
			[
				{//A
					tipo: 'matriz',
					enunciado: 'Agora, para entender a relação entre a matriz com voos diretos (M<sub>1</sub>, indicada ao lado do malha) e a matriz com voos de uma escala (M<sub>2</sub>, que você obteve na questão anterior), calcule no seu caderno a matriz M<sub>1</sub>&sup2;, ou seja, M<sub>1</sub> x M<sub>1</sub>. Preencha o resultado abaixo:',
					corrigir: corrige_q_2_a,
					dados: [
							 [{tipo: 'input'},				{tipo: 'input'},				{tipo: 'input'},	{tipo: 'input'},				{tipo: 'input'},				{tipo: 'input'}],
							 [{tipo: 'input'},				{tipo: 'input'},				{tipo: 'input'},	{tipo: 'input'},				{tipo: 'input'},				{tipo: 'input'}],
							 [{tipo: 'input'},				{tipo: 'input'},				{tipo: 'input'},	{tipo: 'input'},				{tipo: 'input'},				{tipo: 'input'}],
							 [{tipo: 'input'},				{tipo: 'input'},				{tipo: 'input'},	{tipo: 'input'},				{tipo: 'input'},				{tipo: 'input'}],
							 [{tipo: 'input'},				{tipo: 'input'},				{tipo: 'input'},	{tipo: 'input'},				{tipo: 'input'},				{tipo: 'input'}],
							 [{tipo: 'input'},				{tipo: 'input'},				{tipo: 'input'},	{tipo: 'input'},				{tipo: 'input'},				{tipo: 'input'}]
							],					
					msgErro: 'Não lembra como multiplicar matrizes? Peça ajuda a um colega ou ao seu professor.'					
				}				
			]
		},
		parte1_q3: //Questão 3
		{			
			itens: 
			[
				{//A
					tipo: 'multipla_escolha',
					corrigir: corrige_q_3_a,
					enunciado: 'Comparando a matriz que você obteve no exercício anterior com as matriz M<sub>1</sub> e M<sub>2</sub>, o que se pode concluir?',
					dados:	[
								{value: 'a', label: 'M<sub>1</sub> = M<sub>2</sub>'},
								{value: 'b', label: 'M<sub>1</sub>&sup2; = M<sub>2</sub>'},
								{value: 'c', label: 'M<sub>1</sub>&sup2;= M<sub>2</sub>&sup2;'},								
								{value: 'd', label: 'M<sub>1</sub>+M<sub>2</sub> = I'}
							],
					msgErro: 'Confira se as duas questões anteriores estão corretas e, então, compare os resultados.'	
				}				
			]
		}		
	},
	{ //Parte 2
		parte2_q4: //Questão 4
		{
			itens: 
			[
				{//A
					tipo: 'input',
					corrigir: corrige_q_4_a,
					enunciado: 'Analisando a matriz acima, responda: de quantas maneiras é possível ir da cidade 4 para a cidade 1 com exatamente três voos?',
					msgErro: 'Lembre-se que a entrada (i,j) da matriz (M<sub>1</sub>)&sup3;=M<sub>3</sub> indica o número de maneiras possíveis de se ir da cidade i para a cidade j com exatamente 3 voos.'
				}				
			]
		}
	},
	{ //Parte 3
		parte3_q5: //Questão 5
		{
			itens: 
			[
				{//A
					tipo: 'matriz',
					enunciado: 'Qual é a matriz que representa os voos diretos desse grafo?',
					corrigir: corrige_q_5_a,
					dados:	[
							 [{value: '0', tipo: 'texto'},	{tipo: 'input'},				{tipo: 'input'},				{tipo: 'input'}],
							 [{tipo: 'input'},				{value: '0', tipo: 'texto'},	{tipo: 'input'},				{tipo: 'input'}],
							 [{tipo: 'input'},				{tipo: 'input'},				{value: '0', tipo: 'texto'},	{tipo: 'input'}],
							 [{tipo: 'input'},				{tipo: 'input'},				{tipo: 'input'},				{value: '0', tipo: 'texto'}]
							],
					msgErro: "Você pode trabalhar com as linhas ou com as colunas de cada matriz, verificando quais vértices estão ligados a quais outros. Se você preferir, pode analisar cada voo individualmente e preencher suas casas correspondentes na tabela com 1's. Feito isto, as casas que ficarem vazias deverão ser preenchidas com 0's."
				},
				{//B
					tipo: 'matriz', 
					enunciado: 'Qual é a matriz que representa as conexões com uma escala?',
					corrigir: corrige_q_5_b,
					dados:	[
							 [{tipo: 'input'},	{tipo: 'input'},	{tipo: 'input'},	{tipo: 'input'}],
							 [{tipo: 'input'},	{tipo: 'input'},	{tipo: 'input'},	{tipo: 'input'}],
							 [{tipo: 'input'},	{tipo: 'input'},	{tipo: 'input'},	{tipo: 'input'}],
							 [{tipo: 'input'},	{tipo: 'input'},	{tipo: 'input'},	{tipo: 'input'}]
							],
					msgErro: 'Ao invés de trabalhar com o grafo ao lado, tente multiplicar por si mesma a matriz obtida no item (A) desta questão.'
				}
			]
		},
		parte3_q6: //Questão 6
		{			
			itens: 
			[
				{//A
					tipo: 'matriz', 
					enunciado: 'Calcule a matriz M<sub>1</sub>+M<sub>1</sub>&sup2;.',
					corrigir: corrige_q_6_a,
					dados:	[
							 [{tipo: 'input'},	{tipo: 'input'},	{tipo: 'input'},	{tipo: 'input'}],
							 [{tipo: 'input'},	{tipo: 'input'},	{tipo: 'input'},	{tipo: 'input'}],
							 [{tipo: 'input'},	{tipo: 'input'},	{tipo: 'input'},	{tipo: 'input'}],
							 [{tipo: 'input'},	{tipo: 'input'},	{tipo: 'input'},	{tipo: 'input'}]
							],
					msgErro: 'Confira se as duas questões anteriores estão corretas e, então, basta somar as duas matrizes obtidas.'
					
				}
			]
		},
		parte3_q7: //Questão 7
		{
			itens: 
			[
				{//A
					tipo: 'multipla_escolha',
					corrigir: corrige_q_7_a,
					enunciado: 'Quantos elementos nessa matriz são iguais a 0?',
					dados:	[
								{value: 'a', label: 'nenhum'},
								{value: 'b', label: '1'},
								{value: 'c', label: '2'},								
								{value: 'd', label: '3'},
								{value: 'e', label: '4'}
							],
					msgErro: "Confira se a questão anterior está correta e conte o número de 0's presente na matriz utilizada."
				}	
			]
		}		
	}
]

/*
	Bloco de Notas
	
	Nesse Array ficam os dados que aparecem no Bloquinho de notas.
	Se você for na linha 35 do exemplo_correcao.js verá que está sendo criada uma instância
	de "Blocao", uma classe de bloco de notas que permite tabelas no conteúdo. Se não for
	usar tabelas no Software, altere para "Bloco". Ambas classes utilizam a variavel global
	MeuBloco para preencher o seu conteúdo.
*/

var MeuBloco = new Array(
);