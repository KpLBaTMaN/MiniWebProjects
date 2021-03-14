let planetaryArray = [];
let starArray = [];


function populate(){
    planetaryArray = [];
    starArray = [];
    lineColour = lineColourSelection[Math.floor(Math.random()*lineColourSelection.length)];

    //Produces all the particles
    for (i = 0; i < numberOfPlanetary; i++){
        
        const tempX = Math.random() * canvas.width;         //random x on screen
        const tempY = Math.random() * canvas.height;        //random y on screen
        

        planetaryArray.push(new Planetary(tempX, tempY, colourPlanetary, sizePlanetary, speedPlanetary, sizePlanetary+ rangePlanetary ));    //push onto the array
    }


    //Stars
    for (i = 0; i < numberOfStars; i++){
        
        const tempX = Math.random() * canvas.width;         //random x on screen
        const tempY = Math.random() * canvas.height;        //random y on screen
        

        starArray.push(new Planetary(tempX, tempY, colourStar, sizeStar, speedStar, sizeStar+ rangeStar));    //push onto the array
    }
}

function starsCollision(){

    for (k = 0; k < planetaryArray.length; k++){

        for(j = 0; j < starArray.length; j++){
            //if a planet is in the range of one another - pull 

            h1Element.innerHTML = getDistance(starArray[j].x,starArray[j].y, planetaryArray[k].x, planetaryArray[k].y);
            //console.log(getDistance(starArray[j].x,starArray[j].y, planetaryArray[k].x, planetaryArray[k].y));

        }
    }
}

function getDistance(x1, y1, x2, y2){
    let xDistance = x2 - x1;
    let yDistance = y2 - y1;
    //Pythahorean Theorem
    return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2))

}



//Order matters when animate - mostly with draw layers
function animate(){
    drawBackground();

    controlsFunctions();
  
    //animate planets
    for (i = 0; i < planetaryArray.length ; i++){
        planetaryArray[i].draw();
        planetaryArray[i].update();
    }

    //animate stars
    for (i = 0; i < starArray.length ; i++){
        starArray[i].draw();
        starArray[i].update();
    }

    starsCollision()

    requestAnimationFrame(animate); //recursion
}

function controlsFunctions(){
   
}

function drawBackground(){
     //background - colour black
     ctx.fillStyle = 'rgb(0, 0, 0)';
     ctx.fillRect(0,0, canvas.width, canvas.height);
}


//main for order to run
function main(){
    populate();
    animate(); //runs the show
}

//Run main
main();







