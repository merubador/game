import React, { Component } from 'react';
import styled from 'styled-components';
import { COLORS } from '../helpers';
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
`;

const Item = styled.div`
  background:${({ color }) => color};
  width: 25%;
  height: 150px;
  border: 1px solid #999;
  box-sizing: border-box;
  cursor: pointer;
`

const Play = styled.div`
  display: flex;
  flex: none;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

class App extends Component {
  componentDidMount() {
    this.props.onGenerateBoard(COLORS);
  }

  playAgain = () => {
    this.props.onGenerateBoard(COLORS);
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
        <h1>Game</h1>
        <Board>
          {lengthNotDisabled.includes(false) ? board.map((item, index) =>
            item.isDisabled ?
              <Item key={index} color={'#fff'}></Item> :
              <Tile
                color={item.isActive ? item.color : '#fafafa'}
                item={item}
                selected={selected}
                onAddItem={onAddItem}
                onRemoveTiles={onRemoveTiles}
                onClearSelected={onClearSelected}
                key={index}>
              </Tile>
          ) :
            <Play>
              <div>You won!</div>
              <button onClick={this.playAgain}>Play again</button>
            </Play>}
        </Board>
      </Container>
    );
  }
}

export default App;
