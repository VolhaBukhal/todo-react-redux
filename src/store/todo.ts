import { makeObservable, observable, computed } from 'mobx'
import { makePersistable } from 'mobx-persist-store'

import { tasksData } from '@/data/data'

import { ITask, Filters } from '@/types/types'

import { filterTodos } from '@/helpers/helpers'

class Todos {
  todos: ITask[] = tasksData
  curEditingTaskDescr = ''
  curEditingTaskId = ''
  filter = Filters.ALL

  constructor() {
    // makeAutoObservable(this)
    makeObservable(this, {
      todos: observable,
      curEditingTaskDescr: observable,
      curEditingTaskId: observable,
      filter: observable,
      filteredTodos: computed,
    })
    makePersistable(this, {
      name: 'todoStore',
      properties: [
        'todos',
        'curEditingTaskDescr',
        'curEditingTaskId',
        'filter',
      ],
      storage: window.localStorage,
    })
  }

  get filteredTodos() {
    return filterTodos(this.todos, this.filter)
  }

  addTodo(todo: ITask) {
    this.todos.push(todo)
  }

  removeTodo(id: string) {
    this.todos = this.todos.filter((todo) => todo.id !== id)
  }

  toggleComplete(todoId: string) {
    this.todos = this.todos.map((todo) =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
    )
  }

  updateTask(todoText: string) {
    this.todos = this.todos.map((todo) => {
      if (todo.id === this.curEditingTaskId) {
        todo.text = todoText
        return todo
      }
      return todo
    })
    this.curEditingTaskDescr = ''
  }

  editTask(todoId: string) {
    const curTask = this.todos.filter((todo) => todo.id == todoId)[0]
    this.curEditingTaskDescr = curTask.text
    this.curEditingTaskId = todoId
  }

  setFilter(curFilter: Filters) {
    this.filter = curFilter
  }
}

export default new Todos()
