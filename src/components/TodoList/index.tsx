import { TodoItem } from '@/components/TodoItem'
import { createSelector } from 'reselect'

import { useAppSelector } from '@/hooks/redux.hooks'
import { Filters, ITask } from '@/types/types'
import { RootState } from '@/store/store'

export const TodoList = () => {
  const selectTasks = (state: RootState) => state.todos.tasks
  const selectFilter = (state: RootState) => state.filters.filter

  const selectFilteredTasks = createSelector(
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
  const filteredTasks = useAppSelector(selectFilteredTasks)

  return (
    <ul>
      {filteredTasks &&
        filteredTasks.map((task) => <TodoItem key={task.id} task={task} />)}
    </ul>
  )
}
