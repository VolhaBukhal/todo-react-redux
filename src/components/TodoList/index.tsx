import { TodoItem } from '@components/TodoItem'
import { ITask } from '@types/types'

const tasks = [
  { id: 1, text: 'learn react', complete: false },
  { id: 2, text: 'learn redux', complete: false },
  { id: 3, text: 'learn reduxToolkit', complete: false },
  { id: 4, text: 'learn redux-persist', complete: false },
]

export const TodoList = () => {
  return (
    <>
      This is to do list
      <ul>
        {tasks && tasks.map((task) => <TodoItem key={task.id} task={task} />)}
      </ul>
    </>
  )
}
