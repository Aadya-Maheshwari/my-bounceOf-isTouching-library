var fixedRect, movingRect;
var circle;
var square;
var triangle;
var diamond;
var v;

function setup() { 
  createCanvas(1200, 800); 
  fixedRect = createSprite(600, 400, 50, 80); 
  fixedRect.shapeColor = "green";
   fixedRect.debug = true; 
   
   movingRect = createSprite(400, 200, 80, 30);
    movingRect.shapeColor = "green"; 
    movingRect.debug = true; 

    circle=createSprite(100,100,50,50);
    circle.shapeColor="green";
    circle.debug=true;

    square=createSprite(300,100,50,50);
    square.shapeColor="green";
    square.debug=true;

    triangle=createSprite(500,100,50,50);
    triangle.shapeColor="green";
    triangle.debug=true;

    diamond=createSprite(200,700,50,50);
    diamond.shapeColor="yellow";
    diamond.velocityX=5;

    v=createSprite(1000,700,50,50);
    v.shapeColor="yellow"
    v.velocityX=-5;
}
    
    function draw() { 
      background(0, 0, 0);
       movingRect.x = World.mouseX;
        movingRect.y = World.mouseY;
        
         bounceOf(diamond,v);

          if(isTouching(movingRect,circle)){
            movingRect.shapeColor = "blue"; 
            circle.shapeColor = "blue";
              } 
            else {
               movingRect.shapeColor = "green";
               circle.shapeColor = "green"; 
          }
             drawSprites(); 

          
            }




































/*var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedrect=createSprite(600,400,50,80);
  fixedrect.shapeColor="green";
  fixedrect.debug=true;

  movingrect=createSprite(400, 200, 80, 50);
  movingrect.shapeColor = "green";
  movingrect.debug=true;


}

function draw() {
  background(0,0,0);
  movingrect.y=mouseY;
  movingrect.x=mouseX;

  if(movingrect.x-fixedrect.x < movingrect.width/2 + fixedrect.width/2){
    movingrect.shapecolor="white";
    fixedrect.shapecolor="white";
  }
  else{
    movingrect.shapecolor="blue";
    fixedrect.shapecolor="blue";
  }


  drawSprites();


}
*/