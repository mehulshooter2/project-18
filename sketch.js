var backgroundImg,backGround;
var monkey,monkey_running;
var bananaImg,stoneImg;
var BananaGroup,StoneGroup;

var score =0; 
  

function preload(){

    backgroundImg = loadImage("SPRITES/jungle.jpg");
    monkey_running = loadAnimation("SPRITES/Monkey_01.png","SPRITES/Monkey_02.png","SPRITES/Monkey_03.png",
    "SPRITES/Monkey_04.png","SPRITES/Monkey_05.png","SPRITES/Monkey_06.png","SPRITES/Monkey_07.png",
    "SPRITES/Monkey_08.png","SPRITES/Monkey_09.png","SPRITES/Monkey_10.png")

    bananaImg = loadImage("SPRITES/banana.png");
    stoneImg = loadImage("SPRITES/stone.png");

}

function setup(){
    createCanvas(600,500);

    
   

    backGround = createSprite(300,200,20,20);
    backGround.addImage(backgroundImg);
    backGround.scale = 1;

   
    monkey = createSprite(100,415,40,40);
    monkey.addAnimation("running",monkey_running);
    monkey.scale = 0.1;
    
     BananaGroup=createGroup();
     StoneGroup=createGroup();
    
}

function draw(){
    background(0);
    backGround.velocityX = -3;

    //making background come again
    if (backGround.x < 110){
        backGround.x = backGround.width/2;
      }

      // making monkey jump
    if(keyWentDown("space")){
        monkey.velocityY = -10;
    }
    monkey.velocityY = monkey.velocityY + 0.4;
  //making monkey position 
  if(monkey.y > 417){
    monkey.y = 415;
  }

  //destroying bananas
  if(BananaGroup.isTouching(monkey)){
    BananaGroup.destroyEach();
    score = score + 1;
  }

  //decreasing size of monkey
  if(StoneGroup.isTouching(monkey)){
    monkey.scale = 0.09;
    score = 1;
  }

    size();
    stone();
    energy();
    drawSprites();
    textSize(30);
    stroke("white")
    fill("white")
    text("Score:"+score,200,200);

}

function stone(){
    if(World.frameCount%200===0){
      var obstacle=createSprite(600,420,20,20);
      obstacle.addImage(stoneImg);
      obstacle.velocityX= -8;
      obstacle.scale=0.15;
      StoneGroup.add(obstacle);
    }
  }

  function energy(){
    if(World.frameCount%90===0){
      var banana=createSprite(600,random(300,350),20,20);
      banana.addImage(bananaImg);
      banana.velocityX= -6;
      banana.scale=0.05;
      BananaGroup.add(banana);
    }
  }
  
  function size(){

    switch(score){
      case 10 : monkey.scale = 0.12;
      break;
      case 20 : monkey.scale = 0.14;
      break;
      case 30 : monkey.scale = 0.16;
      break;
      case 40 : monkey.scale = 0.18;
      break;
      default : break;
    }

  }