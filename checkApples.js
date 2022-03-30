import { appleX, appleY, randomPos } from "./apple.js";
import { snakeBody, growSnake} from "./snake.js";


export let applesEaten = 0;
export function checkApples(array) {
  if (array[0].x == appleX && array[0].y == appleY) {
    // Checks if co-ordinates for the apple and head of snake are equal
    randomPos()
    growSnake()
    applesEaten = applesEaten + 1;
  }
}
