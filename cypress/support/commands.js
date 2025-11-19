// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// Exemplo de comando customizado
Cypress.Commands.add('login', (username, password) => {
  // Implementar lógica de login se necessário
  cy.log(`Logging in as ${username}`)
})

// Exemplo de comando para aguardar elemento estar visível
Cypress.Commands.add('waitForElement', (selector, timeout = 10000) => {
  cy.get(selector, { timeout }).should('be.visible')
})

// Exemplo de comando para clicar em elemento com retry
Cypress.Commands.add('clickWithRetry', (selector, options = {}) => {
  cy.get(selector, { timeout: options.timeout || 10000 })
    .should('be.visible')
    .should('not.be.disabled')
    .click(options)
})

