import React, { Component } from 'react';

class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      task: ''
    };
  }

  handleChanges = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  addTodo = event => {
    event.preventDefault();
    this.props.addTodo(this.state.task);
    this.setState({
      task: ''
    });
  };

  render() {
    return (
      <form onSubmit={this.addTodo}>
        <input
          placeholder="Todo"
          onChange={this.handleChanges}
          value={this.state.task}
          name="task"
        />
        <button>Add Todo</button>
        <button onClick={this.props.clearCompleted}>Clear Completed</button>
      </form>
    );
  }
}

export default TodoForm;
