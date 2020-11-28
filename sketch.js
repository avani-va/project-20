var car,wall;
var speed,weight; 


 function setup() {
  createCanvas(1600,400);
  
  car = createSprite(150, 200, 50, 50);
  car.shapeColor= "white";

  wall = createSprite(1500,200, 60, height/2);
  wall.shapeColor= "grey";
  
  speed = random(55,90);
  weight = random(400,1500);

}

function draw() {
  background(0); 
  
  car.velocityX = speed;

 if(wall.x - car.x < car.width + car.width /2){
    car.velocityX = 0;
    var Deformation= 0.5 * weight * speed * speed/22509;

     if(Deformation > 180){
        car.shapeColor= "red";
      }
      
     if(Deformation < 180 && Deformation > 100){ 
       car.shapeColor="yellow";
     }

      if(Deformation < 180){
        car.shapeColor="green";
     }   
  }
  drawSprites();
}