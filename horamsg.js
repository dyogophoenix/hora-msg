/*!  
	Nome: Hora MSG
	Versão: 1.0
	Criado em: 30/09/2015
	Autor: Dyogo Phoenix
	Autor URL: http://dyogophoenix.com.br/
	Licença: MIT License (MIT)
	Copyright (c) 2015 Dyogo Phoenix
*/

(function($) { 'use restrict',

	this.horaMSG = function(container, custom) {
		var element = horaMSG.hasContainer( container );
		if(element['Next'] > 0) {
			var defaults = horaMSG.methods();
			var methods  = horaMSG.extends(defaults, custom);
			horaMSG.finish( element, methods );
		}
	}

	horaMSG.hasContainer = function( container ) {
		var aCont = {};
			aCont['Container'] = typeof container == 'string' ? container : '.hora-msg';
			aCont['Selector']  = document.querySelectorAll( aCont['Container'] );
			aCont['Next']     = aCont['Selector'].length;
		return aCont;
	}

	horaMSG.methods = function() {
		var defaults = {
			Madrugada : 'Boa Madrugada',
			Dia       : 'Bom dia',
			Tarde     : 'Boa tarde',
			Noite     : 'Boa noite'
		};
		return defaults;
	}

	horaMSG.extends = function(defaults, options) {
		if(typeof options == 'object') {
			for (var key in defaults) {
				if(typeof options[key] != 'undefined') {
					defaults[key] = options[key];		        	
				}
			}
		}
		return defaults;
	}

	horaMSG.finish = function( element, method ) {
		var container = element['Selector'];		
		var data = new Date();
		var horario = data.getHours();
		var i = 0;  var total = container.length;
		do {
			if (horario >= 0 && horario < 5) {
				container[i].innerHTML = method['Madrugada'];
			} else if (horario >= 5 && horario < 12) {
				container[i].innerHTML = method['Dia'];
			} else if (horario >= 12 && horario < 18) {
				container[i].innerHTML = method['Tarde'];
			} else if (horario >= 18 && horario <= 23) {
				container[i].innerHTML = method['Noite'];
			} else { }    
			i++;
		} while( i < total );
		setTimeout(function() { horaMSG.finish( element, method ) }, 1000 );
	}

})();