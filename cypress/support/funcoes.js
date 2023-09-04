export function preencherCampo(campo, valor) {
    cy.get(campo).type(valor);
  }
  
  export function clicarEmBotaoComTexto(texto) {
    cy.contains('button', texto).click();
  }