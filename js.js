const canvasElement = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const Frog = document.getElementById("source");

function Lane(xPos, laneSpeed){
  this.lane = xPos,
  this.speed = laneSpeed,
  this.cars = []
}

function Car(x, y, h, w, dy, speed) {//car constructor function
  this.x = x,
  this.y = y,
  this.w = w,
  this.h = h,
  this.speed = speed
}

Car.prototype.newPos = function(){ //use prototype for object constructor. Each new car inherits this method
  this.y += this.dy;
}

const Traffic = {
  vehicles: [],
  makeCars: function () {//initial making of all cars in traffic
    for (let i = 0; i < 3; i++) {
      let random_starting_point = (Math.floor(Math.random() * (Canvas.width - 40) / 40) * 40);

      let car = new Car(random_starting_point, 0, 100, 40, 0, 5);

      this.vehicles.push(car);
      console.log("car added to traffic")
      console.log(car)
    }
  },
  drawCars: function () {//draw all the cars
    this.vehicles.forEach((car) => {
      ctx.fillRect(car.x, car.y, car.w, car.h);
    });
  },
  updateCarsPos: function () {//draw all the cars
    this.vehicles.forEach((car) => {
      car.y += car.speed
    });
  },
};

const Canvas = {
  lanes: 10,
  width: canvasElement.width,
  height: canvasElement.height,
  get laneWidth(){//use getter as object literals cant use 'this' like in constructors
    return this.width / this.lanes
  },
  update: function () {
    
    Canvas.clear();
    Canvas.drawCanvas();

    console.log(Canvas.laneWidth)

    Traffic.drawCars();
    Player.drawPlayer();

    Traffic.updateCarsPos()
    Player.newPos();

    requestAnimationFrame(Canvas.update);
  },
  drawCanvas: function () {
    for (let i = this.width; i > 0; i -= this.laneWidth) {
      ctx.setLineDash([6]);
      ctx.strokeStyle = "yellow";
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i, this.height);
      ctx.stroke();
    }
  },
  clear: function () {
    ctx.clearRect(0, 0, this.width, this.height);
    console.log("cleared canvas");
  },
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
  },
};

const Player = {
  x: 200,
  y: 400 - 25,
  w: 25,
  h: 25,
  dx: 0,
  dy: 0,
  speed: 4,
  drawPlayer: function () {
    ctx.drawImage(Frog, this.x, this.y, this.w, this.h);
  },
  moveLeft: function () {
    this.dx = -this.speed;
    Traffic.vehicles[0].dx = + Traffic.vehicles[0].speed
  },
  moveRight: function () {
    this.dx = +this.speed;
  },
  newPos: function () {
    this.x += this.dx;
    this.y += this.dy;
    this.collisionDetection();
  },
  collisionDetection: function () {
    if (this.x > canvasElement.width - this.w) {
      this.x = canvasElement.width - this.w;
    }
    if (this.x < 0) {
      this.x = 0;
    }
  },
};

console.log(Canvas.laneWidth)

Traffic.makeCars();
Canvas.update();

document.addEventListener("keydown", eventListeners.keyDown);
document.addEventListener("keyup", eventListeners.keyUp);