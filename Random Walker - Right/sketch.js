// comment out w/ ctrl+/
// Walker that tends to move to the right
var walker;
function Walker() {
  this.x = width/2;
  this.y = height/2;
  this.render = function(){
    stroke(0);
    point(this.x, this.y)
  }
  this.walk = function(){
    ran = random(1);
    if(ran < .40){
      this.x++;
    }
    else if (ran < .60) {
      this.y++;
    }
    else if (ran < .80) {
      this.x--;
    }
    else {
      this.y--;
    }
  }
}

function setup() {
  createCanvas(720, 360);
  background(155);
  walker = new Walker();
}

function draw(){
  walker.walk();
  walker.render();
}
