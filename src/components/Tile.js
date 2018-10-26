import React, { Component } from 'react';
import styled from 'styled-components';
import { disableTiles } from '../helpers';

const Scene = styled.div`
  width: 25%;
  height: 150px;
  border: 1px solid #999;
  box-sizing: border-box;
  cursor: pointer;
  perspective: 600px;
`

const Item = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transition: transform .4s;
  transform-style: preserve-3d;
  transform: ${({ flip }) => flip};
`

const Front = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  backface-visibility: hidden;
  background-color: #efefef;
`

const Back = styled(Front)`
  background:${({ color }) => color};
  transform: rotateY( 180deg );
`

class Tile extends Component {
  addItem = () => {
    const {
      selected,
      onAddItem,
      onRemoveTiles,
      onClearSelected,
      item,
      board
    } = this.props;
    const { color } = item;

    if (selected.length < 1) {
      onAddItem(item);
    } else {
      onAddItem(item);
      setTimeout(() => {
        onClearSelected()
        if (selected[0].color === color) {
          onRemoveTiles(disableTiles(color, board));
        }
      }, 400);

    }
  }

  render() {
    const { color } = this.props;

    return (
      <Scene
        onClick={this.addItem}>
        <Item flip={color !== '#efefef' ? 'rotateY(180deg)' : 'rotateY(0deg)'}>
          <Front></Front>
          <Back color={color}></Back>
        </Item>
      </Scene>
    );
  }
}

export default Tile;
