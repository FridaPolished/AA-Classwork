const DIM_X = 600;
const DIM_Y = 600;
const NUM_ASTEROIDS = 3;

const Game = function (){
    this.asteroids = [];
    this.addAsteroids();
}

Game.prototype.addAsteroids = function () {
    let counter = 0;
    while (NUM_ASTEROIDS > counter ) {
        counter += 1
        this.asteroids.push(new Asteroid({pos: this.randomPosition(), game: this}));
    }
}

Game.prototype.randomPosition = function () {
    let pos1 = Math.floor(Math.random() * DIM_X);
    let pos2 = Math.floor(Math.random() * DIM_Y);
    return [pos1, pos2];
}

Game.prototype.draw = function(ctx) {
    ctx.beginPath();
    ctx.clearRect(0, 0, 600, 600);

    for (let i = 0; i < this.asteroids.length; i++) {
        this.asteroids[i].draw(ctx);
    }
    
};

Game.prototype.moveObjects = function(){
    for (let i = 0; i < this.asteroids.length; i++) {
        this.asteroids[i].move();
    }
};

Game.prototype.wrap = function (pos) {
    if (pos[0] < 0) {
        pos[0] = 600 + pos[0];
    } else if (pos[0] > 600) {
        pos[0] = pos[0] % 600;
    }
    if (pos[1] < 0) {
        pos[1] = 600 + pos[1];
    } else if (pos[1] > 600) {
        pos[1] = pos[1] % 600;
    }
};

Game.prototype.checkCollisions = function (){
    let that = this;
    that.asteroids.forEach( function (asteroid, idx) {
        for( let i = 0; i < that.asteroids.length; i++){
            if (i !== idx && asteroid.isCollidedWith(that.asteroids[i])){
                alert("COLLISION!!!!");
            }  
        }
    });
};

Game.prototype.step = function (){
    this.moveObjects.call(this);
    this.checkCollisions.call(this);
};


module.exports = Game;
