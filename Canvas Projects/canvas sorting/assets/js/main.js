
//Order matters when animate - mostly with draw layers
function animate(){

    drawBackground();


    controlsFunctions();
  
    //shows all the particles on the screen
    for (i = 0; i < particlesArray.length ; i++){
        particlesArray[i].draw();
        particlesArray[i].update();
    }

    requestAnimationFrame(animate); //recursion
}

function controlsFunctions(){
   
}

function drawBackground(){
     //background - colour black
     ctx.fillStyle = 'rgb(0, 0, 0)';
     ctx.fillRect(0,0, canvas.width, canvas.height);
}

//creates all objects before processing
function init(){
    linesArray = [];

    //Produces all the particles
    for (i = 0; i < numberOfLines; i++){
        
        var distanceBetweenLines = canvas.width/ nummebrOfLines;
        var x_position = distanceBetweenLines * i;
        

        // i
        const tempX = Math.random() * canvas.width;         //random x on screen
        const tempY = Math.random() * canvas.height;        //random y on screen
        

        linesArray.push(new Lines(tempX, tempY));    //push onto the array

    }
}

const numberOfLines =20;

//Array  Of Lines
let linesArray = [];





//main for order to run
function main(){
    init();
    animate(); //runs the show
}

//Run main
main();







