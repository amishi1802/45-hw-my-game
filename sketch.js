var coinImg,SofiaImg,stoneImg,treeImg,backgroundImg;
var Sofia;
var bg;
var stoneGrp;

function preload(){
  coinImg=loadImage("Images/coinImg.png");
  SofiaImg=loadImage("Images/SofiaImg.png");
  stoneImg=loadImage("Images/stoneImg.png");
  treeImg=loadImage("Images/treeImg.png");
  backgroundImg=loadImage("Images/backgroundImg.jpg");
}

function setup(){
  createCanvas(1200,600);

  bg=createSprite(1200,600,1200,600);
  bg.addImage(backgroundImg);
  bg.x=bg.width/2+70;
  bg.velocityX=2;

  Sofia=createSprite(200,550);
  Sofia.addImage(SofiaImg);
  Sofia.scale=0.5;

  stoneGrp=new Group();
}

function draw(){
  background(0);

  if(bg.x < 0){
    bg.x=bg.width/2+70;

  drawSprites();
}
}

function stones(){
  if(frameCount % 120 === 0){
    var stone=createSprite(random(20,780),0);
    stone.addImage(stoneImg);
    stone.velocityY=4;
    stone.scale=0.2;
    stone.lifetime=800;
    stoneGrp.add(stone);
}
}