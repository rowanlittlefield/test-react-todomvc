import React from 'react';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className="todo-list-item">
        <span>{this.props.body}</span>
        <input type="checkbox" />
        <button className="todo-list-item-button">Remove</button>
      </li>
    );
  }
}

export default TodoListItem;
