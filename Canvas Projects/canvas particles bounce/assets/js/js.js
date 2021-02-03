const canvas = document.getElementById('myCanvas');

const ctx = canvas.getContext('2d');
console.log(ctx); //view all the methods we need to see


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particalesArray = [];

const numberOfParticles = 1000;

let colours = ['#00FFFF', '#FF00FF', '#FFFF00'];

let titleSheild = document.getElementById('titleSheild');
let titleSheildInfo = titleSheild.getBoundingClientRect();

console.log(titleSheild);
console.log(titleSheildInfo);

let title = {
    x: titleSheildInfo.left,
    y: titleSheildInfo.top,
    width: titleSheildInfo.width,
    height: titleSheildInfo.height
}


//class particle - used for creating cirles on the canvas
class Particle {

    /*
     * 
     * @param {INT} x 
     * @param {INT} y 
     * x and y for position on the canvas
     */
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.size = Math.random() * 5 + 2;
        this.carryWeight = Math.random() * 1 + 1;
        this.weight = this.carryWeight;
        this.directionX = Math.random() * 1 + 1;
        this.colour = colours[Math.floor(Math.random() * particalesArray.length)];

    }

    /*
     * update is frame dependant on how fast the game runs
     */
    update(){
        if(this.y > canvas.height){
            this.y = 0 - 10;
            this.weight = this.carryWeight;
            this.x = Math.random() * canvas.width;
        }

        //window to the other side
        //any particle traveling from the right side will spawn on the left side
        if(this.x > canvas.width){
            this.x = 0 - 10;
        }

        this.weight += 0.01;
        this.y += this.weight;
        this.x += this.directionX;


        


        //COLLISION for title element
        if(
            this.x < title.x + title.width && //from point x of the title to the right of the title
            this.x + this.size > title.x && //from the point 
            this.y < title.y + title.height &&
            this.y + this.size > title.y
        ){
            
            
            //full down speed - gravity 
            this.y -=3;

            //bounce
            this.weight *= -0.5;

        }
        
    }


    //draw each object
    draw(){
        ctx.fillStyle = this.colour;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }
}


//creates all objects before processing
function init(){
    particalesArray = [];

    //Produces all the particles
    for (i = 0; i < numberOfParticles; i++){
        const tempX = Math.random() * canvas.width;
        const tempY = Math.random() * canvas.height;
        particalesArray.push(new Particle(tempX, tempY));
       //console.log("Created particle: " + i);
    }
}


//main for order to run
function main(){
    init(); //run this first to generate the stuff
    animate(); //runs the show
}



function animate(){

    //background - colour black and fade
    ctx.fillStyle = 'rgba(0, 0, 0, 0.01)';
    ctx.fillRect(0,0, canvas.width, canvas.height);


    //shows all the particles on the screen
    for (i = 0; i < particalesArray.length ; i++){
        particalesArray[i].draw();
        particalesArray[i].update();
    }


    //creates the background for the title
    ctx.fillStyle = 'rgb(200,200,200)';
    ctx.fillRect(title.x,title.y, title.width, title.height);

    requestAnimationFrame(animate); //recursion
}

main();



//when the user resizes the webpage - do this.
window.addEventListener('resize', function(){

    //update canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
   

    //regets the title information on the title element
    titleSheildInfo = titleSheild.getBoundingClientRect();
    //resets the object
    title = {
        x: titleSheildInfo.left,
        y: titleSheildInfo.top,
        width: titleSheildInfo.width,
        height: titleSheildInfo.height
    }

    //recreates the particles
    init();

    

});