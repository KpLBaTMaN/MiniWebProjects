//SETUP GETTING ELEMENTS
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');



//Set up window the size of the screen - full screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;



//CONTROLS
let particalIncrease = 5; //controls the space between pixels
let particalSize = particalIncrease +1;

//MOUSE
let mouse = {
    x:null,
    y:null,
    radius:100
}

//EVENT
window.addEventListener('mousemove', function(event){
    mouse.x = event.x + canvas.clientLeft/2;
    mouse.y = event.y + canvas.clientTop/2;
});


function drawImageParticles(){
    console.log("draw particles method");
    let imageWidth = png.width;
    let imageHeight = png.height;

    console.log("Width of image: " + png.width);
    console.log("Height of image: " + png.height);


    const dataImage = ctx.getImageData(0,0, imageWidth, imageHeight);
    console.log(dataImage);
    
    ctx.clearRect(0,0, canvas.wdith, canvas.height);

    class Particle {
        /*
         * 
         * @param {INT} x 
         * @param {INT} y 
         * x and y for position on the canvas
         */
        constructor(x, y, colour){
    
            this.x = x + canvas.width/2 - imageWidth *2;                         //X on canvas
            this.y = y + canvas.height/2 - imageHeight *2;                       //Y on canvas
            this.size = particalSize;                                           //Size of each particle
            this.colour = colour;                                               //Colour of the particle
    
            this.defaultX = x + canvas.width/2 - imageWidth *2
            this.defaultY = y + canvas.height/2 - imageHeight *2;
            
            this.density = 2;
    
        }


        //draw each object
        draw(){
            ctx.beginPath();
            ctx.fillRect(this.x, this.y, this.size, this.size);
            //ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fill();
        }
    
        /*
         * update is frame dependant on how fast the game runs
         */
        update(){
            //console.log(parseInt("10"));


            //IMPORTANT - for each colour of particle
            ctx.fillStyle = this.colour;

            let dx = mouse.x - this.x;
            let dy = mouse.y - this.y;

            let distance = Math.sqrt(dx * dx + dy * dy);
            let forceDirectionX = dx / distance;
            let forceDirectionY = dy / distance;

            
            const topDistance = 100;
            let force = (topDistance - distance ) / topDistance;
            if(force < 0) force = 0;

            let directionX = (forceDirectionX * force * this.density * 0.6);
            let directionY = (forceDirectionY * force * this.density* 0.6);

            
            if(distance < mouse.radius + this.size){
                this.x -= directionX;
                this.y -= directionY;
                this.size = particalSize/2;

            }
            
            else{
                this.size = particalSize;
                
                if(this.x !== this.defaultX){
                    let dx = this.x - this.defaultX;
                    this.x -= dx/20;
                }
                
                if(this.y !== this.defaultY){
                    let dy = this.y - this.defaultY;
                    this.y -= dy/20;
                }
                
            }
        
            this.draw();
        }
    
    }

    function init(){
        console.log("init");
        particleArray = [];

        console.log(dataImage.length);
        
        for(let y = 0, y2 = dataImage.height; y < y2; y++){
            for(let x = 0, x2 = dataImage.width; x < x2; x++){
                if(dataImage.data[(y * 4 * dataImage.width) + (x * 4) + 3] > 128) {
                    let positionX = x;
                    let positionY = y;
                    let color = "rgb(" + dataImage.data[(y * 4 * dataImage.width) + (x * 4)] + "," + 
                    dataImage.data[(y * 4 * dataImage.width) + (x * 4) + 1] + "," + 
                    dataImage.data[(y * 4 * dataImage.width) + (x * 4) + 2] + ")";
                    
                    particleArray.push(new Particle(positionX * particalIncrease, positionY * particalIncrease, color));
                }
            }
        }

        console.log("Loaded: " + (dataImage.height * dataImage.width) + " particales");
    }

    function animate(){
        //console.log("Running")
     
       
        requestAnimationFrame(animate);
        ctx.fillStyle = 'rgba(0,0,0, 0.07)';
        ctx.fillRect(0,0, innerWidth, innerHeight);

   
        ctx.drawImage(heart, particleArray[0].x, particleArray[0].y, dataImage.width*particalIncrease ,dataImage.height*particalIncrease );
        //particales
        for(let i = 0; i < particleArray.length; i++){
            particleArray[i].update();
        }

        //image
        

        
    }
    init();
    animate();
}

 
//IMAGE
const png = new Image();
const heart = new Image();
/*
const fileDirImage = 'assets/image/Image.jpg';

png.src = fileDirImage;
*/
png.src = image1;
heart.src = image2;
//console.log(image.src);
//console.log(image);



png.addEventListener('load', (event) => {
    console.log('page has loaded');
    ctx.drawImage(png, 0,0);
    drawImageParticles();

});

heart.addEventListener('load', (event) => {
    console.log('heart loaded');
    ctx.drawImage(heart, canvas.height,canvas.width);
});


//EVENT LISTEN
window.addEventListener('resize', this.rescaleCanvas);

function rescaleCanvas(){
    //update canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}


