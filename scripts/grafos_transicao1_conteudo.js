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
var Partes = null;
var nomeSoft = 'grafos';
var Questoes = null;

/*
	Bloco de Notas
	
	Nesse Array ficam os dados que aparecem no Bloquinho de notas.
	Se você for na linha 35 do exemplo_correcao.js verá que está sendo criada uma instância
	de "Blocao", uma classe de bloco de notas que permite tabelas no conteúdo. Se não for
	usar tabelas no Software, altere para "Bloco". Ambas classes utilizam a variavel global
	MeuBloco para preencher o seu conteúdo.
*/

var MeuBloco = new Array(
	'Aviões e Matrizes'
);


Event.observe(window, 'load', function(){
	BlocoNotas = new Blocao();

});

Event.observe(document, 'flash:SalvaLocal', function(ev)
{

	var atividades = [3,4,5];
			
	setAtividade('transicao_1',3);
	for (var a=0; a < atividades.length; a++)
	{

		if (getResp('atividade_'+atividades[a])=='2')
		{
			$('atividade'+atividades[a]).addClassName('comecada');
			$('atividade'+atividades[a]).removeClassName('aberta');
			var concluida = new Element('div', {className: 'concluida'}).insert('Atividade já inciada.');
			$('pai_atividade'+atividades[a]).insert(concluida);
		}

	
		if (getResp('atividade_'+atividades[a])=='3')
		{
			$('atividade'+atividades[a]).addClassName('ja_feita');
			$('atividade'+atividades[a]).removeClassName('aberta');
			var concluida = new Element('div', {className: 'concluida'}).insert('Atividade já concluída.');
			$('pai_atividade'+atividades[a]).insert(concluida);
		}
	

	
	}

});
