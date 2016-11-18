var player;
var enemy;
var isGameOver;

function setup(){
    isGameOver = false;
    createCanvas(250,250);
    player = createSprite(width/2, height-25, 50, 50);
    enemy = createSprite(random(5, width-5), 0, 10, 30)
}

function draw(){
    if(isGameOver){
        gameOver();
    }
    else{
        
        background(0,0,100);
        drawSprites();
        if(enemy.overlap(player)){
            isGameOver = true;
        }
        
        if((keyDown(RIGHT_ARROW) || keyDown(68)) && player.position.x < width-25){
            player.position.x++;
        }
        if((keyDown(LEFT_ARROW) || keyDown(65)) && player.position.x > 25){
            player.position.x--;
        }
        
        enemy.position.y+=3;
        if(enemy.position.y > height){
            enemy.position.x = random(5, width-5);
            enemy.position.y = 0;
        }
    }
}

function gameOver(){
    background(0);
    textAlign(CENTER);
    fill("white");
    text("Game Over!", width/2, height/2);
    text("Click anywhere to try again", width/2, height*3/4);
}

function mouseClicked(){
    if(isGameOver)
    {
        isGameOver = false;
        player.position.x = width/2;
        player.position.y = height-25;
        enemy.position.x = random(5, width-5);
        enemy.position.y = 0;
    }
}