import { makeAutoObservable } from 'mobx'

import { tasksData } from '@/data/data'

import { ITask, Filters } from '@/types/types'

class Todos {
  todos: ITask[] = tasksData
  curEditingTaskDescr = ''
  curEditingTaskId = ''
  filter = Filters.ALL

  constructor() {
    makeAutoObservable(this)
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
