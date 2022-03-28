export const SPEED = 4; // The hieght the number, the faster it moves
export let snakeBody = [
  { x: 11, y: 11 },
  { x: 12, y: 11 },
  { x: 13, y: 11 }
  
]; // an array of x and y posistions
//let bodyParts = snakeBody.length;
let direction = "D"; // the direction the snake will be moving in

export function draw(gameBoard) {
  snakeBody.forEach((segment) => {
    const snakeElement = document.createElement("div"); // creates div element
    snakeElement.style.gridColumnStart = segment.x; // fills grid element where its set in snakeBody on the y-axis
    snakeElement.style.gridRowStart = segment.y; // fills grid element where its set in snakeBody on the x-axis
    snakeElement.classList.add("snake"); // add the css styling
    gameBoard.appendChild(snakeElement); // adds to game board
  });
}

export function update() {
  let part = {};

  window.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowUp":
        if (direction != "D") {
          direction = "U";
        }
        break;
      case "ArrowDown":
        if (direction != "U") {
          direction = "D";
        }
        break;
      case "ArrowLeft":
        if (direction != "R") {
          direction = "L";
        }
        break;
      case "ArrowRight":
        if (direction != "L") {
          direction = "R";
        }
        break;
    }
  });
  switch (
    direction // switch statement for switching directions
  ) {
    case "U":
      part = { x: snakeBody[0].x + 0, y: snakeBody[0].y - 1 };
      break;
    case "D":
      part = { x: snakeBody[0].x + 0, y: snakeBody[0].y + 1 };
      break;
    case "L":
      part = { x: snakeBody[0].x - 1, y: snakeBody[0].y + 0 };
      break;
    case "R":
      part = { x: snakeBody[0].x + 1, y: snakeBody[0].y + 0 };
      break;
  }
  snakeBody.unshift(part);
  snakeBody.pop();
}

//function checkApples()

export function growSnake(){
  snakeBody.push({ x: snakeBody[0].x, y: snakeBody[0].y }); //adds an extra body part by adding another object to the snakeBody array - x-axis + 1
}