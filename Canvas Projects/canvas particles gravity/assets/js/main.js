const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');



//<div>
var divElement = document.getElementById('Instructions'); 

//Set up window the size of the screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight - divElement.offsetHeight ;
 


let particlesArray = [];






//creates all objects before processing
function init(){
    particlesArray = [];
    lineColour = lineColourSelection[Math.floor(Math.random()*lineColourSelection.length)];

    //Produces all the particles
    for (i = 0; i < numberOfParticles; i++){
        
        const tempX = Math.random() * canvas.width;         //random x on screen
        const tempY = Math.random() * canvas.height;        //random y on screen
        

        particlesArray.push(new Particle(tempX, tempY, colour, size, speed));    //push onto the array

    }
}


//Connects the lines togther for each particle on the screen
function joinLines(){

    for (k = 0; k < particlesArray.length; k++){
        for(j = k; j < particlesArray.length; j++){
            ctx.strokeStyle = lineColour;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesArray[k].x, particlesArray[k].y);
            ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
            ctx.stroke();
        }
    }

}




//Order matters when animate - mostly with draw layers
function animate(){

    //background - colour black
    ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.fillRect(0,0, canvas.width, canvas.height);

    

    controls();

    joinLines();
    //shows all the particles on the screen
    for (i = 0; i < particlesArray.length ; i++){
        particlesArray[i].draw();
        particlesArray[i].update();
    }


    requestAnimationFrame(animate); //recursion
}


function controls(){
    //particleShiftSpeed
    if(left_press == true){
        for (i = 0; i < particlesArray.length ; i++){ 
            particlesArray[i].velocity_x -= particleShiftSpeed;
        }
    }
    if(right_press == true){
        for (i = 0; i < particlesArray.length ; i++){ 
            particlesArray[i].velocity_x += particleShiftSpeed;
         
            
        }
    }
    if(up_press == true){
        for (i = 0; i < particlesArray.length ; i++){ 
           
            particlesArray[i].velocity_y -= particleShiftSpeed;
            
        }
    }
    if(down_press == true){
        for (i = 0; i < particlesArray.length ; i++){ 
            particlesArray[i].velocity_y += particleShiftSpeed;
        }
    }
    
   
}

//main for order to run
function main(){
    init(); //run this first to generate the stuff
    animate(); //runs the show
}



//when the user resizes the webpage - do this.
window.addEventListener('resize', function(){

    //<div>
    var divElement = document.getElementById('Instructions'); 

    //console.log(divElement.offsetHeight); //height of div 


    
    //update canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - divElement.offsetHeight ;
   
    //recreates the particles
    init();
});



//Run main
main();







