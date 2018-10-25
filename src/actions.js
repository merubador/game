export const GENERATE_BOARD = 'GENERATE_BOARD';
export const ADD_ITEM = 'ADD_ITEM';
export const CLEAR_SELECTED = 'CLEAR_SELECTED';
export const REMOVE_TILES = 'REMOVE_TILES';

export const generateBoard = payload => ({
  type: GENERATE_BOARD,
  payload
})

export const removeTiles = payload => ({
  type: REMOVE_TILES,
  payload
})

export const addItem = payload => ({
  type: ADD_ITEM,
  payload
})

export const clearSelected = () => ({
  type: CLEAR_SELECTED,
  payload: []
})
