var fixedRectangle, movingRectangle;


function setup() {
  createCanvas(800,400);
 fixedRectangle= createSprite(400, 200, 50, 50);
 movingRectangle=createSprite(600, 200, 50, 50);
 fixedRectangle.shapeColor ="red"
 movingRectangle.shapeColor = "red"
  movingRectangle.debug=true;
fixedRectangle.debug=true;







}

function draw() {
  background(255,255,255); 
  
 
  movingRectangle.x=World.mouseX
  movingRectangle.y=World.mouseY
console.log(movingRectangle.y-fixedRectangle.y)
  if(movingRectangle.x-fixedRectangle.x<
    fixedRectangle.width/2+movingRectangle.width/2
    && fixedRectangle.x-movingRectangle.x<
    fixedRectangle.width/2+movingRectangle.width/2
    &&
    movingRectangle.y-fixedRectangle.y<
    fixedRectangle.height/2+movingRectangle.height/2
    && fixedRectangle.y-movingRectangle.y<
    fixedRectangle.height/2+movingRectangle.height/2
    )
 {
  fixedRectangle.shapeColor ="black"
  movingRectangle.shapeColor = "black"


 }
else{
  fixedRectangle.shapeColor ="red"
  movingRectangle.shapeColor = "red"
}




  drawSprites();










}