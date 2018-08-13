export const RECEIVE_TODO = 'RECEIVE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

export const receiveTodo = todo => ({
  type: RECEIVE_TODO,
  todo
});

export const removeTodo = id => ({
  type: REMOVE_TODO,
  id
});

export const saveTodo = todo => dispatch => {
  return dispatch(receiveTodo(todo));
};

export const deleteTodo = id => dispatch => {
  return dispatch(removeTodo(id));
};
