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
	{//Parte 1
		parte1_q1: //Questão 1
		{
			itens: 
			[
				{//A
					tipo: 'instrucao',
					corrigir: corrige_q_1_a,
					enunciado: 'Utilizando a ferramenta acima, responda o problema enunciado anteriormente e clique no botão "corrigir" quando tiver encontrado a solução.',
					msgErro: 'Tente centralizar os voos em uma única cidade. Se quiser saber mais sobre esse tipo de estratégia, acesse a referência 1, na barra de ferramentas abaixo.'
					
				},
				{//B
					tipo: 'input',
					corrigir: corrige_q_1_b,
					enunciado: 'Quantas malhas com essas mesmas restrições podem ser construídas?',
					msgErro: 'Em quantas cidades diferentes você poderia concentrar os voos dessa malha?'
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