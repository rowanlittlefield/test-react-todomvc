import { RECEIVE_TODO, REMOVE_TODO } from '../utils/todos_redux_actions';
import { merge } from 'lodash';

const todosReducer = (state = {}, action) => {
  Object.freeze(state);

  const newState = merge({}, state)
  switch (action.type) {
    case RECEIVE_TODO:
      return merge(newState, {[action.todo.id]: action.todo});
    case REMOVE_TODO:
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
};

export default todosReducer;
