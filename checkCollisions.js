import { snakeBody } from "./snake.js";
import { gameOver } from "./game.js";
import { apple } from "./apple.js";
export function checkCollisions() {
  for (let i = snakeBody.length; i > 0; i--) {
    // iterates over the body parts
    
    // if (JSON.stringify(snakeBody[0]) === JSON.stringify(snakeBody[i])) {
    //   // means the head has collided with the body
    //   gameOver()
    //   console.log(JSON.stringify(snakeBody[0]))
    //   console.log(JSON.stringify(snakeBody[i]))
    // }
  }
}
