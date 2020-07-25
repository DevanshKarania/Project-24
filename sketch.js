
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var d1,d2,d3;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  
  ground = createSprite(400,600,800,20);
  ground.shapeColor="blue";
  
    paper = new Paper(100,100,10);
    
    d1 = new Dustbin(600,580,200,20);
    d2 = new Dustbin(500,550,20,100);
    d3 = new Dustbin(700,550,20,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  paper.display();

  d1.display();
  d2.display();
  d3.display();

  keypressed();

  drawSprites();
 
}
function keypressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
  }
}


