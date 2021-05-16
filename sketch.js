const Engnine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world,ball, ground;

function setup() {
  createCanvas(500,500);
engine=Engnine.create();
world=engine.world;
var ground_option={
  isStatic:true
}
ground=Bodies.rectangle(5,485,500,20,ground_option);
World.add(world,ground);

var ball_option={
 restitution:10.5
}

ball=Bodies.rectangle(250,250,20,20,ball_option);
World.add(world,ball);
}

function draw() {
  background(215,235,258); 
  Engnine.update(engine);
//rectMode(CENTER);
rect(ground.position.x,ground.position.y,500,20);
circle(ball.position.x,ball.position.y,20);

 
}



