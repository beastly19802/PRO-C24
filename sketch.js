const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,paper,boxWall1,boxWall2,boxBottom

function setup() {
	createCanvas(800, 700);

	


	engine = Engine.create();
	world = engine.world;

	

	//Create the Bodies Here.
	paper = new Paper(200,630,30)	
	
	ground = new Ground(400,670,800,30)

	boxWall1 = new Box(550,605,20,100)

	boxBottom = new Box(620,645,120,20)

	boxWall2 = new Box(690,605,20,100)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)

  paper.display()
  ground.display()
  boxWall1.display()
  boxBottom.display()
  boxWall2.display()
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:145,y:-104})
	}
}



