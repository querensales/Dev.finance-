// Visitar a página inicial
Cypress.Commands.add('visitHome', () => {
    cy.visit('/');
  });
  
  // Abrir o modal de "Nova Transação"
  Cypress.Commands.add('openNewTransactionModal', () => {
    cy.contains('a', '+ Nova Transação').should('be.visible').click();
  });
  
  // Adicionar uma transação
  Cypress.Commands.add('addTransaction', (description, amount, date) => {
    cy.openNewTransactionModal();
    cy.get('input[name="description"]').type(description);
    cy.get('input[name="amount"]').type(amount);
    cy.get('input[name="date"]').type(date);
    cy.contains('button', 'Salvar').click();
  });
  
  // Remover uma transação
  Cypress.Commands.add('removeTransaction', (description) => {
    cy.get('table')
      .contains('td', description)
      .parent()
      .find('img[alt="Remover transação"]')
      .click();
  });
  