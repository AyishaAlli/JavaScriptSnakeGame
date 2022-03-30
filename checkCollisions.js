import { snakeBody } from "./snake.js";
import { HEIGHT, WIDTH, gameOver } from "./game.js";


export function checkCollisions() {
  for (let i = 1; i < snakeBody.length; i++) {
    // iterates over the body parts

    if ( 
      snakeBody[0].x === snakeBody[i].x &&
      snakeBody[0].y === snakeBody[i].y
    ) {
      gameOver();
    }
  }
  if (snakeBody[0].x < 0) {
    // checks if head touches left border
    gameOver(); // ends game
  }
  if (snakeBody[0].x > WIDTH) {
    // checks if head touches right border
    gameOver(); // ends game
  }
  if (snakeBody[0].y < 0) {
    // checks if head touches top border
    gameOver(); // ends game
  }
  if (snakeBody[0].y > HEIGHT) {
    // checks if head touches bottom border
    gameOver(); // ends game
  }

}
