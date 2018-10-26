export const getBoardMap = state => state.board;
export const getSelected = state => state.selected;

export const getDisabledTiles = state => {
  const board = getBoardMap(state);
  return board.map(item => !!item.isDisabled && true);
}


export const getBoard = state => {
  const gameBoard = getBoardMap(state);
  const selectedList = getSelected(state);
  const selectedIds = selectedList.map(item => item.id);

  return gameBoard.map((item) => {
    if (selectedIds.includes(item.id)) {
      return { ...item, isActive: true }
    }

    return item;
  })
}