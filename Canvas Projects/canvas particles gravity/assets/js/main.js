//Order matters when animate - mostly with draw layers
function animate(){

    drawBackground();


    controlsFunctions();
  
    // //shows all the particles on the screen
    // for (i = 0; i < particlesArray.length ; i++){
    //     particlesArray[i].draw();
    //     particlesArray[i].update();
    // }

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
    animate(); //runs the show
}

//Run main
main();







