import React from 'react';
import Tile from './tile';

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.board = props.board;
    this.updateGame = props.updateGame;
  }

  render() {
    let visboard = this.board.grid.map((ele, i) => {
      let row = ele.map((tile, n) => {
        return (
          <Tile
            key={`row-${i}-column${n}`}
            tile={tile}
            updateGame={this.updateGame} />
        )
      });
      return <div className="row" key={i}>{row}</div>;
    });
    return (
      <div className="grid">
        {visboard}
      </div>
    )
  }
}