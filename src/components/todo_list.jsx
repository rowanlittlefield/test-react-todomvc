import React from 'react';
import TodoListItemContainer from '../containers/todo_list_item_container';

class TodoList extends React.Component {

  renderList() {
    if(this.props.todos.length === 0) return null;

    const todoListItems = this.props.todos.map((todo, idx) => {
      return (
        <TodoListItemContainer key={idx} body={todo.body} id={todo.id} />
      );
    });

    return (
      <ul id="todo-list" className="todo-list">
        {todoListItems}
      </ul>
    );
  }

  render() {
    const numTodos = this.props.todos.length;

    return (
      <div className="todo-list-div">
        <span className="todo-list-header">
          <strong>{numTodos}</strong> item{numTodos === 1 ? '' : 's'}
        </span>
        {this.renderList()}
      </div>
    );
  }
}

export default TodoList;
