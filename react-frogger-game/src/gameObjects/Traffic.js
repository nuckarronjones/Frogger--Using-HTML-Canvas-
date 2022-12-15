const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

function Lane(xPos, laneSpeed) {
  this.laneXStart = xPos;
  this.speed = laneSpeed;
  this.cars = [];
}

function Traffic(canvas,Car) {
  this.lanes = [];

  this.makeLanes = function (laneWidth, numberOfLanes) {
    let currentX = laneWidth;
    for (let i = 0; i < numberOfLanes; i++) {
      //multiples of a number that is used as a random X starting point for each new car

      //ERROR, CANNOT CHOOSE LANES ALREADY CHOSEN. NEED TO INCREMENT
      let lanePoint = currentX; //Math.round((Math.random()*(Canvas.width-Canvas.laneWidth)+Canvas.laneWidth)/Canvas.laneWidth)*Canvas.laneWidth;
      let randomSpeed = Math.floor(Math.random() * (2 - 1 + 1) + 1); //speed controls
      this.lanes.push(new Lane(lanePoint, randomSpeed));
      currentX += laneWidth;
    }
  };

  this.makeCars = async function () {
    ///////////////////////////////////////////////////DEBUG = add a condition to where cars stop generating and the game is over
    let id = 0;

    while (true) {//DEBUG ADD TIMER INTO REACT 

      await sleep(100); //async function has to wait for timing promise to resolve then function continues as normal

      let randomLane = Math.floor(Math.random() * (this.lanes.length - 0) + 0);
      let laneCarsArray = this.lanes[randomLane].cars;
      ///////////////////////////////////////////////////DEBUG = add if statements to calculate previous Y and figure out why random number isnt
      if (
        laneCarsArray.length == 0 ||
        laneCarsArray[laneCarsArray.length - 1].y >= 100
      ) {
        //check if a lane is empty, or a car has already passed onto canvas to make a new car. If not, randomize a new lane

        let laneStart = this.lanes[randomLane].laneXStart;
        let speed = this.lanes[randomLane].speed;

        //ID, and the index of what lane the car is in, is used in the renderCheck to detect out of bounds. Car deletes itself from the array if it leaves canvas (no longer drawn)
        let car = new Car(
          laneStart,
          -100,
          100,
          canvas.laneWidth,
          speed,
          randomLane,
          id
        );

        this.lanes[randomLane].cars.push(car);

        console.log(this.lanes)

        //laneFound = true;

        id++;
      }
    }
  };

  this.drawCars = function (ctx,Player) {
    this.lanes.forEach((lane) => {
      lane.cars.forEach((car) => {
        ctx.fillRect(car.x, car.y, car.w, car.h);
        car.playerCollisionCheck(Player);
        console.log("car drawn")
      });
    });
  };

  this.updateCars = function () {
    this.lanes.forEach((lane) => {
      lane.cars.forEach((car) => {
        car.newPos();
      });
    });
  };
}

export default Traffic;
