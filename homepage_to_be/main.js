var discard;
var bgImg;

function setup(){
    createCanvas(windowWidth, windowHeight);
    discard = false;
    bgImg = loadImage('http://christophergeiger.me/homepage_to_be/img/bg_old_still.png');
}

function draw(){
    if(!discard){
        cursor(HAND);
        background(bgImg);
        
        cracks();
    }
}

function cracks(){
    
    
    //line(0, height, width/2, height/2);
    
    for(var i=0; i<width; i++){
        line(i, lineEquation(i), i+1, lineEquation(i+1))
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