import { useState } from 'react'

import { TodoList } from '@/components/TodoList'
import { TodoInput } from '@/components/TodoInput'

import { ITask } from '@/types/types'

const tasksData = [
  { id: '2', text: 'learn redux', completed: true },
  { id: '3', text: 'learn reduxToolkit', completed: true },
  { id: '4', text: 'learn redux-persist', completed: true },
  {
    id: '5',
    text: 'add notification in case of task is empty using portal',
    completed: false,
  },
  {
    id: '6',
    text: 'add setTimeout for disappear automate as snack in MUI ',
    completed: false,
  },
  { id: '7', text: 'use Formik', completed: false },
  { id: '8', text: 'use Redux-suga for delay of submit', completed: false },
  {
    id: '9',
    text: 'use Redux-persist for synchronize data with LS',
    completed: false,
  },
  { id: '10', text: 'add Redux', completed: false },
  { id: '11', text: 'add Filters with separate reducers', completed: false },
  { id: '12', text: 'add styles using styled-components', completed: false },
]

export const App = () => {
  const [tasks, setTasks] = useState(tasksData)
  const [curEditingTaskDescr, setCurEditingTaskDescr] = useState('')
  const [curEditingTaskId, setCurEditingTaskId] = useState('')

  const handleAddTask = (newTask: ITask) => {
    setTasks([...tasks, newTask])
    setCurEditingTaskDescr('')
  }

  const handleDeleteTask = (taskId: string) => {
    const newTasks = tasks.filter((task) => task.id !== taskId)
    setTasks(newTasks)
  }

  const handleEditTask = (taskId: string) => {
    const curTask = tasks.filter((task) => task.id == taskId)[0]
    setCurEditingTaskDescr(curTask.text)
    setCurEditingTaskId(taskId)
  }

  const handleUpdateTask = (text: string) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === curEditingTaskId) {
        task.text = text
        return task
      }
      return task
    })
    setTasks(updatedTasks)
  }

  return (
    <div
      className="container"
      style={{
        width: '600px',
        margin: '20px auto',
        backgroundColor: 'lightseagreen',
      }}
    >
      To do list
      <TodoInput
        handleAddTask={handleAddTask}
        handleUpdateTask={handleUpdateTask}
        currentEditingTaskDescr={curEditingTaskDescr}
      />
      <TodoList
        handleDeleteTask={handleDeleteTask}
        handleEditTask={handleEditTask}
        tasks={tasks}
      />
    </div>
  )
}
