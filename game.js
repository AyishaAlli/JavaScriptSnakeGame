let lastRenderTime = 0;
const SPEED = 2; // The hight the number, the faster it moves 

function main(currentTime){
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime-lastRenderTime)/1000
    if (secondsSinceLastRender < 1 / SPEED){
        return
    }
    
    console.log("Render")
    lastRenderTime = currentTime

    //update()
    //draw()
}

//window.requestAnimationFrame(main)