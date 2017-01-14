// Made during the Hack-Night hackathon, held online by HackClub: https://hackclub.com/

// Initialize buttons
var recButton, circButton, sqButton, lineButton;
// The level at which all the spawn buttons are vertically alligned upon
var BUTTON_Y_ALLIGNMENT = 20;
// The distance each button is horizontally spaced from each other
var BUTTON_OFFSET = 60;
var BACKGROUND_COLOR = '#FDF3E7';

var rectangles = [];
var circles = [];
var squares = [];
var lines = [];


function setup() {
    createCanvas(windowWidth, windowHeight);
    background(BACKGROUND_COLOR);
    
    // Create buttons to spawn shapes
    recButton = createButton('Rectangle');
    circButton = createButton('Circle');
    sqButton = createButton('Square');
    lineButton = createButton('Line');
    
    // Arrange them on the screen
    recButton.position( (BUTTON_OFFSET * 1 * 5/8), BUTTON_Y_ALLIGNMENT) // (The 5/8 adjusts the recButton's allignment relative to the other buttons)
    circButton.position( (BUTTON_OFFSET * 2), BUTTON_Y_ALLIGNMENT)
    sqButton.position( (BUTTON_OFFSET * 3), BUTTON_Y_ALLIGNMENT)
    lineButton.position( (BUTTON_OFFSET * 4 * 33/32), BUTTON_Y_ALLIGNMENT) // Same here

    // Give the buttons something to do
    recButton.mousePressed(spawnRectangle);
    circButton.mousePressed(spawnCircle);
    sqButton.mousePressed(spawnSquare);
    lineButton.mousePressed(spawnLine);
    
}

function draw() {
    // Click buttons to create objects
    // Buttons for squares, rectangles, lines, circles...
    // Drag the objects around, change the code in the bottom right of the screen
    
    
}

function spawnRectangle() {
    // body...
}

function spawnCircle() {
    // body...
}

function spawnSquare() {
    // body...
}

function spawnLine() {
    // body...
}


// Constructor functions...

function MyRectangle(){
    this.x = width/2;
    this.y = height/2;
}

function MyCircle(){
    this.x = width/2;
    this.y = height/2;
}

function MySquare(){
    this.x = width/2;
    this.y = height/2;
}

function MyLine(){
    this.x = width/2;
    this.y = height/2;
}