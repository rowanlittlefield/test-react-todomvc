import { connect } from 'react-redux';
import React from 'react';
import NewTodoForm from '../components/new_todo_form';
import { createTodo } from '../utils/todos_util';

const mapDispatchToProps = dispatch => ({
  createTodo: todo => dispatch(createTodo(todo))
});

export default connect(null, mapDispatchToProps)(NewTodoForm);
