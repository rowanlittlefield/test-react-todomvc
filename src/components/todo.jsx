import React from 'react';
import { Provider } from 'react-redux';
import NewTodoFormContainer from '../containers/new_todo_form_container';
import TodoListContainer from '../containers/todo_list_container';

const Todo = ({store}) => (
  <Provider store={ store }>
    <span className="todo-app">
      <h2>To-Do</h2>
      <NewTodoFormContainer />
      <TodoListContainer />
    </span>
  </Provider>
);

export default Todo;
