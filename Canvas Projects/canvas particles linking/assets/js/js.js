const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

//Set up window the size of the screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray = [];

//Options
const numberOfParticles =20;                // Number of particles to draw
const size = 10;                            // Particle size
const colour = 'white';                     // Particle color
const speed = 2;                            // Particle speed

//creates all objects before processing
function init(){
    particlesArray = [];

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
            ctx.strokeStyle = 'rgba( 0, 255, 150, 1)';
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

    //background - colour black and fade
    ctx.fillStyle = 'rgba(0, 0, 0)';
    ctx.fillRect(0,0, canvas.width, canvas.height);

    joinLines();
    //shows all the particles on the screen
    for (i = 0; i < particlesArray.length ; i++){
        particlesArray[i].draw();
        particlesArray[i].update();
    }


    requestAnimationFrame(animate); //recursion
}

//main for order to run
function main(){
    init(); //run this first to generate the stuff
    animate(); //runs the show
}

//Run first
main();

//when the user resizes the webpage - do this.
window.addEventListener('resize', function(){

    //update canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
   
    //recreates the particles
    init();
});