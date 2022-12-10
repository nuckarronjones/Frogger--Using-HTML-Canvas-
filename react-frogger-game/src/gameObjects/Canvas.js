// function Canvas(ctx, Traffic, Player, canvasElement) {
//   this.numberOfLanes = 10;
//   this.width = canvasElement.width;
//   this.height = canvasElement.height;
//   this.laneWidth = function () {
//     //use getter as object literals cant use 'this' like in constructors
//     return this.width / this.numberOfLanes;
//   };
//   this.update = function () {
//     this.clear();
//     this.drawCanvas();

//     Traffic.drawCars();
//     Player.drawPlayer();

//     Traffic.updateCars();
//     Player.newPos();

//     if (Player.isAlive) {
//       requestAnimationFrame(Canvas.update);
//     }
//   };
//   this.drawCanvas = function () {
//     for (let i = this.width; i > 0; i -= this.laneWidth) {
//       ctx.setLineDash([6]);
//       ctx.strokeStyle = "yellow";
//       ctx.beginPath();
//       ctx.moveTo(i, 0);
//       ctx.lineTo(i, this.height);
//       ctx.stroke();
//     }
//   };
//   this.clear = function () {
//     ctx.clearRect(0, 0, this.width, this.height);
//   };
//   this.resetGame = function () {
//     Traffic.lanes = [];
//   };
// }

// export default Canvas;
