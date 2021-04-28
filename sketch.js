const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var bg, black1,queen;
var white1;

function preload(){
  bg=loadImage("carromboard.png");

}
function setup() {
  createCanvas(1000, 800);
  engine = Engine.create();
  world = engine.world;

black1 = new Black(220,200,30,20);
white1 = new White(250,200,30,20);
queen = new Queen(200,200,30,20);
}
function draw () {
  background(bg);  
  black1.display();
  white1.display();
  queen.display();
}