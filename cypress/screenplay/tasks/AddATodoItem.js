/// <reference types="cypress" />

export function called(todoText) {
    cy.get('.new-todo').type(todoText + '{enter}')
}