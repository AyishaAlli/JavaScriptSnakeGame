import {applesEaten} from './checkApples.js'
let score = document.querySelector('.score')


export let apple = { x: 3, y: 16};

export function randomPos(){
  let xaxis = Math.ceil(Math.random()*21)
  let yaxis = Math.ceil(Math.random()*21)
  return apple = { x: xaxis, y: yaxis};
  }



//import { applesEaten } from "./game.js";

export function draw(gameBoard) {
    //score.innerHTML = applesEaten;
score.innerHTML = applesEaten
    
  let applElement = document.createElement("div");
  applElement.style.gridColumnStart = apple.x;
  applElement.style.gridRowStart = apple.y;
  applElement.classList.add("apple");
  gameBoard.appendChild(applElement);
}
