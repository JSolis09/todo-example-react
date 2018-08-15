import React, { Component } from 'react';

class TodoItem extends Component {
    render() {
        return (
            <li className="Todo-item">
                {this.props.item.name}
                <a className="Button-remove" onClick={this.props.removeItem}>[X]</a>
            </li>
        );
    }
}

export default TodoItem;