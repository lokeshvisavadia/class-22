const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

var ball_options={
    restitution: 1.0
}

    var ground_options ={
        isStatic: true
    }


   ground= Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);

   ball= Bodies.rectrangle(200,200,10,10,ball_options);
 World.add(world,ball);

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,50,50);
 rect(ball.position.x,ball.position.y,20,20);

}
