
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint

var ro;
var b1,b2,b3,b4,b5;
var r1,r2,r3,r4,r5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ro= new roof(400,10,800,10);
	b1= new bob(100,600,100);
	b2= new bob(200,600,100);
	b3= new bob(300,600,100);
	b4= new bob(400,600,100);
	b5= new bob(500,600,100);

	r1= new rope(b1.body,ro.body,100,10);
	r2= new rope(b2.body,ro.body,200,10);
	r3= new rope(b3.body,ro.body,300,10);
	r4= new rope(b4.body,ro.body,400,10);
	r5= new rope(b5.body,ro.body,500,10);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lavender");
  
  drawSprites();
 ro.display();
 b1.display();
 b2.display();
 b3.display();
 b4.display();
 b5.display();
 r1.display();
 r3.display();
 r4.display();
 r5.display();
 r2.display();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(b1.body,b1.body.position,{x:-85,y:-85});
	}
}



