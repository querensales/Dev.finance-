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
    cy.get('input[name="description"]').type('Freelance')
    cy.get('input[name="amount"]').type('5000')

    const data = "2025-01-23"
    cy.get('input[name="date"]').type(data).click();
    cy.contains('button', 'Salvar').click();
    cy.get('table').contains('td', 'Freelance').should('be.visible');

    cy.contains('a', '+ Nova Transação').should('be.visible').click();
    cy.get('input[name="description"]').type('Dizimo')
    cy.get('input[name="amount"]').type('-500')

    cy.contains('button', 'Salvar').click();
    cy.get('table').contains('td', 'Freelance').should('be.visible');
    
    cy.get('input[name="date"]').type(data).click();
    cy.contains('button', 'Salvar').click();
    cy.get('table').contains('td', 'Freelance').should('be.visible');
  });
  
  describe('Cenário 3: Remover uma transação', () => {
    it('Deve adicionar e depois remover uma transação', () => {
      cy.visit('/');
      cy.contains('a', '+ Nova Transação').click();
      cy.get('input[name="description"]').type('Teste Remoção');
      cy.get('input[name="amount"]').type('500');
      const data = "2025-01-23";
      cy.get('input[name="date"]').type(data);
      cy.contains('button', 'Salvar').click();
  
      cy.get('table').contains('td', 'Teste Remoção').should('exist');
      cy.get('table').contains('td', '500').should('exist');
  
      cy.get('table')
        .contains('td', 'Teste Remoção')
        .parent()
        .find('img[alt="Remover transação"]')
        .click();
  
      cy.get('table').contains('td', 'Teste Remoção').should('not.exist');
    });
  });
});