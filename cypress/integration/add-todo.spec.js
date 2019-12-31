/// <reference types="cypress" />
import * as Start from '../screenplay/tasks/Start'
import * as AddATodoItem from '../screenplay/tasks/AddATodoItem'
import * as TheTodoList from '../screenplay/questions/TheTodoList'

describe('Add todo tests', () => {

    it('should be able to add an item to the todo list', () => {
        Start.withAnEmptyList()
        AddATodoItem.called('Feed the cat')
        TheTodoList.sizeIs(1)
    })
})