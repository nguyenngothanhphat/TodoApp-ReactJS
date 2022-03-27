import React, { Component } from "react";
import Axios from "axios";
import { Button } from "../Core/Components/Button";
import { Table, Th, Thead, Tr } from "../Core/Components/Table";

import {connect} from 'react-redux';
import { deleteTaskAction, doneTaskAction, editTaskAction } from "../../redux/actions/TodoListAction";

class ViewTodo extends Component {
  state = {
    tasks: []
  }
  componentWillMount() {
    this.getAllTaskList()
  }
  getAllTaskList = () => {
    this.props.dispatch({
      type: 'getTaskListAction'
    })
  }
  showTodoTask = () => {
    return this.tasks.map((task, index) => {
      if (!task.status) {
        return (
          <Tr key={index}>
            <Th style={{ verticalAlign: "middle" }}>{task.taskName}</Th>
            <Th className="text-right">
              <Button className="mr-1" onClick={() => this.props.editTask(task)}><i className="fas fa-edit"></i></Button>
              <Button className="mr-1" onClick={() => this.props.deleteTask(task)}><i className="fas fa-trash"></i></Button>
              <Button className="mr-1" onClick={() => this.props.doneTask(task)}><i className="fas fa-check"></i></Button>
            </Th>
          </Tr>
        )
      }
    })
  }
  render() {
    return (
      <Table>
        <Thead>
          {this.showTodoTask()}
        </Thead>
      </Table>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    tasks: state.TodoListReducer.tasks
  }
}
const mapStateToDispatch = (dispatch) => {
  return {
    doneTask: (task) => {
      dispatch(doneTaskAction(task))
    },
    deleteTask: (task) => {
      dispatch(deleteTaskAction(task))
    },
    editTask: (task) => {
      dispatch(editTaskAction(task))
    }
  }
}
export default connect(mapStateToProps, mapStateToDispatch)(ViewTodo);