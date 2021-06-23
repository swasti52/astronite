var bath;

function preload(){
  bath = loadAnimation("images/brush.png","images/bath1.png","images/bath2.png");
back=loadImage("images/iss.png")
gym=loadAnimation("images/gym1.png","images/gym2.png","images/gym11.png","images/gym12.png")
eat=loadAnimation("images/eat1.png","images/eat2.png")
move=loadAnimation("images/move.png","images/move.png","images/move1.png","images/move1.png")
}
function setup() {
  createCanvas(1300,800);
  astor=createSprite(610, 400, 50, 50);
 
}

function draw() {
  background(back);  
 edges=createEdgeSprites();
  
  astor.bounceOff(edges)
 if (keyDown("LEFT_ARROW")) {
   astor.addAnimation("hi",bath)
   astor.changeAnimation("hi",bath);
   astor.scale=0.2
   astor.velocityY=0
   astor.velocityX=0
 }
 if (keyDown("DOWN_ARROW")) {
  astor.addAnimation("eh",gym)
  astor.changeAnimation("eh",gym);
  astor.scale=0.2
  astor.velocityY=0
  astor.velocityX=0
}
if (keyDown("RIGHT_ARROW")) {
  astor.addAnimation("pw",eat)
  astor.changeAnimation("pw",eat);
  astor.scale=0.2
  astor.velocityY=0
  astor.velocityX=0
  astor.x=610
  astor.y= 400
}
if (keyDown("m")) {
  astor.addAnimation("nj",move)
  astor.changeAnimation("nj",move);
  astor.scale=0.2
  astor.velocityY=1
  astor.velocityX=2
  
}


  drawSprites();
}