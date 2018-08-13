import React from 'react';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      completed: false
    }
  }

  toggleCompleted() {
    this.setState({completed: !this.state.completed});
  }

  render() {
    const completed = this.state.completed;
    
    return (
      <li className={"todo-list-item" + (completed ? ' completed' : '')}>
        <span>{this.props.body}</span>
        <input type="checkbox"
          onClick={this.toggleCompleted.bind(this)} />
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
