import { TodoItem } from '@/components/TodoItem'
import { ITask } from '@/types/types'

type TodoListProps = {
  tasks: ITask[]
}

export const TodoList = ({ tasks }: TodoListProps) => {
  return (
    <>
      This is todo list
      <ul>
        {tasks && tasks.map((task) => <TodoItem key={task.id} task={task} />)}
      </ul>
    </>
  )
}
