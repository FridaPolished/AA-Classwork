import React from 'react';
import ReactDOM from 'react-dom';
import Game from './components/game';
import Modal from './components/modal';


class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {gameStatus: ""};
    this.changeGameStatus = 
  }
  
  changeGameStatus(newStatus) {
    this.changeState({gameStatus: newStatus});
  }


  render() {
    let modal = (this.state.gameStatus ? <Modal /> : "");
    return (
        <div>
            <Game 
              gameOver = { this.state.gameStatus }
              changeGameStatus = { this.changeGameStatus }
            />
            {modal}
        </div>
    );
  }
}


document.addEventListener("DOMContentLoaded", () => {
  const main = document.getElementById("main");
  ReactDOM.render(<Root />, main);
});