import React, { Component } from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todoData: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ],
      task: ''
    };
  }

  addTodo = e => {
    e.preventDefault();

    const newTodo = {
      task: this.state.task,
      id: Date.now(),
      completed: false
    };

    this.setState({
      todoData: [...this.state.todoData, newTodo]
    });
  };

  handleChanges = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    console.log(this.state.todoData);
    return (
      <div>
        <TodoList todoData={this.state.todoData} />
        <TodoForm
          task={this.state.task}
          addTodo={this.addTodo}
          handleChanges={this.handleChanges}
        />
      </div>
    );
  }
}

export default App;
