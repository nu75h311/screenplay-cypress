/// <reference types="cypress" />

import * as Start from '../screenplay/tasks/Start'
import * as AddATodoItem from '../screenplay/tasks/AddATodoItem'
import * as TheTodoList from '../screenplay/questions/TheTodoList'

describe('Screenplay - Add todo tests', () => {

    it('should be able to add an item to the todo list', () => {
        Start.withAnEmptyList()
        AddATodoItem.called('Feed the cat')
        TheTodoList.sizeIs(1)
        TheTodoList.contentsHave('Feed the cat')
    })

    it('should be able to add additional todo items', () => {
        Start.withAListContaining('Feed the cat', 'Take out the garbage')
        AddATodoItem.called('Walk the dog')
        TheTodoList.sizeIs(3)
        TheTodoList.contentsHave('Feed the cat',
            'Take out the garbage',
            'Walk the dog')
    })
})