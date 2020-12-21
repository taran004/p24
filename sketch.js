
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var  paperObject,




function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
	paperObject=new paper(200,450,40);
	
	
	

	

	Engine.run(engine);
	

}


function draw() {
  rectMode(CENTER);
  background(0);
 
  
  paperObject.display();
  
  
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
    
  	}
}





