//class particle - used for creating cirles on the canvas
class Planetary {
    /*
     * 
     * @param {INT} x 
     * @param {INT} y 
     * x and y for position on the canvas
     */
    constructor(x, y, colour, size, movement, range){

        this.x = x;                         //X on canvas
        this.y = y;                         //Y on canvas

        this.size = size;                   //Size of each particle
        this.colour = colour;               //Colour of the particle

        this.movementSpeed = movement;      //MovementSpeed of particle
        this.range = range;

        this.velocity_x = (Math.random() * -this.movementSpeed) + (Math.random() * this.movementSpeed);
        this.velocity_y = (Math.random() * -this.movementSpeed) + (Math.random() * this.movementSpeed);

        this.circle = Math.PI * 2;
        
       
        //Math.random() * 1 + 1

    }

    setVelocity(x, y){
        this.velocity_x = x;
        this.velocity_y = y;
    }

    

    randomDirection(){
        this.velocity_x = (Math.random() * -this.movementSpeed) + (Math.random() * this.movementSpeed);
        this.velocity_y = (Math.random() * -this.movementSpeed) + (Math.random() * this.movementSpeed);

    }

    /*
     * update is frame dependant on how fast the game runs
     */
    update(){
        this.x += this.velocity_x;
        this.y += this.velocity_y;

        //COLLISION - walls around the canvas
        if(this.x > canvas.width ) this.velocity_x *= -1;   //right side
        if(this.x < 0 ) this.velocity_x *= -1;              //left side
        if(this.y < 0) this.velocity_y *= -1;               //top side
        if(this.y > canvas.height) this.velocity_y *= -1;   //bottom side


    }

    //draw each object
    draw(){
        ctx.fillStyle = this.colour;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, this.circle);
        ctx.closePath();
        ctx.fill();


        //RANGE finder
        ctx.strokeStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.range, 0, this.circle);
        ctx.closePath();
        ctx.stroke();
    }
}



