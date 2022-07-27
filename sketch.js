var ball;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.3
	}


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	groundObj = new ground(width/2,870,width,20);
  	leftSide = new ground(1100,600,20,120);
	ball = Matter.Bodies.circle(100,600,30,ball_options)


	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  groundObj.display();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		 Matter.Body.applyForce(ball.body,{x:0,y:0},{x:3,y:2})
	}
}



