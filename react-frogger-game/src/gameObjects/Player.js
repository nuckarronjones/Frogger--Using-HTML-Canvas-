function Player() {
  this.x = 200;
  this.y = 400 - 25;
  this.w = 25;
  this.h = 25;
  this.dx = 0;
  this.dy = 0;
  this.speed = 4;
  this.isAlive = true;

  this.drawPlayer = function (ctx, Frog, canvas) {
    ctx.drawImage(Frog, this.x, this.y, this.w, this.h);
  };
  // this.keyUp = function (e) {
  //   if (e.key == "ArrowRight" || e.key == "Right") {
  //     console.log("moved right");
  //     this.dx = +this.speed;
  //   } else if (e.key == "ArrowLeft" || e.key == "Left") {
  //     console.log("moved left");
  //     this.dx = -this.speed;
  //   }
  // };
  // this.keyDown = function () {
  //   console.log("up");
  //   this.dy = 0;
  //   this.dx = 0;
  // };
  this.moveLeft = function () {
    this.dx = -this.speed;
  };
  this.moveRight = function () {
    this.dx = +this.speed;
  };
  this.newPos = function (canvasElement) {
    this.x += this.dx;
    this.y += this.dy;
    this.collisionDetection(canvasElement);
  };
  this.collisionDetection = function (canvasElement) {
    if (this.x > canvasElement.width - this.w) {
      this.x = canvasElement.width - this.w;
    }
    if (this.x < 0) {
      this.x = 0;
    }
  };
}

export default Player;
