var petPage = function() {

    this.visitar = function() {
        browser.get('http://localhost:3000/#/pet');
    };

    this.digitarNome = function(nome) {
         element(by.model('pet.nome')).sendKeys(nome);
    };

    this.digitarEmail = function(email) {
         element(by.model('pet.email')).sendKeys(email);
    };

    this.salvar = function() {
        element(by.css('.btn-primary')).click();
    };

    this.obterMensagem = function() {
        return element(by.binding('mensagem.texto')).getText()
    };
      
}
module.exports = petPage;