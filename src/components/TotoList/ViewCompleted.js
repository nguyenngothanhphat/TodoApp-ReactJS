import React, { Component } from "react";
import { Button } from "../Core/Components/Button";
import { Table, Th, Thead, Tr } from "../Core/Components/Table";
import { connect } from "react-redux";
import Axios from "axios";

class ViewCompleted extends Component {
  state = {
    tasks: []
  }
  componentWillMount() {
    this.getAllTaskList()
  }
  getAllTaskList = () => {
    let promise = Axios({
      url: 'http://svcy.myclass.vn/api/ToDoList/GetAllTask',
      method: 'GET'
    });
    promise.then((result) => {
      console.log("🚀 ~ file: ViewCompleted.js ~ line 17 ~ ViewCompleted ~ promise.then ~ result", result.data)
      this.setState({
        tasks: result.data
      })
    })
    promise.catch((error) => {
      console.log(error.response.data)
    })
  }
  showCompleteTask = () => {
    return this.state.tasks.map((task, index) => {
      if (task.status) {
        return (
          <Tr key={index}>
            <Th style={{ verticalAlign: "middle" }}>{task.taskName}</Th>
            <Th className="text-right">
              <Button className="mr-1">
                <i className="fas fa-trash"></i>
              </Button>
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
          {this.showCompleteTask()}
        </Thead>
      </Table>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    tasks: state.TodoListReducer.tasks
  };
};
export default connect(mapStateToProps)(ViewCompleted);
