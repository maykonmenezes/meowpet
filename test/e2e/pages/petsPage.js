var petsPage = function() {

    this.visitar = function() {
        browser.get('http://localhost:3000/#/pets');
    };

    this.obterUsuarioLogado = function(nome) {
         return element(by.id('usuario-logado')).getText();
    };

    this.obterTotalDeItensDaLista = function() {

        return element.all(by.repeater('pet in pets'))
        			  .count();
    };

    this.removerPrimeiroItemDaLista = function() {

         element(by.repeater('pet in pets').row(0))
            .element(by.css('.btn'))
            .click();
    }
}
module.exports = petsPage;