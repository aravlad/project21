
var bullet, wall, thickness




function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 60, 30);
  bullet.shapeColor = color(255)
  wall = createSprite(1300, 200, 60, 200);
  wall.shapeColor = color(0, 80, 0)
  speed = random(223, 321)
  weight = random (30, 52) 
  bullet.velocityX = speed
}

function draw() {
if (wall.x-bullet.x < (bullet.width+wall.width)/2){
bullet.velocityX = 0

var deformation=0.5 * weight * speed * speed/22509

if(deformation>180){
  bullet.shapeColor = color(255, 0, 0)
}
if(deformation<180 && deformation>100){
  bullet.shapeColor = color(230, 230, 0)
  }

  if(deformation<100){
    bullet.shapeColor = color( 0, 255, 0)
    }


}

if(hasCollided(bullet, wall)){
  bullet.velocityX = 0
  var damage= 0.5 * weight * speed * speed/(thickness * thickness * thickness);
  
  if(damage>10){
  
  wall.shapeColor = color(255)
  
  }
  if(damage<10){

wall.shapeColor = color(0,255, 0)

  }
  
  
  
  
  
  }
  background(255);  
  drawSprites();
}
function hasCollided(lbullet, lwall) { 
  bulletRightEdge=lbullet.x +lbullet.width; 

  wallLeftEdge=lwall.x; 

  if (bulletRightEdge>=wallLeftEdge) { 
    return true  }
    return false; 
  
  }



