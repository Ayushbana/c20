var movingRect,fixedRect;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  fixedRect=createSprite(400, 200, 50, 50); 
  movingRect=createSprite(100,200,40,60);
   fixedRect.shapeColor="blue";
    movingRect.shapeColor="blue";
     fixedRect.debug=true;
      movingRect.debug=true;



}

function draw() {
  background(0);  
  movingRect.x=mouseX; movingRect.y=mouseY; 
  if(movingRect.x-fixedRect.x<movingRect.width/2 +fixedRect.width/2
     && fixedRect.x-movingRect.x<movingRect.width/2 +fixedRect.width/2
     && movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2
     && fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2){
        fixedRect.shapeColor="red";
         movingRect.shapeColor="red";
       } else{ fixedRect.shapeColor="blue";
        movingRect.shapeColor="blue"; }

  
  
  
  
  drawSprites();




}