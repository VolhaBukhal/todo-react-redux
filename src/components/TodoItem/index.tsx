import { useState } from 'react'

import { ITask } from '@/types/types'

type TodoItemProps = {
  task: ITask
  handleDeleteTask: (id: string) => void
  handleEditTask: (id: string) => void
}
export const TodoItem = ({
  task,
  handleDeleteTask,
  handleEditTask,
}: TodoItemProps) => {
  const [isCompleted, setIsCompleted] = useState(task.completed)

  const handleChange = () => {
    setIsCompleted(!isCompleted)
  }

  const handleDelete = () => {
    handleDeleteTask(task.id)
  }

  const handleEdit = () => {
    handleEditTask(task.id)
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
