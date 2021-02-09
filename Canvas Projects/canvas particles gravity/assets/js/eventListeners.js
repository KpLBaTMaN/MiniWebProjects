window.addEventListener('keydown',this.checkdown,false);
window.addEventListener('keyup',this.checkup,false);
//window.addEventListener('mousedown', init, false);
window.addEventListener('resize', this.rescaleCanvas);



// Use this to check for keypress codes
// function check(e) {
//     console.log(e.keyCode)
// }


//developed a bit of extra code
// function check(e) {
//     var code = e.keyCode;
//     switch (code) {
//         case 37: console.log("Left"); break; //Left key
//         case 38: console.log("Up"); break; //Up key
//         case 39: console.log("Right"); break; //Right key
//         case 40: console.log("Down"); break; //Down key
//         default: ; //Everything else
//     }
// }

function checkdown(e) {
    var code = e.keyCode;
    switch (code) {
        case 37: left_press=true; break; //Left key
        case 38: up_press=true; break; //Up key
        case 39: right_press=true; break; //Right key
        case 40: down_press=true; break; //Down key
        default: ; //Everything else
    }
}

function checkup(e) {
    var code = e.keyCode;
    switch (code) {
        case 37: left_press=false; break; //Left key
        case 38: up_press=false; break; //Up key
        case 39: right_press=false; break; //Right key
        case 40: down_press=false; break; //Down key
        default: ; //Everything else
    }
}

function rescaleCanvas(){

    //update canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

}
