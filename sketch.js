var car;
var wall;
var speed;
var weight;

function setup() {
  createCanvas(1600,400);

  car= createSprite(50, 200, 50, 50);
  wall =createSprite(1200, 200, 60, 100);

speed =random(55,90);
weight =random(400,1500);

car.velcoityX = speed;

}

function draw() {
  background("balck");  


  if(wall.x-car.x <(car.width +wall.width)/2){
    car.velcoityX =0;
    var defermation =0.5 * weigth * speed * speed /22509;
    car.shapeColor ="red";
  }
  if(defermation<180 && defermation>100){
    car.shapeColor ="yellow";
  }
  if (defermation<100){
    car.shapeColor ="green";
  }
  drawSprites();
}