import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0 10px;
`;

const Board = styled.div`
  color: #fff;
`;

class App extends Component {
  componentDidMount() {
    this.props.onGetColors();
  }

  render() {
    return (
      <Container>
        <h1>Game</h1>
        <Board>
          <button>Start</button>
        </Board>
      </Container>
    );
  }
}

export default App;
