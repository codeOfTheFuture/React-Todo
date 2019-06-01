// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React, { Component } from 'react';
import Todo from './Todo';
import { Jumbotron, ListGroup } from 'react-bootstrap';

class TodoList extends Component {
  render() {
    return (
      <Jumbotron>
        <ListGroup>
          {this.props.todoData.map(todo => (
            <Todo
              key={todo.id}
              todo={todo}
              toggleTodo={this.props.toggleTodo}
            />
          ))}
        </ListGroup>
      </Jumbotron>
    );
  }
}

export default TodoList;
