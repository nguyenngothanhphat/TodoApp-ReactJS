import React, { Component } from 'react';
import { Button } from '../Core/Components/Button';
import { TextField } from '../Core/Components/TextField';
import {connect} from 'react-redux';
import { addTaskAction } from '../../redux/actions/TodoListAction';

class AddTask extends Component {
  state = {
    taskName: ''
  }
  handleChange = (e) => {
    let {name, value} = e.target
    this.setState({
      [name]: value
    }, () => {
      console.log("State", this.state)
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
  render() {
    return (
      <form>
        <TextField label="Task name: " type="text" name="taskName" value={this.state.taskName} className="w-50" onChange={this.handleChange} />
        <Button className="ml-1" onClick={this.addTask}><i className="fas fa-plus"></i> Add Task</Button>
        <Button className="ml-1"><i className="fas fa-upload"></i> Update Task</Button>
      </form>
    );
  }
}

export default connect()(AddTask);