var snow1,boy,boyImage,snow2;
const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies



function preload(){
  backgroundImage=loadImage("snow2.jpg")
  boyImage=loadImage("boy.png")
}

function setup() {
  createCanvas(800,400);
  boy=createSprite(400, 320, 50, 50);
  boy.addImage(boyImage)
  boy.scale=0.5
   

   snow1 = new Snow(30,60)
   snow2 = new Snow(60,800)
   snow3 = new Snow(90,70)
   
   
   
}

function draw() {
  background(backgroundImage);  
  snow1.display();
  snow2.display();
  snow3.display();

  if (keyIsDown(RIGHT_ARROW)){
    boy.x=boy.x+20
  }

  if (keyIsDown(LEFT_ARROW)){
    boy.x=boy.x-20
  }

  if (keyIsDown(DOWN_ARROW)){
    boy.y=boy.y+20
  }

  if (keyIsDown(UP_ARROW)){
    boy.y=boy.y-20
  }
  

  drawSprites();
}