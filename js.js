const canvasElement = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const Frog = document.getElementById("source");
let test = 5;

function Car(x, y, h, w, dy) {//Car constructor
  (this.x = x), (this.y = y), (this.w = w), (this.h = h), (this.dy = dy);
}

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
  clear: function () {
    ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);
  },
  update: function () {
    Canvas.clear();
    Canvas.drawCanvas();
    Player.drawPlayer();
    Player.newPos();
    requestAnimationFrame(Canvas.update);
  },
  generateCars: function() {
  }
};

const eventListeners = {
  keyDown: function (e) {
    if (e.key == "ArrowRight" || e.key == "Right") {
      Player.moveRight();
    } else if (e.key == "ArrowLeft" || e.key == "Left") {
      Player.moveLeft();
    }
  },
  keyUp: function () {
    Player.dy = 0;
    Player.dx = 0;
  }
}

const Player = {
  x: 200,
  y: 400 - 30,
  w: 25,
  h: 25,
  dx: 0,
  dy: 0,
  speed: 4,
  drawPlayer: function () {
    ctx.drawImage(Frog, Player.x, Player.y, Player.w, Player.h);
  },
  moveLeft: function () {
    this.dx = -this.speed;
  },
  moveRight: function () {
    this.dx = +this.speed;
  },
  newPos: function () {
    Player.x += Player.dx;
    Player.y += Player.dy;
    Player.collisionDetection()
  },
  collisionDetection: function(){
    if(Player.x > canvasElement.width - Player.w){
      Player.x = canvasElement.width - Player.w
    }
    if(Player.x < 0){
      Player.x = 0 
    }
  }
};

Canvas.update();

document.addEventListener("keydown", eventListeners.keyDown);
document.addEventListener("keyup", eventListeners.keyUp);
