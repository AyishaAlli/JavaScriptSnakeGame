import { applesEaten } from "./checkApples.js";
let score = document.querySelector(".score");

export let appleX = 3;
export let appleY = 16;

export function randomPos() {
  appleX = Math.ceil(Math.random() * 21);
  appleY = Math.ceil(Math.random() * 21);
}

//import { applesEaten } from "./game.js";

export function draw(gameBoard) {
  //score.innerHTML = applesEaten;
  score.innerHTML = applesEaten;
  let applElement = document.createElement("div");
  applElement.style.gridColumnStart = appleX;
  applElement.style.gridRowStart = appleY;
  applElement.classList.add("apple");
  gameBoard.appendChild(applElement);
}
