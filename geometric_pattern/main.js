var NUM_CIRCLES = 12;
var circleDiameter;
var circleRadius;
var rVal;
var gVal;
var bVal;

function setup() {
    createCanvas(480, 600);
    circleDiameter = width/NUM_CIRCLES; // Width is the width of the canvas, determined by p5.js
    circleRadius = circleDiameter/2;
    
}

function draw() {
  rVal = 255;
  gVal = 0;
  bVal = 0;

  var isShifted = false;

  for(y = height; y>=0; y -= circleRadius){
  
    var x;

    if (isShifted){
      x = circleRadius;
    }
    else x = 0;

    while (x <= width){
      fill(color(rVal,gVal,bVal));
      stroke(color(rVal,gVal,bVal));
      ellipse(x, y, circleDiameter, circleDiameter);
      x = x + circleDiameter;
    }

    isShifted = !isShifted;
    rVal = rVal - 2;
    gVal = gVal + 7;
    bVal = bVal + 3;
  }
}