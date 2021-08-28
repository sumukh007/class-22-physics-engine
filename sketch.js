const World=Matter.World
const Engine=Matter.Engine
const Body=Matter.Body
const Bodies=Matter.Bodies
var world,engine,ball





function setup() {
  createCanvas(800,400);
  engine=Engine.create()
world=engine.world

var ball_option={
  restitution:1
}

ball=Bodies.circle(400,100,50,ball_option)
World.add(world,ball)

var ground_options={
  isStatic:true
}
ground=Bodies.rectangle(400,390,800,20,ground_options)
World.add(world,ground)
}

function draw() {
  background(0,0,0);  
  Engine.update(engine)
  fill ("blue")
rectMode (CENTER)
rect(ground.position.x,ground.position.y,800,20)
fill("")
ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,50,50)
}