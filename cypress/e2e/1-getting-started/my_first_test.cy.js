/// <reference types="cypress" />

it('Google Test - First Test', () =>{

    cy.visit('https://google.com')
    cy.url().should('eq', 'https://www.google.com/')
    cy.get('#L2AGLb').click()
    cy.get('.gLFyf').type('Cypress IO{enter}')

/// Click on the first link

/// cy.get('[href="https://www.cypress.io/"] > .LC20lb').click()
/// cy.url().should('eq', "https://www.cypress.io/")




})