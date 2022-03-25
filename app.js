const x = []; // X AXIS ARRAY
const y= []; // X AXIS ARRAY
let bodyParts=2;

let direction='R';
let running=false; 



function startGame(){
    newApple()
    running=true;


}
function newApple(){

}

function move(){
    for (let i = bodyParts; i > 0; i--) { // iterates over all the body parts of the snake
        x[i] = x[i-1];// shifting all the coordinates of the x-axis of the array by one space
        y[i] = y[i-1]; // shifting all the coordinates of the y-axis of the array by one space
    }
}

function checkApple(){

}
function checkCollisions(){

}
function gameOver (){
  alert("Game Over, You've lost")
  applesEaten = 0;
  running=false;
}
