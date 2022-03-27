import { applyMiddleware, combineReducers, createStore } from "redux";
import TodoListReducer from "./TodoListReducer";
import createMiddlewareSaga from 'redux-saga'
import {rootSaga} from '../../saga/rootSaga'

const rootReducers = combineReducers({
  TodoListReducer,
})

const middlewareSaga = createMiddlewareSaga();

let store = createStore(rootReducers, applyMiddleware(middlewareSaga));

middlewareSaga.run(rootSaga)

export default store;
