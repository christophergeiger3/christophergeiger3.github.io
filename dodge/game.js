var player;
var playerImage;
var enemy;
var enemyImage;
var isGameOver;
var bgImg;

function preload(){
    bgImg = loadImage("christophergeiger.me/dodge/img/bg.png")
    playerImage = loadImage("christophergeiger.me/dodge/img/player.png");
    enemyImage = loadImage("christophergeiger.me/dodge/img/rock.png");
}

function setup(){
    isGameOver = false;
    createCanvas(256,256);
    player = createSprite(width/2, height-(playerImage.height/2), 0, 0);
    player.addImage(playerImage);
    enemy = createSprite(random(5, width-5), 0, 10, 30)
    enemy.addImage(enemyImage);
    enemy.rotationSpeed = 4.0;
}

function draw(){
    if(isGameOver){
        gameOver();
    }
    else{
        
        background(bgImg);
        drawSprites();
        if(enemy.overlap(player)){
            isGameOver = true;
        }
        
        if((keyDown(RIGHT_ARROW) || keyDown(68)) && player.position.x < width-(playerImage.width/2)){
            player.position.x++;
        }
        if((keyDown(LEFT_ARROW) || keyDown(65)) && player.position.x > (playerImage.width)) {
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
        player.position.y = height-(playerImage.height/2);
        enemy.position.x = random(5, width-5);
        enemy.position.y = 0;
    }
}