import { connect } from 'react-redux';
import { getBoard } from '../selectors';
import { getColors } from '../actions';
import App from '../components/App';

const mapStateToProps = state => ({
  board: getBoard(state)
})

const mapDispatchToProps = {
  onGetColors: getColors
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

