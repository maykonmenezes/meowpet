var PetsPage = new require('./pages/petsPage');

describe('Página principal', function() {

    var pagina = new PetsPage();

    beforeEach(function() {
        pagina.visitar();
    });

    it('Deve estar logado', function() {

        pagina.obterUsuarioLogado().then(function(texto) {
            expect(texto.trim().length).toBeGreaterThan(0);
        });
    });

    it('Deve remover um pet da lista', function() {

        var totalAntes = pagina.obterTotalDeItensDaLista();
        pagina.removerPrimeiroItemDaLista();
        var totalDepois = pagina.obterTotalDeItensDaLista();
        expect(totalDepois).toBeLessThan(totalAntes);
    });
});