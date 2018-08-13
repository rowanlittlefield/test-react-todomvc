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
        <button className="todo-list-item-button"
          onClick={this.props.deleteTodo.bind(this, this.props.id)}>
          <div>
            Remove
          </div>
        </button>
      </li>
    );
  }
}

export default TodoListItem;
