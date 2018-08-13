import { connect } from 'react-redux';
import React from 'react';
import NewTodoForm from '../components/new_todo_form';
import { saveTodo } from '../utils/todos_redux_actions';

const mapDispatchToProps = dispatch => ({
  create: todo => dispatch(saveTodo(todo))
});

export default connect(null, mapDispatchToProps)(NewTodoForm);
