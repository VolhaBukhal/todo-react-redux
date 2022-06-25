import { ITask } from '@/types/types'

type TodoItemProps = {
  task: ITask
}
export const TodoItem = ({ task }: TodoItemProps) => {
  return <div>{task.text}</div>
}
