var bg,s1,s2,ss1,ss2,r
var dock=false
function preload(){
  bg=loadImage("spacebg.jpg")
  s1=loadImage("spacecraft1.png")
  ss1=loadImage("spacecraft3.png")
  ss2=loadImage("spacecraft4.png")
  s2=loadImage("spacecraft2.png")
 r=loadImage("iss.png")
}
function setup() {
  createCanvas(800,600);
  sp=createSprite(400, 400, 50, 50);
  sp.addImage(s1)
  sp.scale=0.30

  sp1=createSprite(500,200,50,50)
  sp1.addImage(r)
  
}

function draw() {
  background(bg);
  sp.addImage(s1) 
  if(keyDown("LEFT_ARROW")){
    sp.x=sp.x-1
    sp.addImage(ss1)
  } 
  if(keyDown("RIGHT_ARROW")){
    sp.x=sp.x+1
    sp.addImage(ss2)
  } 
  if(keyDown("UP_ARROW")){
    sp.y=sp.y-1 
  } 
  if(keyDown("DOWN_ARROW")){
    sp.y=sp.y+1 
    sp.addImage(s2)
  } 
  if(!dock){
    sp.x=sp.x+random(-1,1)
  }
  if(sp.y<=(sp1.y+70)&&(sp.x<=(sp1.x-10))){
    dock=true
    textSize(25)
    fill ("white")
    text("Docking Successfull",500,500)
  }
  drawSprites();
}