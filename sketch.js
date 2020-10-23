
var monkey , monkey_running
var banana ,bananaImage, obstacles, obstacleImage, ground
var bananaGroup, obstaclesGroup
var survivalTime;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaclesImage = loadImage("obstacle.png");
 
}

function setup() {
 // creating monkey
 monkey=createSprite(80,315,20,20);
 monkey.addAnimation("moving",monkey_running);
 monkey.scale = 0.1;

 // creating ground
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
 // creating banana
  if (frameCount % 80 === 0) {
  banana=createSprite(400,180,20,20);
  banana.y = Math.round(random(120,200));
  banana.addImage(bananaImage);
  banana.velocityX=-4;
  banana.scale=0.1;
  banana.lifetime=100;
  }
  
 // creating obstacles
  if (frameCount % 20 === 0) {
  obstacles=createSprite(400,325,20,20);
  obstacles.addImage(obstaclesImage);
  obstacles.velocityX=-4;
  obstacles.scale=0.1;
  obstacles.lifetime=100;
 } 
  
  survivalTime = 0;
}
function draw() {
  background("white");
  // scoring 
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time: "+ survivalTime, 150,50);
  
  // when press space monkey jump
  if(keyDown("space") && monkey.y >= 159) {
    monkey.velocityY = -12;
    }
  // add gravity
  monkey.velocityY = monkey.velocityY + 0.8;
  // moving ground
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  // monkey colide with ground
  monkey.collide(ground);
  
  
 drawSprites();
  
}





