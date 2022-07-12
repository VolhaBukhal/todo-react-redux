import { useMemo } from 'react'
import { TodoItem } from '@/components/TodoItem'
import { observer } from 'mobx-react-lite'

import todoStore from '@/store/todo'
import { filterTodos } from './helpers'
import { ITask } from '@/types/types'

import { StyledList, NoTasks } from './styles'

export const TodoList = observer(() => {
  const filteredTodos = filterTodos(todoStore.todos, todoStore.filter)

  return (
    <StyledList>
      {filteredTodos.length > 0 ? (
        filteredTodos.map((task) => <TodoItem key={task.id} task={task} />)
      ) : (
        <NoTasks>There is nothing to do... Please, start &#9997;</NoTasks>
      )}
    </StyledList>
  )
})
