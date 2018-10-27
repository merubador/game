import * as R from "ramda";

export const COLORS = [
  {
    color: "#0a5adb"
  },
  {
    color: "#a60adb"
  },
  {
    color: "#db0ac9"
  },
  {
    color: "#db0a5a"
  },
  {
    color: "#0adbdb"
  },
  {
    color: "#0adb5d"
  },
  {
    color: "#d4db0a"
  },
  {
    color: "#db950a"
  }
];

export const makeRandom = () => 0.5 - Math.random();

export const generateBoard = colors =>
  R.pipe(
    data => data.concat(data),
    allColors => allColors.sort(makeRandom),
    mixedColors => mixedColors.map((x, i) => ({ ...x, id: i, isActive: false }))
  )(colors);

export const disableTiles = (color, board) =>
  board.map(item => {
    if (item.color === color) {
      return { ...item, isDisabled: true };
    }

    return item;
  });
