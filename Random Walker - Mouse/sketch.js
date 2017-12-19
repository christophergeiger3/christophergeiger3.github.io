// comment out w/ ctrl+/
// Walker that has 50% chance of going right
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
    if(ran < .50){
      let dx = mouseX - this.x;
      let dy = mouseY - this.y;
      if(dx > 0){
        this.x++;
      }
      else if(dx < 0){
        this.x--;
      }
      if(dy > 0){
        this.y++;
      }
      else if (dy < 0){
        this.y--;
      }
    }
    else if (ran < .625) {
      this.x++;
    }
    else if (ran < .75) {
      this.y++;
    }
    else if (ran < .875) {
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
