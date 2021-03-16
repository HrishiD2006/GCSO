var car, wall;
var speed, weight;


function setup() {
  createCanvas(1600,400);
  car=createSprite(50,200,50,50);
  car.shapeColor="pink";
  wall=createSprite(1500, 200, 60, height/2);
  speed=random(55,90);
  weight=random(400,1500);
  
}

function draw() {
  background(5, 5, 5);  
  
  if (wall.x-car.x < wall.width/2-car.width/2) {
    var deformation=(0.5*weight*speed*speed)/22500;
    car.velocityX=0;
    if (deformation<80){
    car.shapeColor=color(0, 255, 0);
   }
    if (deformation>80 && deformation<180){
    car.shapeColor=color(230, 230, 0);
   }

    if (deformation>180){
    car.shapeColor=color(255, 0, 0);
    }
  }
  else{
    car.shapeColor="pink"
    if (keyDown("space")){
      car.velocityX=speed;
    }
    else{
      car.velocityX=0; 
  
    }
  
  }

  drawSprites();
}