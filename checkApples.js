import { apple, randomPos } from "./apple.js";
import { snakeBody, growSnake} from "./snake.js";
//import { applesEaten } from "./game.js";
import { draw as drawApple } from "./apple.js";
import { gameBoard } from "./game.js";

export let applesEaten = 0;
export function checkApples(array) {
  if (array[0].x == apple.x && array[0].y == apple.y) {
    // Checks if co-ordinates for the apple and head of snake are equal
    randomPos()
    growSnake()
    applesEaten = applesEaten + 1;
  }
}
