import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
  render() {
    return (
      <li
        className={`${this.props.todo.completed ? 'completed' : ''}`}
        onClick={() => this.props.toggleTodo(this.props.todo.id)}
      >
        {this.props.todo.task}
      </li>
    );
  }
}

export default Todo;
