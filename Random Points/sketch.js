// Practice
// Create a sketch that places random dots all over the screen
// ToDo: add a var for time delay

var dot;

function Point() {
  this.x = random(width);
  this.y = random(height);
  this.render = function () {
    stroke(0)
    strokeWeight(5)
    fill(255)
    point(this.x, this.y)
  }
  this.set_pos = function(){
    this.x = random(width)
    this.y = random(height)
  }
}

function setup() {
  createCanvas(720, 360);
  background(155);
  dot = new Point();
}

function draw() {
  dot.render();
  dot.set_pos();
}
