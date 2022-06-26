import { useState, useEffect, ChangeEvent, MouseEvent } from 'react'
import { v4 as uuid } from 'uuid'

import { ITask } from '@/types/types'
import { useAppDispatch, useAppSelector } from '@/hooks/redux.hooks'
import { addTask, updateTask } from '@/store/todosSlice'

enum ButtonTypes {
  ADD = 'Add',
  SAVE = 'Save',
}

export const TodoInput = () => {
  const [task, setTask] = useState('')
  const [isEdit, setIsEdit] = useState(false)
  const { curEditingTaskDescr } = useAppSelector((state) => state.todos)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (curEditingTaskDescr) {
      setTask(curEditingTaskDescr)
      setIsEdit(true)
    } else {
      setTask('')
      setIsEdit(false)
    }
  }, [curEditingTaskDescr])

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
        dispatch(addTask(newTask))
        setTask('')
        setIsEdit(false)
      } else {
        alert('Need to add a description first!')
      }
    } else {
      dispatch(updateTask(task))
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
