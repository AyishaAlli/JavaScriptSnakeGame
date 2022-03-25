import { apple} from "./apple.js";
import { snakeBody } from "./snake.js";
//import { applesEaten } from "./game.js";
import { draw as drawApple } from "./apple.js";
import { gameBoard} from "./game.js";

let applesEaten = 0;
export function checkApples(array) {
  if (array[0].x == apple.x && array[0].y == apple.y) { // Checks if co-ordinates for the apple and head of snake are equal
   snakeBody.push({x:array[0].x , y:array[0].y}) //adds an extra body part by adding another object to the snakeBody array - x-axis + 1
   applesEaten = applesEaten + 1

  }

}

