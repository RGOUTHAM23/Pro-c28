const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;
var engine,world;
var ground;
var tree;
var boy;
var stone;
var chain;
var mango1,mango2,mango3,mango4,mango5;
function preload()
{
	
}

function setup() {
	createCanvas(1500,800);


	engine = Engine.create();
	world = engine.world;

  var render = Render.create({
    element :  document.body,
    engine : engine,
    options : {
      width:1500,
      height :800,
      wireframes : false
    }
  })
	//Create the Bodies Here.

	ground = new Ground(width/2,780,width,20); 

	tree = new Tree (1200,490,500,600);

	boy = new Boy(200,690,200,300);

	stone = new Stone(125,220,50,60);

	chain = new SlingShot(stone.body,{x:127,y:620});

  mango1 = new Mango(1030,450,55,60);
   
	mango2 = new Mango(1300,400,55,60);

	mango3 = new Mango(1200,300,55,60);

	mango4 = new Mango(1150,390,55,60);

	mango5 = new Mango(1080,340,55,60);

	Engine.run(engine);
  Render.run(render);
}


function draw() {
  Engine.update(engine);
  background(200);
  
  ground.display();

  tree.display();
  
  boy.display();
 
  stone.display();

  chain.display();

  mango1.display();

  mango2.display();

  mango3.display();

  mango4.display();

  mango5.display();

  //detectCollision();
    detectCollision(stone,mango1);
    detectCollision(stone,mango2);
    detectCollision(stone,mango3);
    detectCollision(stone,mango4);
    detectCollision(stone,mango5);

}

function mouseDragged() {
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
} 

function mouseReleased(){
    chain.fly();
  // Matter.Body.applyForce(stone.body,stone.body.position,{x:50,y:60});
} 

function detectCollision(Lstone,Lmango){
    mangoBodyPosition = Lmango.body.position;
    stoneBodyPosition  = Lstone.body.position;
    var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
    if(distance <= Lmango.r+Lstone.r){
      Matter.Body.setStatic(Lmango.body,false);
    }
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(stone.body,{x : 125,y:620});
    chain.attach(stone.body);
  }
}



    