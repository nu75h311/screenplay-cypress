/// <reference types="cypress" />

export function sizeIs(expectedNumberOfTodos) {
    cy.get('.todo-list li').should('have.length', expectedNumberOfTodos)
}