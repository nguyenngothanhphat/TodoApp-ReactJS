import React, { Component } from 'react';
import { Button } from '../Core/Components/Button';
import { TextField } from '../Core/Components/TextField';
import {connect} from 'react-redux';
import { addTaskAction, updateTaskAction } from '../../redux/actions/TodoListAction';

class AddTask extends Component {
  state = {
    taskName: ''
  }
  handleChange = (e) => {
    let {name, value} = e.target
    this.setState({
      [name]: value
    }) 
  }
  addTask = (e) => {
    e.preventDefault();
    let {taskName} = this.state;
    let objectTask = {
      id: Date.now(),
      taskName: taskName,
      checked: false
    }
    this.props.dispatch(addTaskAction(objectTask));
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
      <form>
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