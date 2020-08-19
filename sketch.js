var car, wall;
var car1, wall1;
var car2, wall2;
var speed, weight;



function setup() {
  createCanvas(1600,400);
 

  speed=random(55,90);
  weight=random(400,1500);

  car=createSprite(50,60,15,15);
  wall=createSprite(1500,60,20,90);
  car.velocityX = speed;

  car1=createSprite(50,160,15,15);
  wall1=createSprite(1500,160,20,90);
  car1.velocityX = speed;

  car2=createSprite(50,260,15,15);
  wall2=createSprite(1500,260,20,90);
  car2.velocityX = speed;


  
  


}

function draw() {
  background("white");
  if ( wall.x - car.x < (car.width + wall.width) / 2 )
  {
    car.velocityX=0;
 var deformation=0.5*2260*60*60/22500;
 if(deformation>180)
 {
   car.shapeColor="blue"
   wall.shapeColor="blue"
 }

 if(deformation<180 && deformation>100)
 {
   car.shapeColor=color(230,230,0);
   wall.shapeColor=color(230,230,0);
 }
  
 if(deformation<100)
 {
   car.shapeColor=color(0,255,0);
   wall.shapeColor=color(0,255,0);
 }
     }

     if ( wall1.x - car1.x < (car1.width + wall1.width) / 2 )
  {
    car1.velocityX=0;
 var deformation=0.5*1522*60*60/22500;
 if(deformation>180)
 {
   car1.shapeColor="blue"
   wall1.shapeColor="blue"
 }

 if(deformation<180 && deformation>100)
 {
   car1.shapeColor=color(230,230,0);
   wall1.shapeColor=color(230,230,0);
 }
  
 if(deformation<100)
 {
   car1.shapeColor=color(0,255,0);
   wall1.shapeColor=color(0,255,0);
 }
     }

     if ( wall2.x - car2.x < (car2.width + wall2.width) / 2 )
  {
    car2.velocityX=0;
 var deformation=0.5*3000*45*45/22500;
 if(deformation>180)
 {
   car2.shapeColor="blue"
   wall2.shapeColor="blue"
 }

 if(deformation<180 && deformation>100)
 {
   car2.shapeColor=color(230,230,0);
   wall2.shapeColor=color(230,230,0);
 }
  
 if(deformation<100)
 {
   car2.shapeColor=color(0,255,0);
   wall2.shapeColor=color(0,255,0);
 }
     }



  
  drawSprites();
}