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

let speed = 6; // The hieght the number, the faster the snake will move 

// Game Levels 
const easy = document.getElementById('easy')
const medium = document.getElementById('medium')
const hard = document.getElementById('hard')

easy.addEventListener('click', ()=>{
  speed = 4
  reload = location.reload();

})
medium.addEventListener('click', ()=>{
  reload = location.reload();
  speed = 8
})
hard.addEventListener('click', ()=>{
  reload = location.reload();
  speed = 16
})



let lastRenderTime = 0;
function main(currentTime) { // this function makes the page rerender so the icons can appear to be moving 
  window.requestAnimationFrame(main);
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000; // lines 6&7 refresh/rereneder the page so the game can be updated
  if (secondsSinceLastRender < 1 / speed) {
    return;
  }
  lastRenderTime = currentTime;

  //update()
  draw();

  checkApples(snakeBody);
}

window.requestAnimationFrame(main);

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
  gameBoard.style.display = "none";
  easy.classList.add('gameOverLevels')
  medium.classList.add('gameOverLevels')
  hard.classList.add('gameOverLevels')
}
