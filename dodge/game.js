var player;
var enemy;

function setup(){
    createCanvas(250,250);
    player = createSprite(width/2, height-25, 50, 50);
    enemy = createSprite(width/2, 0, 10, 30)
}

function draw(){
    background(0,0,100);
    drawSprites();
    if((keyDown(RIGHT_ARROW) || keyDown(68)) && player.position.x < width-25){
        player.position.x++;
    }
    if((keyDown(LEFT_ARROW) || keyDown(65)) && player.position.x > 25){
        player.position.x--;
    }
}