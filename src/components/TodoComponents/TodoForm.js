import React, { Component } from 'react';

class TodoForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.addTodo}>
        <input
          placeholder="Todo"
          onChange={this.props.handleChanges}
          value={this.props.task}
          name="task"
        />
        <button>Add Todo</button>
        <button>Clear Completed</button>
      </form>
    );
  }
}

export default TodoForm;
