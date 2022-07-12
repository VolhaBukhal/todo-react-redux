import { createSelector } from 'reselect'

import { RootState } from '@/store/store'

import { Filters, ITask } from '@/types/types'

const selectTasks = (state: RootState) => state.todos.tasks
const selectFilter = (state: RootState) => state.filters.filter

export const selectFilteredTasks = createSelector(
  selectTasks,
  selectFilter,
  (tasks, filter) => {
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
  },
)
