//class Lines - used for creating cirles on the canvas
class Lines{

    /*
     * 
     * @param {INT} x 
     * @param {INT} y 
     * x and y for position on the canvas
     */
    constructor(x, y){

        this.x = x;                         //X on canvas
        this.y = y;                         //Y on canvas

	this.end_x =  end_x;
	this.end_y =  end_y;

        this.height = size;                   //Size of each line
	this.width = width;
        this.colour = 'white';               //Colour of the particle


    }

    setLocation(x, y){
       	this.x = x;
        this.y = y;
    }


    /*
     * update is frame dependant on how fast the game runs
     */
    update(){

	//smooth movement from swapping poiunts or something
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
	ctx.moveTo(this.x, this.y);
	ctx.lineTo(this.end_x, this.end_y);
	ctx.lineWidth = width;
        ctx.strokeStyle = '#ff0000';
      	ctx.lineCap = 'square';
      	ctx.stroke();
    }
}
