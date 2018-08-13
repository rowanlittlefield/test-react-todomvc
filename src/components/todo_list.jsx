import React from 'react';
import TodoListItemContainer from '../containers/todo_list_item_container';

class TodoList extends React.Component {

  render() {
    if(this.props.todos.length === 0) return null;

    const todoListItems = this.props.todos.map((todo, idx) => {
      return (
        <TodoListItemContainer key={idx} body={todo.body} id={todo.id} />
      );
    });

    return (
      <div>
        <span>Number of todos: {this.props.todos.length}</span>
        <ul id="todo-list" className="todo-list">
          {todoListItems}
        </ul>
      </div>
    );
  }
}

export default TodoList;
