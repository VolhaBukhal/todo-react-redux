import { TodoItem } from '@/components/TodoItem'
import { ITask } from '@/types/types'

type TodoListProps = {
  tasks: ITask[]
  handleDeleteTask: (id: string) => void
  handleEditTask: (id: string) => void
}

export const TodoList = ({
  tasks,
  handleDeleteTask,
  handleEditTask,
}: TodoListProps) => {
  return (
    <>
      This is todo list
      <ul>
        {tasks &&
          tasks.map((task) => (
            <TodoItem
              handleDeleteTask={handleDeleteTask}
              handleEditTask={handleEditTask}
              key={task.id}
              task={task}
            />
          ))}
      </ul>
    </>
  )
}
