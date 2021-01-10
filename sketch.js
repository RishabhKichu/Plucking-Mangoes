const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground, boyImg, constraint, rock, treeImg, m1, m2, m3, m4, m5, m6, m7, m8;

function preload() {
  boyImg = loadImage("Plucking mangoes/boy.png");
  treeImg = loadImage("Plucking mangoes/tree.png");
}

function setup() {
  createCanvas(1250, 600);

  engine = Engine.create();
  world = engine.world;

  //Create the Bodies Here.

  ground = new Ground(625, 580, 10000, 30);
  rock = new Rock(200, 400, 20);
  constraint = new SlingShot(rock.body, { x: 220, y: 450 });
  m1 = new Mango(880, 300, 20);
  m2 = new Mango(820, 280, 20);
  m3 = new Mango(940, 230, 20);
  m4 = new Mango(880, 200, 20);
  m5 = new Mango(960, 270, 20);
  m6 = new Mango(1050, 270, 20);
  m7 = new Mango(770, 260, 20);
  m8 = new Mango(940, 180, 20);

  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  imageMode(CENTER);
  Engine.update(engine);
  background(0);

  image(boyImg, 280, 500, 200, 200);
  image(treeImg, 900, 350, 450, 450);

  rock.display();
  ground.display();
  constraint.display();

  m1.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();
  m6.display();
  m7.display();
  m8.display();

  Collision(rock, m1);
  Collision(rock, m2);
  Collision(rock, m3);
  Collision(rock, m4);
  Collision(rock, m5);
  Collision(rock, m6);
  Collision(rock, m7);
  Collision(rock, m8);
  drawSprites();
}

function mouseDragged() {
  Matter.Body.setPosition(rock.body, { x: mouseX, y: mouseY });
}

function keyPressed() {
  if (keyCode === 32) {
    Matter.Body.setPosition(rock.body, { x: 200, y: 400 });
    constraint.constaint.bodyA = rock.body;
  }
}

function mouseReleased() {
  constraint.release();
}

function Collision(STONE, MANGO) {
  var mangoBodyPosition = MANGO.body.position;
  var stoneBodyPosition = STONE.body.position;
  var distance = dist(
    stoneBodyPosition.x,
    stoneBodyPosition.y,
    mangoBodyPosition.x,
    mangoBodyPosition.y
  );
  if (distance === MANGO.r + STONE.r) {
    console.log("Static = false");
    Matter.Body.setStatic(MANGO.body, false);
  }
}
