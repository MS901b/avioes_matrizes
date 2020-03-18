var Slider = Class.create(Control.Slider, {
	divCont: undefined, handle: undefined, value: undefined,
	initialize: function ($super, min, max, valor_inicial, passo)
	{
		this.divCont = new Element('div', {className: 'slider', id: Math.random().toFixed(2)*100})
		this.divCont.insert(new Element('div', {className:'ponto inicial'}));
		this.divCont.insert(new Element('div', {className:'ponto final'}));
		this.divCont.insert(new Element('div', {className:'face'}));
		this.divCont.insert(this.handle = new Element('div', {className:'handle'}));
		
		var valores;
		
		if(passo)
		{
			valores = new Array();
			for(var a = min; a <= max; a+=passo)
			{
				valores.push(a);
				if(318/max*passo > 10)
					this.divCont.insert({top :new Element('div',{className: 'ponto', style: ['left:',Math.round(a*318/max+13),'px'].join('')})})
			}
		}
		
		this.imprime();
		
		$super(this.handle, this.divCont, {
			range: $R(min, max),
			values: valores,
			onSlide: function(value) {
				this.handle.update(passo?value:value.toFixed(1));
			}.bind(this),
			onChange: function(value) {
				this.handle.update(passo?value:value.toFixed(1));
				this.value = value;
			}.bind(this)
		})
		this.setValue(valor_inicial);
	},
	desabilita: function()
	{
		this.setDisabled();
		this.divCont.addClassName('desabilitado');
	},
	habilita: function()
	{
		this.setEnabled();
		this.divCont.removeClassName('desabilitado');
	},
	imprime: function ()
	{
		document.write('<div id="aaaaaa"</div>');
		$('aaaaaa').replace(this.divCont);
	}
});