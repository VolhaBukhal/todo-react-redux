import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ITask } from '@/types/types'
import { tasksData } from '@/data/data'

interface TodosState {
  tasks: ITask[]
  curEditingTaskDescr: string
  curEditingTaskId: string
}

const initialState: TodosState = {
  tasks: tasksData,
  curEditingTaskDescr: '',
  curEditingTaskId: '',
}

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITask>) => {
      state.tasks.push(action.payload)
      state.curEditingTaskDescr = ''
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload)
      state.curEditingTaskDescr = ''
    },
    editTask: (state, action: PayloadAction<string>) => {
      const curTask = state.tasks.filter((task) => task.id == action.payload)[0]
      state.curEditingTaskDescr = curTask.text
      state.curEditingTaskId = action.payload
    },
    updateTask: (state, action: PayloadAction<string>) => {
      const updatedTasks = state.tasks.map((task) => {
        if (task.id === state.curEditingTaskId) {
          task.text = action.payload
          return task
        }
        return task
      })
      state.tasks = updatedTasks
      state.curEditingTaskDescr = ''
      state.curEditingTaskId = ''
    },
    toggleComplete: (state, action: PayloadAction<string>) => {
      const updatedTasks = state.tasks.map((task) => {
        if (task.id === action.payload) {
          task.completed = !task.completed
          return task
        }
        return task
      })
      state.tasks = updatedTasks
    },
  },
})

export const { addTask, deleteTask, editTask, updateTask, toggleComplete } =
  todosSlice.actions

export default todosSlice.reducer
