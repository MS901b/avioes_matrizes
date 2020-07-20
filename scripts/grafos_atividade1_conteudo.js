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
var Partes = ['1', '2', '3', '4', 'C'];
var nomeSoft = 'grafos';


var Questoes =
[
	{//Parte 1
		parte1_q1: //Questão 1
		{
			itens:
			[
				{//A
					tipo: 'instrucao',
					corrigir: corrige_q_1_a,
					enunciado: 'Na ferramenta ao lado, elabore uma malha aérea conectando todas as cidades e que possibilite ir de uma cidade a outra com, no máximo, dois voos (isto é, fazendo 1 escala). Essa malha não poderá ter mais que 9 voos.',
					msgErro: 'Verifique se todas as cidades estão conectadas entre si com, no máximo, dois voos. Se for preciso, desenhe a malha em uma folha de papel para poder percorrer as rotas  com um lápis.'
				}
			]
		},
		parte1_q2: //Questão 2
		{
			itens:
			[
				{//A
					tipo: 'input',
					corrigir: corrige_q_2_a,
					enunciado: 'Quantos voos há na sua malha?',
					msgErro: 'Conte novamente o número de linhas na malha aérea que você construiu.'
				}
			]
		}
	},
	{ //Parte 2
		parte2_q3: //Questão 3
		{
			itens:
			[
				{//A
					tipo: 'tabela_adjacencia',
					corrigir: corrige_q_3_a,
					enunciado: 'À luz da explicação acima, preencha a tabela abaixo de tal modo que ela represente a malha que você construiu.',
					dados:	[
							[{value: 'Cidades', largura: 3, tipo: 'destacado'},	{value: '1', largura: 2, tipo: 'semi_destacado'},		{value: '2', largura: 2, tipo: 'semi_destacado'},		{value: '3', largura: 2, tipo: 'semi_destacado'},		{value: '4', largura: 2, tipo: 'semi_destacado'},		{value: '5', largura: 2, tipo: 'semi_destacado'},		{value: '6', largura: 2, tipo: 'semi_destacado'}],	//header
							[{value: '1', tipo: 'semi_destacado'},				{value: '0', tipo: 'texto'},							{tipo: 'input'},										{tipo: 'input'},										{tipo: 'input'},										{tipo: 'input'},										{tipo: 'input'}],
							[{value: '2', tipo: 'semi_destacado'},				{tipo: 'input'},										{value: '0', tipo: 'texto'},							{tipo: 'input'},										{tipo: 'input'},										{tipo: 'input'},										{tipo: 'input'}],
							[{value: '3', tipo: 'semi_destacado'},				{tipo: 'input'},										{tipo: 'input'},										{value: '0', tipo: 'texto'},							{tipo: 'input'},										{tipo: 'input'},										{tipo: 'input'}],
							[{value: '4', tipo: 'semi_destacado'},				{tipo: 'input'},										{tipo: 'input'},										{tipo: 'input'},										{value: '0', tipo: 'texto'},							{tipo: 'input'},										{tipo: 'input'}],
							[{value: '5', tipo: 'semi_destacado'},				{tipo: 'input'},										{tipo: 'input'},										{tipo: 'input'},										{tipo: 'input'},										{value: '0', tipo: 'texto'},							{tipo: 'input'}],
							[{value: '6', tipo: 'semi_destacado'},				{tipo: 'input'},										{tipo: 'input'},										{tipo: 'input'},										{tipo: 'input'},										{tipo: 'input'},										{value: '0', tipo: 'texto'}]
							],
					msgErro: 'Verifique novamente a tabela, observando linha a linha. Repare que ela deve ser simétrica, ou seja, a entrada (5,2), por exemplo, deve ser igual à entrada (2,5). Além disso, a tabela deve estar totalmente preenchida com os números 0 e 1.'
				}
			]
		}
	},
	{ //Parte 3
		parte3_q4: //Questão 4
		{
			enunciadoGeral: 'Descubra as matrizes que representam os grafos abaixo.',
			itens:
			[
				{//A
					enunciado: '<img src="./imgs/a1_p3_q4_a.png">',
					tipo: 'matriz',
//					imagem: 'imgs/a1_p3_q4_a.png',
					corrigir: corrige_q_4_a,
					dados:	[
							 [{value: '0', tipo: 'texto'},	{tipo: 'input'},				{tipo: 'input'},				{tipo: 'input'}],
							 [{tipo: 'input'},				{value: '0', tipo: 'texto'},	{tipo: 'input'},				{tipo: 'input'}],
							 [{tipo: 'input'},				{tipo: 'input'},				{value: '0', tipo: 'texto'},	{tipo: 'input'}],
							 [{tipo: 'input'},				{tipo: 'input'},				{tipo: 'input'},				{value: '0', tipo: 'texto'}]
							],
					msgErro: "Você pode trabalhar com as linhas (ou colunas) de cada matriz, verificando quais vértices estão ligados a quais outros. Se você preferir, pode analisar cada voo individualmente e preencher suas casas correspondentes na tabela com 1's. Feito isto, as casas que ficarem vazias deverão ser preenchidas com 0's."
				},
				{//B
					tipo: 'matriz',
					enunciado: '<img src="./imgs/a1_p3_q4_b.png">',
//					imagem: 'imgs/a1_p3_q4_b.png',
					corrigir: corrige_q_4_b,
					dados:	[
							 [{value: '0', tipo: 'texto'},	{tipo: 'input'},				{tipo: 'input'},				{tipo: 'input'}],
							 [{tipo: 'input'},				{value: '0', tipo: 'texto'},	{tipo: 'input'},				{tipo: 'input'}],
							 [{tipo: 'input'},				{tipo: 'input'},				{value: '0', tipo: 'texto'},	{tipo: 'input'}],
							 [{tipo: 'input'},				{tipo: 'input'},				{tipo: 'input'},				{value: '0', tipo: 'texto'}]
							],
					msgErro: "Você pode trabalhar com as linhas (ou colunas) de cada matriz, verificando quais vértices estão ligados a quais outros. Se você preferir, pode analisar cada voo individualmente e preencher suas casas correspondentes na tabela com 1's. Feito isto, as casas que ficarem vazias deverão ser preenchidas com 0's."
				},
				{//C
					tipo: 'matriz',
					enunciado: '<img src="./imgs/a1_p3_q4_c.png">',
//					imagem: 'imgs/a1_p3_q4_c.png',
					corrigir: corrige_q_4_c,
					dados:	[
							 [{value: '0', tipo: 'texto'},	{tipo: 'input'},				{tipo: 'input'},				{tipo: 'input'}],
							 [{tipo: 'input'},				{value: '0', tipo: 'texto'},	{tipo: 'input'},				{tipo: 'input'}],
							 [{tipo: 'input'},				{tipo: 'input'},				{value: '0', tipo: 'texto'},	{tipo: 'input'}],
							 [{tipo: 'input'},				{tipo: 'input'},				{tipo: 'input'},				{value: '0', tipo: 'texto'}]
							],
					msgErro: "Você pode trabalhar com as linhas (ou colunas) de cada matriz, verificando quais vértices estão ligados a quais outros. Se você preferir, pode analisar cada voo individualmente e preencher suas casas correspondentes na tabela com 1's. Feito isto, as casas que ficarem vazias deverão ser preenchidas com 0's."
				},
				{//D
					tipo: 'matriz',
					enunciado: '<img src="./imgs/a1_p3_q4_d.png">',
//					imagem: 'imgs/a1_p3_q4_d.png',
					corrigir: corrige_q_4_d,
					dados:	[
							 [{value: '0', tipo: 'texto'},	{tipo: 'input'},				{tipo: 'input'},				{tipo: 'input'},				{tipo: 'input'},				{tipo: 'input'}],
							 [{tipo: 'input'},				{value: '0', tipo: 'texto'},	{tipo: 'input'},				{tipo: 'input'},				{tipo: 'input'},				{tipo: 'input'}],
							 [{tipo: 'input'},				{tipo: 'input'},				{value: '0', tipo: 'texto'},	{tipo: 'input'},				{tipo: 'input'},				{tipo: 'input'}],
							 [{tipo: 'input'},				{tipo: 'input'},				{tipo: 'input'},				{value: '0', tipo: 'texto'},	{tipo: 'input'},				{tipo: 'input'}],
							 [{tipo: 'input'},				{tipo: 'input'},				{tipo: 'input'},				{tipo: 'input'},				{value: '0', tipo: 'texto'},	{tipo: 'input'}],
							 [{tipo: 'input'},				{tipo: 'input'},				{tipo: 'input'},				{tipo: 'input'},				{tipo: 'input'},				{value: '0', tipo: 'texto'}]
							],
					msgErro: "Você pode trabalhar com as linhas (ou colunas) de cada matriz, verificando quais vértices estão ligados a quais outros. Se você preferir, pode analisar cada voo individualmente e preencher suas casas correspondentes na tabela com 1's. Feito isto, as casas que ficarem vazias deverão ser preenchidas com 0's."
				}
			]
		}
	},
	{ //Parte 4
		parte4_q5: //Questão 5
		{
			enunciadoGeral: 'Agora inverta o processo: construa na ferramenta ao lado os grafos representados por cada uma das matrizes abaixo.',
			itens:
			[
				{//A
					tipo: 'instrucao',
					enunciado: '<span id="matriz_q_5_a"></span>',
					corrigir: corrige_q_5_a,
					selecionada: selecionou_q_5_a,
					associado: true,
					msgErro: "Você pode trabalhar com as linhas (ou colunas) de cada matriz, verificando quais vértices estão ligados a quais outros. Se você preferir, pode analisar cada voo individualmente e construir os segmentos de vértice <em>i</em> e <em>j</em> correspondentes às entradas (i,j) da matriz que estiverem preenchidos com 1's."
				},
				{//B
					tipo: 'instrucao',
					enunciado: '<span id="matriz_q_5_b"></span>',
					corrigir: corrige_q_5_b,
					selecionada: selecionou_q_5_b,
					associado: true,
					msgErro: "Você pode trabalhar com as linhas (ou colunas) de cada matriz, verificando quais vértices estão ligados a quais outros. Se você preferir, pode analisar cada voo individualmente e construir os segmentos de vértice <em>i</em> e <em>j</em> correspondentes às entradas (i,j) da matriz que estiverem preenchidos com 1's."
				},
				{//C
					tipo: 'instrucao',
					enunciado: '<span id="matriz_q_5_c"></span>',
					corrigir: corrige_q_5_c,
					selecionada: selecionou_q_5_c,
					associado: true,
					msgErro: "Você pode trabalhar com as linhas (ou colunas) de cada matriz, verificando quais vértices estão ligados a quais outros. Se você preferir, pode analisar cada voo individualmente e construir os segmentos de vértice <em>i</em> e <em>j</em> correspondentes às entradas (i,j) da matriz que estiverem preenchidos com 1's."
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
