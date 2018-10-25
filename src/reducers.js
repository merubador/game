import { combineReducers } from 'redux';
import { GET_COLORS } from './actions';

function colors(state = [], action) {
  switch (action.type) {
    case GET_COLORS:
      return action.payload;
    default:
      return state;
  }
}

export default combineReducers({
  colors
});