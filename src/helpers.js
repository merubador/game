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
]

export const makeRandom = () => 0.5 - Math.random();

export const generateBoard = (colors) => {
  const allColors = colors.concat(colors);
  const mixedColors = allColors.sort(makeRandom);

  return mixedColors.map((x, i) => ({ ...x, id: i, isActive: false }));
}

export const checkSelected = (list) => {
  if (list.length >= 1) {
    return [];
  }

  return list;
}

export const disableTiles = (color, board) =>
  board.map(item => {
    if (item.color === color) {
      return { ...item, isDisabled: true }
    }

    return item;
  })
