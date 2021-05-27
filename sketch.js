var fixedR, movingR
function setup() {
  createCanvas(1200,800);
  fixedR=createSprite(600, 400, 50, 80);
  movingR=createSprite(400,200,80,30)
  movingR.shapeColor="green"
  fixedR.shapeColor="green"
}

function draw() {
  background(255,255,255);  
  movingR.x=World.mouseX
  movingR.y=World.mouseY
  if(movingR.x-fixedR.x < fixedR.width/2 + movingR.width/2 
    && fixedR.x-movingR.x < fixedR.width/2 + movingR.width/2
    && movingR.y-fixedR.y < fixedR.height/2 + movingR.height/2 
    &&  fixedR .y-movingR.y < fixedR.height/2 + movingR.height/2){
  movingR.shapeColor="red"
  fixedR.shapeColor="red"}
 else{
  movingR.shapeColor="green"
  fixedR.shapeColor="green"
 }
  drawSprites();
}