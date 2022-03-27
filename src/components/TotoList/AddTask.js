import React, { Component } from 'react';
import {connect} from 'react-redux';
import Axios from 'axios';
import { Button } from '../Core/Components/Button';
import { TextField } from '../Core/Components/TextField';
import { addTaskAction, updateTaskAction } from '../../redux/actions/TodoListAction';

class AddTask extends Component {
  state = {
    taskName: '',
  }
  handleChange = (e) => {
    let {name, value} = e.target
    this.setState({
      [name]: value
    }) 
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
  addTask = (e) => {
    e.preventDefault();
    let {taskName} = this.state;
    let promise = Axios({
      url: 'http://svcy.myclass.vn/api/ToDoList/AddTask',
      method: "POST",
      data: {"taskName": taskName}
    });
    promise.then((result) => {
      console.log("🚀 ~ file: AddTask.js ~ line 27 ~ AddTask ~ promise.then ~ result", result.data)
      this.getAllTaskList();
    });
    promise.catch((error) => {
      alert(error.response.data);
    })
    // let objectTask = {
    //   id: Date.now(),
    //   taskName: taskName,
    //   checked: false
    // }
    // this.props.dispatch(addTaskAction(objectTask));
  }
  updateTask = (e)  => {
    e.preventDefault();
    let {taskName} = this.state;
    let objectUpdateTask = {
      id: this.props.editTask.id,
      taskName: taskName,
      checked: false
    }
    this.props.dispatch(updateTaskAction(objectUpdateTask));
  }
  /* Lifecycle phiên bản cũ */
  // componentWillReceiveProps (newProps) {
  //   console.log("Old props", this.props)
  //   console.log("🚀 ~ file: AddTask.js ~ line 29 ~ AddTask ~ componentWillReceiveProps ~ newProps", newProps)
  //   this.setState({
  //     taskName: newProps.editTask.taskName
  //   })
  // }
  render() {
    return (
      <form onSubmit={this.addTask}>
        <TextField label="Task name: " type="text" name="taskName" value={this.state.taskName} className="w-50" onChange={this.handleChange} />
        <Button className="ml-1" onClick={this.addTask}><i className="fas fa-plus"></i> Add Task</Button>
        <Button className="ml-1" onClick={this.updateTask}><i className="fas fa-upload"></i> Update Task</Button>
      </form>
    );
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevProps.editTask. taskName !== this.props.editTask.taskName) {
      console.log("A")
      this.setState({
        taskName: this.props.editTask.taskName
      })
    }
  }
}

const mapStateToProps = (state) => {
  return {
    editTask: state.TodoListReducer.editTask
  }
}

export default connect(mapStateToProps)(AddTask);