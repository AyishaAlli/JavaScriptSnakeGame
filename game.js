import {
  update as updateSnake,
  draw as drawSnake,
  snakeBody,
} from "./snake.js";
import { draw as drawApple } from "./apple.js";
import { checkApples } from "./checkApples.js";
import { checkCollisions } from "./checkCollisions.js";

export const gameBoard = document.getElementById("gameBoard");
export const WIDTH = 21; // defined in CCS - grid width
export const HEIGHT = 21; //// defined in CCS - grid height
let running = true;
let speed = 500; // The hieght the number, the faster the snake will move

// Game Levels
// const easy = document.getElementById("easy");
// const medium = document.getElementById("medium");
// const hard = document.getElementById("hard");




function main() {
  if (running) {
    setTimeout(function onTick() {
      
      update();
      draw();

      // Repeat
      main();
    }, 500);
  }
}
main();

function update() {
  updateSnake();
  checkCollisions();
}

function draw() {
  gameBoard.innerHTML = "";
  drawSnake(gameBoard);
  drawApple(gameBoard);
}

export function gameOver() {
  running = false;
  gameBoard.style.display = "none";
  //gameBoard.style.visibility = "hidden"
  
}