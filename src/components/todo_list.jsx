import React from 'react';
import TodoListItemContainer from '../containers/todo_list_item_container';

const TodoList = ({todos}) => {

  const renderList = () => {
    if(todos.length === 0) return null;

    const todoListItems = todos.map((todo, idx) => {
      return (
        <TodoListItemContainer key={idx} todo={todo} />
      );
    });

    return (
      <ul id="todo-list" className="todo-list">
        {todoListItems}
      </ul>
    );
  }

  const numTodos = todos.length;

  return (
    <div className="todo-list-div">
      <span className="todo-list-header">
        <strong>{numTodos}</strong> item{numTodos === 1 ? '' : 's'}
      </span>
      {renderList()}
    </div>
  );
};

export default TodoList;
