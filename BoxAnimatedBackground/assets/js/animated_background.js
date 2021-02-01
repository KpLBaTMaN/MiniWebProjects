

const colours = [
    '#9327d7',
    '#2d2ff9',
    '#86f910',
    '#c44017' 
]


function createShape(){
    const section = document.querySelector('section');
    const box = document.createElement('span');

    /*variable for size of the shape*/
    var size = 60 * Math.random();


    box.style.left = Math.random() * innerWidth + 'px';
    box.style.top = Math.random() * innerHeight + 'px';
    
    box.style.width = 15 + size + 'px';
    box.style.height = 15 + size + 'px';
    

    const background = colours[Math.floor(Math.random() * colours.length)]
    

    
    
    box.style.background = background;

    
    /*adds the object to the section*/
    section.appendChild(box);

    
    /*removes object after duration*/
    setTimeout(() =>{

        box.remove()

    },5000)  
    
}


/*creates hexagons in intervals of x*/
setInterval(createShape, 150)