// Inspired by https://p5js.org/examples/structure-setup-and-draw.html

/*

    TODO:
    Add Pip boy
    Add Name, email, title
    Edit line glitch
    Add startup visual effect
    Add sidepanel glitch effect (right side transparent rectangle (purple?))
    Add startup audio effect
    Add typing effect (sync with pip boy)
    Add links for the rest of the site
    Change the rest of the site to black

*/

var y = [100, 300, 600];
var terminalBlink = false;
var TERMINAL_GREEN = "#007f00";
var LINE_GLITCH = "#A9A9A9";

function setup() {
    createCanvas(windowWidth, windowHeight);
    stroke(255)
    frameRate(30)
}

function draw(){
    background(0);
    terminal();
    staticLines();
}

function terminal() {
    
    // Glitch effect
    if(second()%2 == 0){
        terminalBlink = !terminalBlink;
    }
    
    if(!terminalBlink){
        fill(color(TERMINAL_GREEN));
        stroke(color(TERMINAL_GREEN));
        rect(45, 34, 15, 30);
    }
    
    fill(TERMINAL_GREEN);
    stroke(0);
    textSize(27);
    
    text("$", 23, 60);
    
}

function staticLines() {
    y[0] -= 1.35;
    y[1] -= 0.75;
    y[2] -= 0.5;
    
    for(var x=0; x<y.length; x++)
    {
        if(y[x]<0){
            y[x] = height;
        }
        if(second()%3 == 0){
            stroke(LINE_GLITCH);
            stroke(LINE_GLITCH);
        }
        else{
            stroke(255);
            fill(255);
        }
        line(0, y[x], width, y[x]);
        
    }
}






















/*

// Old Code...

var discard;
var bgImg;
var bg;
var thisCanvas;


function setup(){
    thisCanvas = createCanvas(100, 100); // windowWidth, windowHeight
    discard = false;
    bgImg = loadImage('http://christophergeiger.me/homepage_to_be/img/bg_old_still.png');
    bg = createSprite(windowWidth,windowHeight,0,0);
    bg.addImage(bgImg);
    
}

function draw(){
    
    thisCanvas.position(mouseX, mouseY);
    
    
    if(!discard){
        cursor(HAND);
        background(bgImg);
        
        //cracks();
        
    }
    
}

function mousePressed(){
    
}



function cracks(){
    
    
    //line(0, height, width/2, height/2);
    
    for(var i=0; i<width; i++){
        
        setTimeout(function() {
            line(i, lineEquation(i), i+1, lineEquation(i+1));  
        }, 0);
        
        // passes a start and end point (x,f(x)) and (x+1,f(x+1)) to a line for every x on
        // the canvas
    }
    
   
}

function lineEquation(x){
    // Return a linear f(x) value where m = crackSlope and  = height
    // Keep in mind the y-axis is flipped (therefore crackSlope = -crackSlope)
    
    // f(x) = -crackSlope*x + height
    // x starts at 0, f(x) = height
    // x = 1, f(x) = -crackSlope + height
    // ...
    
    var crackSlope = 2;
    crackSlope = -crackSlope;
    //crackSlope -= random();
    
    return crackSlope*x + height; 
    
    
}

*/