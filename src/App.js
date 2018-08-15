import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

class App extends Component {
  state = {
    todoList: []
  };
  addTodo = (todoName) => {
    this.setState({
      todoList: this.state.todoList.concat([{ name: todoName }])
    });
  };

  removeTodo = (item) => {
    const data = this.state.todoList.filter((todo) => todo !== item);
    this.setState({
      todoList: data
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React - Todo example</h1>
        </header>
        <div className="App-container">
          <TodoInput addTodo={this.addTodo} />
          <TodoList data={this.state.todoList} removeTodo={this.removeTodo} />
        </div>
      </div>
    );
  }
}

export default App;
