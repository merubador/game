import { connect } from 'react-redux';
import { getBoard, getSelected, getDisabledTiles } from '../selectors';
import { generateBoard, addItem, clearSelected, removeTiles } from '../actions';
import App from '../components/App';

const mapStateToProps = state => ({
  board: getBoard(state),
  selected: getSelected(state),
  disabledTiles: getDisabledTiles(state)
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
)(App)

