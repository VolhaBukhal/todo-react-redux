import { put, takeEvery } from 'redux-saga/effects'
import { deleteTask } from '@/store/todosSlice'
import { PayloadAction } from '@reduxjs/toolkit'

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms))

function* deleteTaskAsync(action: PayloadAction<string>) {
  yield delay(400)
  yield put(deleteTask(action.payload))
}

export function* watchDeleteTaskAsync() {
  yield takeEvery('DELETE_ASYNC', deleteTaskAsync)
}
