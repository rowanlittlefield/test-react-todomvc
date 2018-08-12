import { RECEIVE_TODO } from '../utils/todos_util';
import { merge } from 'lodash';

const todosReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_TODO:
    debugger
    return merge({}, state.todo);
    default:
      return state;
  }
};

export default todosReducer;
