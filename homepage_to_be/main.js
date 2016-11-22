var discard;
var bgImg;

function setup(){
    createCanvas(windowWidth, windowHeight);
    discard = false;
    bgImg = loadImage('/bg_old_still.png');
}

function draw(){
    if(!discard){
        cursor(HAND);
        background('white');
    }
}