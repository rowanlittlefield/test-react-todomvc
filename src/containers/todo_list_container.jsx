import { connect } from 'react-redux';
import React from 'react';
import TodoList from '../components/todo_list';

const mapStateToProps = (state, ownProps) => {
  return {
    todos: Object.values(state.todos)
  };
};

export default connect(mapStateToProps)(TodoList);
