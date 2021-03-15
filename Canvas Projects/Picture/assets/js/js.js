//SETUP GETTING ELEMENTS
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');



//Set up window the size of the screen - full screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
 

//IMAGE
const image = new Image();

const fileDirImage = 'assets/image/earth.png';

let imageChoice = 0;
image.src = fileDirImage;
//console.log(image.src);
//console.log(image);

image.addEventListener('load', this.draw());

function draw(){
    ctx.drawImage(image, 0,0,canvas.width, canvas.height);
    
    const scannedImage = ctx.getImageData(0,0, canvas.width, canvas.height);
    //console.log(scannedImage);

    const scannedData = scannedImage.data;
    
    for(let i = 0; i < scannedData.length; i += 4){
        const total = scannedData[i] + scannedData[i+1] + scannedData[i+2];
        const averageColorValue  = total/3;
        scannedData[i] = averageColorValue + red;
        scannedData[i+1] = averageColorValue + green;
        scannedData[i+2] = averageColorValue + blue;

    }
    scannedImage.data = scannedData;
    ctx.putImageData(scannedImage,0,0);
}
var red = randomColourNumber();
var green = randomColourNumber();
var blue = randomColourNumber();

//TIMERS - UPDATE
setInterval(updateColour, 1000); //setting method to repeat


function randomColourNumber(){
    return Math.random() * 255;
}

function updateColour(){
    red = randomColourNumber();
    green = randomColourNumber();
    blue = randomColourNumber();
    draw();
}




//EVENT LISTEN
window.addEventListener('resize', this.rescaleCanvas);

function rescaleCanvas(){
    //update canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    draw();
}
