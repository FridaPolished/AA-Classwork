const Game = require('./game.js');

const GameView = function(ctx, game) {
    this.ctx = ctx;
    this.game = game;
};

GameView.prototype.start = function (){
    let that = this;

    window.setInterval(function () {
        that.game.step();
        that.game.draw(that.ctx);
     }, 10);

};
module.exports = GameView;