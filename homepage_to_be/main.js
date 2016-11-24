// Inspired by https://p5js.org/examples/structure-setup-and-draw.html

var y = [100, 125, 300, 450, 600];
var terminalBlink = false;
var TERMINAL_GREEN = "#007f00";


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
        rect(20, 10, 15, 30);
    }
    
}

function staticLines() {
    y[0] -= 1.35;
    y[1] -= 0.75;
    y[2] -= 0.5;
    y[3] -= 1.5;
    y[4] -= 0.5;
    
    for(var x=0; x<y.length; x++)
    {
        if(y[x]<0){
            y[x] = height;
        }
        
        stroke(255);
        fill(255);
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