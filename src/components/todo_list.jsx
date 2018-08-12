import React from 'react';
import TodoListItemContainer from '../containers/todo_list_item_container';

class TodoList extends React.Component {

  render() {
    const todoListItems = this.props.todos.map((todo, idx) => {
      return (<TodoListItemContainer key={idx} body={todo.body} id={todo.id} />);
    });

    return (
      <ul id="todo-list" className="todo-list">
        {todoListItems}
      </ul>
    );
  }
}

export default TodoList;
