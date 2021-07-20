var backgroundIMG;
var rocketIMG, spacestationIMG;
var rocket, spacestation;
var hasDocked = false;

function preload() {
backgroundIMG = loadImage("space.png");

rocketIMG = loadImage("rocket.jpeg");
spacestationIMG = loadImage("daad.png");
}

function setup() {
  createCanvas(800,400);

  rocket = createSprite(400, 125, 50, 50);
  rocket.addImage(rocketIMG);
  rocket.scale = 0.9;

  spacestation = createSprite(random(100, 700), 300, 50, 50);
  spacestation.addImage(spacestationIMG);
  spacestation.scale = 0.50;
  spacestation.depth = rocket.depth - 2;
}

function draw() {
 // background(255,255,255);  
 background(backgroundIMG);
  drawSprites();
  console.log(spacestation.x, spacestation.y);

  if(!hasDocked) {
    if(keyDown(LEFT_ARROW)) {
      spacestation.addImage(rocketIMG);
      spacestation.x = spacestation.x - 4;
    } else if(keyDown(RIGHT_ARROW)) {
      spacestation.addImage(rocketIMG);
      spacestation.x = spacestation.x + 4;
    } else if(keyDown(DOWN_ARROW)) {
      spacestation.addImage(rocketIMG);
    } else if(keyDown(UP_ARROW)) {
      spacestation.y = spacestation.y - 4;
    } else {
      spacestation.addImage(rocketIMG);
    }
  }


if(spacestation.y < 205 && spacestation.x > 340 && spacestation.x < 345) {
  hasDocked = true;
  fill("blue");
  textSize(40);
  text("Docking Accomplished!", 220, 350);
  }
}