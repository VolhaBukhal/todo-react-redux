import { useState } from 'react'

import { ITask } from '@/types/types'
import { useAppDispatch } from '@/hooks/redux.hooks'
import { editTask, toggleComplete } from '@/store/todosSlice'

import { TaskItem, TaskComplete, TaskBody, TaskControls } from './components'

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
    // dispatch(deleteTask(task.id))
    dispatch({ type: 'DELETE_ASYNC', payload: task.id })
  }

  const handleEdit = () => {
    dispatch(editTask(task.id))
  }

  return (
    <TaskItem>
      <TaskComplete>
        <label htmlFor="complete">
          <input
            onChange={handleChange}
            type="checkbox"
            name="complete"
            checked={isCompleted}
          />
          <span></span>
        </label>
      </TaskComplete>
      <TaskBody>{task.text}</TaskBody>
      <TaskControls>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </TaskControls>
    </TaskItem>
  )
}
