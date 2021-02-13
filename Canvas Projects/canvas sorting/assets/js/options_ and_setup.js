//SETUP GETTING ELEMENTS
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

//Set up window the size of the screen - full screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
 

//OPTIONS - variables for options in the canvas
//Options particle
const numberOfLines =20;

//Array  Of Lines
let linesArray = [];

//Line Options
const lineColourSelection = ['white', 'red'];



