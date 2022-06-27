import { configureStore, combineReducers } from '@reduxjs/toolkit'
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import createSagaMiddleware from 'redux-saga'

import todosReducer from '@/store/todosSlice'
import filtersReducer from '@/store/filtersSlice'

import { watchDeleteTaskAsync } from '@/sagas'

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
  todos: todosReducer,
  filters: filtersReducer,
})

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(sagaMiddleware),
})

export const persister = persistStore(store)

sagaMiddleware.run(watchDeleteTaskAsync)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
