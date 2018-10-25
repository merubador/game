import React, { Component } from 'react';
import styled from 'styled-components';


const Item = styled.div`
  background:${({ color }) => color};
  width: 25%;
  height: 150px;
  border: 1px solid #999;
  box-sizing: border-box;
  cursor: pointer;
`

class Tile extends Component {

  addItem = () => {
    const {
      selected,
      onAddItem,
      onRemoveTiles,
      onClearSelected,
      item
    } = this.props;
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
    const {
      color
    } = this.props;

    return (
      <Item
        color={color}
        onClick={this.addItem}>
      </Item>
    );
  }
}

export default Tile;
