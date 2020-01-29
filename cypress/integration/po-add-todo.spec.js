/// <reference types="cypress" />

import * as todoPage from '../page-objects/todo-page'

describe('Page Objects - Add todo tests', () => {

    it('should be able to add an item to the todo list', () => {
        todoPage.navigate()
        todoPage.addTodo('Feed the cat')
        todoPage.validateNumberOfTodosShown(1)
        todoPage.validateTodoText(0, 'Feed the cat')
    })

    it('should be able to add additional todo items', () => {
        todoPage.navigate()
        todoPage.addTodos('Feed the cat', 'Take out the garbage')
        todoPage.addTodo('Walk the dog')
        todoPage.validateNumberOfTodosShown(3)
        todoPage.validateListOfTodosContain('Feed the cat',
            'Take out the garbage',
            'Walk the dog')
    })
})