//SETUP GETTING ELEMENTS
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');



//DIV - element
var divElement = document.getElementById('divDistance'); 
var h1Element = document.getElementById('distance'); 




//Set up window the size of the screen - full screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight -  divElement.offsetHeight;
 
 



//OPTIONS - variables for options in the canvas
//Options planetary
const numberOfPlanetary =1;                // Number of Planets to draw
const sizePlanetary = 15;                            // Particle size
const colourPlanetary = '#222222';                     // Particle color
const speedPlanetary = 2;                            // Particle speed
const rangePlanetary = 50;  

//Options stars
const numberOfStars = 1;                        // Number of Planets to draw
const sizeStar = 15;                            // Particle size
const colourStar = '#FFFF00';                     // Particle color
const speedStar = 0;                            // Particle speed
const rangeStar = 50;  


//Options for controlling the particle speed
const particleShiftSpeed = 0.05;

//Line Options
const lineColourSelection = ['red', 'orange', 'yellow', 'green', 'pink'];
var lineColour = lineColourSelection[Math.floor(Math.random()*lineColourSelection.length)];


//Options control states keyboard
var left_press = false;
var up_press = false;
var right_press = false;
var down_press = false;