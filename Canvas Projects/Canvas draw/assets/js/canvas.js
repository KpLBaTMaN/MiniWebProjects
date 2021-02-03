//The CanvasRenderingContext2D interface, part of the Canvas API,
//https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D

window.addEventListener("load", () => {
    const canvas = document.querySelector("#firstCanvas");
    const ctx = canvas.getContext("2d");

    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    console.log("Height: " + canvas.height + " Width: " + canvas.width);


    //variables
    let painting = false;

    function startPosition(e){
        painting = true;
        draw(e);
    }

    function finishedPosition(){
        painting = false;
        ctx.beginPath();
    }

    function draw(e){
        if(!painting) return;
        ctx.lineWidth = 5; 
        ctx.lineCap = "round";

        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
        
    }


    //eventListeners
    canvas.addEventListener("mousedown", startPosition);
    
    canvas.addEventListener("mouseup", finishedPosition);
    canvas.addEventListener("mousemove", draw);
});
