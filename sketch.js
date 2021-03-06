
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var hammer;
var ground;
var stone;
var rubber;
var sand1;
var sand2;
var sand3;
var sand4;
var sand5;
var sand6;
var iron;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
hammer=new Hammer(160,200,100,30)
ground=new Ground(429,700,750,20);
stone=new Stone(250,260,50,50);
rubber=new Rubber(400,40,100,100);
sand1=new Sand(500,60,20,20);
sand2=new Sand(505,60,20,20);
sand3=new Sand(510,60,20,20);
sand4=new Sand(515,60,20,20);
sand5=new Sand(520,60,20,20);
sand6=new Sand(525,60,20,20);
iron=new Iron(600,80,100,80);
	Engine.run(engine);
  
}


function draw() {
 
  background(0);
  Engine.update(engine);
  
  hammer.display();
  ground.display();
  stone.display();
  rubber.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  iron.display();
  drawSprites();
 
}



