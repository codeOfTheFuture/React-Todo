import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import './Todo.css';

class Todo extends Component {
  render() {
    return (
      <ListGroup.Item
        className={`${
          this.props.todo.completed ? 'completed bg-warning' : ''
        } text-center`}
        onClick={() => this.props.toggleTodo(this.props.todo.id)}
      >
        {this.props.todo.task}
      </ListGroup.Item>
    );
  }
}

export default Todo;
