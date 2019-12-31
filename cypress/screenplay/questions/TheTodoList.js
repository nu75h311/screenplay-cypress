/// <reference types="cypress" />

import { TODO_LIST } from '../pages/TodoMvcPage'

export function sizeIs(expectedNumberOfTodos) {
    cy.get(TODO_LIST).should('have.length', expectedNumberOfTodos)
}

export function contentsHave() {
    Array.from(arguments).forEach(expectedTodo => {
        cy.get(TODO_LIST).should('contain', expectedTodo)
    });
}