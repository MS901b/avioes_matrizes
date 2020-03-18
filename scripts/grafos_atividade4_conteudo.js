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

var Partes = ['1'];
var nomeSoft = 'grafos';

var Questoes = 
[
	{ //Parte 2
		parte1_q1: //Questão 1
		{
			itens: 
			[
				{//A
					tipo: 'instrucao',
					corrigir: corrige_q_1_a,
					enunciado: 'Utilizando a ferramenta acima, resolva a questão enunciada anteriormente e clique no botão "corrigir" quando tiver encontrado a solução.',
					msgAjuda: 'Tente usar duas cidades como centralizadoras dos voos',
					msgErro: 'Na matriz M+M&sup2;+M&sup3;, verifique se todas as cidades estão conectadas. Na Matriz M, verifique, analisando cada uma das linhas, se, de fato, cada cidade tem, no máximo, quatro voos.'
					
				}				
			]
		},
		parte1_q2: //Questão 1
		{
			itens: 
			[
				{//A
					tipo: 'instrucao',
					corrigir: corrige_q_1_a,
					enunciado: 'O número mínimo de voos necessários para se construir uma malha de acordo com as condições impostas no enunciado desta atividade é 7. Utilize a ferramenta acima (utilizando as matrizes para analisar a malha aérea que você construiu) para construir uma malha aérea com exatamente 7 voos e que respeite as restrições impostas.',
					msgErro: 'Tente escolher duas cidades como centralizadoras e conecte-as com um voo. Para saber mais sobre esse tipo de recurso, leia a referência 2, na barra de ferramenta abaixo.'
					
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