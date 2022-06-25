import { useState, useEffect, ChangeEvent, MouseEvent } from 'react'
import { v4 as uuid } from 'uuid'

import { ITask } from '@/types/types'

enum ButtonTypes {
  ADD = 'Add',
  SAVE = 'Save',
}

type TodoInputProps = {
  handleAddTask: (task: ITask) => void
  handleUpdateTask: (text: string) => void
  currentEditingTaskDescr: string
}

export const TodoInput = ({
  handleAddTask,
  handleUpdateTask,
  currentEditingTaskDescr,
}: TodoInputProps) => {
  const [task, setTask] = useState('')
  const [isEdit, setIsEdit] = useState(false)

  useEffect(() => {
    if (currentEditingTaskDescr) {
      setTask(currentEditingTaskDescr)
      setIsEdit(true)
    } else {
      setTask('')
      setIsEdit(false)
    }
  }, [currentEditingTaskDescr])

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTask(event.currentTarget.value)
  }

  const handleTask = (event: MouseEvent<HTMLButtonElement>) => {
    const currentBtn = event.currentTarget.textContent

    if (currentBtn === ButtonTypes.ADD) {
      if (task) {
        const newTask: ITask = {
          id: uuid(),
          text: task,
          completed: false,
        }
        handleAddTask(newTask)
        setTask('')
        setIsEdit(false)
      } else {
        alert('Need to add a description first!')
      }
    } else {
      handleUpdateTask(task)
      setTask('')
      setIsEdit(false)
    }
  }
  return (
    <div className="inputBar" style={{ display: 'flex' }}>
      <div className="inputTask">
        <input
          type="text"
          value={task}
          onChange={handleChange}
          placeholder="Add a task..."
        />
      </div>
      <button onClick={handleTask}>
        {isEdit ? ButtonTypes.SAVE : ButtonTypes.ADD}
      </button>
    </div>
  )
}
