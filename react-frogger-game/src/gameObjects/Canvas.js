function Canvas(canvasElement) {
  this.numberOfLanes = 10;

  this.getHeight = function () {
    return canvasElement.height;
  };

  this.getWidth = function () {
    return canvasElement.width;
  };

  this.laneWidth = function () {
    return this.getWidth(canvasElement) / this.numberOfLanes;
  };

  this.update = function (ctx, Player) {
    this.clear(ctx, canvasElement);
    this.drawCanvas();

    // Traffic.drawCars();
    Player.drawPlayer();

    // Traffic.updateCars();
    Player.newPos();

    if (Player.isAlive) {
      requestAnimationFrame(this.update(Player));
    }
  };

  this.drawCanvas = function (ctx) {
    for (
      let i = this.getWidth(canvasElement);
      i > 0;
      i -= this.laneWidth(canvasElement)
    ) {
      ctx.setLineDash([6]);
      ctx.strokeStyle = "yellow";
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i, this.getHeight(canvasElement));
      ctx.stroke();
    }
  };

  this.clear = function (ctx) {
    ctx.clearRect(
      0,
      0,
      this.getWidth(canvasElement),
      this.getHeight(canvasElement)
    );
    console.log("cleared")
  };

  // this.resetGame = function () {
  //   Traffic.lanes = [];
  // };
}

export default Canvas;
