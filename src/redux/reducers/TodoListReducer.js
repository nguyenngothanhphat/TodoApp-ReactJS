import { ToDoListPrimaryTheme } from "../../components/Themes/ToDoListPrimaryTheme";
import { ToDoListDarkTheme } from "../../components/Themes/ToDoListDarkTheme";
import { ToDoListLightTheme } from "../../components/Themes/ToDoListLightTheme";
import { ADD_TASK, CHANGE_THEME, DONE_TASK, DELETE_TASK } from "../types/TodoListType";

const initialState = {
  theme: ToDoListPrimaryTheme,
  tasks: [
    { id: 1, taskName: "Fix Bug 1", checked: false },
    { id: 2, taskName: "Fix Bug 2", checked: false },
    { id: 3, taskName: "Fix Bug 3", checked: true },
  ],
};

const TodoListReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_THEME : {
      let themeDuplicate = state.theme;
      console.log("value", action.theme)
      themeDuplicate = action.theme;
      state.theme = themeDuplicate;
      console.log("Value", state.theme)
      return { ...state };
    }
    case ADD_TASK : {
      let taskDuplicate = state.tasks;
      let newTask;
      let index = taskDuplicate.findIndex(task => task.taskName === action.task.taskName);
      if (index !== -1) {
        alert("Task đã tồn tại");
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
      return {...state};
    }
    default:
      return { ...state };
  }
};
export default TodoListReducer;