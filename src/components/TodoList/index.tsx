import { TodoItem } from '@/components/TodoItem'

import { useAppSelector } from '@/hooks/redux.hooks'

import { selectFilteredTasks } from './selectors'

import { StyledList, NoTasks } from './styles'

export const TodoList = () => {
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
