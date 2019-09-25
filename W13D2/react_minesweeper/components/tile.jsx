import React from 'react';

export default class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.id = props.id;
    this.tile = props.tile;
    this.updateGame = props.updateGame;
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    // Alt key will send true if trying to flag and false if trying to reveal
    this.updateGame(this.tile, e.altKey);
  }

  render() {
    let klass, content;
    klass = content = "";
    if (this.tile.explored && this.tile.bombed) {
      klass = " bombed";
      content = "☢";
    } else if (this.tile.explored) {
      klass = " explored";
      content = this.tile.adjacentBombCount();
    } else if (this.tile.flagged) {
      klass = " flagged";
      content = "⚑";
    }

    return (
      <div
        id={this.id}
        onClick={this.handleClick}
        className={"tile".concat(klass)}>
        {content}
      </div>
    )
  }
}