class Maze1{
    constructor(){

        wall1 =createSprite(40,250,10,150);
        wall1.shapeColor = "black";
      
        wall2 = createSprite(120,60,200,10);
        wall2.shapeColor="black";
      
        wall3 = createSprite(140,202,10,200);
        wall3.shapeColor = "black";
      
        wall4 = createSprite(215,180,40,10);
        wall4.shapeColor = "black";
      
        wall5 = createSprite(260,350,100,10);
        wall5.shapeColor = "black";
      
        wall6 = createSprite(280,180,10,200);
        wall6.shapeColor = "black";
      
        wall7 = createSprite(340,180,100,10);
        wall7.shapeColor = "black";
      
        wall8 = createSprite(340,80,10,50);
        wall8.shapeColor = "black";
      
        wall9 = createSprite(100,370,10,60);
        wall9.shapeColor = "black";
      
        wall10 = createSprite(20,120,40,10);
        wall10.shapeColor = "black";
        end1 = createSprite(395,5,5,5);
        end1.shapeColor = "red";

        maze1wall = new Group();
        maze1wall.add(wall1);
        maze1wall.add(wall2);
        maze1wall.add(wall3);
        maze1wall.add(wall4);
        maze1wall.add(wall5);
        maze1wall.add(wall6);
        maze1wall.add(wall7);
        maze1wall.add(wall8);
        maze1wall.add(wall9);
        maze1wall.add(wall10);


    }
    destroy(){
      maze1wall.destroyEach();
      end1.destroy() 
    }
    display(){
        drawSprites(maze1wall);

    }
}