import { preencherCampo, clicarEmBotaoComTexto } from '../support/funcoes';
import valores from './valores.json';

describe('Sign up Tests', () => {
  context('cadastro', () => {
    beforeEach(() => { // Antes de cada teste o script visita a página de inicio e em seguida a página de criação de conta
      cy.visit('/');
      cy.visit('/customer/account/create/');
    });

    // Não preenche os dados e clica direto no botão de cadastro
    context('cadastro-error', () => {
        it('Cadastro com dados vazios', () => {
            clicarEmBotaoComTexto('Create an Account');
            cy.get('.mage-error', { timeout: 10000 });
          });
        });

    context('cadastro-success', () => {
      it('Cadastro com sucesso', () => {
        const campos = valores.cadastroSuccess; // Essa função obtem os campos do JSON e preenche com os valores do arquivo
        preencherCampo('input[name="firstname"]', campos.firstname);
        preencherCampo('input[name="lastname"]', campos.lastname);
        preencherCampo('input[id="email_address"]', campos.email);
        preencherCampo('input[id="password"]', campos.password);
        preencherCampo('input[id="password-confirmation"]', campos.passwordConfirmation);
        clicarEmBotaoComTexto('Create an Account');
      });
    });
  });
});