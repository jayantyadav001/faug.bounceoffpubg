var fixedRect, movingRect;
var faug,pubg;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  faug = createSprite(100,100,50,80);
  pubg = createSprite(800,100,80,30);
faug.velocityX = 5;
pubg.velocityX = -5;
}

function draw() {
  background(0,0,0);  
bounceooff(movingRect,fixedRect);
bounceooff(faug,pubg);
  drawSprites();
}

