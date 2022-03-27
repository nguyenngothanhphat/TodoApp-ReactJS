import {all} from 'redux-saga/effects';
import { getTaskListApi } from "./TodoListSaga";

export function * rootSaga() {
  yield all([
    getTaskListApi()
  ])
}