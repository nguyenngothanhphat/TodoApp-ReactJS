import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Container } from "../Core/Components/Container";
import { Dropdown } from "../Core/Components/Dropdown";
import {
  Heading1,
  Heading3,
} from "../Core/Components/Heading";
import AddTask from "./AddTask";
import ViewCompleted from "./ViewCompleted";
import ViewTodo from "./ViewTodo";
import {connect} from 'react-redux';
import { changeThemeAction } from "../../redux/actions/TodoListAction";
import { themeManagements } from "../Themes/ThemeManagement";
class TodoList extends Component {
  changeTheme = (e) => {
    e.preventDefault();
    this.props.dispatch(changeThemeAction(e.target.value))
  }
  showTheme = () => {
    return themeManagements.map((theme, index) => {
      return (
        <option value={theme.id} key={index}>{theme.name}</option>
      )
    })
  }
  render() {
    return (
      <ThemeProvider theme={this.props.theme}>
        <Container className="w-50">
          {/* Combo box change theme of toto list */}
          <Dropdown onChange={this.changeTheme} name="changeTheme">
            {this.showTheme()}
          </Dropdown>
          <Heading1 className="display-4">Todo List</Heading1>
          {/* Add Task */}
          <div className="add-todo mb-5">
            <AddTask />
          </div>
          {/* View Todo */}
          <div className="task-todo mb-5">
            <Heading3 className="mb-4">Task to do</Heading3>
            <ViewTodo />
          </div>
          {/* View Completed */}
          <div className="task-completed mb-5">
            <Heading3 className="mb-4">Task Completed</Heading3>
            <ViewCompleted />
          </div>
          {/* Copyright */}
          <div className="copyright">
            <p className="text-center">
              {" "}
              &copy; 2022 Thành Phát Dev
            </p>
          </div>
        </Container>
      </ThemeProvider>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    theme: state.TodoListReducer.theme
  }
}
export default connect(mapStateToProps)(TodoList);