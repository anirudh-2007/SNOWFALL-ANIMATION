const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var engine, world;
var boy1,bg,b,ba;
var fall=[];
var ground1;

function preload(){
bg = loadImage("snow2.jpg");
ba = loadImage("boy_image.png");
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  

  ground1 = new ground(180,390,1300,20);

  b = createSprite(400,300,30,30);
  b.addImage(ba);
  b.scale=0.7;
}
 

function draw() {
  background(bg);  
  drawSprites();
  
 if(keyDown(LEFT_ARROW)){
   b.x=b.x-5;
 }

 if(keyDown(RIGHT_ARROW)){
  b.x=b.x+5;
}



  
 fall.push(new Snow(random(0,800),0,50));
 for(var i=0;i<fall.length;i++){
   fall[i].display();

 }


Engine.update(engine);
ground1.display();
}

  
  
  
    

