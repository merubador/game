import React, { Component } from 'react';
import styled from 'styled-components';
import { COLORS, generateBoard } from '../helpers';
import Tile from './Tile';

const Container = styled.div`
  max-width: 600px;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0 10px;
  text-align: center;
`;

const Board = styled.div`
  display: flex;
  flex-wrap: wrap;
  border: 1px solid #999;
`;

const Item = styled.div`
  background-color: #fff;
  width: 25%;
  height: 150px;
  border: 1px solid #999;
  box-sizing: border-box;
`

class App extends Component {
  componentDidMount() {
    const { onGenerateBoard, board } = this.props;
    onGenerateBoard(generateBoard(COLORS, board));
  }

  playAgain = () => {
    const { onGenerateBoard, board } = this.props;
    onGenerateBoard(generateBoard(COLORS, board));
  }

  render() {
    const {
      board,
      selected,
      onAddItem,
      onRemoveTiles,
      onClearSelected
    } = this.props;
    const lengthNotDisabled = board.map(item => !!item.isDisabled && true);

    return (
      <Container>
        <h1>Flip tile game</h1>
        {!!lengthNotDisabled.includes(false) ?
          <Board>
            {board.map((item, index) =>
              item.isDisabled ?
                <Item key={index}></Item> :
                <Tile
                  color={item.isActive ? item.color : '#efefef'}
                  item={item}
                  selected={selected}
                  onAddItem={onAddItem}
                  onRemoveTiles={onRemoveTiles}
                  onClearSelected={onClearSelected}
                  board={board}
                  key={index}>
                </Tile>
            )}
          </Board> :
          <div>
            <div>You won!</div>
            <button onClick={this.playAgain}>Play again</button>
          </div>}
      </Container>
    );
  }
}

export default App;
