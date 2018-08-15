import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('@App', () => {
  let app;
  let div;

  beforeEach(() => {
    div = document.createElement('div');
    app = ReactDOM.render(<App />, div);
  });

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('should set empty array to state', () => {
    expect(app.state).toBeDefined();
    expect(app.state.todoList).toEqual([]);
  });

  describe('#AddTodo', () => {
    it('should add todo in todoList', () => {
      const newTodoName = 'New Todo';
      app.addTodo(newTodoName);
      expect(app.state.todoList[0].name).toBe(newTodoName);
    });
  });

  describe('#removeTodo', () => {
    it('should add todo in todoList', () => {
      const mockTodo = [
        { name: 'Todo One' },
        { name: 'Todo Two' },
        { name: 'Todo Three' },
      ];
      const removedTodo = mockTodo[2];
      app.state = {
        todoList: mockTodo
      };
      app.removeTodo(removedTodo);
      expect(app.state.todoList.find((todo) => todo === removedTodo)).toBe(undefined);
    });
  });
});
