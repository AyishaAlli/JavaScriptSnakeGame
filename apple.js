let score = document.querySelector('.score')

export let apple = { x: xaxis, y: yaxis};

//import { applesEaten } from "./game.js";

export function draw(gameBoard) {
    //score.innerHTML = applesEaten;

    
  let applElement = document.createElement("div");
  applElement.style.gridColumnStart = apple.x;
  applElement.style.gridRowStart = apple.y;
  applElement.classList.add("apple");
  gameBoard.appendChild(applElement);
}
