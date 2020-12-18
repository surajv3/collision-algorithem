var movingRect, fixedRect 


function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(600, 400, 50, 50);
  fixedRect.shapeColor="blue"
  movingRect=createSprite(700,500, 80, 30);
  movingRect.shapeColor="blue"
}

function draw() {
  background(255,255,255);  
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  
  movingRect.debug = true;
  fixedRect.debug=true;

if (movingRect.x-fixedRect.x< fixedRect.width/2 + movingRect.width/2
  && fixedRect.x-movingRect.x< movingRect.width/2 + fixedRect.width/2
  &&movingRect.y-fixedRect.y< fixedRect.height/2 + movingRect.height/2
  && fixedRect.y-movingRect.y< movingRect.height/2 + fixedRect.height/2)
{
movingRect.shapeColor = "red";
fixedRect.shapeColor="red";
}
else{
  movingRect.shapeColor = "green"
  fixedRect.shapeColor="green";
}


  
  drawSprites();
}