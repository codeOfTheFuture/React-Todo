import React, { Component } from 'react';
import TodoHeader from './components/TodoComponents/TodoHeader';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import { Container, Grid } from 'react-bootstrap';

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

  componentDidMount() {
    this.setLocalStorage();
  }

  toggleTodo = id => {
    this.setState(prevState => {
      let newTodos = prevState.todoData.map(todo => {
        return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
      });

      localStorage.setItem('todos', JSON.stringify(newTodos));

      return {
        todoData: newTodos
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
      localStorage.setItem(
        'todos',
        JSON.stringify([...prevState.todoData, newTodo])
      );

      return {
        todoData: [...prevState.todoData, newTodo]
      };
    });
  };

  clearCompleted = event => {
    event.preventDefault();
    this.setState(prevState => {
      const filterTodos = prevState.todoData.filter(todo => {
        if (!todo.completed) {
          return todo;
        }
      });

      localStorage.setItem('todos', JSON.stringify(filterTodos));

      return {
        todoData: filterTodos
      };
    });
  };

  setLocalStorage = () => {
    if (localStorage.getItem('todos') === null) {
      let todos = [...this.state.todoData];
      localStorage.setItem('todos', JSON.stringify(todos));
    } else {
      this.setState({
        todoData: JSON.parse(localStorage.getItem('todos'))
      });
    }
  };

  render() {
    console.log(this.state.todoData);
    return (
      <div>
        <TodoHeader />
        <Container>
          <TodoForm
            addTodo={this.addTodo}
            clearCompleted={this.clearCompleted}
          />
          <TodoList
            todoData={this.state.todoData}
            toggleTodo={this.toggleTodo}
          />
        </Container>
      </div>
    );
  }
}

export default App;
