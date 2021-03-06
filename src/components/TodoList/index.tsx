import { TodoItem } from '@/components/TodoItem'
import { createSelector } from 'reselect'

import { useAppSelector } from '@/hooks/redux.hooks'
import { Filters, ITask } from '@/types/types'
import { RootState } from '@/store/store'

import { StyledList, NoTasks } from './components'

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
    <StyledList>
      {filteredTasks.length > 0 ? (
        filteredTasks.map((task) => <TodoItem key={task.id} task={task} />)
      ) : (
        <NoTasks>There is nothing to do... Please, start &#9997;</NoTasks>
      )}
    </StyledList>
  )
}
