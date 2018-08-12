import { connect } from 'react-redux';
import React from 'react';
import NewTodoForm from '../components/new_todo_form';
import { createTodo } from '../utils/todos_util';

const mapStateToProps = (state, ownProps) => {

};

const mapDispatchToProps = dispatch => ({
  createTodo: todo => dispatch(createTodo(todo))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
