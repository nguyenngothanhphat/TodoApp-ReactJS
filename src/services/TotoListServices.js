import { Axios } from "axios";
import { DOMAIN } from "../util/SystemSetting/SystemSetting";

export class TodoListServices {
  getTaskListApi = () => {
    return Axios({
      url: `${DOMAIN}/api/ToDoList/GetAllTask`,
      method: 'GET'
    })
  }
}

export const todoListServices = new TodoListServices();