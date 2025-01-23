describe('Cenário 1: Carregar a página inicial', () => {
  before(() => {
    cy.visitHome();
  });

  it('Verificar se o título está visível', () => {
    cy.get('header img').should('be.visible');
  });
});

describe('Cenário 2: Adicionar uma transação', () => {
  beforeEach(() => {
    cy.visitHome();
  });

  it('Adicionar uma entrada', () => {
    cy.addTransaction('Freelance', '5000', '2025-01-23');
    cy.get('table').contains('td', 'Freelance').should('be.visible');
  });

  it('Adicionar uma saída', () => {
    cy.addTransaction('Aluguel', '-1000', '2025-01-23');
    cy.get('table').contains('td', 'Aluguel').should('be.visible');
  });
});

describe('Cenário 3: Remover uma transação', () => {
  beforeEach(() => {
    cy.visitHome();
    cy.addTransaction('Teste Remoção', '500', '2025-01-23');
  });

  it('Remover a transação', () => {
    cy.removeTransaction('Teste Remoção');
    cy.get('table').contains('td', 'Teste Remoção').should('not.exist');
  });
});
