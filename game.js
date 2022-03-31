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
//let lastRenderTime = 0;

 
//reload = location.reload();
// Game Levels
const easy = document.getElementById("easy");
const medium = document.getElementById("medium");
const hard = document.getElementById("hard");

// function main(currentTime) { // this function makes the page rerender so the icons can appear to be moving
//   window.requestAnimationFrame(main);
//   const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000; // lines 6&7 refresh/rereneder the page so the game can be updated
//   if (secondsSinceLastRender < 1 / speed) {
//     return;
//   }
//   lastRenderTime = currentTime;

//   update()
//   draw();

//   checkApples(snakeBody);
// }


//window.requestAnimationFrame(main);
let speed = 500;
function main() {
  if (running) {
    
    setTimeout(function onTick() {
      
      update();
      draw();
      checkApples(snakeBody);
      // Call main again so it reruns over and over 
      main();
      
    }, speed);
  } else {
    gameOver()
  }
}
main();

function update() {
  updateSnake();
  console.log(speed);
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
  easy.classList.add("gameOverLevels");
  medium.classList.add("gameOverLevels");
  hard.classList.add("gameOverLevels");
  document.querySelector(".levels").style.paddingTop = "100px";
}
