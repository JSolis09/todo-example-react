import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
    removeItem = (item) => {
        this.props.removeTodo(item);
    };
    render() {
        return (
        <ul className="Todo-list">
            { this.props.data.map((item, index) => <TodoItem removeItem={() => this.removeItem(item)} key={index} item={item} />) }
        </ul>
        );
    }
}

export default TodoList;