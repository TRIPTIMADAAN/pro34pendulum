const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var pendulum1,pendulum2,pendulum3,pendulum4,pendulum5,rop1,rop2,rop3,rop4,rop5;


function setup() {
  canvas=createCanvas(800,700);
  engine=Engine.create()
  world=engine.world
  console.log(world)
  pendulum1=new Pendulum(300,500,"black")
  pendulum2=new Pendulum(330,500,"black")
  pendulum3=new Pendulum(360,500,"black")
  pendulum4=new Pendulum(390,500,"black")
  pendulum5=new Pendulum(420,500,"black")
  rop1=new Sling(pendulum1.body,{x:340,y:300})
  rop2=new Sling(pendulum2.body,{x:380,y:300})
  rop3=new Sling(pendulum3.body,{x:420,y:300})
  rop4=new Sling(pendulum4.body,{x:460,y:300})
  rop5=new Sling(pendulum5.body,{x:500,y:300})
  
}

function draw() {
  background("yellow");  
  Engine.update(engine)
  pendulum1.display()
  pendulum5.display()
  pendulum2.display()
  pendulum3.display()
  pendulum4.display()
  rop1.display()
  rop2.display()
  rop3.display()
  rop4.display()
  rop5.display()
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(pendulum1.body,{x:mouseX,y:mouseY})
}