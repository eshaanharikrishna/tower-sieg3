const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var backgroundImg
var engine, world;
var bg = "sprites/bg1.png";
var score = 0;
function preload(){

    polygonimage=loadImage("polygon.png")
    getBackgroundImg();

    
}
function setup(){
    createCanvas(900,400)
    engine=Engine.create()
    world=engine.world
    Engine.run(engine);
    ground=new Ground(450,390,900,20)
    stand=new Ground(390,300,250,10)
    block1=new Block(300,275,30,40)
    block2=new Block(330,275,30,40)
    block3=new Block(360,275,30,40)
    block4=new Block(390,275,30,40)
    block5=new Block(420,275,30,40)
    block6=new Block(450,275,30,40)
    block7=new Block(480,275,30,40)


    block8=new Block(330,235,30,40)
    block9=new Block(360,235,30,40)
    block10=new Block(390,235,30,40)
    block11=new Block(420,235,30,40)
    block12=new Block(450,235,30,40)



    block13=new Block(360,195,30,40)
    block14=new Block(390,195,30,40)
    block15=new Block(420,195,30,40)

    block16=new Block(390,155,30,40)



    ball=Bodies.circle(50,200,20)
    World.add(world,ball)
    slingshot1=new SlingShot(this.ball,{x:100,y:200})


    

    


}
function draw(){
    if(backgroundImg)
        background(backgroundImg);
        textSize(35)
        fill("white")
        text("Score  " + score, width-200, 50)
    block1.display();
    block2.display()
    block3.display()
    block4.display()
    block5.display()
    block6.display()
    block7.display()
    block8.display()
    block9.display()
    block10.display()

    block11.display()
    block12.display()

    block13.display()
    block14.display()
    block15.display()
    block16.display()

    block1.score()
    block2.score()
    block3.score()
    block4.score()
    block5.score()
    block6.score()
    block7.score()
    block8.score()
    block9.score()
    block10.score()
    block11.score()
    block12.score()
    block13.score()
    block14.score()
    block15.score()
    block16.score()
    
    


    imageMode(CENTER)
    image(polygonimage,ball.position.x,ball.position.y,40,40)


    slingshot1.display();
    



}

function mouseDragged(){
    Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot1.fly();
}


function keyPressed(){
    if(keyCode===32){
        slingshot1.attach(this.ball)
    }
}
async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=06 && hour<=19){
        bg = "bg1.png";
    }
    else{
        bg = "bg2.jpg";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}