import React, { useEffect, useRef, useState } from "react";
import "./Game.css";
//gameObjects
import player from "../../gameObjects/Player";
import board from "../../gameObjects/Canvas";
import traffic from "../../gameObjects/Traffic";
// import Lanes from "../../gameObjects/Lanes";
import car from "../../gameObjects/Car";

export default function Game() {
  /* ref is used to access the underlying canvas element and its 2d context. 
  This is necessary because useEffect runs after the component has been rendered, 
  so we need a way to access the canvas element that was rendered in order to set 
  its width and height properties and draw on it*/
  const [isRunning, setIsRunning] = useState(true); //cleanup function. Detect if still running
  const canvasRef = useRef(null);

  useEffect(() => {
    const Frog = document.getElementById("source");
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const Board = new board(canvas);
    const Player = new player();
    let Car = new car()
    const Traffic = new traffic(canvas,Car);//pass car constructor in to be duplicated

    const eventListeners = {
      keyDown: function (e) {
        if (e.key == "ArrowRight" || e.key == "Right") {
          console.log("moved right");
          Player.moveRight();
        } else if (e.key == "ArrowLeft" || e.key == "Left") {
          console.log("moved left");
          Player.moveLeft();
        }
      },
      keyUp: function () {
        Player.dy = 0;
        Player.dx = 0;
      },
    };

    window.addEventListener("keydown", eventListeners.keyDown);
    window.addEventListener("keyup", eventListeners.keyUp);

    Traffic.makeLanes(Board.laneWidth(), Board.numberOfLanes); //
    Traffic.makeCars();

    const render = () => {
      Board.clear(ctx, canvas);
      Board.drawCanvas(ctx, canvas);

      Player.drawPlayer(ctx, Frog);
      Player.newPos(canvas);

      Traffic.drawCars(ctx, Player); //
      Traffic.updateCars(); //

      requestAnimationFrame(render);
    };

    render();

    //cleanup function
    return () => {
      setIsRunning(false);
    };
  }, []);

  return (
    <React.Fragment>
      <canvas id="canvas" width="400" height="400" ref={canvasRef} />
      <div style={{ display: "none" }}>
        <img
          id="source"
          alt="player"
          src="./Assets/Frog.png"
          width="300"
          height="227"
        />
      </div>
    </React.Fragment>
  );
}
