import { connect } from 'react-redux';
import React from 'react';
import TodoListItem from '../components/todo_list_item';
import { deleteTodo, saveTodo } from '../utils/todos_util';

const mapDispatchToProps = dispatch => ({
  destroy: id => dispatch(deleteTodo(id)),
  update: todo => dispatch(saveTodo(todo))
});

export default connect(null, mapDispatchToProps)(TodoListItem);
