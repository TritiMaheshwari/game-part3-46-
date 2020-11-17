var player;
var guard1, guard2;
var canvas;
var square1,square2,square3,square4;
var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,end1;
var wall11,wall12,wall13,wall14,wall15,wall16,wall17,wall18,wall19,wall20,end2;
var level = 0;
var maze2wall;
var maze1wall;

var maze1Obj,maze2Obj;

function preload(){
  player = loadImage("images/player1.png");
  guard1 = loadImage("images/guard1.png");
  guard2 = loadImage("images/guard2.png");
  
}

function setup(){
  canvas = createCanvas(400,400);
 // canvas.style = "position:absolute;top:0px;bottom:0px;right:0px;left:0px;border:solid;border-color:black";
  // square1 = rect(10,800,width/3,height/3)

  player = createSprite(20,380,10,10);
  player.shapeColor = "red";

  guard1 = createSprite(380,20,10,10);
  guard1.shapeColor = "green";

  
   // maze1Obj=new Maze1();
   //maze2Obj=new Maze2();
}
function draw(){
  background("white");
  text(mouseX+", "+mouseY,mouseX,mouseY);

  

 edges = createEdgeSprites();

 player.bounceOff(edges[0]);
 player.bounceOff(edges[1]);
 player.bounceOff(edges[2]);
 player.bounceOff(edges[3]);

 drawSprites(player);
 drawSprites(end1);
 drawSprites(end2);
 drawSprites(guard1);

 if(keyDown(UP_ARROW)){
  player.position.y -= 5;
}
if(keyDown(DOWN_ARROW)){
  player.position.y +=5;
}
if(keyDown(RIGHT_ARROW)){
  player.position.x +=5;
}
if(keyDown(LEFT_ARROW)){
  player.position.x -=5;
} 
 
if(level===0){
  fill("red")
  text("press enter to start",100,100)
}
  if(keyDown(ENTER) && level===0){
    
    level=1;
  }

  if(level===1){ 
    maze1Obj = new Maze1();
    maze1Obj.display();

  player.bounceOff(wall1);
    player.bounceOff(wall2);
    player.bounceOff(wall3);
    player.bounceOff(wall4);
    player.bounceOff(wall5);
    player.bounceOff(wall6);
    player.bounceOff(wall7);
    player.bounceOff(wall8);
    player.bounceOff(wall9);
    player.bounceOff(wall10);


    
 // drawSprites();
    // end1 = createSprite(395,5,5,5);
    // end1.shapeColor = "red";
  }
    if(player.x>=395 && player.y<=5 && level===1){
    
      console.log(level);
      level=2;
     // maze1Obj.destroy();
      maze1wall.destroyEach(); 
      end1.destroy() 
      player.x=20;
      player.y=380
      console.log("end level 1 ")
     
      //console.log("end");
     // console.log(wall2);

    }
  
  
     if(level===2){
     
      maze2Obj=new Maze2();

       maze2Obj.display();
  

    player.bounceOff(wall11);
    player.bounceOff(wall12);
    player.bounceOff(wall13);
    player.bounceOff(wall14);
    player.bounceOff(wall15);
    player.bounceOff(wall16);
    player.bounceOff(wall17);
    player.bounceOff(wall18);
    player.bounceOff(wall19);
    player.bounceOff(wall20);

     if(player.x>=395 && player.y<=5){
      level = 3;
      maze2wall.destroyEach();
//maze2Obj.destroy();
console.log("maze2 destroy")
clear ()





}
  
   }
   
  
 



//drawSprites();

}


