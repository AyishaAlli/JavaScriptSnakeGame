let applesEaten = 0;

export let xaxis = Math.ceil(Math.random() * 21);
export let yaxis = Math.ceil(Math.random() * 21);
export let apple = { x: xaxis, y: yaxis };

export function draw(gameBoard) {

  let applElement = document.createElement("div");
  applElement.style.gridColumnStart = apple.x;
  applElement.style.gridRowStart = apple.y;
  applElement.classList.add("apple");
  gameBoard.appendChild(applElement);
}
