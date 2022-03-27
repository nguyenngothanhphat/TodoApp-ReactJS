import {call, put, takeLatest} from 'redux-saga/effects';
import { GET_TASK_LIST } from "../redux/types/TodoListType";
import {todoListServices} from "../services/TotoListServices";

function * getTaskListAction() {
  try {
    let {data} = yield call(todoListServices.getTaskListApi());
    console.log("🚀 ~ file: TodoListSaga.js ~ line 8 ~ *getTaskListAction ~ data", data)
    yield put({
      type: GET_TASK_LIST,
      taskLists: data
    })
  } catch (err) {
    console.log("🚀 ~ file: TodoListSaga.js ~ line 8 ~ *getTaskListAction ~ err", err)
  }
}
export function * getTaskListApi() {
  yield takeLatest('getTaskListAction', getTaskListAction)
}