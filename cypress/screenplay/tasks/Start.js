/// <reference types="cypress" />

import { TODO_MVC_URL } from '../pages/TodoMvcPage'
import * as AddATodoItem from '../tasks/AddATodoItem'

export function withAnEmptyList() {
    cy.visit(TODO_MVC_URL)
}

export function withAListContaining() {
    cy.visit(TODO_MVC_URL)

    Array.from(arguments).forEach(todoItem => {
        AddATodoItem.called(todoItem)
    });
}