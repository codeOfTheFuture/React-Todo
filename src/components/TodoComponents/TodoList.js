// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
  render() {
    return (
      <ul>
        {this.props.todoData.map(todo => (
          <Todo key={todo.id} todo={todo} toggleTodo={this.props.toggleTodo} />
        ))}
      </ul>
    );
  }
}

export default TodoList;
