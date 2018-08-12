import React from 'react';
import { Provider } from 'react-redux';
import NewTodoFormContainer from '../containers/new_todo_form_container';
import TodoListContainer from '../containers/todo_list_container';

class Todo extends React.Component {

  render() {
    return (
      <Provider store={ this.props.store }>
        <div className="todo-app">
          <h2>To-Do</h2>
          <NewTodoFormContainer />
          <TodoListContainer />
        </div>
      </Provider>

    );
  }
}

export default Todo;
