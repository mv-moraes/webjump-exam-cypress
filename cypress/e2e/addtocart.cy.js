describe('Adicionar produto ao carrinho', () => {
    beforeEach(() => {
      cy.visit('/gear.html');
    });
    it('Adiciona produtos ao carrinho', () => {
      cy.get('a[href*="/gear/bags.html"]')
        .filter(':visible') 
        .first()
        .click(); 
      cy.get('#product-addtocart-button')
        .contains('Add to Cart')
        .click();
      cy.get('[data-ui-id="message-success"]').should('exist'); //confere se existe a mensagem de adicionado no carrinho com sucesso.
    });
  });
  