import React, { Component } from 'react';
import styled from 'styled-components';
import { COLORS } from '../helpers';


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

class App extends Component {
  componentDidMount() {
    this.props.onGenerateBoard(COLORS);
  }

  addItem(item) {
    const { selected, onAddItem, onRemoveTiles, onClearSelected } = this.props;
    const { color } = item;

    if (selected.length < 1) {
      onAddItem(item);
    } else {
      onAddItem(item);
      setTimeout(() => {
        onClearSelected()
        if (selected[0].color === color) {
          onRemoveTiles(color);
        }
      }, 400);

    }
  }

  render() {
    const { board } = this.props;

    return (
      <Container>
        <h1>Game</h1>
        <Board>
          {board.length ? board.map((item, index) =>
            <Item
              color={item.isActive ? item.color : "#fafafa"}
              key={index}
              onClick={() => this.addItem(item)}>
            </Item>
          ) :
            <div>Победа!</div>}
        </Board>
        <button>Start</button>
      </Container>
    );
  }
}

export default App;
