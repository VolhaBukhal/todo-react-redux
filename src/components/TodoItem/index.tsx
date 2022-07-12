import { useState } from 'react'
import { observer } from 'mobx-react-lite'

import todoStore from '@/store/todo'

import { TodoItemProps } from './types'

import { TaskItem, TaskComplete, TaskBody, TaskControls } from './styles'

export const TodoItem = observer(({ task }: TodoItemProps) => {
  const [isCompleted, setIsCompleted] = useState(task.completed)

  const handleChange = () => {
    setIsCompleted(!isCompleted)
    todoStore.toggleComplete(task.id)
  }

  const handleDelete = () => {
    todoStore.removeTodo(task.id)
  }

  const handleEdit = () => {
    todoStore.editTask(task.id)
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
})
