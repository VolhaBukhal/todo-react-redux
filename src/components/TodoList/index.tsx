import { TodoItem } from '@/components/TodoItem'
import { observer } from 'mobx-react-lite'

import todoStore from '@/store/todo'

import { StyledList, NoTasks } from './styles'

export const TodoList = observer(() => {
  return (
    <StyledList>
      {todoStore.filteredTodos.length > 0 ? (
        todoStore.filteredTodos.map((task) => (
          <TodoItem key={task.id} task={task} />
        ))
      ) : (
        <NoTasks>There is nothing to do... Please, start &#9997;</NoTasks>
      )}
    </StyledList>
  )
})
