var bullet,wall;
var speed, weight,thickness;

function setup() {
  createCanvas(1600,400);
  
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  
  bullet = createSprite(50, 200, 12, 6);
  bullet.shapeColor="white";
  bullet.velocityX=speed;
  
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor="white"
}

function draw() {
  background(0);  
  
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
  
    if(damage>10){
      wall.shapeColor=color(255,0,0);
    }

    if(damage<10){
      wall.shapeColor=color(0,255,0);
    }
  }

  drawSprites();
}

function hasCollided(bullet,wall){
  bullet=bullet.x+bullet.width;
  wall=wall.x;
  if(bullet>=wall){
    return true
  }else
  {return false;
}
}