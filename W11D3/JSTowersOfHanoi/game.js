function Game (numDiscs = 3) {
  this.towers = Array.from( {length: 3}, (val, idx) => { 
    return idx === 0 ? Array.from( {length: numDiscs}, (val, idx) => idx + 1) : [];
  });
}

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

Game.prototype.promptMove = function (makeMove) {
  this.print;
  console.log('');
  
  let startTowerIdx;
  let endTowerIdx;
  readline.question(`Select a tower to move from:\n`, input => {
    startTowerIdx = parseInt(input);
    console.log('');
    readline.question(`Select a tower to move to:\n`, input => {
      console.log('');
      endTowerIdx = parseInt(input);
      makeMove.call(this, startTowerIdx, endTowerIdx);  
    });
  });
};

Game.prototype.isValidMove = function (startTowerIdx, endTowerIdx) {
  return this.towers[endTowerIdx][0] > this.towers[startTowerIdx][0] ||
    this.towers[endTowerIdx].length === 0;
};

Game.prototype.move = function(startTowerIdx, endTowerIdx) {
  if (this.isValidMove(startTowerIdx, endTowerIdx)) {
    this.towers[endTowerIdx].unshift(this.towers[startTowerIdx].shift());
    return true;
  } else {
    return false;
  }
};

Game.prototype.print = function () {
  this.towers.forEach((tower, idx) => console.log(`${idx + 1}: ${tower.join(' | ')}`));
  // console.log(JSON.stringify(this.towers));
};

Game.prototype.isWon = function () {
  return this.towers[0].length === 0 && 
      this.towers.slice(1).some(tower => tower.length === 0);
};

Game.prototype.run = function (completionCallback) {
  this.promptMove(this.move) ? console.log("") : console.log("Invalid move");
};



let game = new Game(10);
game.run();
// console.log(game.isWon());
// [game.towers[0], game.towers[1]] = [game.towers[1], game.towers[0]];
// console.log(game.isWon());




readline.close();

// game.towers[0] = [3, 4];
// game.towers[1] = [5];
// console.log(game.move(1, 0)); // false
// console.log(game.move(0, 1)); // true
// console.log(game.move(0, 2)); // true
// console.log(game); // [], [3,5], [4]

