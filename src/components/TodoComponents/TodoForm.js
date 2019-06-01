import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

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
      <Form className="mt-5" onSubmit={this.addTodo}>
        <Form.Group>
          <Form.Label>Add Todo</Form.Label>
          <Form.Control
            placeholder="Todo"
            onChange={this.handleChanges}
            value={this.state.task}
            name="task"
          />
        </Form.Group>

        <Button variant="primary" onClick={this.addTodo}>
          Add Todo
        </Button>
        <Button
          className="mx-2"
          variant="info"
          onClick={this.props.clearCompleted}
        >
          Clear Completed
        </Button>
      </Form>
    );
  }
}

export default TodoForm;
