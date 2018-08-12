import React from 'react';
import NewTodoForm from './new_todo_form';
import TodoList from './todo_list';

class Todo extends React.Component {

  render() {
    // const todosList = Object.values(this.props.todos)

    return (
      <div className="todo-app">
        <h2>To-Do</h2>
        <NewTodoForm />
        <TodoList />
      </div>
    );
  }
}

export default Todo;
