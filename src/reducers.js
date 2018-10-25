import { combineReducers } from 'redux';
import { GENERATE_BOARD, ADD_ITEM, CLEAR_SELECTED, REMOVE_TILES } from './actions';
import { generateBoard } from './helpers';

function board(state = [], action) {
  switch (action.type) {
    case GENERATE_BOARD:
      return generateBoard(action.payload);
    case REMOVE_TILES:
      return state.filter(board => board.color !== action.payload);
    default:
      return state;
  }
}

function selected(state = [], action) {
  switch (action.type) {
    case ADD_ITEM:
      return [
        ...state,
        action.payload
      ];
    case CLEAR_SELECTED:
      return [];
    default:
      return state;
  }
}

export default combineReducers({
  board,
  selected,
});