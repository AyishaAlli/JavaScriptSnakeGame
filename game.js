import {
  SPEED,
  update as updateSnake,
  draw as drawSnake,
  snakeBody,
} from "./snake.js";
import { draw as drawApple } from "./apple.js";
import { checkApples } from "./checkApples.js";

export const gameBoard = document.getElementById("gameBoard");


let lastRenderTime = 0;
function main(currentTime) {
  window.requestAnimationFrame(main);
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000; // lines 6&7 refresh/rereneder the page so the game can be updated
  if (secondsSinceLastRender < 1 / SPEED) {
    return;
  }

  // console.log("Render")
  lastRenderTime = currentTime;

update()
 draw();
 
checkApples(snakeBody);
}

window.requestAnimationFrame(main);

function update() {
  updateSnake();
}

function draw() {
  gameBoard.innerHTML = "";
  drawSnake(gameBoard);
  drawApple(gameBoard);
  
  
}
 