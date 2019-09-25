import React from 'react';
import * as Minesweeper from './minesweeper';
import Board from './board';



export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = { board: new Minesweeper.Board(8, 10) };
    this.updateGame = this.updateGame.bind(this);
  }

  updateGame(tile, wantFlag) {
    if (wantFlag) {
        tile.toggleFlag();
    } else {
        tile.explore();
    }
    this.setState({ board: this.state.board });
  }

  render() {
    if (this.state.board.won()) {
  
    }
    return <Board
        board={this.state.board}
        updateGame= {this.updateGame} />
  }
}