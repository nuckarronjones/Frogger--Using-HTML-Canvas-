function Player(ctx, Frog, canvasElement) {
  this.x = 200;
  this.y = 400 - 25;
  this.w = 25;
  this.h = 25;
  this.dx = 0;
  this.dy = 0;
  this.speed = 4;
  this.isAlive = true;

  this.drawPlayer = function () {
    ctx.drawImage(Frog, this.x, this.y, this.w, this.h);
  };
  this.moveLeft = function () {
    this.dx = -this.speed;
  };
  this.moveRight = function () {
    this.dx = +this.speed;
  };
  this.newPos = function () {
    this.x += this.dx;
    this.y += this.dy;
    this.collisionDetection();
  };
  this.collisionDetection = function () {
    if (this.x > canvasElement.width - this.w) {
      this.x = canvasElement.width - this.w;
    }
    if (this.x < 0) {
      this.x = 0;
    }
  };
}

export default Player;
