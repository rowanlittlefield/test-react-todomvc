import { connect } from 'react-redux';
import React from 'react';
import TodoListItem from '../components/todo_list_item';
import { deleteTodo } from '../utils/todos_util';

const mapDispatchToProps = dispatch => ({
  destroy: id => dispatch(deleteTodo(id))
});

export default connect(null, mapDispatchToProps)(TodoListItem);
