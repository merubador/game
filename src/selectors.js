export const getColor = state => state.cities;

export const getBoard = state => {
  const colors = getColor(state);

  return colors;
}