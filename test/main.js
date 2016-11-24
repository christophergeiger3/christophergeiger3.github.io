// Not my code...

var myCanvas;

function setup() {
  //use a variable to store a pointer to the canvas
  myCanvas = createCanvas(100, 100);
}

function draw() {
  background(237, 34, 93);
  fill(0);

  //move the canvas to the horizontal mouse position
  //relative to the window
  myCanvas.position(winMouseX+1, windowHeight/2);

 //the y of the square is relative to the canvas
 rect(20,mouseY,60,60);
}