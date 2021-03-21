
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bobDiameter = 70;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400,200,600,30);
	bob1 = new Bob(250,400,35);
	bob2 = new Bob(320,400,35);
	bob3 = new Bob(390,400,35);
	bob4 = new Bob(460,400,35);
	bob5 = new Bob(530,400,35);
	rope1 = new Rope(bob1.body,roof.body,-bobDiameter*2.1,0);
	rope2 = new Rope(bob2.body,roof.body,-bobDiameter*1.2 + 6,0);
	rope3 = new Rope(bob3.body,roof.body,-bobDiameter*0.16,0);
	rope4 = new Rope(bob4.body,roof.body,-bobDiameter*0.2 + 75,0);
	rope5 = new Rope(bob5.body,roof.body,-bobDiameter*0.001 + 130,0);




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("gray");
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW) {
       Matter.Body.applyForce(bob1.body, bob5.body.position, {x:-55,y:-55});
	}

}


