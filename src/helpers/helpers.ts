import { ITask, Filters } from '@/types/types'

export const filterTodos = (tasks: ITask[], filter: string) => {
  switch (filter) {
    case Filters.ACTIVE: {
      return tasks.filter((task: ITask) => !task.completed)
    }

    case Filters.DONE: {
      return tasks.filter((task: ITask) => task.completed)
    }

    default:
      return tasks
  }
}
