import React, { Component, Fragment } from "react";
import { Button } from "../Core/Components/Button";
import { Table, Th, Thead, Tr } from "../Core/Components/Table";
import { connect } from "react-redux";

class ViewCompleted extends Component {
  showCompleteTask = () => {
    return this.props.tasks.map((task, index) => {
      if (task.checked) {
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
