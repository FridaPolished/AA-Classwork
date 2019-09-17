console.log("Webpack is working, probably!")

const Util = require('./util.js');
const MovingObject = require('./moving_object.js');
window.MovingObject = MovingObject;
const Asteroid = require('./asteroid.js');
window.Asteroid = Asteroid;
const Game = require('./game.js');
window.Game = Game;
const GameView = require('./game_view.js');
window.GameView = GameView;

document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('game-canvas');
    const ctx = canvas.getContext('2d');
    const game = new Game();
    const gv = new GameView(ctx, game);
    gv.start();
    // window.ctx = ctx;
    // let mo = new MovingObject({ pos: [20, 20], vel: 0, radius: 12, color: "#f00"});
    // mo.draw(ctx);
    // let a = new Asteroid([30, 30]);
    // a.move();
    // a.draw(ctx);
});

