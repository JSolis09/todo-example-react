import React, { Component } from 'react';

class TodoInput extends Component {
    state = {
        todoName: ''
    };
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addTodo(this.state.todoName);
        this.setState({ todoName: '' });
    };
    render() { 
        return (
        <form className="Form-input" onSubmit={this.handleSubmit}>
            <input type="text" 
                name="todo"
                value={this.state.todoName}
                onChange={(event) => this.setState({ todoName: event.target.value })}
                placeholder="Enter todo name here..."
                required />
            <button type="submit">Add</button>
            { this.state.todoName ? <p> Typing: { this.state.todoName }  </p> : '' }
        </form>
        );
    }
}

export default TodoInput;