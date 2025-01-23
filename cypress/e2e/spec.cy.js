describe('Cenário 1: Carregar a página inicial', () => {
  before(() => {
    cy.visit('/');
  });
  it.only('verificar o titulo', () => {
    cy.get('header img')
    .should('be.visible');
  })
});

describe.only('Cenário 2: Adicionar uma transação', () => {
  before(() => {
    cy.visit('/');
  });
  it('Clicar no botão "Nova Transação e adicionar uma entrada"', () => {
    cy.contains('a', '+ Nova Transação').should('be.visible').click();
    cy.get('input[name="description"]').type('Dizimo')
    cy.get('input[name="amount"]').type('500')
    
    const data = "2025-01-23"
    cy.get('input[name="date"]').type(data).click();
    cy.contains('button', 'Salvar').click();
  });
});
