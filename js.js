const canvasElement = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const Frog = document.getElementById("source");
let test = 5;

const Canvas = {
  lanes: 10,
  width: canvasElement.width,
  height: canvasElement.height,
  drawCanvas: function () {
    for (let i = this.width; i > 0; i -= this.width / this.lanes) {
      //Draw dottes lane lines across X axis
      ctx.setLineDash([6]);
      ctx.strokeStyle = "yellow";
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i, this.height);
      ctx.stroke();
    }
  },
  update: function () {
    ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);
    Canvas.drawCanvas();
    Player.drawPlayer();
    Player.newPos();
    requestAnimationFrame(Canvas.update);
  },
};

function Car(x, y, h, w, dy) {
  //Car constructor
  (this.x = x), (this.y = y), (this.w = w), (this.h = h), (this.dy = dy);
}

const Player = {
  x: 10,
  y: 200 - 20,
  w: 20,
  h: 20,
  dx: 0,
  dy: 0,
  speed: 5,
  keyPressDown: function (e) {
    if (e.key == "ArrowUp" || e.key == "Up") {
        Player.moveUp();
    } else if (e.key == "ArrowDown" || e.key == "Down") {
        Player.moveDown();
    } else if (e.key == "ArrowLeft" || e.key == "Left") {
        Player.moveLeft();
    } else if (e.key == "ArrowRight" || e.key == "Right") {
        Player.moveRight();
    }
  },
  keyPressUp: function (e) {
    console.log("key up")
    Player.dx = 0;
    Player.dy = 0;
  },
  moveUp: function () {
    this.dy -= this.speed;
  },
  moveDown: function () {
    this.dy += this.speed;
  },
  moveLeft: function () {
    this.dx -= this.speed;
  },
  moveRight: function () {
    this.dx += this.speed;
  },
  drawPlayer: function () {
    ctx.drawImage(Frog, Player.x, Player.y, Player.w, Player.h);
  },
  newPos: function () {
    this.x += this.dx;
    this.y += this.dy;
  },
};

Canvas.update();

document.addEventListener("keydown", Player.keyPressDown);
document.addEventListener("keyup", Player.keyPressUp);