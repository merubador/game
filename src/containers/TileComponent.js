import { connect } from 'react-redux';
import { getBoard, getSelected } from '../selectors';
import { generateBoard, addItem, clearSelected, removeTiles } from '../actions';
import Tile from '../components/Tile';

const mapStateToProps = state => ({
  board: getBoard(state),
  selected: getSelected(state)
})

const mapDispatchToProps = {
  onGenerateBoard: generateBoard,
  onAddItem: addItem,
  onClearSelected: clearSelected,
  onRemoveTiles: removeTiles
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tile)

