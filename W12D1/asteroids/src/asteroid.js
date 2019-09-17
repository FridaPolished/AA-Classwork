const MovingObject = require('./moving_object.js');
const Util = require('./util.js');

const Asteroid = function ({pos, game, radius, color}) {
   let options = {
    pos: pos,
    vel: Util.randomVec(3),
    radius: radius || 16,
    color: color || '#e61add',
    game: game
   };
    MovingObject.call(this, options);
};

Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;