const MovingObject = function(options) {
    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = options.radius;
    this.color = options.color;
    this.game = options.game;
};

MovingObject.prototype.draw = function(ctx) {
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 360);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.strokeStyle = this.color;
    ctx.stroke();
};

MovingObject.prototype.move = function () {
    this.pos[0] += this.vel[0]; 
    this.pos[1] += this.vel[1];
    this.game.wrap(this.pos);
};

MovingObject.prototype.isCollidedWith = function(otherObject){
    let xDist = this.pos[0] - otherObject.pos[0];
    let yDist = this.pos[1] - otherObject.pos[1];
    let centerDist = ((xDist ** 2) + (yDist ** 2)) ** (1/2);
     
    if ( centerDist < (this.radius + otherObject.radius)) {
            return true;
    }
    return false;    
};


module.exports = MovingObject;