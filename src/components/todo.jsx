import React from 'react';
import NewTodoForm from './new_todo_form';
import TodoList from './todo_list';

class Todo extends React.Component {

  render() {
    return (
      <div className="Todo-app">
        <h2>To-Do</h2>
        <NewTodoForm />
        <TodoList />
      </div>
    );
  }
}

export default Todo;
