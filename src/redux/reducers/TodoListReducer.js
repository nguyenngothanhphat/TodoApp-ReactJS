import { toast } from 'react-toastify';
import { themeManagements } from "../../components/Themes/ThemeManagement";
import { ToDoListPrimaryTheme } from "../../components/Themes/ToDoListPrimaryTheme";
import { ADD_TASK, CHANGE_THEME, DONE_TASK, DELETE_TASK, EDIT_TASK, UPDATE_TASK } from "../types/TodoListType";

const initialState = {
  theme: ToDoListPrimaryTheme,
  tasks: [
    { id: 1, taskName: "Fix Bug 1", checked: false },
    { id: 2, taskName: "Fix Bug 2", checked: false },
    { id: 3, taskName: "Fix Bug 3", checked: true },
  ],
  editTask: {}
};

const TodoListReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_THEME : {
      let index = themeManagements.findIndex(themeManagement => themeManagement.id === parseInt(action.theme));
      let themeDuplicate = themeManagements[index].theme;
      state.theme = themeDuplicate
      return { ...state };
    }
    case ADD_TASK : {
      let taskDuplicate = state.tasks;
      let newTask;
      let index = taskDuplicate.findIndex(task => task.taskName === action.task.taskName);
      if (index !== -1) {
        toast.success("Task này đã tồn tại");
        return {...state};
      } else {
        newTask = action.task;
        taskDuplicate.push(newTask);
      }    
      state.tasks = [...taskDuplicate];
      return {...state};
    }
    case DONE_TASK: {
      let taskDuplicate = state.tasks;
      let index = taskDuplicate.findIndex(task => task.taskName === action.task.taskName);
      taskDuplicate[index].checked = true;
      state.tasks = [...taskDuplicate];
      return {...state};
    }
    case DELETE_TASK: {
      let taskDuplicate = state.tasks;
      let index = taskDuplicate.findIndex(task => task.id === action.task.id);
      if (index !== -1 ) {
        let confirm  = window.confirm('Are you sure you want to delete');
        if (confirm) {
          taskDuplicate.splice(index , 1);
          state.tasks = [...taskDuplicate];
        }
      }
      return { ...state };
    }
    case EDIT_TASK: {
      state.editTask = {...action.task};
      return { ...state };
    }
    case UPDATE_TASK: {
      let taskDuplicate = state.tasks;
      let index = taskDuplicate.findIndex(task => task.id === action.task.id);
      taskDuplicate[index] = action.task;
      state.tasks = [...taskDuplicate];
      return {...state};
    }
    default:
      return { ...state };
  }
};
export default TodoListReducer;