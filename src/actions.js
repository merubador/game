export const GET_COLORS = 'GET_COLORS';

const COLORS = [
  {
    id: 0,
    color: "#000"
  },
  {
    id: 1,
    color: "#000"
  },
  {
    id: 2,
    color: "#000"
  },
  {
    id: 3,
    color: "#000"
  },
  {
    id: 4,
    color: "#000"
  },
  {
    id: 5,
    color: "#000"
  },
  {
    id: 6,
    color: "#000"
  },
  {
    id: 7,
    color: "#000"
  },
  {
    id: 8,
    color: "#000"
  }
]

export const getColors = () => ({
  type: GET_COLORS,
  payload: COLORS
})