import React, { Component } from 'react';
// import TodoHeader from './components/TodoComponents/TodoHeader';
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

  toggleTodo = id => {
    this.setState(prevState => {
      return {
        todoData: prevState.todoData.map(todo => {
          if (todo.id === id) {
            return {
              ...todo,
              completed: !todo.completed
            };
          } else {
            return todo;
          }
        })
      };
    });
  };

  addTodo = todoTask => {
    const newTodo = {
      task: todoTask,
      id: Date.now(),
      completed: false
    };

    this.setState(prevState => {
      return {
        todoData: [...prevState.todoData, newTodo]
      };
    });
  };

  clearCompleted = event => {
    event.preventDefault();
    this.setState(prevState => {
      return {
        todoData: prevState.todoData.filter(todo => {
          if (!todo.completed) {
            return todo;
          }
        })
      };
    });
  };

  render() {
    console.log(this.state.todoData);
    return (
      <div className="container">
        {/* <TodoHeader /> */}
        <TodoForm addTodo={this.addTodo} clearCompleted={this.clearCompleted} />
        <TodoList todoData={this.state.todoData} toggleTodo={this.toggleTodo} />
      </div>
    );
  }
}

export default App;
