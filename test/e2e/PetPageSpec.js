var PetPage = new require('./pages/petPage');

describe('Cadastro de pets', function() {
    var pagina = new PetPage();

 	beforeEach(function() {
 		pagina.visitar();
 	});

  	it('Deve cadastrar um pet', function() {

	    var aleatorio = 
	    	Math.floor((Math.random() * 10000000) + 1);
	    pagina.digitarNome('teste' + aleatorio);
	    pagina.digitarEmail('teste@email' + aleatorio);
	    pagina.salvar();
	    expect(pagina.obterMensagem()).toContain('sucesso');
	});
});