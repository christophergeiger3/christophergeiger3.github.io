var rect_heights = []
var rect_count = 20

function setup() {
  createCanvas(640, 360);
  for (var i = 0; i < rect_count; i++) {  //Set all rectangle heights to 0
    rect_heights[i] = 0;
  }
}

function draw(){
  background(127); // Set the background as gray

  var random_pick = floor(random(rect_count));
  rect_heights[random_pick]++;  // Increase the height of a random rectangle

  stroke(0);  // Set rectangle outline color
  strokeWeight(2);  // Set brush size
  fill(255);  // Set rectangle color

  var rect_width = width/rect_count;  // Can't call width outside of p5 functions

  for (var i = 0; i < rect_heights.length; i++) {
    rect(rect_width*i, height-rect_heights[i], rect_width-1, rect_heights[i])
    // rect(x_pos, y_pos, width, height)
    // Optional parameters: top-left, top-right, bot-left, bot-right
    // for the radii of the rectangle
  }
}
