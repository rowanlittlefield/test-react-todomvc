import React from 'react';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      completed: false
    }
  }

  toggleCompleted() {
    const todo = this.props.todo
    this.props.update(
      {
        id: todo.id,
        body: todo.body,
        completed: !todo.completed
      }
    );
  }

  render() {
    const todo = this.props.todo
    const completed = todo.completed;
    
    return (
      <li className={"todo-list-item" + (completed ? ' completed' : '')}>
        <span>{todo.body}</span>
        <input type="checkbox"
          onClick={this.toggleCompleted.bind(this)} />
        <button className="todo-list-item-button"
          onClick={this.props.destroy.bind(this, todo.id)}>
          <div>
            Remove
          </div>
        </button>
      </li>
    );
  }
}

export default TodoListItem;
