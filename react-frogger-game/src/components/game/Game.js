import React from "react";
import "./Game.css";

//gameObjects
import Player from "../../gameObjects/Player";
import Canvas from "../../gameObjects/Canvas";
import Traffic from "../../gameObjects/Traffic";
import Lanes from "../../gameObjects/Lanes";
import Car from "../../gameObjects/Car";

export default function Game() {
  const canvasElement = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  const Frog = document.getElementById("source");

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

  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  Traffic.makeLanes(Canvas.numberOfLanes);
  Traffic.makeCars();
  Canvas.update();

  document.addEventListener("keydown", eventListeners.keyDown);
  document.addEventListener("keyup", eventListeners.keyUp);

  return <div>Game</div>;
}
