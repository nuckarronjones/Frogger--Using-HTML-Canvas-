function Car(x, y, h, w, speed, laneAssigned, id) {
  this.laneIndex = laneAssigned; //example Traffic.lanes[3]
    this.id = id;
    this.x = x;
    this.y = y;
    this.h = h;
    this.w = w;
    this.speed = speed;
}


// //use prototype for object constructor. Each new car inherits this method
// Car.prototype.newPos = function () {
//   this.y += this.speed;
//   this.renderCheck();
// };

// Car.prototype.playerCollisionCheck = function (Player) {
//   if (
//     Player.x <= this.x + this.w &&
//     Player.x + Player.w >= this.x &&
//     Player.y <= this.y + this.h &&
//     Player.h + Player.y >= this.y
//   ) {
//     Player.isAlive = false;
//   }
// };

// //if car goes beyond canvas, it deletes itself from the lane array, thus, not redrawn
// Car.prototype.renderCheck = function () {
//   if (this.y > Canvas.height) {
//     //   console.log(this.x + " has passed threshold")
//     //   console.log(Traffic.lanes[this.laneIndex].cars)
//     //   Traffic.lanes[this.laneIndex].cars.filter((car)=>{
//     //     return this.id != car.id
//     //   })

//     //   console.log("car removed" + Traffic.lanes[this.laneIndex].length)
//     // }
//     console.log(
//       "Car that has crossed has an id of " +
//         this.id +
//         ", and Is located in lane " +
//         this.laneIndex
//     );
//     console.log("BEFORE REMOVAL");
//     console.log(Traffic.lanes[this.laneIndex].cars);

//     Traffic.lanes[this.laneIndex].cars = Traffic.lanes[
//       this.laneIndex
//     ].cars.filter((car) => {
//       return car.id != this.id;
//     });

//     console.log("AFTER REMOVAL");
//     console.log(Traffic.lanes[this.laneIndex].cars);

//     //find the lane index, then find the
//   }
// };


export default Car;