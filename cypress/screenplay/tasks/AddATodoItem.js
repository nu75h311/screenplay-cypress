/// <reference types="cypress" />

import { TODO_FIELD } from '../pages/TodoMvcPage'

export function called(todoText) {
    cy.get(TODO_FIELD).type(todoText + '{enter}')
}