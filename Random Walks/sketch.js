// comment out w/ ctrl+/

var walker;
function Walker() {
  this.x = width/2;
  this.y = height/2;
  this.render = function(){
    stroke(0);
    point(this.x, this.y)
  }
  this.walk = function(){
    ran = floor(random(4));
    if (ran === 0) {
      this.x++;
    }
    else if (ran == 1) {
      this.x--;
    }
    else if (ran == 2) {
      this.y++;
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
