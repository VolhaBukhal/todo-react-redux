import { useState } from 'react'

import { ITask } from '@/types/types'
import { useAppDispatch } from '@/hooks/redux.hooks'
import { deleteTask, editTask, toggleComplete } from '@/store/todosSlice'

type TodoItemProps = {
  task: ITask
}
export const TodoItem = ({ task }: TodoItemProps) => {
  const [isCompleted, setIsCompleted] = useState(task.completed)
  const dispatch = useAppDispatch()

  const handleChange = () => {
    setIsCompleted(!isCompleted)
    dispatch(toggleComplete(task.id))
  }

  const handleDelete = () => {
    dispatch(deleteTask(task.id))
  }

  const handleEdit = () => {
    dispatch(editTask(task.id))
  }

  return (
    <div className="taskItem" style={{ display: 'flex' }}>
      <div className="taskComplete">
        <input onChange={handleChange} type="checkbox" checked={isCompleted} />
      </div>
      <div className="taskBody">{task.text}</div>
      <div className="taskControls">
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  )
}
