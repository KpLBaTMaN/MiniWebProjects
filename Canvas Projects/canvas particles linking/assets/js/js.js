const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

//Set up window the size of the screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray = [];


let colours = ['#00FF00', '#0000FF', '#FFFF00'];

//Options
const numberOfParticles = 50;           // Number of particles to draw
var size = 3;                           // Particle size
var colour = '#fff';                    // Particle color
var min_speed = 1;      // Particle min speed
var max_speed = 3;      // Particle max speed
var line_distance = 20; // This is the max distance between two particles




//creates all objects before processing
function init(){
    particlesArray = [];

    //Produces all the particles
    for (i = 0; i < numberOfParticles; i++){
        const tempX = Math.random() * canvas.width;         //random x on screen
        const tempY = Math.random() * canvas.height;        //random y on screen
        particlesArray.push(new Particle(tempX, tempY));    //push onto the array

    }
}


function animate(){

    //background - colour black and fade
    ctx.fillStyle = 'rgba(0, 0, 0)';
    ctx.fillRect(0,0, canvas.width, canvas.height);


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