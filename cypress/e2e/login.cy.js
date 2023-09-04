describe('Login Tests', () => {
  beforeEach(() => {
    cy.visit('/customer/account/login/');
  });

  context('Login-Error', () => {
    it('Não realiza o login, dados inválidos', () => { // Preenche as informações de login com dados invalidos e clica no botão de Sign in
      cy.get('input[name="login[username]"]').type(Cypress.env('usernameinvalid')); 
      cy.get('input[type="password"]').type(Cypress.env('passwordinvalid'), { log: false }); 
      cy.get('button').contains('Sign In').click(); 
      cy.get('.messages').should('be.visible'); // Verifica se a mensagem de erro é exibida
    });

    it('Não realiza o login, campos em branco', () => { // Não preenche os campos de email e senha e clica no botão de Sign in
      cy.get('button').contains('Sign In').click(); 
      cy.get('.messages').should('be.visible'); // Verifica se a mensagem de erro é exibida
    });
  });

  context('Login-Success', () => {
    it('Realiza o login com sucesso', () => {
      cy.get('input[name="login[username]"]').type(Cypress.env('username')); // Preenche as informações de login com dados válidos e clica no botão de Sign in
      cy.get('input[type="password"]').type(Cypress.env('password'), { log: false });
      cy.get('button').contains('Sign In').click();
      cy.get('.logged-in', { timeout: 10000 }); // Verifica se o usuário está logado com sucesso
    });
  });
});
