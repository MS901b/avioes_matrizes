// Javascript

var idsResp;

function init() 
{
	idsResp = pegaNomesResp();

	for (var i=0;i<idsResp.length;i++) 
	{
		carregaValorResposta(idsResp[i]);
	}

}


