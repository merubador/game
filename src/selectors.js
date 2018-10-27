import * as R from "ramda";

export const getBoardMap = state => state.board;

export const getSelected = state => state.selected;

export const getDisabledTiles = R.pipe(
  state => getBoardMap(state),
  data => R.map(item => !!item.isDisabled && true)(data)
);

export const getBoard = state => {
  const gameBoard = getBoardMap(state);
  const selectedList = getSelected(state);
  const selectedIds = selectedList.map(item => item.id);

  return gameBoard.map(item => {
    if (selectedIds.includes(item.id)) {
      return { ...item, isActive: true };
    }

    return item;
  });
};
