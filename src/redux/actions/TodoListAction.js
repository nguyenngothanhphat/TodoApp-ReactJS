import { CHANGE_THEME, ADD_TASK, DONE_TASK, DELETE_TASK, EDIT_TASK, UPDATE_TASK } from "../types/TodoListType"

export const changeThemeAction = (theme) => {
  let action = {
    type: CHANGE_THEME,
    theme
  }
  return action;
}

export const addTaskAction = (task) => {
  let action = {
    type: ADD_TASK,
    task
  }
  return action;
}

export const doneTaskAction = (task) => {
  let action = {
    type: DONE_TASK,
    task
  }
  return action;
}

export const deleteTaskAction = (task) => {
  let action = {
    type: DELETE_TASK,
    task
  }
  return action;
}

export const editTaskAction = (task) => {
  let action = {
    type: EDIT_TASK,
    task
  }
  return action;
}

export const updateTaskAction = (task) => {
  let action = {
    type: UPDATE_TASK,
    task
  }
  return action;
}