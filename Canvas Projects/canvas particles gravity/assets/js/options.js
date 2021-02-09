//OPTIONS - variables for options in the canvas


//Options particle
const numberOfParticles =20;                // Number of particles to draw
const size = 15;                            // Particle size
const colour = '#000000';                     // Particle color
const speed = 2;                            // Particle speed

//Options for controlling the particle speed
const particleShiftSpeed = 0.05;

//Line Options
const lineColourSelection = ['red', 'orange', 'yellow', 'green', 'pink'];
var lineColour = lineColourSelection[Math.floor(Math.random()*lineColourSelection.length)];


//Options control states
var left_press = false;
var up_press = false;
var right_press = false;
var down_press = false;