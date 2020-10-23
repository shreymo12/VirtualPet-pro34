//Create variables here
var  dogImg, dog, happyDogImg, happyDog, database, foodS, foodStock;


function preload()
{
  dogImg.loadImage = ("Dog.png");
  happyDogImg.loadImage = ("happyDog.png");
	//load images here
}

function setup() {
  database= firebase.database();
  createCanvas(500, 500);
  
  dog=createSprite(250,300,150,150)
  dog.addImage(dogImg);
  dog.scale=0.15

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  textSize(20);
  
  
}


function draw() {  
  background(orange);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDogImg);
  }

  drawSprites();
  fill(255,255,254);
  stroke("black")
  text("Food Remaining :  "+foodS,170,200);
  textSize(13);
  text("Note:Press UP_ARROW Key To Feed Iggy Milk!",120,10,300,20)





  //add styles here

}

function writeStock(x){
  if(x<=0){
    x=0;
  
  }else{
    x=x-1;
  }
  database.ref('/').update({
Food:x
   } )
}



