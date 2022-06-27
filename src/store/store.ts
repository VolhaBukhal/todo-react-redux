import { configureStore } from '@reduxjs/toolkit'

import todosReducer from '@/store/todosSlice'
import filtersReducer from '@/store/filtersSlice'

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    filters: filtersReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
