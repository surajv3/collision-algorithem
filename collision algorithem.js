var movingRect, fixedRect 


function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(600, 400, 50, 50);
  fixedRect.shapeColor="blue"
  movingRect=createSprite(600,200, 80, 30);
  movingRect.shapeColor="blue"

  movingRect.velocityX=-5
  movingRect.velocityX=5
}

function draw() {
  background(255,255,255);  

  
  movingRect.debug = true;
  fixedRect.debug=true;

if (movingRect.x-fixedRect.x< fixedRect.width/2 + movingRect.width/2
  && fixedRect.x-movingRect.x< movingRect.width/2 + fixedRect.width/2)

{
  movingRect.velocityX = movingRect.velocityX * (-1);
  fixedRect.velocityX = fixedRect.velocityX * (-1);
}

if (movingRect.y-fixedRect.y< fixedRect.height/2 + movingRect.height/2
    && fixedRect.y-movingRect.y< movingRect.height/2 + fixedRect.height/2))
{
movingRect.velocityY = movingRect.velocityY * -1;
fixedRect.velocityY = fixedRect.velocityY * -1;

}

  
  drawSprites();
}